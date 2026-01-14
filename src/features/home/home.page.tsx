import CallToActionSection from '@/features/home/components/call-to-action.section'
import { HeroSection } from '@/features/home/components/hero.section'
import { TextTagImageSection } from '@/features/home/components/text-tag-image.section'
import React from 'react'

export default function HomePage() {
  return (
    <React.Fragment>
      <HeroSection />
      <CallToActionSection />
      <TextTagImageSection />
    </React.Fragment>
  )
}
