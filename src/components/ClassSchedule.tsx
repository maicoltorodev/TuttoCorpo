'use client'

import { motion, Variants } from 'framer-motion'
import { Clock, Users, Zap, ArrowRight, Activity } from 'lucide-react'

export default function ClassSchedule() {
  const classes = [
    {
      name: 'Pilates Core',
      time: '07:00 AM',
      level: 'Intermedio',
      duration: '55 min',
      spots: 5,
      color: 'purple',
      bg: 'bg-[#F9F7FF]',
      accent: 'bg-brand-purple text-white',
      border: 'border-brand-purple/25',
      text: 'text-brand-purple',
      icon: <Zap className="w-5 h-5" />,
      isLive: false
    },
    {
      name: 'Reformer Flow',
      time: '08:30 AM',
      level: 'Avanzado',
      duration: '50 min',
      spots: 3,
      color: 'mint',
      bg: 'bg-[#F4FBFA]',
      accent: 'bg-brand-mint text-brand-deep',
      border: 'border-brand-mint/40',
      text: 'text-emerald-700',
      icon: <Activity className="w-5 h-5" />,
      isLive: true
    },
    {
      name: 'Mat Precision',
      time: '10:00 AM',
      level: 'Todos',
      duration: '60 min',
      spots: 8,
      color: 'blue',
      bg: 'bg-[#F0F7FF]',
      accent: 'bg-blue-500 text-white',
      border: 'border-blue-200',
      text: 'text-blue-700',
      icon: <Zap className="w-5 h-5" />,
      isLive: false
    },
    {
      name: 'Power Tower',
      time: '05:00 PM',
      level: 'Avanzado',
      duration: '55 min',
      spots: 2,
      color: 'orange',
      bg: 'bg-[#FFF8F3]',
      accent: 'bg-orange-500 text-white',
      border: 'border-orange-200',
      text: 'text-orange-700',
      icon: <Zap className="w-5 h-5" />,
      isLive: false
    },
    {
      name: 'Core Recovery',
      time: '06:30 PM',
      level: 'Inicial',
      duration: '45 min',
      spots: 10,
      color: 'pink',
      bg: 'bg-[#FFF5F8]',
      accent: 'bg-pink-500 text-white',
      border: 'border-pink-200',
      text: 'text-pink-700',
      icon: <Activity className="w-5 h-5" />,
      isLive: false
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="horarios" className="py-32 bg-brand-light relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-mint/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 px-4 py-2 rounded-full mb-6"
          >
            <Clock className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple">Reserva tu Espacio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-brand-deep mb-8 tracking-tighter"
          >
            Nuestras <span className="font-serif italic text-brand-purple">Sesiones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Diseñamos cada clase para desafiar tu cuerpo y calmar tu mente. Grupos exclusivos de máximo 10 personas.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {classes.map((c, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
              className={`relative overflow-hidden group cursor-pointer rounded-[3.5rem] p-8 transition-all duration-500 border ${c.border} ${c.bg} hover:shadow-[0_40px_80px_-15px_rgba(36,18,68,0.12)] hover:bg-white hover:border-brand-purple/40`}
            >
              {c.isLive && (
                <div className="absolute top-8 right-8 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-red-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">En Vivo</span>
                </div>
              )}

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-5 mb-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${c.accent}`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">Inicio</p>
                    <p className="text-2xl font-bold font-display text-brand-deep tracking-tight">{c.time}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-3 tracking-tighter text-brand-deep group-hover:text-brand-purple transition-colors">{c.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${c.bg} ${c.text} border ${c.border.replace('/10', '/30')}`}>
                      {c.level}
                    </span>
                    <span className="text-slate-600 text-sm font-medium">&bull; {c.duration}</span>
                  </div>
                </div>

                <div className="mt-auto space-y-8">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm font-bold ${c.accent}`}>
                      {c.spots} Cupos Libres
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-deep/80 group-hover:text-brand-purple transition-all duration-300">
                      Reservar Clase
                    </span>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-1 bg-white shadow-md border border-slate-100 text-brand-purple group-hover:bg-brand-purple group-hover:text-white">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent blob on hover */}
              <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${c.bg}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
