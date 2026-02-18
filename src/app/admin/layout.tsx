import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Panel | TuttoCorpo',
    description: 'Gestión interna de TuttoCorpo Studio.',
    robots: {
        index: false,
        follow: false,
    },
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
