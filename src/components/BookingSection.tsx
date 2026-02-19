'use client'

import { useState, useCallback } from 'react'
import { Calendar, User, Phone, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'

type Step = 'form' | 'select-class' | 'loading' | 'success'

const CLASSES = [
  'Pilates Core',
  'Reformer Flow',
  'Mat Precision',
  'Power Tower',
  'Core Recovery'
]

export default function BookingSection() {
  const [step, setStep] = useState<Step>('form')
  const [cedula, setCedula] = useState('')
  const [selectedClass, setSelectedClass] = useState('')

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('select-class')
  }

  const handleConfirm = () => {
    if (!selectedClass) return
    setStep('loading')
    // Simulación de API
    setTimeout(() => setStep('success'), 1500)
  }

  return (
    <section id="reservas" className="py-32 bg-brand-deep relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16 reveal-up stagger-1">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Haz tu <span className="font-serif italic text-brand-mint">Reserva</span>
            </h2>
            <p className="text-xl text-white/50 max-w-xl mx-auto">
              Gestiona tu sesión de forma rápida y sencilla.
            </p>
          </div>

          <div className="card-premium max-w-xl mx-auto border-none bg-white/5 backdrop-blur-2xl p-8 md:p-12 reveal-up stagger-2">
            {step === 'form' && (
              <form onSubmit={handleNext} className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-mint">Documento de Identidad (Cédula)</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 w-6 h-6" />
                    <input
                      required
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Ingresa tu número de cédula"
                      className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-14 pr-6 text-white text-lg focus:outline-none focus:border-brand-mint focus:ring-4 focus:ring-brand-mint/10 transition-all font-sans"
                      value={cedula}
                      onChange={e => setCedula(e.target.value.replace(/\D/g, ''))}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-brand-primary w-full py-5 rounded-3xl bg-brand-mint text-brand-deep hover:bg-white hover:text-brand-deep border-none flex items-center justify-center gap-3 text-lg font-bold transition-all shadow-none"
                >
                  Siguiente <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}

            {step === 'select-class' && (
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-mint">Selecciona tu Sesión</label>
                  <div className="grid grid-cols-1 gap-3">
                    {CLASSES.map((cls) => (
                      <button
                        key={cls}
                        onClick={() => setSelectedClass(cls)}
                        className={`w-full py-4 px-6 rounded-2xl border transition-all text-left font-bold ${selectedClass === cls
                          ? 'bg-brand-mint text-brand-deep border-brand-mint shadow-lg shadow-brand-mint/20'
                          : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                          }`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep('form')}
                    className="flex-1 py-5 rounded-3xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    disabled={!selectedClass}
                    onClick={handleConfirm}
                    className={`flex-[2] py-5 rounded-3xl font-bold flex items-center justify-center gap-3 transition-all ${selectedClass
                      ? 'bg-brand-mint text-brand-deep hover:bg-white'
                      : 'bg-white/10 text-white/20 cursor-not-allowed'
                      }`}
                  >
                    Confirmar Reserva <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 'loading' && (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <Loader2 className="w-12 h-12 text-brand-mint animate-spin mb-4" />
                <p className="text-white font-bold tracking-widest font-sans">PROCESANDO RESERVA...</p>
              </div>
            )}

            {step === 'success' && (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-24 h-24 bg-brand-mint/20 rounded-full flex items-center justify-center text-brand-mint mb-8">
                  <CheckCircle2 size={56} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">¡Reserva Exitosa!</h3>
                <p className="text-xl text-white/50 mb-10 font-sans">Has reservado <strong>{selectedClass}</strong> para el titular de la cédula <strong>{cedula}</strong>.</p>
                <button
                  onClick={() => {
                    setStep('form')
                    setCedula('')
                    setSelectedClass('')
                  }}
                  className="text-brand-mint font-bold uppercase tracking-widest hover:text-white transition-colors font-sans text-sm"
                >
                  Hacer otra reserva
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
