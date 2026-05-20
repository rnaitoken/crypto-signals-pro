import Link from 'next/link'
import { TrendingUp, Clock } from 'lucide-react'

const signals = [
  { id: 1, pair: 'BTC/USDT', direction: 'LONG', entry: 67432, target: 68500, stop: 66800, profit: 2.21, date: '2026-05-20 14:32', win: true },
  { id: 2, pair: 'ETH/USDT', direction: 'SHORT', entry: 3421, target: 3350, stop: 3480, profit: 2.07, date: '2026-05-20 10:15', win: true },
  { id: 3, pair: 'SOL/USDT', direction: 'LONG', entry: 178.50, target: 185, stop: 174, profit: 3.64, date: '2026-05-19 18:45', win: true },
  { id: 4, pair: 'BNB/USDT', direction: 'SHORT', entry: 598, target: 585, stop: 608, profit: -1.67, date: '2026-05-19 09:20', win: false },
  { id: 5, pair: 'AVAX/USDT', direction: 'LONG', entry: 35.20, target: 37, stop: 34, profit: 5.11, date: '2026-05-18 16:00', win: true },
]

export default function SenalesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <nav className="border-b border-[#252535] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">CryptoSignals<span className="text-green-500">Pro</span></span>
          </Link>
          <Link href="/login" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            Entrar con Telegram
          </Link>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-4">Señales en tiempo real</h1>
          <p className="text-gray-400 text-lg">Historial de nuestras últimas señales. date para verificar nuestro track record.</p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {signals.map((s) => (
            <div key={s.id} className={`bg-[#111118] border rounded-xl p-5 ${s.win ? 'border-green-500/20' : 'border-red-500/20'}`}>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.direction === 'LONG' ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                    {s.direction === 'LONG' ? <TrendingUp className="w-6 h-6 text-green-400" /> : <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-4-4m4 4l-4-4" /></svg>}
                  </div>
                  <div>
                    <div className="text-xl font-black">{s.pair}</div>
                    <div className="text-sm text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {s.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-black ${s.win ? 'text-green-400' : 'text-red-400'}`}>{s.win ? '+' : ''}{s.profit}%</div>
                  <div className={`text-xs font-medium ${s.win ? 'text-green-400' : 'text-red-400'}`}>{s.win ? '✓ GANADA' : '✗ PERDIDA'}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-[#252535]">
                <div><div className="text-xs text-gray-500 mb-1">Entrada</div><div className="font-semibold">{s.entry.toLocaleString()}</div></div>
                <div><div className="text-xs text-gray-500 mb-1">Target</div><div className="font-semibold text-green-400">{s.target.toLocaleString()}</div></div>
                <div><div className="text-xs text-gray-500 mb-1">Stop Loss</div><div className="font-semibold text-red-400">{s.stop.toLocaleString()}</div></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}