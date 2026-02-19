'use client'

import Image from 'next/image'
import { Mail, Instagram, MapPin, ArrowUp, Globe } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-brand-deep text-white pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">

          <div className="md:col-span-2">
            <div className="flex items-center gap-5 mb-8">
              <div className="relative w-16 h-16 bg-white rounded-2xl p-2 shadow-2xl">
                <Image src="/logo.png" alt="TuttoCorpo" fill className="object-contain p-2" />
              </div>
              <span className="text-3xl font-serif font-bold tracking-tight">TuttoCorpo</span>
            </div>
            <p className="text-white/40 text-lg max-w-sm leading-relaxed mb-8">
              El estudio de Pilates premium donde la precisión técnica y el bienestar consciente se encuentran.
            </p>
            <div className="flex gap-4">
              {[Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="https://instagram.com/tuttocorpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/60 transition-colors border border-white/5 hover:text-brand-mint"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-brand-mint font-bold uppercase tracking-widest text-[10px] mb-8">NUESTRO ESTUDIO</h4>
            <div className="space-y-4 text-white/50 text-sm">
              <p className="flex items-start gap-3 italic">
                <MapPin size={18} className="shrink-0 text-brand-mint" />
                Calle 93 13-42, <br /> Oficina 406, Bogotá.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 bg-brand-mint text-brand-deep rounded-2xl flex items-center justify-center shadow-2xl transition-transform hover:scale-105"
            >
              <ArrowUp size={24} />
            </button>
            <div className="text-right">
              <p className="text-xs text-white/20 font-bold uppercase tracking-[0.3em]">
                &copy; 2026 TUTTOCORPO STUDIO
              </p>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/10 uppercase tracking-[0.6em] font-bold">
            Precision • Control • Harmony
          </p>
        </div>
      </div>
    </footer>
  )
}
