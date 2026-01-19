"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Volume2, VolumeX } from "lucide-react"

interface NavigationProps {
  currentSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "work", label: "Work", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
]

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
            <span className="font-mono text-sm">AP</span>
          </div>
          <div className="hidden md:block">
            <div className="text-xs tracking-[0.2em] text-white/60">ADARSH PRAKASH</div>
            <div className="text-xs tracking-[0.15em] text-white/40">BACKEND ENGINEER</div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors ${
                currentSection === item.id ? "text-white" : "text-white/40 hover:text-white/80"
              }`}
            >
              <span className="font-mono text-[10px] text-white/30">{item.num}</span>
              <span>{item.label}</span>
              <span
                className={`w-0 h-[1px] bg-white transition-all duration-300 ${
                  currentSection === item.id ? "w-4" : "group-hover:w-2"
                }`}
              />
            </button>
          ))}
        </motion.nav>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-4"
        >
          {/* Sound toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white/60" />
            ) : (
              <Volume2 className="w-4 h-4 text-white/60" />
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
          >
            <Menu className="w-4 h-4 text-white/60" />
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>

            <nav className="h-full flex flex-col items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center gap-4 text-2xl tracking-[0.3em] uppercase ${
                    currentSection === item.id ? "text-white" : "text-white/40"
                  }`}
                >
                  <span className="font-mono text-sm text-white/30">{item.num}</span>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side indicators */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group flex items-center gap-3"
          >
            <div
              className={`w-[2px] h-4 transition-all duration-300 ${
                currentSection === item.id
                  ? "bg-white h-8"
                  : "bg-white/20 group-hover:bg-white/40"
              }`}
            />
            <span
              className={`text-[10px] tracking-[0.2em] uppercase transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                currentSection === item.id ? "opacity-100 translate-x-0 text-white" : "text-white/60"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </>
  )
}
