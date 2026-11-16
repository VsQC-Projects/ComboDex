-- ComboDex S1 — RLS. Review only. Do not run until authorized.
-- Applying this on the live project would lock anon combo POSTs and break the current wiki
-- until S2 JWT atelier is wired. Leave commented.

/*
alter table public.combos enable row level security;
alter table public.reports enable row level security;
alter table public.profiles enable row level security;
alter table public.cases enable row level security;
alter table public.case_events enable row level security;
alter table public.audit_log enable row level security;
alter table public.reviews enable row level security;
alter table public.collections enable row level security;
alter table public.follows enable row level security;

create or replace function public.is_atelier()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'atelier'
  );
$$;

-- combos: anon reads published rows; atelier writes; nobody deletes via anon
drop policy if exists combos_anon_select on public.combos;
create policy combos_anon_select on public.combos
  for select to anon, authenticated
  using (
    coalesce(payload->>'review', 'ok') <> 'pending'
    or public.is_atelier()
  );

drop policy if exists combos_atelier_write on public.combos;
create policy combos_atelier_write on public.combos
  for insert to authenticated
  with check (public.is_atelier());

drop policy if exists combos_atelier_update on public.combos;
create policy combos_atelier_update on public.combos
  for update to authenticated
  using (public.is_atelier())
  with check (public.is_atelier());

drop policy if exists combos_atelier_delete on public.combos;
create policy combos_atelier_delete on public.combos
  for delete to authenticated
  using (public.is_atelier());

-- reports: anon insert only
drop policy if exists reports_anon_insert on public.reports;
create policy reports_anon_insert on public.reports
  for insert to anon, authenticated
  with check (true);

drop policy if exists reports_atelier_select on public.reports;
create policy reports_atelier_select on public.reports
  for select to authenticated
  using (public.is_atelier());

drop policy if exists profiles_own on public.profiles;
create policy profiles_own on public.profiles
  for select to authenticated
  using (id = auth.uid() or public.is_atelier());

drop policy if exists profiles_own_update on public.profiles;
create policy profiles_own_update on public.profiles
  for update to authenticated
  using (id = auth.uid())
  with check (id = auth.uid() and role = (select p.role from public.profiles p where p.id = auth.uid()));

drop policy if exists cases_atelier on public.cases;
create policy cases_atelier on public.cases
  for all to authenticated
  using (public.is_atelier())
  with check (public.is_atelier());

drop policy if exists case_events_atelier on public.case_events;
create policy case_events_atelier on public.case_events
  for all to authenticated
  using (public.is_atelier())
  with check (public.is_atelier());

drop policy if exists audit_log_atelier_select on public.audit_log;
create policy audit_log_atelier_select on public.audit_log
  for select to authenticated
  using (public.is_atelier());

drop policy if exists reviews_atelier on public.reviews;
create policy reviews_atelier on public.reviews
  for all to authenticated
  using (public.is_atelier())
  with check (public.is_atelier());

drop policy if exists collections_read on public.collections;
create policy collections_read on public.collections
  for select to anon, authenticated
  using (is_public or owner = auth.uid() or public.is_atelier());

drop policy if exists collections_own_write on public.collections;
create policy collections_own_write on public.collections
  for all to authenticated
  using (owner = auth.uid() or public.is_atelier())
  with check (owner = auth.uid() or public.is_atelier());

drop policy if exists follows_own on public.follows;
create policy follows_own on public.follows
  for all to authenticated
  using (follower = auth.uid() or public.is_atelier())
  with check (follower = auth.uid() or public.is_atelier());

revoke all on public.combos from anon;
grant select on public.combos to anon;
grant select, insert, update, delete on public.combos to authenticated;

revoke all on public.reports from anon;
grant insert on public.reports to anon;
grant select, insert, update, delete on public.reports to authenticated;

-- Expected tests after apply (S2):
--   anon GET combos where review is ok  -> 200
--   anon DELETE combos?id=eq.x          -> 401/403
--   anon POST combos                    -> 401/403
--   atelier JWT POST combos             -> 201
*/
