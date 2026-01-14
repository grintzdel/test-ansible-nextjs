import {HeroSection} from "@/features/home/components/hero.section";
import React from "react";
import {TextTagImageSection} from "@/features/home/components/text-tag-image.section";

export default function HomePage() {
  return (
  <React.Fragment>
      <HeroSection/>
      <TextTagImageSection/>
  </React.Fragment>
)
}