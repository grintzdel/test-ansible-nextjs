"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full flex items-center justify-between px-8 py-4"
      style={{ backgroundColor: "#A0F1BD" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/noble-finances-logo.svg"
          alt="Noble Finances"
          width={132.28}
          height={15.12}
          priority
        />
      </Link>

      {/* Navigation et Bouton */}
      <div className="flex items-center">
        {/* Services */}
        <span
          className="text-[12px] font-medium"
          style={{ color: "#2E4F21" }}
        >
          Services
        </span>

        {/* Gap de 20px */}
        <div style={{ width: "20px" }} />

        {/* Bouton Book an appointment */}
        <button
          className="flex items-center justify-center text-white font-medium text-[12px]"
          style={{
            backgroundColor: "#2E4F21",
            width: "142px",
            height: "37px",
            borderRadius: "18.5px",
          }}
        >
          Book an appointment
        </button>
      </div>
    </header>
  );
}
