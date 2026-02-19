'use client'

import { ShieldCheck, Target, Heart } from 'lucide-react'
import Image from 'next/image'

const FEATURES = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Método Científico',
    desc: 'Movimientos basados en la biomecánica corporal.'
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Salud Integral',
    desc: 'Cultivamos una mente presente y enfocada.'
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Atención 1 a 1',
    desc: 'Adaptamos cada sesión a tu ritmo personal.'
  }
] as const

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual Column */}
          <div className="relative order-2 lg:order-1 reveal-up stagger-2">
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white">
              <Image
                src="/estudio.jpg"
                alt="TuttoCorpo Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 reveal-up stagger-1">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-deep mb-8 tracking-tighter leading-none">
                Bienestar <br />
                <span className="text-brand-purple font-serif italic">Consciente</span>
              </h2>

              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
                Más que ejercicio, es el arte de controlar tu cuerpo. Creamos una atmósfera de calma para tu transformación física y mental.
              </p>
            </div>

            <div className="space-y-6">
              {FEATURES.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 items-center p-5 rounded-[2rem] hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-100"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-deep leading-tight">{item.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
