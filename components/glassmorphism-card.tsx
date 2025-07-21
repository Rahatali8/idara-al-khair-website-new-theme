"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function GlassmorphismCard({ children, className = "", delay = 0 }: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={`backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
