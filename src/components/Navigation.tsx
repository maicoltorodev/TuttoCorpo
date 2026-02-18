'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, Instagram, Globe, LayoutDashboard } from 'lucide-react'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Clases', href: '/#horarios' },
        { name: 'Nosotros', href: '/#about' },
        { name: 'Reservas', href: '/#reservas' },
        { name: 'Administrar', href: '/admin', isSpecial: true },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
                    ${isScrolled ? 'py-4 md:py-6 px-4 md:px-8' : 'py-0 md:py-6 px-0 md:px-8'}`}
            >
                <div className={`transition-all duration-700 ease-in-out 
                    ${isScrolled ? 'container mx-auto max-w-4xl' : 'w-full md:container md:mx-auto md:max-w-6xl'}`}>
                    <div
                        className={`relative flex items-center justify-center transition-all duration-700 ease-in-out bg-animated-brand border-white/20
                            ${isScrolled
                                ? 'p-4 rounded-[3rem] border min-h-[70px]'
                                : 'p-8 md:p-6 rounded-none md:rounded-[3rem] border-b md:border min-h-[120px] md:min-h-[80px]'
                            }`}
                    >
                        {/* Left Balancing Logo (Mobile Only) */}
                        <div className="absolute left-6 md:left-10 w-11 h-11 flex items-center justify-center bg-white rounded-full md:hidden overflow-hidden p-1.5 active:scale-90 transition-transform">
                            <div className="relative w-full h-full">
                                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                            </div>
                        </div>

                        <Link href="/" className={`font-serif font-bold tracking-tight text-white transition-all duration-700 
                            ${isScrolled
                                ? 'text-2xl md:text-3xl'
                                : 'text-5xl md:text-3xl'
                            }`}>
                            TuttoCorpo
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className={`hidden md:flex items-center gap-8 ml-12 transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-bold uppercase tracking-widest transition-all ${link.isSpecial
                                        ? 'bg-white text-brand-purple px-4 py-2 rounded-full hover:bg-brand-mint hover:text-white'
                                        : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="absolute right-6 md:right-10 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white transition-all bg-white/10 rounded-full md:hidden"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-brand-deep flex flex-col overflow-hidden"
                    >
                        {/* Background Decorative Elements */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-mint rounded-full blur-[120px] animate-pulse-slow" />
                            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-purple rounded-full blur-[120px] animate-pulse-slow" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
                                <Image src="/logo.png" alt="Watermark" fill className="object-contain scale-150 rotate-12" />
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="p-8 flex justify-between items-center border-b border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-serif font-bold text-white tracking-tighter">TuttoCorpo</span>
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-mint font-bold italic">Pilates Studio</span>
                                </div>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <div className="flex-1 flex flex-col justify-center px-12 gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                        key={link.name}
                                        className="relative group"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`text-5xl md:text-7xl font-serif font-bold transition-all tracking-tighter flex items-center gap-4 ${link.isSpecial ? 'text-brand-mint italic' : 'text-white/30 hover:text-white'
                                                }`}
                                        >
                                            {link.isSpecial && <LayoutDashboard className="w-8 h-8 md:w-12 md:h-12" />}
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-12 mt-auto border-t border-white/5 bg-black/20 backdrop-blur-md">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-4">
                                        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Reserva al Instante</p>
                                        <a href="#reservas" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center gap-3 text-white font-bold group">
                                            AGENDA TU CLASE <ArrowRight className="w-5 h-5 text-brand-mint transition-transform group-hover:translate-x-2" />
                                        </a>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-brand-purple transition-all cursor-pointer">
                                            <Instagram size={20} />
                                        </div>
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-brand-mint transition-all cursor-pointer">
                                            <Globe size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                    <p className="text-white/20 text-[9px] uppercase tracking-[0.5em] font-bold">Premium Pilates Experience &copy; 2026</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>



    )
}
