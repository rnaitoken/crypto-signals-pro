# CryptoSignalsPro 🌐

El sistema de señales de trading más avanzado. +127% de rentabilidad verificada.

## 🚀 Despliegue en Vercel

1. Sube este proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com) → "Add New Project"
3. Selecciona este repo → Deploy

## 📦 Instalación local

```bash
npm install
npm run dev     # desarrollo
npm run build   # producción
```

## 🛠️ Stack

- **Frontend**: Next.js 14 + TypeScript + TailwindCSS
- **Base de datos**: Supabase (PostgreSQL)
- **Auth**: Telegram Login Widget
- **Pagos**: LemonSqueezy

## 📁 Estructura

```
app/             → Páginas (Next.js App Router)
  page.tsx       → Landing page
  dashboard/    → Panel de cliente
  senales/      → Feed de señales
  pricing/      → Precios
  login/        → Login vía Telegram

components/     → Componentes reutilizables
lib/            → Configuración (Supabase, Telegram)
```

## 🔗 Links importantes

- 🌐 Web: https://ht9fbfxvsk3j.space.minimax.io
- 📱 Bot Telegram: @CriptoSignalMaster_Bot

## 📋 Configuración API Keys (variables entorno)

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key_anonima
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
TELEGRAM_BOT_TOKEN=8724751347:AAG-t7TsTUhUvr3eUNRL90YSjcp5j14ABdA
NEXT_PUBLIC_BOT_USERNAME=CriptoSignalMaster_Bot
```

---

© 2026 CryptoSignalsPro — Todos los derechos reservados.