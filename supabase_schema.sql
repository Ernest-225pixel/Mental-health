create extension if not exists pgcrypto;

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  author text not null default 'Anonymous',
  title text not null,
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.replies (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  author text not null default 'Anonymous',
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  reason text not null default 'Community report',
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;
alter table public.replies enable row level security;
alter table public.reports enable row level security;

create policy "posts_select_public"
on public.posts
for select
using (true);

create policy "posts_insert_public"
on public.posts
for insert
with check (true);

create policy "replies_select_public"
on public.replies
for select
using (true);

create policy "replies_insert_public"
on public.replies
for insert
with check (true);

create policy "reports_insert_public"
on public.reports
for insert
with check (true);
