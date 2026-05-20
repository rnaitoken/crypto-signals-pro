import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
  { name: 'FREE', price: '0', period: 'para siempre', desc: 'Para empezar a conocer nuestro servicio', features: ['3 señales/semana', 'Canal público de Telegram', 'Análisis semanal', 'Acceso a comunidad'], cta: 'Empezar gratis', href: '/login', popular: false },
  { name: 'VIP MENSUAL', price: '49', period: '/mes', desc: 'Para traders serios que quieren resultados', features: ['Señales ilimitadas', 'Grupo VIP privado', 'Análisis diario de mercado', 'Dashboard completo', 'Soporte prioritario', 'Estrategias exclusivas'], cta: 'Ser VIP ahora', href: '/login', popular: true },
  { name: 'PERFORMANCE', price: '30%', period: 'solo si ganas >5%', desc: 'Sin riesgo. Solo cobramos si ganas', features: ['Todo lo de VIP', 'Cobramos solo si ganas >5%', 'Plan personalizado', 'Gestión de riesgo avanzada', 'Reporting mensual'], cta: 'Contactar', href: '/login', popular: false },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <nav className="border-b border-[#252535] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <span className="font-bold text-xl">CryptoSignals<span className="text-green-500">Pro</span></span>
          </Link>
          <Link href="/login" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            Entrar con Telegram
          </Link>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">Precios simples y transparentes</h1>
          <p className="text-gray-400 text-xl">Sin letra pequeña. Sin sorpresas. Solo resultados.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-[#111118] border rounded-2xl p-8 ${plan.popular ? 'border-green-500/50' : 'border-[#252535]'}`}>
              {plan.popular && <div className="text-xs font-bold text-green-400 mb-3 bg-green-500/10 inline-block px-3 py-1 rounded-full">MÁS POPULAR</div>}
              <h3 className="text-lg font-bold text-gray-400 mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">{plan.price}</span>
                {plan.price !== '0' && <span className="text-gray-400 mb-2 text-sm">{plan.period}</span>}
              </div>
              <p className="text-sm text-gray-500 mb-8">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-gray-300 flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className={`block text-center py-3 rounded-xl font-semibold transition ${plan.popular ? 'bg-green-500 hover:bg-green-600 text-white' : 'border border-[#252535] hover:border-green-500/50 text-white'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-gray-400 text-sm">
          ¿Preguntas? <Link href="https://t.me/CriptoSignalMaster_Bot" className="text-green-400 hover:underline">Escríbenos por Telegram</Link>
        </div>
      </main>
    </div>
  )
}