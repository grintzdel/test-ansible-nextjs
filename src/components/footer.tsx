import React from "react";
import Image from "next/image";
import Link from "next/link";

const LogoFooter: React.FC = (): React.JSX.Element => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/footer-logo.svg"
        alt="Noble Finances"
        width={132.28}
        height={15.12}
        priority
      />
    </Link>
  );
};

export const Footer: React.FC = (): React.JSX.Element => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 bg-[#2E4F21] p-6 md:p-10 h-50 md:h-100">
      <div className="w-1/2 flex flex-col justify-between">
        <LogoFooter />
        <div className="flex flex-col">
          <p className="font-bold text-white">
            Financial Clarity You Can Trust
          </p>
          <p className="text-[#D5E4D0]">
            Trusted financial guidance for every stage of life and business
            since 1987
          </p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div className="flex flex-row gap-2.75 items-center">
          <ul>
            <li>
              <Link href="/" className="text-[#D5E4D0] font-medium text-xs">
                Services
              </Link>
            </li>
          </ul>
          <Link
            href="/"
            className="p-3 rounded-full text-[#2E4F21] w-fit bg-white"
          >
            Book An Appointment
          </Link>
        </div>
        <p className="text-xs text-[#D5E4D0]">© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};
