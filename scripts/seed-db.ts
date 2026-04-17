/**
 * JVTO Database Seed Script
 * Upserts tour packages and destinations from lib/jvtoData.ts into the
 * production PostgreSQL schema on jvto_dev.
 *
 * Usage: npm run db:seed
 * Safe to run multiple times (ON CONFLICT DO UPDATE on slug).
 */

import { Pool, PoolClient } from 'pg';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const { TOURS, DESTINATIONS } = await import('../lib/jvtoData.js');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionTimeoutMillis: 5000,
});

// ─── LOOKUP HELPERS ───────────────────────────────────────────────────────────

async function getDurationId(client: PoolClient, durationStr: string): Promise<bigint | null> {
  // "2 Days, 1 Night" → day=2
  const match = durationStr.match(/^(\d+)\s*Day/i);
  if (!match) return null;
  const days = parseInt(match[1]);
  const res = await client.query('SELECT id FROM durations WHERE day = $1 LIMIT 1', [days]);
  return res.rows[0]?.id ?? null;
}

async function getPriceTierId(client: PoolClient, pax: number): Promise<bigint | null> {
  // Find price tier where min_pax = pax exactly (solo / 2 pax)
  let res = await client.query(
    'SELECT id FROM price_tiers WHERE min_pax = $1 AND max_pax = $1 AND deleted_at IS NULL LIMIT 1',
    [pax]
  );
  if (res.rows.length) return res.rows[0].id;

  // Fall back to range: min_pax <= pax AND (max_pax >= pax OR max_pax IS NULL)
  res = await client.query(
    `SELECT id FROM price_tiers
     WHERE min_pax <= $1 AND (max_pax >= $1 OR max_pax IS NULL)
       AND deleted_at IS NULL
     ORDER BY min_pax DESC LIMIT 1`,
    [pax]
  );
  return res.rows[0]?.id ?? null;
}

async function getDestinationId(client: PoolClient, slug: string): Promise<bigint | null> {
  const res = await client.query(
    'SELECT id FROM destinations WHERE slug = $1 AND deleted_at IS NULL LIMIT 1',
    [slug]
  );
  return res.rows[0]?.id ?? null;
}

async function getOrCreateItemInclude(client: PoolClient, item: string): Promise<bigint> {
  let res = await client.query('SELECT id FROM item_includes WHERE item = $1 LIMIT 1', [item]);
  if (res.rows.length) return res.rows[0].id;
  res = await client.query('INSERT INTO item_includes (item, created_at, updated_at) VALUES ($1, NOW(), NOW()) RETURNING id', [item]);
  return res.rows[0].id;
}

async function getOrCreateItemExclude(client: PoolClient, item: string): Promise<bigint> {
  let res = await client.query('SELECT id FROM item_excludes WHERE item = $1 LIMIT 1', [item]);
  if (res.rows.length) return res.rows[0].id;
  res = await client.query('INSERT INTO item_excludes (item, created_at, updated_at) VALUES ($1, NOW(), NOW()) RETURNING id', [item]);
  return res.rows[0].id;
}

// ─── TOUR SEEDER ─────────────────────────────────────────────────────────────

async function seedTour(client: PoolClient, tour: (typeof TOURS)[0]) {
  const durationId = await getDurationId(client, tour.duration || '');

  const upsert = await client.query(
    `INSERT INTO packages
       (slug, name, description, physicality, aggregate_rating_value,
        aggregate_rating_count, highlights_bullets, suitable_for, perfect_for,
        duration_id, order_channel_id, package_category_id, is_publish,
        created_at, updated_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, 1, 1, true, NOW(), NOW())
     ON CONFLICT (slug) DO UPDATE SET
       name                    = EXCLUDED.name,
       description             = EXCLUDED.description,
       physicality             = EXCLUDED.physicality,
       aggregate_rating_value  = EXCLUDED.aggregate_rating_value,
       highlights_bullets      = EXCLUDED.highlights_bullets,
       suitable_for            = EXCLUDED.suitable_for,
       perfect_for             = EXCLUDED.perfect_for,
       duration_id             = EXCLUDED.duration_id,
       updated_at              = NOW()
     RETURNING id`,
    [
      tour.slug,
      tour.name,
      tour.shortDesc,
      tour.physicality,
      tour.rating,
      112,
      tour.highlights,                        // text[]
      tour.idealTraveler,
      [tour.bestFor],                         // text[]
      durationId,
    ]
  );
  return upsert.rows[0].id as bigint;
}

async function seedTourImage(client: PoolClient, packageId: bigint, tour: (typeof TOURS)[0]) {
  if (!tour.image) return;
  // Only insert if no images exist yet for this package
  const check = await client.query('SELECT id FROM package_images WHERE package_id = $1 LIMIT 1', [packageId]);
  if (check.rows.length) return;
  await client.query(
    `INSERT INTO package_images (package_id, url, alt_text, sort_order, created_at, updated_at)
     VALUES ($1, $2, $3, 0, NOW(), NOW())`,
    [packageId, tour.image, `${tour.name} hero image`]
  );
}

async function seedTourPrices(client: PoolClient, packageId: bigint, tour: (typeof TOURS)[0]) {
  // Only seed if no prices exist yet
  const check = await client.query('SELECT id FROM package_prices WHERE package_id = $1 LIMIT 1', [packageId]);
  if (check.rows.length) return;

  for (const tier of tour.pricingTable) {
    const tierId = await getPriceTierId(client, tier.pax);
    if (!tierId) {
      console.log(`    ⚠  No price_tier found for pax=${tier.pax}, skipping`);
      continue;
    }
    await client.query(
      `INSERT INTO package_prices (package_id, price_tier_id, price, created_at, updated_at)
       VALUES ($1, $2, $3, NOW(), NOW())`,
      [packageId, tierId, tier.price]
    );
  }
}

async function seedItinerary(client: PoolClient, packageId: bigint, tour: (typeof TOURS)[0]) {
  // Only seed if no itinerary exists yet
  const check = await client.query('SELECT id FROM package_itinerary_days WHERE package_id = $1 LIMIT 1', [packageId]);
  if (check.rows.length) return;

  for (let i = 0; i < tour.itinerary.length; i++) {
    const day = tour.itinerary[i];
    const dayNo = i + 1;
    await client.query(
      `INSERT INTO package_itinerary_days
         (package_id, day_no, title, activity, created_at, updated_at)
       VALUES ($1, $2, $3, $4, NOW(), NOW())`,
      [packageId, dayNo, day.title ?? null, day.summary ?? null]
    );
  }
}

async function seedInclusions(client: PoolClient, packageId: bigint, tour: (typeof TOURS)[0]) {
  const check = await client.query('SELECT id FROM package_includes WHERE package_id = $1 LIMIT 1', [packageId]);
  if (check.rows.length) return;

  for (const item of tour.inclusions) {
    const itemId = await getOrCreateItemInclude(client, item);
    await client.query(
      `INSERT INTO package_includes (package_id, item_include_id, created_at, updated_at)
       VALUES ($1, $2, NOW(), NOW())
       ON CONFLICT DO NOTHING`,
      [packageId, itemId]
    );
  }
}

async function seedExclusions(client: PoolClient, packageId: bigint, tour: (typeof TOURS)[0]) {
  const check = await client.query('SELECT id FROM package_excludes WHERE package_id = $1 LIMIT 1', [packageId]);
  if (check.rows.length) return;

  for (const item of tour.exclusions) {
    const itemId = await getOrCreateItemExclude(client, item);
    await client.query(
      `INSERT INTO package_excludes (package_id, item_exclude_id, created_at, updated_at)
       VALUES ($1, $2, NOW(), NOW())
       ON CONFLICT DO NOTHING`,
      [packageId, itemId]
    );
  }
}

async function seedPackageDestinations(client: PoolClient, packageId: bigint, tour: (typeof TOURS)[0]) {
  const check = await client.query('SELECT id FROM package_destinations WHERE package_id = $1 LIMIT 1', [packageId]);
  if (check.rows.length) return;

  for (let i = 0; i < tour.destinations.length; i++) {
    const destId = await getDestinationId(client, tour.destinations[i]);
    if (!destId) {
      console.log(`    ⚠  Destination not found: ${tour.destinations[i]}`);
      continue;
    }
    await client.query(
      `INSERT INTO package_destinations (package_id, destination_id, sort_order, created_at, updated_at)
       VALUES ($1, $2, $3, NOW(), NOW())
       ON CONFLICT DO NOTHING`,
      [packageId, destId, i]
    );
  }
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function seed() {
  const client = await pool.connect();
  console.log('✓ Connected to PostgreSQL\n');

  try {
    await client.query('BEGIN');

    console.log('── Seeding tour packages ─────────────────────────');
    let seeded = 0, skipped = 0;

    for (const tour of TOURS) {
      if (!tour.slug || !tour.name) {
        console.log('  ⚠  Skipped: missing slug/name');
        skipped++;
        continue;
      }

      const id = await seedTour(client, tour);
      await seedTourImage(client, id, tour);
      await seedTourPrices(client, id, tour);
      await seedItinerary(client, id, tour);
      await seedInclusions(client, id, tour);
      await seedExclusions(client, id, tour);
      await seedPackageDestinations(client, id, tour);

      console.log(`  ✓ ${tour.slug}`);
      seeded++;
    }

    await client.query('COMMIT');

    console.log(`\n✓ Seed complete`);
    console.log(`  Seeded  : ${seeded} packages`);
    console.log(`  Skipped : ${skipped} (missing slug/name)`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('\n✗ Seed failed — transaction rolled back');
    console.error(err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
