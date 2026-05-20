'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TrendingUp, Shield, Users, Zap, ArrowRight, ChevronRight, Star, Activity, Globe, Lock, BarChart2, Cpu, Database, LineChart } from 'lucide-react'
import LanguageSwitcher from '@/components/LanguageSwitcher'

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState('0')
  useEffect(() => {
    const num = parseFloat(target.replace(/[^0-9.]/g, ''))
    const suffixOnly = target.replace(/[0-9.]/g, '')
    let start = 0
    const step = num / 40
    const interval = setInterval(() => {
      start += step
      if (start >= num) { setCount(target); clearInterval(interval) }
      else { setCount(Math.floor(start).toLocaleString() + suffixOnly) }
    }, 40)
    return () => clearInterval(interval)
  }, [target])
  return <span>{count}{suffix}</span>
}

const t = {
  es: {
    systemActive: 'Sistema activo',
    hello: 'Hola',
    vip: 'VIP',
    free: 'FREE',
    startFree: 'Empezar gratis',
    viewLiveSignals: 'Ver señales en vivo',
    profitability2026: '+127% de rentabilidad en 2026',
    freeSignals: '3 señales/semana gratis',
    noCard: 'Sin tarjeta',
    noCommitment: 'Sin compromiso',
    activeMembers: 'Miembros activos',
    signalsSent: 'Señales enviadas',
    winRateLabel: 'Win rate',
    howWorks: 'CÓMO FUNCIONA',
    zeroToProfits: 'De 0 a profits en 3 pasos',
    connectWallet: 'Conecta tu wallet',
    connectWalletDesc: 'Usa tu API de Bybit o Binance. Solo permisos de trading — jamás tocamos tu dinero directamente.',
    receiveSignals: 'Recibe señales',
    receiveSignalsDesc: 'Nuestras señales con IA llegan a tu Telegram con entrada, stop loss y take profit exactos.',
    earnMoney: 'Gana dinero',
    earnMoneyDesc: 'Seguimos tu rentabilidad. Si ganas >5%, cobramos nuestra comisión. Si pierdes, no pagas nada.',
    whyUs: 'POR QUÉ NOSOTROS',
    advantage: 'La ventaja CryptoSignalsPro',
    performanceFee: 'Performance Fee real',
    performanceFeeDesc: 'Solo cobramos el 30% cuando ganas más del 5%. Si nuestra señal falla, no cobramos nada.',
    aiProprietary: 'IA propietaria',
    aiProprietaryDesc: 'Modelos entrenados con datos de mercado de los últimos 5 años. No copy-paste de señales públicas.',
    twentyFourSeven: '24/7 en Telegram',
    twentyFourSevenDesc: 'Señales en tiempo real, análisis diario y soporte directo en tu móvil. Sin apps, sin complicaciones.',
    auditableHistory: 'Historial auditable',
    auditableHistoryDesc: 'Cada señal queda registrada. Puedes verificar cada operación y su resultado en tu dashboard.',
    advancedDashboard: 'Dashboard avanzado',
    advancedDashboardDesc: 'Tu panel personal con estadísticas, rendimiento, referidos y evolución de tu wallet.',
    vipCommunity: 'Comunidad VIP',
    vipCommunityDesc: 'Acceso a grupo privado con traders exitosos. Comparte estrategias y aprende de los mejores.',
    liveSignals: 'EN VIVO',
    latestSignals: 'Últimas señales',
    viewAll: 'Ver todas',
    openFreeAccount: 'Empezar ahora',
    openFreeAccount2: 'Empieza a ganar hoy',
    onlyWinFee: '3 señales/semana gratis. Sin tarjeta. Sin compromiso. Si no ganas, no pagas.',
    allRights: '© 2026 CryptoSignalsPro. Todos los derechos reservados.',
    login: 'Login',
    signals: 'Señales',
    features: 'Features',
    pricing: 'Pricing',
    live: 'Live',
  },
  en: {
    systemActive: 'System active',
    hello: 'Hello',
    vip: 'VIP',
    free: 'FREE',
    startFree: 'Start free',
    viewLiveSignals: 'View live signals',
    profitability2026: '+127% profitability in 2026',
    freeSignals: '3 signals/week free',
    noCard: 'No card required',
    noCommitment: 'No commitment',
    activeMembers: 'Active members',
    signalsSent: 'Signals sent',
    winRateLabel: 'Win rate',
    howWorks: 'HOW IT WORKS',
    zeroToProfits: 'From 0 to profits in 3 steps',
    connectWallet: 'Connect your wallet',
    connectWalletDesc: 'Use your Bybit or Binance API. Trading permissions only — we never touch your money directly.',
    receiveSignals: 'Receive signals',
    receiveSignalsDesc: 'Our AI signals arrive on your Telegram with entry, stop loss and exact take profit targets.',
    earnMoney: 'Earn money',
    earnMoneyDesc: 'We track your profitability. If you earn >5%, we charge our commission. If you lose, you pay nothing.',
    whyUs: 'WHY US',
    advantage: 'The CryptoSignalsPro advantage',
    performanceFee: 'Real Performance Fee',
    performanceFeeDesc: 'We only charge 30% when you earn more than 5%. If our signal fails, we charge nothing.',
    aiProprietary: 'Proprietary AI',
    aiProprietaryDesc: 'Models trained with 5 years of market data. Not copy-paste from public signals.',
    twentyFourSeven: '24/7 on Telegram',
    twentyFourSevenDesc: 'Real-time signals, daily analysis and direct support on your mobile. No apps, no complications.',
    auditableHistory: 'Auditable history',
    auditableHistoryDesc: 'Every signal is recorded. You can verify each operation and its result on your dashboard.',
    advancedDashboard: 'Advanced Dashboard',
    advancedDashboardDesc: 'Your personal panel with statistics, performance, affiliates and wallet evolution.',
    vipCommunity: 'VIP Community',
    vipCommunityDesc: 'Access to private group with successful traders. Share strategies and learn from the best.',
    liveSignals: 'LIVE',
    latestSignals: 'Latest signals',
    viewAll: 'View all',
    openFreeAccount: 'Start now',
    openFreeAccount2: 'Start earning today',
    onlyWinFee: '3 signals/week free. No card. No commitment. If you don\'t win, you don\'t pay.',
    allRights: '© 2026 CryptoSignalsPro. All rights reserved.',
    login: 'Login',
    signals: 'Signals',
    features: 'Features',
    pricing: 'Pricing',
    live: 'Live',
  },
}

export default function Home() {
  const [lang, setLang] = useState('es')
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const stored = localStorage.getItem('lang') || 'es'
    setLang(stored)
    setTimeout(() => setVisible(true), 100)
  }, [])

  const tx = t[lang as 'es' | 'en'] || t.es

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00ff88]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#030712]" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00ff88] rounded-full animate-pulse" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight">CryptoSignals<span className="text-[#00ff88]">Pro</span></span>
              <div className="text-[10px] text-[#00ff88]/60 tracking-widest uppercase">AI Powered Trading</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition">{tx.features}</a>
            <a href="#signals" className="text-sm text-gray-400 hover:text-white transition">{tx.signals}</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition">{tx.pricing}</a>
            <a href="/senales" className="text-sm text-gray-400 hover:text-white transition">{tx.live}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/login" className="hidden sm:block text-sm text-gray-400 hover:text-white transition">{tx.login}</Link>
            <Link href="/login" className="btn-primary text-sm !py-3 !px-6 flex items-center gap-2">
              {tx.startFree} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="scan-line" />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="badge-tech inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
              {tx.profitability2026}
            </div>
          </div>

          <h1 className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <span className="text-gradient-green">{tx.aiTrading || 'Señales de Trading'}</span>
            <br />
            <span className="text-white">{tx.artificialIntelligence || 'con Inteligencia'}</span>
            <br />
            <span className="text-gradient-green">Artificial</span>
          </h1>

          <p className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            {lang === 'es'
              ? <>El único servicio donde <span className="text-[#00ff88] font-semibold">cobramos solo si tú ganas</span>. +127% de rentabilidad verificada. Sin promesas, sin humo.</>
              : <>The only service where <span className="text-[#00ff88] font-semibold">we only charge if you win</span>. +127% verified profitability. No promises, no BS.</>
            }
          </p>

          <div className={`flex items-center justify-center gap-4 flex-wrap transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
            <Link href="/login" className="btn-primary text-base flex items-center gap-2 animate-pulse-glow">
              {tx.startFree} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/senales" className="btn-secondary text-base flex items-center gap-2">
              {tx.viewLiveSignals}
            </Link>
          </div>

          <p className="text-xs text-gray-600 mt-4">{tx.freeSignals} • {tx.noCard} • {tx.noCommitment}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />
      </section>

      {/* Stats bar */}
      <section className="relative py-16 border-y border-[rgba(0,255,136,0.1)] bg-[#0a1628]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2,847', label: tx.activeMembers, icon: <Users className="w-5 h-5" /> },
              { value: '+127%', label: tx.profitability2026, icon: <LineChart className="w-5 h-5" /> },
              { value: '1,342', label: tx.signalsSent, icon: <Activity className="w-5 h-5" /> },
              { value: '96.2%', label: tx.winRateLabel, icon: <BarChart2 className="w-5 h-5" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-black font-display text-white mb-1">
                  <AnimatedCounter target={stat.value} />
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="badge-tech inline-flex items-center gap-2 mb-4">{tx.howWorks}</div>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-4">
              {tx.zeroToProfits}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', icon: <Lock className="w-7 h-7" />, title: tx.connectWallet, desc: tx.connectWalletDesc },
              { step: '02', icon: <Zap className="w-7 h-7" />, title: tx.receiveSignals, desc: tx.receiveSignalsDesc },
              { step: '03', icon: <TrendingUp className="w-7 h-7" />, title: tx.earnMoney, desc: tx.earnMoneyDesc },
            ].map((item, i) => (
              <div key={i} className="card-tech glass-accent rounded-2xl p-8 relative">
                <div className="text-6xl font-black text-[#00ff88]/10 font-display absolute top-4 right-6">{item.step}</div>
                <div className="text-[#00ff88] mb-6">{item.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-24 bg-[#0a1628]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="badge-tech inline-flex items-center gap-2 mb-4">{tx.whyUs}</div>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-4">
              {tx.advantage}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Shield className="w-6 h-6" />, title: tx.performanceFee, desc: tx.performanceFeeDesc },
              { icon: <Cpu className="w-6 h-6" />, title: tx.aiProprietary, desc: tx.aiProprietaryDesc },
              { icon: <Globe className="w-6 h-6" />, title: tx.twentyFourSeven, desc: tx.twentyFourSevenDesc },
              { icon: <Database className="w-6 h-6" />, title: tx.auditableHistory, desc: tx.auditableHistoryDesc },
              { icon: <BarChart2 className="w-6 h-6" />, title: tx.advancedDashboard, desc: tx.advancedDashboardDesc },
              { icon: <Star className="w-6 h-6" />, title: tx.vipCommunity, desc: tx.vipCommunityDesc },
            ].map((f, i) => (
              <div key={i} className="card-tech glass rounded-xl p-6 hover:border-[rgba(0,255,136,0.3)] transition-all">
                <div className="text-[#00ff88] mb-4">{f.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live signals */}
      <section id="signals" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="badge-tech inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                {tx.liveSignals}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black">{tx.latestSignals}</h2>
            </div>
            <Link href="/senales" className="hidden md:flex items-center gap-2 text-[#00ff88] text-sm font-medium hover:underline">
              {tx.viewAll} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { pair: 'BTC/USDT', dir: 'LONG', entry: 67432, target: 68500, stop: 66800, profit: 2.21, time: '14:32', status: 'win' },
              { pair: 'ETH/USDT', dir: 'SHORT', entry: 3421, target: 3350, stop: 3480, profit: 2.07, time: '10:15', status: 'win' },
              { pair: 'SOL/USDT', dir: 'LONG', entry: 178.50, target: 185, stop: 174, profit: 3.64, time: '18:45', status: 'win' },
              { pair: 'BNB/USDT', dir: 'SHORT', entry: 598, target: 585, stop: 608, profit: -1.67, time: '09:20', status: 'loss' },
              { pair: 'AVAX/USDT', dir: 'LONG', entry: 35.20, target: 37, stop: 34, profit: 5.11, time: '16:00', status: 'win' },
            ].map((s, i) => (
              <div key={i} className={`glass rounded-xl p-5 flex items-center justify-between flex-wrap gap-4 ${s.status === 'win' ? 'border-l-2 border-l-[#00ff88]' : 'border-l-2 border-l-red-500/50'}`}>
                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.dir === 'LONG' ? 'bg-[#00ff88]/10' : 'bg-red-500/10'}`}>
                    {s.dir === 'LONG' ? <TrendingUp className="w-5 h-5 text-[#00ff88]" /> : <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-4-4m4 4l-4-4" /></svg>}
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg">{s.pair}</div>
                    <div className="text-xs text-gray-500">{s.time} • Entry: {s.entry.toLocaleString()} → Target: {s.target.toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-black text-xl ${s.profit > 0 ? 'text-[#00ff88]' : 'text-red-400'}`}>{s.profit > 0 ? '+' : ''}{s.profit}%</div>
                  <div className={`text-xs font-medium ${s.status === 'win' ? 'text-[#00ff88]/60' : 'text-red-400/60'}`}>{s.status === 'win' ? '✓ WON' : '✗ LOST'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-accent rounded-3xl p-12 relative overflow-hidden">
            <div className="scan-line" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
                {tx.openFreeAccount2}
              </h2>
              <p className="text-gray-400 text-lg mb-10">{tx.onlyWinFee}</p>
              <Link href="/login" className="btn-primary text-lg inline-flex items-center gap-2 animate-pulse-glow">
                {tx.startFree} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#00ff88] flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#030712]" />
            </div>
            <span className="font-display font-bold text-sm">CryptoSignalsPro</span>
          </div>
          <p className="text-xs text-gray-600">{tx.allRights}</p>
          <div className="flex gap-6">
            <Link href="/senales" className="text-xs text-gray-600 hover:text-white transition">{tx.signals}</Link>
            <Link href="/login" className="text-xs text-gray-600 hover:text-white transition">{tx.login}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}