'use client'

import { useRouter } from 'next/navigation'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import PainPoints from '@/components/PainPoints'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  const router = useRouter()
  const goToEarlyAccess = () => router.push('/early-access')

  return (
    <>
      <Nav onCtaClick={goToEarlyAccess} />
      <main>
        <Hero onCtaClick={goToEarlyAccess} />
        <SocialProof count={120} />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Pricing onCtaClick={goToEarlyAccess} />
        <FinalCTA onCtaClick={goToEarlyAccess} />
      </main>
      <Footer />
    </>
  )
}
