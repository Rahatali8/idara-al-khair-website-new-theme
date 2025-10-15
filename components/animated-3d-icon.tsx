"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Animated3DIconProps {
  Icon: LucideIcon
  color?: string
  size?: number
  delay?: number
}

export default function Animated3DIcon({ Icon, color = "text-orange-500", size = 48, delay = 0 }: Animated3DIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90, scale: 0.5 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      whileHover={{
        rotateY: 15,
        rotateX: 15,
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg ${color}`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Icon size={size * 0.6} />

        {/* 3D Shadow */}
        <div
          className=" absolute inset-0 bg-gradient-to-br from-black/10 to-black/20 rounded-2xl blur-sm "
          style={{
            transform: "translateZ(-10px) translateY(5px)",
         
          }}
        />
      </motion.div>
    </motion.div>
  )
}
