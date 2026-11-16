-- ComboDex S1 — existing tables. Review only. Do not run until authorized.
-- Keep combos(id, game, character, payload, updated_at) and reports.
-- Additive: never DROP, never rename combo-dex-final-v1, never change payload shape.

-- Expected live shape (PostgREST already serves this). If a column is missing
-- in a fresh project, uncomment the CREATE below after authorization.

-- create table if not exists public.combos (
--   id text primary key,
--   game text not null,
--   character text not null,
--   payload jsonb not null default '{}'::jsonb,
--   updated_at timestamptz not null default now()
-- );

-- create table if not exists public.reports (
--   id bigint generated always as identity primary key,
--   combo_id text,
--   game text,
--   character text,
--   combo_name text,
--   note text,
--   created_at timestamptz not null default now()
-- );

-- create index if not exists combos_game_char_idx on public.combos (game, character);
-- create index if not exists combos_updated_idx on public.combos (updated_at desc);

-- comment on table public.combos is 'Wiki rows. payload holds the combo JSON used by cdx-app.js wikiRow().';
-- comment on table public.reports is 'Visitor reports. Insert-only for anon after S1 RLS is applied.';
