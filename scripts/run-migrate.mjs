/**
 * JVTO Database Migration Runner
 * Reads scripts/migrate.sql and executes it against the configured PostgreSQL database.
 *
 * Usage:
 *   npm run db:migrate
 */

import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

config({ path: path.resolve(__dirname, '../.env.local') });

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || undefined,
  database: process.env.DB_NAME,
  connectionTimeoutMillis: 5000,
});

async function migrate() {
  const sqlPath = path.resolve(__dirname, 'migrate.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');

  console.log('JVTO Database Migration');
  console.log(`Host: ${process.env.DB_HOST}:${process.env.DB_PORT}`);
  console.log(`Database: ${process.env.DB_NAME}\n`);

  const client = await pool.connect();
  console.log('✓ Connected to PostgreSQL');

  try {
    await client.query('BEGIN');
    await client.query(sql);
    await client.query('COMMIT');
    console.log('✓ Migration complete — all tables created/verified');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('✗ Migration failed');
    console.error(err.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

migrate();
