import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CryptoSignalsPro | Señales de Trading con IA',
  description: '+127% de rentabilidad. Modelo único: cobramos solo si tú ganas. Señales de trading automatizadas con inteligencia artificial.',
  keywords: 'señales crypto, trading, señales bitcoin, trading rentable, crypto signals',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📊</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}