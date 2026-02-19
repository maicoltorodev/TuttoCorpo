'use client'

import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-brand-light overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="container mx-auto relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Contenido */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left reveal-up stagger-1">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/40 px-5 py-2 rounded-full mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-brand-gray/80">
              Pilates Studio Boutique
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-brand-gray mb-6 leading-[0.9] tracking-tighter reveal-up stagger-2">
            Eleva tu <br />
            <span className="font-serif text-brand-purple">TuttoCorpo.</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-500 mb-10 max-w-xl leading-relaxed reveal-up stagger-3">
            Donde la precisión técnica se encuentra con el diseño contemporáneo para redefinir tu bienestar.
          </p>

          <div className="w-full sm:w-auto">
            <a href="#reservas" className="btn-brand-primary group w-full sm:w-auto flex items-center justify-center gap-3">
              Reservar ahora <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Imagen Principal */}
        <div className="lg:col-span-5 relative w-full">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[4rem] md:rounded-[6rem] overflow-hidden shadow-2xl border-[15px] border-white">
              <Image
                src="/nosotros.jpg"
                alt="TuttoCorpo Studio"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent" />
            </div>

            {/* Float Badge - Top Right */}
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 hidden md:flex flex-col items-center gap-2 reveal-up stagger-4">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest text-center leading-tight">Elite <br /> Studio</span>
            </div>

            {/* Logo - Bottom Right */}
            <div className="absolute bottom-8 right-8 w-24 h-24 reveal-up stagger-4">
              <div className="relative w-full h-full animate-float">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300 pointer-events-none">
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  )
}
