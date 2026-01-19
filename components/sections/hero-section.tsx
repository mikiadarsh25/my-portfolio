"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 border border-white/10 text-xs tracking-[0.3em] text-white/50 uppercase">
            Backend Software Engineer
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          <span className="block text-white">Adarsh</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white to-white/80">
            Prakash
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-white/40 tracking-wide">
            Building scalable APIs and event-driven systems with
          </p>
          <p className="text-lg md:text-xl text-white/60 tracking-wide">
            Node.js, TypeScript, AWS, and resilient data pipelines
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-12 md:gap-16 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">2+</div>
            <div className="text-xs tracking-[0.2em] text-white/40 uppercase mt-1">Years Exp</div>
          </div>
          <div className="w-[1px] h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">10k+</div>
            <div className="text-xs tracking-[0.2em] text-white/40 uppercase mt-1">Daily Users Served</div>
          </div>
          <div className="w-[1px] h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">60%</div>
            <div className="text-xs tracking-[0.2em] text-white/40 uppercase mt-1">Perf Lift</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex items-center justify-center gap-6"
        >
          <button
            onClick={() => onNavigate("work")}
            className="group relative px-8 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase overflow-hidden"
          >
            <span className="relative z-10">View Work</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="group px-8 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase hover:border-white/60 transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => onNavigate("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-6 md:left-12 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute top-24 right-6 md:right-12 w-16 h-16 border-r border-t border-white/10" />
      <div className="absolute bottom-24 left-6 md:left-12 w-16 h-16 border-l border-b border-white/10" />
      <div className="absolute bottom-24 right-6 md:right-12 w-16 h-16 border-r border-b border-white/10" />
    </section>
  )
}
