"use client"

import { useEffect, useState, useRef } from "react"
import { Users, GraduationCap, TreePine, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 850750,
    label: "People Served",
    suffix: "",
    description: "Lives impacted since 1987",
  },
  {
    icon: GraduationCap,
    number: 6000,
    label: "Students Enrolled",
    suffix: "+",
    description: "In our educational institutes",
  },
  {
    icon: TreePine,
    number: 1575,
    label: "Trees Planted",
    suffix: "",
    description: "Environmental conservation efforts",
  },
  {
    icon: Heart,
    number: 35,
    label: "Years of Service",
    suffix: "+",
    description: "Dedicated community service",
  },
]

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gray-900">
      {count.toLocaleString()}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over three decades of dedicated service to communities across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex items-center justify-center mb-2">
                <AnimatedCounter target={stat.number} />
                <span className="text-4xl md:text-5xl font-bold text-teal-600 ml-1">{stat.suffix}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>

              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
