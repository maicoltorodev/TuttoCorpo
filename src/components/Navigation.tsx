'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, LayoutDashboard } from 'lucide-react'

const NAV_LINKS = [
    { name: 'Inicio', href: '/', isSpecial: false },
    { name: 'Clases', href: '/#horarios', isSpecial: false },
    { name: 'Nosotros', href: '/#about', isSpecial: false },
    { name: 'Contacto', href: '/#contacto', isSpecial: false },
    { name: 'Reservas', href: '/#reservas', isSpecial: true },
    { name: 'Administrar', href: '/admin', isSpecial: false },
] as const

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 50
            if (window.scrollY > threshold) {
                if (!isScrolled) setIsScrolled(true)
            } else {
                if (isScrolled) setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isScrolled])

    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 
                    ${isScrolled ? 'py-4' : 'py-6'}`}
            >
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className={`relative grid grid-cols-3 items-center transition-all duration-300 rounded-[2.5rem] border nav-animated-gradient shadow-2xl
                        ${isScrolled
                            ? 'border-white/10 px-8 py-3'
                            : 'border-white/20 px-6 py-5'}`}>

                        {/* Left: Logo */}
                        <div className="flex justify-start">
                            <Link href="/" className="relative w-10 h-10 bg-white rounded-xl p-1.5 transition-transform hover:scale-105">
                                <Image src="/logo.png" alt="TuttoCorpo" fill className="object-contain p-1" />
                            </Link>
                        </div>

                        {/* Center: Brand Name */}
                        <div className="flex justify-center">
                            <Link href="/">
                                <span className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tighter">TuttoCorpo</span>
                            </Link>
                        </div>

                        {/* Right: Menu & Links */}
                        <div className="flex justify-end items-center gap-6">
                            {/* Desktop Links (Optional, if you want them visible) */}
                            <div className="hidden lg:flex items-center gap-6">
                                {NAV_LINKS.filter(l => l.isSpecial).map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-[10px] font-bold uppercase tracking-widest bg-brand-mint text-brand-deep px-5 py-2.5 rounded-full hover:bg-white transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Menu Icon */}
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="w-12 h-12 flex items-center justify-center text-white bg-white/10 rounded-full hover:bg-white/20 transition-all"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-brand-deep flex flex-col">
                    <div className="p-8 flex justify-between items-center border-b border-white/5">
                        <span className="text-2xl font-serif font-bold text-white tracking-tighter">TuttoCorpo</span>
                        <button
                            onClick={closeMobileMenu}
                            className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col justify-center px-10 gap-8">
                        {NAV_LINKS.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={`text-4xl font-serif font-bold flex items-center gap-4 ${link.isSpecial ? 'text-brand-mint italic underline decoration-white/20' : 'text-white/40 hover:text-white'
                                        }`}
                                >
                                    {link.isSpecial && <LayoutDashboard className="w-8 h-8" />}
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="p-10 border-t border-white/5 text-center">
                        <p className="text-white/20 text-[10px] uppercase tracking-[0.4em]">Premium Pilates • 2026</p>
                    </div>
                </div>
            )}
        </>
    )
}
