-- JVTO PostgreSQL Schema Migration
-- Database: jvto_dev
-- Run: npm run db:migrate

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─── PACKAGES ────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS packages (
  id                 UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  slug               VARCHAR(255) UNIQUE NOT NULL,
  name               VARCHAR(500) NOT NULL,
  description        TEXT,                    -- shortDesc (used in list views)
  long_desc          TEXT,                    -- longDesc (used in detail views)
  duration           VARCHAR(100),
  origin             VARCHAR(100),
  physical_difficulty VARCHAR(50),            -- 'easy' | 'moderate' | 'hard'
  price_from         BIGINT,                  -- IDR, min price across all pax tiers
  rating             DECIMAL(3,1) DEFAULT 4.9,
  best_for           VARCHAR(255),
  ideal_traveler     VARCHAR(255),
  highlights         JSONB DEFAULT '[]',      -- string[]
  destinations       JSONB DEFAULT '[]',      -- destination slug[]
  inclusions         JSONB DEFAULT '[]',      -- string[]
  exclusions         JSONB DEFAULT '[]',      -- string[]
  created_at         TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  deleted_at         TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_packages_slug        ON packages(slug);
CREATE INDEX IF NOT EXISTS idx_packages_origin      ON packages(origin);
CREATE INDEX IF NOT EXISTS idx_packages_deleted_at  ON packages(deleted_at);

-- ─── PACKAGE IMAGES ──────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS package_images (
  id          UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id  UUID    NOT NULL REFERENCES packages(id) ON DELETE CASCADE,
  url         TEXT    NOT NULL,
  alt_text    TEXT,
  sort_order  INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_package_images_package_id ON package_images(package_id);

-- ─── PACKAGE PRICES ──────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS package_prices (
  id               UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id       UUID    NOT NULL REFERENCES packages(id) ON DELETE CASCADE,
  pax              INTEGER NOT NULL,           -- number of pax in group
  price_per_person BIGINT  NOT NULL            -- IDR per person
);

CREATE INDEX IF NOT EXISTS idx_package_prices_package_id ON package_prices(package_id);

-- ─── PACKAGE ITINERARY DAYS ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS package_itinerary_days (
  id          UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id  UUID         NOT NULL REFERENCES packages(id) ON DELETE CASCADE,
  day         VARCHAR(50),                     -- 'Day 1', 'Day 2', etc.
  title       VARCHAR(500),
  summary     TEXT,
  sort_order  INTEGER      NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_package_itinerary_package_id ON package_itinerary_days(package_id);

-- ─── DESTINATIONS ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS destinations (
  id                   UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  slug                 VARCHAR(255) UNIQUE NOT NULL,
  name                 VARCHAR(500) NOT NULL,
  description          TEXT,                    -- shortDesc
  full_desc            TEXT,                    -- fullDesc
  difficulty           VARCHAR(50),             -- 'Easy' | 'Moderate' | 'Hard' | 'Challenging'
  region               VARCHAR(255),
  altitude             INTEGER,                 -- meters
  geo_lat              DECIMAL(10, 7),
  geo_lng              DECIMAL(10, 7),
  hazardous_substance  TEXT,
  highlights           JSONB DEFAULT '[]',      -- string[]
  practical_notes      JSONB DEFAULT '[]',      -- string[]
  created_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  deleted_at           TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_destinations_slug       ON destinations(slug);
CREATE INDEX IF NOT EXISTS idx_destinations_deleted_at ON destinations(deleted_at);

-- ─── ASSETS ──────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS assets (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  url         TEXT        NOT NULL,
  alt_text    TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── DESTINATION ASSETS (junction) ───────────────────────────────────────────

CREATE TABLE IF NOT EXISTS destination_assets (
  id              UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id  UUID    NOT NULL REFERENCES destinations(id) ON DELETE CASCADE,
  asset_id        UUID    NOT NULL REFERENCES assets(id) ON DELETE CASCADE,
  sort_order      INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_destination_assets_dest_id  ON destination_assets(destination_id);

-- ─── BOOKING REVIEWS ─────────────────────────────────────────────────────────
-- Note: booking_id references packages.id (the API joins on this column)

CREATE TABLE IF NOT EXISTS booking_reviews (
  id             UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id     UUID         REFERENCES packages(id) ON DELETE SET NULL,
  star           SMALLINT     CHECK (star BETWEEN 1 AND 5),
  review_text    TEXT,
  reviewer_name  VARCHAR(255),
  platform       VARCHAR(100),                -- 'google' | 'tripadvisor' | 'trustpilot'
  created_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_booking_reviews_booking_id ON booking_reviews(booking_id);

-- ─── PACKAGE DESTINATIONS (many-to-many, optional — JSONB col is primary) ───

-- The packages.destinations JSONB column is the source of truth for list/detail
-- views. This join table is optional for relational queries.
CREATE TABLE IF NOT EXISTS package_destinations (
  package_id      UUID NOT NULL REFERENCES packages(id) ON DELETE CASCADE,
  destination_id  UUID NOT NULL REFERENCES destinations(id) ON DELETE CASCADE,
  sort_order      INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (package_id, destination_id)
);
