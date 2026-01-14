import { CaseStudySection } from '@/features/home/components/case-study.section'
import { HeroSection } from '@/features/home/components/hero.section'
import { TextTagImageSection } from '@/features/home/components/text-tag-image.section'
import React from 'react'

export default function HomePage() {
  return (
    <React.Fragment>
      <HeroSection />
      <TextTagImageSection />
      <CaseStudySection />
    </React.Fragment>
  )
}
