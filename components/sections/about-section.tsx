"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "Node.js / Express / TypeScript", level: 92 },
  { name: "AWS (Lambda, ECS, API GW, CloudWatch)", level: 88 },
  { name: "PostgreSQL / MongoDB / DynamoDB / Redis", level: 86 },
  { name: "System Design & Microservices", level: 84 },
  { name: "Testing (Jest, Mocha, Supertest)", level: 83 },
  { name: "Identity & Security (OAuth2, SCIM, IAM)", level: 82 },
]

const technologies = [
  "Node.js",
  "Express.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "DynamoDB",
  "Redis",
  "AWS (Lambda, ECS, S3)",
  "API Gateway",
  "CloudWatch",
  "SQS / SNS",
  "Docker",
  "CI/CD",
  "GraphQL",
  "REST APIs",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            <span className="font-mono text-xs text-white/30">02</span>
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-xs tracking-[0.3em] text-white/50 uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Shipping Reliable</span>
            <br />
            <span className="text-white/60">Backend Systems</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              I&apos;m a backend software engineer based in Bangalore focused on building scalable APIs, resilient microservices, and cloud-native systems that stay fast under load.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              I work primarily with Node.js, Express, and TypeScript across AWS (Lambda, ECS, API Gateway, CloudWatch, SQS/SNS) with PostgreSQL, MongoDB, DynamoDB, and Redis. My recent work reduced operational costs by 35\% and improved app performance by 60\% through caching, query tuning, and event-driven patterns.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-12">
              I prioritize clean architecture, strong observability, and thorough testing (Jest, Mocha, Supertest) to keep services reliable for 10k+ daily users.
            </p>

            {/* Tech stack */}
            <div>
              <h3 className="text-xs tracking-[0.3em] text-white/40 uppercase mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 border border-white/10 text-sm text-white/60 hover:border-white/30 hover:text-white/80 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xs tracking-[0.3em] text-white/40 uppercase mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/80">{skill.name}</span>
                    <span className="font-mono text-xs text-white/40">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-white/60 to-white/30"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-16">
              <h3 className="text-xs tracking-[0.3em] text-white/40 uppercase mb-6">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp" },
                  { name: "Namaste JavaScript", issuer: "Namaste-Dev" },
                  { name: "Namaste Node.js", issuer: "Namaste-Dev" },
                  { name: "Microservices Architecture", issuer: "Internal Training" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="text-xs text-white/40 mb-1">{cert.issuer}</div>
                    <div className="text-sm text-white/80">{cert.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
