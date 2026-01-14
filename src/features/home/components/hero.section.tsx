import React from "react";
import Link from "next/link";
import Image from "next/image";

export const HeroSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="bg-[#A0F1BD]">
        <div className="container max-w-[1280px] mx-auto flex flex-col md:flex-row gap-10 justify-between items-center p-6 md:py-12 md:px-8 lg:py-25 lg:px-10 md:gap-15 lg:gap-20">
            <div className="flex flex-col gap-6 max-w-[691px]">
                <h1 className="text-[80px] tracking-tighter text-[#2E4F21]">Financial Clarity You Can Trust</h1>
                <p className="text-[#2E4F21] tracking-[-0.8px]">Trusted financial guidance for every stage of life and business since 1987.</p>
                <Link href="/" className="mt-5 p-3 rounded-full bg-[#2E4F21] w-fit text-white">Connect with our experts</Link>
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
  );
}
