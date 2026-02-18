'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Target, Heart } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Método Científico',
      desc: 'Basamos cada movimiento en la biomecánica para proteger y fortalecer tu estructura ósea.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Salud Integral',
      desc: 'No solo entrenas tu cuerpo, cultivas una mente presente y enfocada en el hoy.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Atención 1 a 1',
      desc: 'Nuestros instructores certificados se adaptan a tu ritmo y nivel de condición física.'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-mint rounded-full opacity-20 blur-2xl" />
            <div className="relative aspect-[4/3] md:aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
              <img
                src="/estudio.jpg"
                alt="TuttoCorpo Studio Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elemento flotante decorativo */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
              <p className="text-brand-purple font-display font-bold text-2xl">10+</p>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Años de Exp.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-deep mb-6 tracking-tight leading-tight">
              Bienestar a través del <br />
              <span className="text-brand-purple font-serif italic text-5xl md:text-7xl">Movimiento</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
              Más que ejercicio, es el arte de controlar tu cuerpo. En TuttoCorpo diseñamos una atmósfera de calma para tu transformación.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 md:gap-5 items-center p-4 rounded-3xl hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-100"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-deep">{f.title}</h4>
                    <p className="text-sm text-slate-500 line-clamp-1 md:line-clamp-none">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
