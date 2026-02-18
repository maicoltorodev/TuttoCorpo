'use client'

import { ArrowRight, Sparkles, Star, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useRef } from 'react'

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const yImage = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center bg-brand-light overflow-hidden px-6 pt-32 pb-20"
    >
      {/* 🔮 Fondo Orgánico Dinámico */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[120%] aspect-square bg-brand-gradient opacity-[0.07] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[100%] aspect-square bg-brand-mint/10 rounded-full blur-[100px]"
        />
        {/* Logo sutil gigante de fondo para mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] aspect-square opacity-[0.015] md:hidden">
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center"
      >
        {/* 📝 Contenido Principal */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/40 px-5 py-2 rounded-full mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-brand-gray/80">
              Pilates Studio Boutique
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-brand-gray mb-6 leading-[0.9] tracking-tighter"
          >
            Eleva tu <br />
            <span className="font-serif text-animated-brand">TuttoCorpo.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium"
          >
            Fusionamos el arte del movimiento con la precisión técnica para crear una experiencia de bienestar sin precedentes en 2026.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center lg:items-start"
          >
            <button className="btn-brand-primary group relative overflow-hidden px-10 py-5 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                Agendar Clase <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* 🖼️ Composición Visual "Wow" */}
        <div className="lg:col-span-5 relative w-full mt-12 lg:mt-0">
          <motion.div
            style={{ y: yImage }}
            className="relative"
          >
            {/* Tarjeta de imagen principal con mascara premium */}
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-[4rem] md:rounded-[6rem] overflow-hidden shadow-2xl border-[12px] md:border-[20px] border-white group"
            >
              <Image
                src="/nosotros.jpg"
                alt="Studio"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl z-20 flex flex-col items-center gap-2 border border-slate-100"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-purple/20">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-brand-gray uppercase tracking-widest text-center leading-tight">Diseño Pro <br /> 2026</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-6 md:-bottom-12 md:-left-12 bg-white/90 backdrop-blur-xl p-5 md:p-8 rounded-[2.5rem] shadow-2xl z-20 flex items-center gap-4 border border-white/50"
            >
              <div className="text-right">
                <p className="text-2xl md:text-3xl font-extrabold text-brand-purple tracking-tighter">100%</p>
                <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Atención Manual</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de Scroll sutil */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300 md:hidden"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Descubrir</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
