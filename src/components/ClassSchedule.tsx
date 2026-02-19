'use client'

import { Clock, Zap, ArrowRight, Activity } from 'lucide-react'

const CLASSES_DATA = [
  {
    name: 'Pilates Core',
    time: '07:00 AM',
    level: 'Intermedio',
    duration: '55 min',
    spots: 5,
    bg: 'bg-[#F9F7FF]',
    accent: 'bg-brand-purple text-white',
    border: 'border-brand-purple/20',
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
    bg: 'bg-[#F4FBFA]',
    accent: 'bg-brand-mint text-brand-deep',
    border: 'border-brand-mint/30',
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
    bg: 'bg-[#F0F7FF]',
    accent: 'bg-blue-500 text-white',
    border: 'border-blue-100',
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
    bg: 'bg-[#FFF8F3]',
    accent: 'bg-orange-500 text-white',
    border: 'border-orange-100',
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
    bg: 'bg-[#FFF5F8]',
    accent: 'bg-pink-500 text-white',
    border: 'border-pink-100',
    text: 'text-pink-700',
    icon: <Activity className="w-5 h-5" />,
    isLive: false
  },
] as const

export default function ClassSchedule() {
  return (
    <section id="horarios" className="py-32 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple">Reserva tu Espacio</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-deep mb-8 tracking-tighter">
            Nuestras <span className="font-serif italic text-brand-purple">Sesiones</span>
          </h2>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Grupos exclusivos de máximo 10 personas para garantizar resultados y seguridad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLASSES_DATA.map((item, i) => (
            <a
              key={i}
              href="#reservas"
              className={`group relative block overflow-hidden rounded-[3rem] p-8 border ${item.border} ${item.bg} hover:bg-white hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-300 reveal-up stagger-${(i % 4) + 1}`}
            >
              {item.isLive && (
                <div className="absolute top-8 right-8 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm z-20">
                  <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">En Vivo</span>
                </div>
              )}

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${item.accent}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Inicio</p>
                    <p className="text-xl font-bold font-display text-brand-deep">{item.time}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight text-brand-deep">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${item.bg} ${item.text} border ${item.border}`}>
                      {item.level}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">&bull; {item.duration}</span>
                  </div>
                </div>

                <div className="mt-auto space-y-6">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full ${item.accent}`}>
                    {item.spots} Cupos Libres
                  </span>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-deep group-hover:text-brand-purple transition-colors">Agendar</span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-slate-100 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
