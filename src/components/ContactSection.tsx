'use client'

import { Mail, MapPin, Phone, Instagram, Send } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contacto" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Info Side */}
          <div className="relative reveal-up stagger-1">
            <div className="inline-flex items-center gap-2 bg-brand-purple/10 px-4 py-2 rounded-full mb-8">
              <Send className="w-4 h-4 text-brand-purple" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple">Contáctanos</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-deep mb-8 tracking-tighter leading-none">
              ¿Tienes alguna <br />
              <span className="text-brand-purple font-serif italic">Pregunta?</span>
            </h2>

            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-md">
              Estamos aquí para ayudarte a comenzar tu viaje. Escríbenos o visítanos en nuestro estudio.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 reveal-up stagger-2">
                <div className="w-14 h-14 rounded-2xl bg-[#F9F7FF] flex items-center justify-center text-brand-purple shadow-sm border border-brand-purple/20">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Instagram</h4>
                  <p className="text-xl font-bold text-brand-deep">@tuttocorpo</p>
                </div>
              </div>

              <div className="flex items-start gap-6 reveal-up stagger-3">
                <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-gray shadow-sm border border-slate-200">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Ubicación</h4>
                  <p className="text-xl font-bold text-brand-deep">Calle 93 13-42, Oficina 406, Bogotá</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Side */}
          <div className="relative reveal-up stagger-2">
            <div className="min-h-[500px] bg-brand-deep rounded-[4rem] p-10 md:p-14 flex flex-col justify-between overflow-hidden relative shadow-2xl">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/20 blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-mint/20 blur-[100px]" />

              <div className="relative z-10">
                <Instagram className="w-12 h-12 text-brand-mint mb-8" />
                <h3 className="text-4xl font-serif text-white leading-tight mb-4">
                  Síguenos en nuestro <br />
                  <span className="italic">viaje diario.</span>
                </h3>
                <p className="text-white/40 text-lg">
                  Mira nuestras clases, consejos de bienestar y comunidad en Instagram.
                </p>
              </div>

              <a
                href="https://instagram.com/tuttocorpo"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 self-start bg-white text-brand-deep px-8 py-4 rounded-full font-bold hover:bg-brand-mint hover:text-brand-deep transition-all"
              >
                @tuttocorpo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
