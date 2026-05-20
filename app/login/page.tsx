import Link from 'next/link'
import { TrendingUp, MessageCircle } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black mb-2">Entrar en tu cuenta</h1>
          <p className="text-gray-400">Accede con tu cuenta de Telegram para ver tu dashboard personal</p>
        </div>
        <div className="bg-[#111118] border border-[#252535] rounded-2xl p-8 space-y-4">
          <Link href="https://t.me/CriptoSignalMaster_Bot" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg transition">
            <MessageCircle className="w-5 h-5" />
            Continuar con Telegram
          </Link>
          <div className="text-center text-sm text-gray-500">
            Al continuar, aceptas nuestros{' '}
            <a href="#" className="text-green-400 hover:underline">Términos de servicio</a>
            {' '}y{' '}
            <a href="#" className="text-green-400 hover:underline">Política de privacidad</a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          ¿No tienes cuenta?{' '}
          <a href="https://t.me/CriptoSignalMaster_Bot" className="text-green-400 hover:underline">Regístrate gratis en Telegram</a>
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-white transition">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}