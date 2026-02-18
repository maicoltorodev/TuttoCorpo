import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ClassSchedule from '@/components/ClassSchedule'
import BookingSection from '@/components/BookingSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ClassSchedule />
        <BookingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
