"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "College Graduate",
    content:
      "Idara Al-Khair gave me the opportunity to pursue higher education when my family couldn't afford it. Today, I'm a successful engineer giving back to my community.",
    image: "/testimonal2.jpg?height=80&width=80",
  },
  {
    id: 2,
    name: "Fatima Khan",
    role: "Parent",
    content:
      "My 2 children are studying in Idara Al-Khair schools. The quality of education and care they receive is exceptional. I'm grateful for this organization.",
    image: "/testimonal1.jpg?height=80&width=80",
  },
  {
    id: 3,
    name: "Dr. Muhammad Ali",
    role: "Community Leader",
    content:
      "I've witnessed the transformation Idara Al-Khair has brought to our community. Their healthcare centers and educational programs have improved countless lives.",
    image: "/testimonal3.jpg?height=80&width=80",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white dark:bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="flex items-center justify-center">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkblue">Stories of Impact</h2>
              <p className="text-xl text-gray max-w-3xl mx-auto">Hear from those whose lives have been transformed</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-lg bg-white/90 dark:bg-dark-gray/90 border border-primary-blue/30 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-blue/50 shadow-lg"
                  >
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-lightblue rounded-full flex items-center justify-center"
                  >
                    <Quote className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray mb-6 leading-relaxed italic"
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold text-darkblue">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-lightblue font-medium">{testimonials[currentIndex].role}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
                onClick={prevTestimonial}
                  className="rounded-full bg-white/20 dark:bg-dark-gray/20 backdrop-blur-sm border-lightblue/30 hover:bg-lightblue hover:scale-110 active:scale-95 transition-all duration-300 group"
              >
              <ChevronLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform duration-300" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary-blue scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-primary-blue/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white/20 dark:bg-dark-gray/20 backdrop-blur-sm border-lightblue/30 hover:bg-lightblue hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-[2px] transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
