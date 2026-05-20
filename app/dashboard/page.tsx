'use client'
import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, TrendingDown, BarChart2, Star, Wallet, Users, ArrowUpRight, Copy, ExternalLink, Activity } from 'lucide-react'

const mockSignals = [
  { id: 1, pair: 'BTC/USDT', direction: 'LONG', entry: 67432, exit: 68921, profit: 2.21, date: '2026-05-20', status: 'win' },
  { id: 2, pair: 'ETH/USDT', direction: 'LONG', entry: 3421, exit: 3380, profit: -1.20, date: '2026-05-19', status: 'loss' },
  { id: 3, pair: 'BNB/USDT', direction: 'SHORT', entry: 598, exit: 612, profit: 3.45, date: '2026-05-18', status: 'win' },
  { id: 4, pair: 'SOL/USDT', direction: 'LONG', entry: 178, exit: 189, profit: 6.18, date: '2026-05-17', status: 'win' },
  { id: 5, pair: 'AVAX/USDT', direction: 'SHORT', entry: 35.2, exit: 34.8, profit: 1.14, date: '2026-05-16', status: 'win' },
]

export default function DashboardPage() {
  const [period, setPeriod] = useState('30d')
  const totalProfit = mockSignals.reduce((s, x) => s + x.profit, 0)
  const wins = mockSignals.filter(s => s.profit > 0).length

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="fixed inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Nav */}
      <nav className="border-b border-white/5 px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-[#030712]/80 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#030712]" />
          </div>
          <span className="font-display font-bold text-lg">CryptoSignals<span className="text-[#00ff88]">Pro</span></span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
            <Activity className="w-4 h-4 text-[#00ff88]" />
            Sistema activo
          </div>
          <span className="text-sm text-gray-400">Hola, <span className="text-white font-medium">@Synapbot</span></span>
          <span className="badge-tech">VIP</span>
        </div>
      </nav>

      <main className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-black">Panel de Control</h1>
            <p className="text-gray-500 mt-1">Resumen de tu actividad de trading</p>
          </div>
          <select value={period} onChange={e => setPeriod(e.target.value)} className="bg-white/5 border border-white/10 text-white text-sm px-4 py-2 rounded-lg cursor-pointer">
            <option value="7d">Últimos 7 días</option>
            <option value="30d">Últimos 30 días</option>
            <option value="90d">Últimos 90 días</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Ganancia total', value: `+${totalProfit.toFixed(2)}%`, icon: <TrendingUp className="w-5 h-5" />, color: 'text-[#00ff88]', bg: 'bg-[#00ff88]/10' },
            { label: 'Win rate', value: `${Math.round(wins/mockSignals.length*100)}%`, icon: <BarChart2 className="w-5 h-5" />, color: 'text-[#00ff88]', bg: 'bg-[#00ff88]/10' },
            { label: 'Señales ganadas', value: `${wins}/${mockSignals.length}`, icon: <Star className="w-5 h-5" />, color: 'text-[#00d4ff]', bg: 'bg-[#00d4ff]/10' },
            { label: 'Wallet', value: 'Bybit', icon: <Wallet className="w-5 h-5" />, color: 'text-purple-400', bg: 'bg-purple-500/10' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-5 border border-white/5 hover:border-white/10 transition">
              <div className={`${stat.bg} w-10 h-10 rounded-lg flex items-center justify-center ${stat.color} mb-4`}>{stat.icon}</div>
              <div className="text-2xl font-black font-display mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div className="glass rounded-xl p-6 mb-6 border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-lg">Rentabilidad</h2>
            <span className="text-xs text-[#00ff88] bg-[#00ff88]/10 px-3 py-1 rounded-full">+{totalProfit.toFixed(2)}% este mes</span>
          </div>
          <div className="h-40 flex items-end gap-2 justify-around">
            {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
              <div key={i} className="w-full bg-gradient-to-t from-[#00ff88]/20 to-[#00ff88]/5 rounded-t-sm hover:from-[#00ff88]/40 hover:to-[#00ff88]/20 transition-all cursor-pointer" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
            <span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
          </div>
        </div>

        {/* Signals */}
        <div className="glass rounded-xl overflow-hidden border border-white/5">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h2 className="font-display font-bold">Mis señales</h2>
            <span className="text-xs text-gray-500">{mockSignals.length} señales</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3">Fecha</th>
                  <th className="px-6 py-3">Par</th>
                  <th className="px-6 py-3">Dirección</th>
                  <th className="px-6 py-3">Entrada</th>
                  <th className="px-6 py-3">Salida</th>
                  <th className="px-6 py-3">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {mockSignals.map(s => (
                  <tr key={s.id} className="border-t border-white/5 hover:bg-white/5 transition">
                    <td className="px-6 py-4 text-sm text-gray-400">{s.date}</td>
                    <td className="px-6 py-4 font-display font-semibold">{s.pair}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${s.direction === 'LONG' ? 'bg-[#00ff88]/10 text-[#00ff88]' : 'bg-red-500/10 text-red-400'}`}>
                        {s.direction === 'LONG' ? <TrendingUp className="w-3 h-3 inline mr-1" /> : <TrendingDown className="w-3 h-3 inline mr-1" />}
                        {s.direction}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{s.entry.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{s.exit.toLocaleString()}</td>
                    <td className={`px-6 py-4 font-black ${s.profit > 0 ? 'text-[#00ff88]' : 'text-red-400'}`}>
                      {s.profit > 0 ? '+' : ''}{s.profit}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Affiliate */}
        <div className="mt-6 glass-accent rounded-xl p-6 border border-[#00ff88]/20">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#00ff88]" />
                <h3 className="font-display font-bold">Programa de afiliados</h3>
              </div>
              <p className="text-sm text-gray-400">Comparte tu link y gana 10% de cada cliente que traigas</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <code className="bg-black/30 border border-white/10 px-4 py-2 rounded-lg text-sm text-[#00ff88] flex-1 md:flex-none font-mono">
                cryptosignals.pro?ref=Synapbot
              </code>
              <button className="bg-[#00ff88] text-[#030712] px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition shrink-0">
                Copiar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}