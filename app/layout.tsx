import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'CryptoSignalsPro | AI Trading Signals Platform',
  description: '+127% verified profitability. We only charge if you win. Automated trading signals with artificial intelligence.',
  keywords: 'trading signals, crypto signals, AI trading, bitcoin signals, trading',
  openGraph: {
    title: 'CryptoSignalsPro | AI Trading Signals',
    description: '+127% profitability. We only charge if you win.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📊</text></svg>" />
      </head>
      <body className="antialiased">
        <I18nProvider initialLang="es">
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}