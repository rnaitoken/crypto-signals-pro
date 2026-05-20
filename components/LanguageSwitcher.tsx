'use client'
import { Globe } from 'lucide-react'
import { useI18n, Language } from './i18n'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n()

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Globe className="w-4 h-4 text-gray-400" />
      <select
        value={lang}
        onChange={e => setLang(e.target.value as Language)}
        className="bg-transparent text-gray-300 text-xs border border-white/10 rounded-lg px-2 py-1 cursor-pointer hover:border-[#00ff88]/40 transition"
      >
        <option value="es" className="bg-[#0a1628] text-black">🇪🇸 Español</option>
        <option value="en" className="bg-[#0a1628] text-black">🇬🇧 English</option>
        <option value="pt" className="bg-[#0a1628] text-black">🇧🇷 Português</option>
        <option value="fr" className="bg-[#0a1628] text-black">🇫🇷 Français</option>
        <option value="de" className="bg-[#0a1628] text-black">🇩🇪 Deutsch</option>
        <option value="it" className="bg-[#0a1628] text-black">🇮🇹 Italiano</option>
        <option value="zh" className="bg-[#0a1628] text-black">🇨🇳 中文</option>
        <option value="ja" className="bg-[#0a1628] text-black">🇯🇵 日本語</option>
      </select>
    </div>
  )
}