'use client'

import { motion } from 'framer-motion'
import {
    Users,
    Calendar,
    Settings,
    Search,
    MoreHorizontal,
    Plus,
    ArrowLeft,
    LayoutDashboard,
    CheckCircle2,
    Clock,
    ExternalLink
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('bookings')

    const bookings = [
        { id: 1, name: 'María García', class: 'Pilates Core', time: '07:00 AM', date: 'Hoy', status: 'Confirmado' },
        { id: 2, name: 'Carlos Ruíz', class: 'Reformer Flow', time: '08:30 AM', date: 'Hoy', status: 'Pendiente' },
        { id: 3, name: 'Elena Beltrán', class: 'Mat Precision', time: '10:00 AM', date: 'Mañana', status: 'Confirmado' },
        { id: 4, name: 'Andrés Sosa', class: 'Power Tower', time: '05:00 PM', date: 'Mañana', status: 'Confirmado' },
        { id: 5, name: 'Lucía Méndez', class: 'Core Recovery', time: '06:30 PM', date: '21 Feb', status: 'Cancelado' },
    ]

    const classes = [
        { name: 'Pilates Core', instructor: 'Ana S.', capacity: '10/10', status: 'Lleno' },
        { name: 'Reformer Flow', instructor: 'Marco P.', capacity: '8/10', status: 'Disponible' },
        { name: 'Mat Precision', instructor: 'Ana S.', capacity: '5/10', status: 'Disponible' },
    ]

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
            {/* Sidebar Desktop */}
            <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6 z-20">
                <Link href="/" className="flex items-center gap-3 mb-10 px-2 transition-transform hover:scale-105">
                    <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white font-bold text-xl">T</div>
                    <span className="font-display font-bold text-xl tracking-tight text-brand-deep">Admin Panel</span>
                </Link>

                <nav className="space-y-1">
                    {[
                        { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
                        { id: 'bookings', icon: <Users size={20} />, label: 'Reservas' },
                        { id: 'classes', icon: <Calendar size={20} />, label: 'Clases' },
                        { id: 'settings', icon: <Settings size={20} />, label: 'Ajustes' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === item.id
                                ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-brand-purple'
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto p-4 bg-brand-purple/5 rounded-2xl border border-brand-purple/10">
                    <p className="text-xs font-bold text-brand-purple uppercase tracking-widest mb-1">Tu Plan</p>
                    <p className="text-sm font-bold text-brand-deep mb-2">Premium Studio</p>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-purple h-full w-3/4" />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">75% de almacenamiento usado</p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-64 p-4 md:p-8 lg:p-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <Link href="/" className="lg:hidden inline-flex items-center gap-2 text-brand-purple font-bold mb-4">
                            <ArrowLeft size={16} /> Volver al sitio
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-deep tracking-tight">Gestión de Reservas</h1>
                        <p className="text-slate-500 mt-1">Monitorea y organiza las sesiones de tu estudio.</p>
                    </div>

                    <div className="flex gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Buscar cliente..."
                                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-all w-full md:w-64"
                            />
                        </div>
                        <button className="bg-brand-deep text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-deep/90 transition-all">
                            <Plus size={20} /> <span className="hidden md:inline">Nueva</span>
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {[
                        { label: 'Reservas Hoy', value: '24', trend: '+12%', color: 'purple' },
                        { label: 'Capacidad Media', value: '85%', trend: '+5%', color: 'mint' },
                        { label: 'Cancelaciones', value: '2', trend: '-15%', color: 'pink' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[140px]">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-3xl font-bold text-brand-deep leading-none">{stat.value}</h3>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tables/Lists */}
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden mb-24 lg:mb-0">
                    <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-50">
                        <h2 className="text-xl font-bold text-brand-deep">Próximas Sesiones</h2>
                        <button className="text-brand-purple hover:underline transition-all text-sm font-bold flex items-center gap-1">
                            Ver historial <ExternalLink size={14} />
                        </button>
                    </div>

                    <div className="overflow-x-auto w-full custom-scrollbar">
                        <div className="inline-block min-w-full align-middle">
                            <table className="min-w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-[0.1em]">
                                        <th className="px-6 md:px-8 py-5">Cliente</th>
                                        <th className="px-6 md:px-8 py-5">Clase</th>
                                        <th className="px-6 md:px-8 py-5">Horario</th>
                                        <th className="px-6 md:px-8 py-5">Estado</th>
                                        <th className="px-6 md:px-8 py-5 text-right whitespace-nowrap">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {bookings.map((booking) => (
                                        <tr key={booking.id} className="group hover:bg-slate-50/50 transition-all">
                                            <td className="px-6 md:px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-brand-purple/5 flex items-center justify-center font-bold text-brand-purple text-xs">
                                                        {booking.name.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-brand-deep whitespace-nowrap">{booking.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 md:px-8 py-5">
                                                <span className="text-slate-600 text-sm whitespace-nowrap">{booking.class}</span>
                                            </td>
                                            <td className="px-6 md:px-8 py-5">
                                                <div className="flex flex-col min-w-[80px]">
                                                    <span className="text-brand-deep font-bold text-sm">{booking.time}</span>
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{booking.date}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 md:px-8 py-5">
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full whitespace-nowrap ${booking.status === 'Confirmado' ? 'bg-emerald-50 text-emerald-600' :
                                                    booking.status === 'Pendiente' ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-400'
                                                    }`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="px-6 md:px-8 py-5 text-right">
                                                <button className="p-2 text-slate-300 hover:text-brand-purple transition-all rounded-lg hover:bg-white shadow-sm border border-transparent hover:border-slate-100">
                                                    <MoreHorizontal size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Action Bar Mobile */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-brand-deep text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-8 lg:hidden z-30">
                    <button onClick={() => setActiveTab('bookings')} className={activeTab === 'bookings' ? 'text-brand-mint' : ''}><Users size={24} /></button>
                    <button onClick={() => setActiveTab('classes')} className={activeTab === 'classes' ? 'text-brand-mint' : ''}><Calendar size={24} /></button>
                    <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center -mt-10 shadow-xl border-4 border-[#F8FAFC]"><Plus size={24} /></div>
                    <button onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'text-brand-mint' : ''}><LayoutDashboard size={24} /></button>
                    <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'text-brand-mint' : ''}><Settings size={24} /></button>
                </div>
            </main>

            {/* Decorative blobs */}
            <div className="fixed top-0 right-0 w-1/4 h-1/4 bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-0 w-1/4 h-1/4 bg-brand-mint/5 blur-[120px] pointer-events-none -z-10" />
        </div>
    )
}
