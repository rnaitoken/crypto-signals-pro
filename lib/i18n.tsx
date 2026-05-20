'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en'

const translations = {
  es: {
    // Navbar
    systemActive: 'Sistema activo',
    hello: 'Hola',
    vip: 'VIP',
    free: 'GRATIS',
    // Dashboard
    controlPanel: 'Panel de Control',
    activitySummary: 'Resumen de tu actividad de trading',
    last7days: 'Últimos 7 días',
    last30days: 'Últimos 30 días',
    last90days: 'Últimos 90 días',
    // Stats
    totalProfit: 'Ganancia total',
    winRate: 'Win rate',
    signalsWon: 'Señales ganadas',
    wallet: 'Wallet',
    bybit: 'Bybit',
    binance: 'Binance',
    // Profitability
    profitability: 'Rentabilidad',
    thisMonth: 'este mes',
    allTime: 'histórico',
    // Signals table
    mySignals: 'Mis señales',
    signals: 'señales',
    date: 'Fecha',
    pair: 'Par',
    direction: 'Dirección',
    entry: 'Entrada',
    exit: 'Salida',
    result: 'Resultado',
    win: 'GANADA',
    loss: 'PERDIDA',
    long: 'LONG',
    short: 'SHORT',
    // Affiliate
    affiliateProgram: 'Programa de afiliados',
    shareEarn: 'Comparte y gana 10% de cada cliente que traigas',
    yourAffiliateLink: 'Tu link de afiliado',
    copy: 'Copiar',
    copied: '¡Copiado!',
    // Signals page
    liveSignals: 'Señales en tiempo real',
    verifyTrackRecord: 'Verifica nuestro track record',
    entryPrice: 'Entrada',
    target: 'Target',
    stopLoss: 'Stop Loss',
    // Pricing
    pricesTransparent: 'Precios simples y transparentes',
    noSurprises: 'Sin letra pequeña. Sin sorpresas. Solo resultados.',
    questions: '¿Preguntas?',
    writeUs: 'Escríbenos por Telegram',
    // Login
    enterAccount: 'Entrar en tu cuenta',
    accessDashboard: 'Accede con tu cuenta para ver tu dashboard personal',
    continueTelegram: 'Continuar con Telegram',
    continueGoogle: 'Continuar con Google',
    continueFacebook: 'Continuar con Facebook',
    continueEmail: 'Continuar con Email',
    acceptTerms: 'Al continuar, aceptas nuestros',
    termsService: 'Términos de servicio',
    privacyPolicy: 'Política de privacidad',
    noAccount: '¿No tienes cuenta?',
    registerFree: 'Regístrate gratis en Telegram',
    backHome: '← Volver al inicio',
    // Landing
    aiTrading: 'Señales de Trading',
    artificialIntelligence: 'con Inteligencia',
    onlyWinFee: 'Artificial\nSolo cobramos si ganas',
    profitability2026: '+127% de rentabilidad en 2026',
    freeSignals: '3 señales/semana gratis',
    noCard: 'Sin tarjeta',
    noCommitment: 'Sin compromiso',
    // CTA
    startFree: 'Empezar gratis',
    viewLiveSignals: 'Ver señales en vivo',
    openFreeAccount: 'Abrir mi cuenta gratis',
    // How it works
    howWorks: 'CÓMO FUNCIONA',
    zeroToProfits: 'De 0 a profits en 3 pasos',
    connectWallet: 'Conecta tu wallet',
    connectWalletDesc: 'Usa tu API de Bybit o Binance. Solo permisos de trading — jamás tocamos tu dinero directamente.',
    receiveSignals: 'Recibe señales',
    receiveSignalsDesc: 'Nuestras señales con IA llegan a tu Telegram con entrada, stop loss y take profit exactos.',
    earnMoney: 'Gana dinero',
    earnMoneyDesc: 'Seguimos tu rentabilidad. Si ganas >5%, cobramos nuestra comisión. Si pierdes, no pagas nada.',
    // Features
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
    // Plans
    plans: 'Planes',
    forever: 'para siempre',
    perMonth: '/mes',
    ifWin: 'solo si ganas >5%',
    startHere: 'Para empezar a conocer nuestro servicio',
    forSerious: 'Para traders serios que quieren resultados',
    ourMoney: 'Nuestro dinero donde nuestra boca',
    getFree: 'Empezar gratis',
    beVip: 'Ser VIP ahora',
    contact: 'Contactar',
    // Stats bar
    activeMembers: 'Miembros activos',
    profitabilityLabel: 'Rentabilidad 2026',
    signalsSent: 'Señales enviadas',
    winRateLabel: 'Win rate',
    // Footer
    allRights: '© 2026 CryptoSignalsPro. Todos los derechos reservados.',
    // SEO
    seoTitle: 'CryptoSignalsPro | AI Trading Signals Platform',
    seoDescription: '+127% verified profitability. We only charge if you win. Automated trading signals with artificial intelligence.',
    // Language switcher
    language: 'Idioma',
    spanish: 'Español',
    english: 'English',
  },
  en: {
    // Navbar
    systemActive: 'System active',
    hello: 'Hello',
    vip: 'VIP',
    free: 'FREE',
    // Dashboard
    controlPanel: 'Control Panel',
    activitySummary: 'Your trading activity summary',
    last7days: 'Last 7 days',
    last30days: 'Last 30 days',
    last90days: 'Last 90 days',
    // Stats
    totalProfit: 'Total Profit',
    winRate: 'Win rate',
    signalsWon: 'Signals won',
    wallet: 'Wallet',
    bybit: 'Bybit',
    binance: 'Binance',
    // Profitability
    profitability: 'Profitability',
    thisMonth: 'this month',
    allTime: 'all time',
    // Signals table
    mySignals: 'My Signals',
    signals: 'signals',
    date: 'Date',
    pair: 'Pair',
    direction: 'Direction',
    entry: 'Entry',
    exit: 'Exit',
    result: 'Result',
    win: 'WON',
    loss: 'LOST',
    long: 'LONG',
    short: 'SHORT',
    // Affiliate
    affiliateProgram: 'Affiliate Program',
    shareEarn: 'Share and earn 10% for every client you bring',
    yourAffiliateLink: 'Your affiliate link',
    copy: 'Copy',
    copied: 'Copied!',
    // Signals page
    liveSignals: 'Live Trading Signals',
    verifyTrackRecord: 'Verify our track record',
    entryPrice: 'Entry',
    target: 'Target',
    stopLoss: 'Stop Loss',
    // Pricing
    pricesTransparent: 'Simple and transparent pricing',
    noSurprises: 'No hidden fees. No surprises. Only results.',
    questions: 'Questions?',
    writeUs: 'Write to us on Telegram',
    // Login
    enterAccount: 'Sign in to your account',
    accessDashboard: 'Access with your account to view your personal dashboard',
    continueTelegram: 'Continue with Telegram',
    continueGoogle: 'Continue with Google',
    continueFacebook: 'Continue with Facebook',
    continueEmail: 'Continue with Email',
    acceptTerms: 'By continuing, you accept our',
    termsService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    noAccount: "Don't have an account?",
    registerFree: 'Register free on Telegram',
    backHome: '← Back to home',
    // Landing
    aiTrading: 'Trading Signals',
    artificialIntelligence: 'with Artificial',
    onlyWinFee: 'Intelligence\nWe only charge if you win',
    profitability2026: '+127% profitability in 2026',
    freeSignals: '3 signals/week free',
    noCard: 'No card required',
    noCommitment: 'No commitment',
    // CTA
    startFree: 'Start free',
    viewLiveSignals: 'View live signals',
    openFreeAccount: 'Open my free account',
    // How it works
    howWorks: 'HOW IT WORKS',
    zeroToProfits: 'From 0 to profits in 3 steps',
    connectWallet: 'Connect your wallet',
    connectWalletDesc: 'Use your Bybit or Binance API. Trading permissions only — we never touch your money directly.',
    receiveSignals: 'Receive signals',
    receiveSignalsDesc: 'Our AI signals arrive on your Telegram with entry, stop loss and exact take profit targets.',
    earnMoney: 'Earn money',
    earnMoneyDesc: "We track your profitability. If you earn >5%, we charge our commission. If you lose, you pay nothing.",
    // Features
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
    // Plans
    plans: 'Plans',
    forever: 'forever',
    perMonth: '/month',
    ifWin: 'only if you win >5%',
    startHere: 'To start getting to know our service',
    forSerious: 'For serious traders who want results',
    ourMoney: 'Our money where our mouth is',
    getFree: 'Start free',
    beVip: 'Be VIP now',
    contact: 'Contact',
    // Stats bar
    activeMembers: 'Active members',
    profitabilityLabel: '2026 Profitability',
    signalsSent: 'Signals sent',
    winRateLabel: 'Win rate',
    // Footer
    allRights: '© 2026 CryptoSignalsPro. All rights reserved.',
    // SEO
    seoTitle: 'CryptoSignalsPro | AI Trading Signals Platform',
    seoDescription: '+127% verified profitability. We only charge if you win. Automated trading signals with artificial intelligence.',
    // Language switcher
    language: 'Language',
    spanish: 'Español',
    english: 'English',
  },
}

type TranslationKey = keyof typeof translations.es

interface I18nContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType>({
  lang: 'es',
  setLang: () => {},
  t: () => '',
})

export function I18nProvider({ children, initialLang = 'es' }: { children: ReactNode; initialLang?: Language }) {
  const [lang, setLangState] = useState<Language>(initialLang)

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language
    if (stored && (stored === 'es' || stored === 'en')) {
      setLangState(stored)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || translations.es[key] || key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    return { lang: 'es' as Language, setLang: () => {}, t: () => '' }
  }
  return context
}

export type { Language, TranslationKey }