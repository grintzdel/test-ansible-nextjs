import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="bg-[#A0F1BD]">
      <div className="container mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-10 p-6 md:flex-row md:gap-15 md:px-8 md:py-12 lg:gap-20 lg:px-10 lg:py-25">
        <div className="flex max-w-[691px] flex-col gap-6">
          <h1 className="text-[80px] tracking-tighter text-[#2E4F21]">Financial Clarity You Can Trust</h1>
          <p className="tracking-[-0.8px] text-[#2E4F21]">
            Trusted financial guidance for every stage of life and business since 1987.
          </p>
          <Link href="/" className="mt-5 w-fit rounded-full bg-[#2E4F21] p-3 text-white">
            Connect with our experts
          </Link>
        </div>
        <Image
          src="/image-hero-section.svg"
          alt="Hero section illustration"
          width={800}
          height={600}
          className="aspect-square lg:max-w-[429px]"
        />
      </div>
    </section>
  )
}
