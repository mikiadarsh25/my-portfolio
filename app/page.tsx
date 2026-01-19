"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ParticleCanvas } from "@/components/particle-canvas"
import { IntroLoader } from "@/components/intro-loader"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { WorkSection } from "@/components/sections/work-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState("home")
  
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    home: homeRef,
    about: aboutRef,
    work: workRef,
    contact: contactRef,
  }

  const navigateToSection = (section: string) => {
    const ref = sectionRefs[section]
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Track current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "work", ref: workRef },
        { id: "contact", ref: contactRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop
          if (scrollPosition >= offsetTop) {
            setCurrentSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen bg-black cursor-none md:cursor-none">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Intro loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Particle background */}
            <ParticleCanvas />

            {/* Navigation */}
            <Navigation
              currentSection={currentSection}
              onNavigate={navigateToSection}
            />

            {/* Sections */}
            <div ref={homeRef}>
              <HeroSection onNavigate={navigateToSection} />
            </div>
            
            <div ref={aboutRef}>
              <AboutSection />
            </div>
            
            <div ref={workRef}>
              <WorkSection />
            </div>
            
            <div ref={contactRef}>
              <ContactSection />
            </div>

            {/* Noise overlay */}
            <div
              className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Vignette effect */}
            <div
              className="fixed inset-0 pointer-events-none z-[99]"
              style={{
                background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
