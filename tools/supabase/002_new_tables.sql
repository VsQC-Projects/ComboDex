-- ComboDex S1 — new tables. Review only. Do not run until authorized.
-- Auth remains GoTrue (auth.users). Writes after S2 go through JWT + RLS or Edge Functions.
-- Uncomment the block after authorization. Never put service_role in frontend JS.

/*
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'visitor' check (role in ('visitor', 'atelier')),
  handle text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cases (
  id uuid primary key default gen_random_uuid(),
  combo_id text,
  kind text not null check (kind in ('review', 'lab', 'report', 'edit', 'x')),
  status text not null default 'open' check (status in ('open', 'waiting', 'done', 'rejected')),
  opened_by uuid references public.profiles (id),
  assigned_to uuid references public.profiles (id),
  sla_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.case_events (
  id bigint generated always as identity primary key,
  case_id uuid not null references public.cases (id) on delete cascade,
  actor uuid references public.profiles (id),
  action text not null,
  payload jsonb not null default '{}'::jsonb,
  at timestamptz not null default now()
);

create table if not exists public.audit_log (
  id bigint generated always as identity primary key,
  actor uuid,
  action text not null,
  target text,
  payload jsonb not null default '{}'::jsonb,
  at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  combo_id text not null,
  status text not null default 'pending' check (status in ('pending', 'ok', 'no')),
  reviewer uuid references public.profiles (id),
  notes text,
  at timestamptz not null default now()
);

create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  owner uuid not null references public.profiles (id) on delete cascade,
  name text not null,
  is_public boolean not null default false,
  combo_ids jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.follows (
  id bigint generated always as identity primary key,
  follower uuid not null references public.profiles (id) on delete cascade,
  game text,
  character text,
  combo_id text,
  created_at timestamptz not null default now()
);

create unique index if not exists follows_uniq
  on public.follows (follower, coalesce(game, ''), coalesce(character, ''), coalesce(combo_id, ''));
create index if not exists cases_status_idx on public.cases (kind, status, updated_at desc);
create index if not exists case_events_case_idx on public.case_events (case_id, at);
create index if not exists audit_log_at_idx on public.audit_log (at desc);
create index if not exists reviews_combo_idx on public.reviews (combo_id, status);
create index if not exists collections_owner_idx on public.collections (owner);
*/
