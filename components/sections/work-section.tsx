"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Member of Technical Staff-2, Aquera Labs",
    category: "Professional Experience",
    year: "2024 - Present",
    description: "Architected Node.js/TypeScript microservices on AWS (Lambda, ECS, API Gateway) with Redis caching and PostgreSQL/MongoDB/DynamoDB, improving performance by 60% and cutting operational costs by 35%.",
    color: "#1a1a2e",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    category: "Project",
    year: "2024",
    description: "Scalable chat app with Node.js, Socket.io, Express, and MongoDB with JWT auth, message persistence, presence, file sharing, and responsive UI.",
    color: "#16213e",
  },
  {
    id: 3,
    title: "Notification Engine",
    category: "Project",
    year: "2024",
    description: "Production-ready email service on Node.js/Express with MongoDB, AWS SES, JWT auth, multi-tenant templates, dynamic variables, and Slack webhooks for real-time error alerts.",
    color: "#0f3460",
  },
  {
    id: 4,
    title: "Identity & Reliability Initiatives",
    category: "Impact",
    year: "2023 - 2024",
    description: "Implemented SCIM integrations with Okta/Azure AD, SSE with Redis for live progress, 300+ tests with Jest/Mocha/Supertest, and load testing for 10k+ concurrent users.",
    color: "#1a1a2e",
  },
]

export function WorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-white/30">03</span>
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-xs tracking-[0.3em] text-white/50 uppercase">Experience & Projects</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">Featured</span>
              <br />
              <span className="text-white/60">Impact</span>
            </h2>
            <p className="text-white/40 max-w-md text-sm leading-relaxed">
              Highlights of backend systems, real-time apps, and reliability work across Node.js, AWS, and modern data stores.
            </p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div
                className="relative p-8 md:p-12 border border-white/10 overflow-hidden transition-all duration-500 cursor-pointer hover:border-white/20"
                style={{
                  background: hoveredProject === project.id
                    ? `linear-gradient(135deg, ${project.color}40 0%, transparent 100%)`
                    : "transparent",
                }}
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.color}30 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Project info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs text-white/30">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-xs tracking-[0.2em] text-white/50 uppercase">{project.category}</span>
                      <span className="text-xs text-white/30">{project.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300"
                      animate={{
                        x: hoveredProject === project.id ? 5 : 0,
                        y: hoveredProject === project.id ? -5 : 0,
                      }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>
                </div>

                {/* Progress line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white/40 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredProject === project.id ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="group relative px-8 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase overflow-hidden hover:border-white/50 transition-colors">
            <span className="relative z-10">View All Projects</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
