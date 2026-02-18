'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Calendar, CheckCircle2, Loader2, Fingerprint, ArrowRight } from 'lucide-react'

export default function BookingSection() {
  const [cedula, setCedula] = useState('')
  const [selectedClass, setSelectedClass] = useState('')
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [status, setStatus] = useState<'idle' | 'loading'>('idle')

  const classes = [
    { name: 'Pilates Core', time: '07:00' },
    { name: 'Reformer Flow', time: '08:30' },
    { name: 'Mat Precision', time: '10:00' },
    { name: 'Power Tower', time: '17:00' },
    { name: 'Core Recovery', time: '18:30' },
  ]

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    if (!cedula) return
    setStatus('loading')

    setTimeout(() => {
      setStatus('idle')
      setStep(2)
    }, 1000)
  }

  const handleBook = (className: string) => {
    setSelectedClass(className)
    setStatus('loading')

    setTimeout(() => {
      setStatus('idle')
      setStep(3)
    }, 1500)
  }

  return (
    <section id="reservas" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient opacity-20" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Agenda tu Clase</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Gestiona tu bienestar en segundos con nuestro sistema inteligente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium max-w-2xl mx-auto border-t-8 border-t-brand-purple relative overflow-hidden min-h-[400px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {step === 3 ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="text-center py-8"
                >
                  <div className="w-24 h-24 bg-brand-gradient text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-brand-gray mb-4">¡Listo!</h3>
                  <p className="text-brand-purple text-xl font-bold mb-2">Tu clase de {selectedClass} ha sido agendada.</p>
                  <p className="text-slate-500 mb-10">Te hemos enviado un recordatorio a tu WhatsApp.</p>
                  <button
                    onClick={() => {
                      setStep(1)
                      setCedula('')
                      setSelectedClass('')
                    }}
                    className="btn-brand-primary"
                  >
                    Agendar otra clase
                  </button>
                </motion.div>
              ) : step === 1 ? (
                <motion.form
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleVerify}
                  className="space-y-8 p-4"
                >
                  <div className="text-center mb-10">
                    <Fingerprint className="w-16 h-16 text-brand-purple mx-auto mb-4 opacity-20" />
                    <h3 className="text-2xl font-bold text-brand-gray">Identifícate</h3>
                    <p className="text-slate-500">Ingresa tu cédula para comenzar</p>
                  </div>

                  <div className="relative group">
                    <Fingerprint className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-purple w-6 h-6 group-focus-within:text-brand-mint transition-colors" />
                    <input
                      type="text"
                      placeholder="Número de Cédula"
                      value={cedula}
                      onChange={(e) => setCedula(e.target.value)}
                      className="input-premium pl-16 py-6 text-xl"
                      required
                      autoFocus
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading' || !cedula}
                    className="w-full btn-brand-primary flex items-center justify-center gap-4 text-xl py-6"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-8 h-8 animate-spin" />
                    ) : (
                      <>
                        Verificar <ArrowRight className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="bg-brand-mint/10 p-8 rounded-[2.5rem] border border-brand-mint/20">
                    <h3 className="text-2xl font-serif font-bold text-brand-purple text-center mb-2">¡Hola! ✨</h3>
                    <p className="text-brand-gray text-center font-medium">Elije la clase que deseas agendar:</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {classes.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => handleBook(c.name)}
                        disabled={status === 'loading'}
                        className="p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-purple hover:shadow-xl transition-all text-left group flex flex-col gap-1"
                      >
                        <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">{c.time}</span>
                        <span className="text-lg font-bold text-brand-gray group-hover:text-brand-purple transition-colors">{c.name}</span>
                        {status === 'loading' && selectedClass === c.name && (
                          <Loader2 className="w-4 h-4 animate-spin mt-2 text-brand-purple" />
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(1)}
                    className="w-full text-xs font-bold text-slate-400 hover:text-brand-purple transition-colors uppercase tracking-[0.2em] text-center"
                  >
                    Cerrar sesión
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>


        </div>
      </div>
    </section>
  )
}

