import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoFooter: React.FC = (): React.JSX.Element => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/footer-logo.svg" alt="Noble Finances" width={132.28} height={15.12} priority />
    </Link>
  )
}

export const Footer: React.FC = (): React.JSX.Element => {
  return (
    <footer className="flex h-50 flex-col gap-6 bg-[#2E4F21] p-6 md:h-100 md:flex-row md:p-10">
      <div className="flex w-1/2 flex-col justify-between">
        <LogoFooter />
        <div className="flex flex-col">
          <p className="font-bold text-white">Financial Clarity You Can Trust</p>
          <p className="text-[#D5E4D0]">Trusted financial guidance for every stage of life and business since 1987</p>
        </div>
      </div>
      <div className="flex w-1/2 flex-col justify-between">
        <div className="flex flex-row items-center gap-2.75">
          <ul>
            <li>
              <Link href="/" className="text-xs font-medium text-[#D5E4D0]">
                Services
              </Link>
            </li>
          </ul>
          <Link href="/" className="w-fit rounded-full bg-white p-3 text-xs text-[#2E4F21]">
            Book An Appointment
          </Link>
        </div>
        <p className="text-xs text-[#D5E4D0]">© 2025 All Rights Reserved</p>
      </div>
    </footer>
  )
}
