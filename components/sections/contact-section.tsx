"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/mikiadarsh25" },
  { name: "GitHub", icon: Github, href: "https://github.com/mikiadarsh25" },
  { name: "Email", icon: Mail, href: "mailto:mikiadarsh25@gmail.com" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative min-h-screen py-32 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-white/30">04</span>
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-xs tracking-[0.3em] text-white/50 uppercase">Get in Touch</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="text-white">Let&apos;s Build</span>
              <br />
              <span className="text-white/60">Reliable</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                Backends
              </span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-md mb-12">
              Have a platform to scale or an API to launch? I&apos;m open to backend, platform, and reliability work across Node.js, TypeScript, and AWS.
            </p>

            {/* Email CTA */}
            <motion.a
              href="mailto:mikiadarsh25@gmail.com"
              className="group inline-flex items-center gap-4 text-xl md:text-2xl text-white hover:text-white/80 transition-colors"
              whileHover={{ x: 10 }}
            >
              <span className="font-mono">mikiadarsh25@gmail.com</span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>

          {/* Right side - Form & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact form */}
            <form className="space-y-6 mb-16">
              <div>
                <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:border-white/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:border-white/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:border-white/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="group relative mt-8 px-8 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </form>

            {/* Social links */}
            <div>
              <h3 className="text-xs tracking-[0.3em] text-white/40 uppercase mb-6">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all"
                    whileHover={{ y: -4 }}
                  >
                    <link.icon className="w-5 h-5 text-white/60" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 pt-12 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs text-white/30 tracking-wider">
              © 2024 Adarsh Prakash. Backend Software Engineer.
            </div>
            <div className="flex items-center gap-8">
              <span className="text-xs text-white/30 tracking-wider">Node.js • TypeScript • AWS</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-white/40">Available for work</span>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
