import { RepairSelectionProvider } from './context/RepairSelectionContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Brands from './components/Brands'
import WarrantyNotice from './components/WarrantyNotice'
import RepairForm from './components/RepairForm'
import HowItWorks from './components/HowItWorks'
import TechVisual from './components/TechVisual'
import WhyFixpoint from './components/WhyFixpoint'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <RepairSelectionProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Brands />
        <WarrantyNotice />
        <RepairForm />
        <HowItWorks />
        <TechVisual />
        <WhyFixpoint />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </RepairSelectionProvider>
  )
}
