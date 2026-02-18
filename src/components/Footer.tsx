'use client'

import Image from 'next/image'
import { Mail, Instagram, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-footer-gradient text-white pt-32 pb-12 relative overflow-hidden">
      {/* Elemento decorativo detrás */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-mint/5 rounded-full blur-[100px]" />


      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-6 mb-8 group">
              <div className="relative w-32 h-32 bg-white rounded-[2rem] p-4 shadow-xl transition-transform group-hover:scale-105">
                <Image src="/logo.png" alt="Logo Footer" fill className="object-contain p-2" />
              </div>
              <span className="text-4xl font-serif font-bold tracking-tight text-animated-brand">
                TuttoCorpo
              </span>




            </a>

            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
              El estudio de Pilates de referencia para quienes buscan precisión,
              profesionalismo y bienestar real.
            </p>
          </div>

          <div>
            <h4 className="text-brand-mint font-bold uppercase tracking-widest text-sm mb-8">Contacto</h4>
            <div className="space-y-4 text-slate-300">
              <a href="#" className="flex items-center gap-3 hover:text-brand-mint transition-colors">
                <Instagram size={20} /> @tuttocorpo.pilates
              </a>
              <a href="mailto:hola@tuttocorpo.com" className="flex items-center gap-3 hover:text-brand-mint transition-colors">
                <Mail size={20} /> hola@tuttocorpo.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0" />
                <span>Calle de la Armonía, 123 <br /> Ciudad de Bienestar</span>
              </div>
            </div>
          </div>

          <div className="text-right flex flex-col items-end justify-between">
            <button
              onClick={scrollToTop}
              className="bg-brand-purple hover:bg-brand-purple-dark p-4 rounded-2xl transition-all hover:-translate-y-2 shadow-lg"
            >
              <ArrowUp size={24} />
            </button>
            <div className="mt-8">
              <p className="text-sm text-slate-500 font-medium">
                © 2026 TuttoCorpo <br /> Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600 uppercase tracking-[0.5em]">
            Diseño & Movimiento en Armonía
          </p>
        </div>
      </div>
    </footer>
  )
}
