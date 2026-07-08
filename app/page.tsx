"use client"

import { HomeHero } from "@/components/home-hero"
import { HomeResults } from "@/components/home-results"
import { HomeServices } from "@/components/home-services"
import { BusinessSections } from "@/components/business-sections"
import { HomeWhoFor } from "@/components/home-who-for"
import { SiteShell } from "@/components/site-shell"
import { ConversionBar } from "@/components/conversion-bar"

export default function HomePage() {
  return (
    <SiteShell pageName="Home" heroMode>

      {/* 1. HERO — animated scroll-driven intro */}
      <HomeHero />

      {/* 2. RESULTS — key numbers + case studies */}
      <HomeResults />

      {/* 3. SERVICES — Building Strategy · Delivering Key Projects · Leading Transformation */}
      <HomeServices />

      {/* 4. WHAT CAN YOU ACHIEVE — business sections (possible results) */}
      <BusinessSections />

      {/* 5. CONVERSION BAR */}
      <ConversionBar />

      {/* 6. WHO IS PROLOGUE FOR — branching: in-group (FAQ) vs. not-in-group (blog + Vector) */}
      <HomeWhoFor />

      {/* Footer is rendered by SiteShell */}

    </SiteShell>
  )
}
