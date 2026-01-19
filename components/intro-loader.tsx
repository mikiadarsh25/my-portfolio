"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroLoaderProps {
  onComplete: () => void
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [showStart, setShowStart] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setShowStart(true)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Glowing orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(100,100,255,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Counter */}
        <motion.div
          className="relative z-10 font-mono text-8xl md:text-9xl font-bold tracking-tighter"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white/90">{String(Math.min(Math.floor(progress), 100)).padStart(3, "0")}</span>
        </motion.div>

        {/* Progress bar */}
        <div className="relative z-10 mt-8 w-48 h-[2px] bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Start button */}
        <AnimatePresence>
          {showStart && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={onComplete}
              className="relative z-10 mt-12 group"
            >
              <div className="relative px-8 py-3 border border-white/30 text-white text-sm tracking-[0.3em] uppercase overflow-hidden">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  start
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Decorative elements */}
        <div className="absolute bottom-8 left-8 font-mono text-xs text-white/30">
          <div>LOADING EXPERIENCE</div>
        </div>

        <div className="absolute bottom-8 right-8 font-mono text-xs text-white/30">
          <div>WEBGL / THREE.JS</div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-white/20" />
        <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-white/20" />
        <div className="absolute bottom-24 left-8 w-8 h-8 border-l border-b border-white/20" />
        <div className="absolute bottom-24 right-8 w-8 h-8 border-r border-b border-white/20" />

        {/* Sound toggle hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-white/40 text-xs tracking-wider">For the best experience</p>
          <p className="text-white/60 text-xs tracking-wider mt-1">Turn your sound on / Switch to desktop</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
