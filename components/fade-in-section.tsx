"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export default function FadeInSection({ children, delay = 0, direction = "up", className = "mt-10" }: FadeInSectionProps) {
  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
