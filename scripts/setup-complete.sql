-- ================================================================
-- CryptoSignalsPro - Complete Database Setup
-- Run this in: Supabase Dashboard → SQL Editor → Copy/Paste → Run
-- ================================================================
-- Time: ~30 seconds | Tables: 10 | Indexes: 12 | Triggers: 1 | Policies: 16
-- ================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ================================================================
-- TABLE 1: profiles (extends auth.users)
-- ================================================================
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  full_name text,
  username text unique,
  avatar_url text,
  bio text,
  auth_provider text check (auth_provider in ('email', 'google', 'facebook', 'telegram')),
  plan text default 'free' check (plan in ('free', 'vip', 'performance')),
  referred_by uuid references public.profiles(id),
  referral_code text unique,
  referral_count integer default 0,
  referral_earnings numeric(12,2) default 0,
  total_signals integer default 0,
  signals_won integer default 0,
  total_profit numeric(10,2) default 0,
  is_active boolean default true,
  last_seen_at timestamptz,
  language text default 'es',
  timezone text default 'Europe/Madrid'
);

-- ================================================================
-- TABLE 2: wallets
-- ================================================================
create table if not exists public.wallets (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  created_at timestamptz default now(),
  exchange text check (exchange in ('bybit', 'binance', 'okx', 'other')) not null,
  label text,
  api_key_encrypted text,
  api_secret_encrypted text,
  ip_whitelist text[],
  permissions text[] default array['trade_read', 'trade_write'],
  is_active boolean default true,
  last_sync_at timestamptz,
  last_error text,
  constraint user_wallet_unique unique (user_id, exchange)
);

-- ================================================================
-- TABLE 3: signals
-- ================================================================
create table if not exists public.signals (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamptz default now(),
  pair text not null,
  direction text not null check (direction in ('LONG', 'SHORT')),
  entry_price numeric(20,8) not null,
  target_price numeric(20,8) not null,
  stop_loss numeric(20,8) not null,
  status text default 'active' check (status in ('active', 'won', 'lost', 'cancelled')),
  actual_exit_price numeric(20,8),
  profit_percentage numeric(10,4),
  timeframe text default '4h',
  strategy text,
  confidence integer default 70,
  analysis text,
  sent_to_telegram boolean default false,
  sent_to_web boolean default false,
  sent_to_discord boolean default false,
  times_followed integer default 0,
  constraint valid_prices check (target_price > entry_price and stop_loss < entry_price)
);

-- ================================================================
-- TABLE 4: user_signals
-- ================================================================
create table if not exists public.user_signals (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamptz default now(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  signal_id uuid references public.signals(id) on delete cascade not null,
  status text default 'pending' check (status in ('pending', 'executed', 'won', 'lost', 'skipped')),
  entry_confirmed_at timestamptz,
  exit_confirmed_at timestamptz,
  profit_percentage numeric(10,4),
  commission_owed numeric(10,2),
  commission_paid boolean default false,
  notes text,
  constraint unique_user_signal unique (user_id, signal_id)
);

-- ================================================================
-- TABLE 5: commissions
-- ================================================================
create table if not exists public.commissions (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamptz default now(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  signal_id uuid references public.signals(id) on delete set null,
  user_signal_id uuid references public.user_signals(id) on delete set null,
  profit_earned numeric(10,2) not null,
  commission_rate numeric(5,2) not null,
  commission_amount numeric(10,2) not null,
  threshold numeric(10,2) default 5.00,
  status text default 'pending' check (status in ('pending', 'approved', 'paid', 'disputed')),
  paid_at timestamptz,
  paid_method text,
  transaction_id text,
  notes text
);

-- ================================================================
-- TABLE 6: affiliate_commissions
-- ================================================================
create table if not exists public.affiliate_commissions (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamptz default now(),
  affiliate_id uuid references public.profiles(id) on delete cascade not null,
  referred_id uuid references public.profiles(id) on delete cascade not null,
  tier text check (tier in ('bronze', 'silver', 'gold', 'diamond')) default 'bronze',
  commission_rate numeric(5,2) not null,
  referred_plan text,
  referred_revenue numeric(10,2) not null,
  commission_amount numeric(10,2) not null,
  status text default 'pending' check (status in ('pending', 'paid', 'cancelled')),
  paid_at timestamptz,
  transaction_id text
);

-- ================================================================
-- TABLE 7: affiliate_tiers
-- ================================================================
create table if not exists public.affiliate_tiers (
  tier text primary key,
  min_referrals integer not null,
  commission_rate numeric(5,2) not null,
  benefits text[]
);

-- ================================================================
-- TABLE 8: subscriptions
-- ================================================================
create table if not exists public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamptz default now(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  plan text not null check (plan in ('free', 'vip_monthly', 'vip_annual', 'performance')),
  status text default 'active' check (status in ('active', 'cancelled', 'expired', 'pending')),
  started_at timestamptz default now(),
  expires_at timestamptz,
  cancelled_at timestamptz,
  payment_method text,
  payment_id text,
  amount_paid numeric(10,2),
  auto_renew boolean default true,
  constraint user_subscription_unique unique (user_id, plan)
);

-- ================================================================
-- TABLE 9: notifications
-- ================================================================
create table if not exists public.notifications (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamptz default now(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  type text not null check (type in ('signal', 'win', 'loss', 'commission', 'referral', 'system', 'promo')),
  title text not null,
  message text not null,
  data jsonb,
  read_at timestamptz,
  channel text check (channel in ('telegram', 'email', 'web', 'discord')),
  sent_at timestamptz,
  sent_success boolean default false
);

-- ================================================================
-- TABLE 10: activity_log
-- ================================================================
create table if not exists public.activity_log (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamptz default now(),
  user_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text,
  entity_id text,
  metadata jsonb,
  ip_address text,
  user_agent text
);

-- ================================================================
-- INDEXES
-- ================================================================
create index if not exists idx_profiles_referral_code on public.profiles(referral_code);
create index if not exists idx_profiles_plan on public.profiles(plan);
create index if not exists idx_signals_status on public.signals(status);
create index if not exists idx_signals_created on public.signals(created_at desc);
create index if not exists idx_user_signals_user on public.user_signals(user_id);
create index if not exists idx_user_signals_status on public.user_signals(status);
create index if not exists idx_commissions_user on public.commissions(user_id);
create index if not exists idx_commissions_status on public.commissions(status);
create index if not exists idx_notifications_user on public.notifications(user_id);
create index if not exists idx_notifications_unread on public.notifications(user_id) where read_at is null;
create index if not exists idx_activity_user on public.activity_log(user_id);
create index if not exists idx_subscriptions_user on public.subscriptions(user_id);

-- ================================================================
-- ROW LEVEL SECURITY (RLS)
-- ================================================================
alter table public.profiles enable row level security;
alter table public.wallets enable row level security;
alter table public.signals enable row level security;
alter table public.user_signals enable row level security;
alter table public.commissions enable row level security;
alter table public.affiliate_commissions enable row level security;
alter table public.notifications enable row level security;
alter table public.subscriptions enable row level security;
alter table public.activity_log enable row level security;
alter table public.affiliate_tiers enable row level security;

-- Profiles policies
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Service can insert profiles" on public.profiles for insert with check (true);

-- Wallets policies
create policy "Users manage own wallets" on public.wallets for all using (auth.uid() = user_id);

-- Signals policies
create policy "Everyone can read active signals" on public.signals for select using (true);
create policy "Service can insert signals" on public.signals for insert with check (true);
create policy "Service can update signals" on public.signals for update using (true);

-- User signals policies
create policy "Users can read own user_signals" on public.user_signals for select using (auth.uid() = user_id);

-- Notifications policies
create policy "Users can read own notifications" on public.notifications for select using (auth.uid() = user_id);
create policy "Users can update own notifications" on public.notifications for update using (auth.uid() = user_id);

-- Subscriptions policies
create policy "Users can read own subscriptions" on public.subscriptions for select using (auth.uid() = user_id);

-- Activity policies
create policy "Users can read own activity" on public.activity_log for select using (auth.uid() = user_id);
create policy "Service can insert activity" on public.activity_log for insert with check (true);

-- Affiliate tiers policies
create policy "Everyone can read affiliate tiers" on public.affiliate_tiers for select using (true);

-- ================================================================
-- TRIGGER: Auto-create profile on new user
-- ================================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, username, avatar_url, auth_provider, referral_code)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'avatar_url',
    new.raw_app_meta_data->>'provider',
    substring(new.id::text, 1, 8)
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ================================================================
-- SEED: Affiliate tiers
-- ================================================================
insert into public.affiliate_tiers (tier, min_referrals, commission_rate, benefits) values
  ('bronze', 0, 5.00, array['Basic commission']),
  ('silver', 6, 10.00, array['Higher commission', 'Priority support']),
  ('gold', 21, 15.00, array['Higher commission', 'Priority support', 'VIP access']),
  ('diamond', 51, 20.00, array['Max commission', 'Priority support', 'VIP access', 'Free VIP plan'])
on conflict (tier) do nothing;

-- ================================================================
-- GRANT PERMISSIONS
-- ================================================================
grant usage on schema public to anon, authenticated;
grant all on schema public to supabase_admin;
grant all on all tables in schema public to supabase_admin;
grant all on all sequences in schema public to supabase_admin;

-- ================================================================
-- VERIFY
-- ================================================================
select '✅ Database setup complete!' as status;
select 'Tables: ' || count(*) as total from information_schema.tables where table_schema = 'public' and table_type = 'BASE TABLE';