"use client"

import { useState, useEffect, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {Heart, Building, Award, Globe, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/ImageCarousel"
import StatsSection from "@/components/StatsSection"
import Link from "next/link"
import DonorsCarousel from "@/components/DonorsCarousel"
import ProjectCards from "@/components/ProjectCards"
import CallToAction from "@/components/CallToAction"
import TestimonialsSection from "@/components/TestimonialsSection"

// Lazy load 3D components to prevent SSR issues
import dynamic from "next/dynamic"

const Hero3D = dynamic(() => import("@/components/hero-3d"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50" />,
})

const FloatingElements = dynamic(() => import("@/components/floating-elements"), {
  ssr: false,
  loading: () => null,
})

const heroSlides = [
  {
    title: "Hospital Ward",
    description: "Access to basic healthcare remains a distant hope for many.",
    image: "/al-khair.png?height=500&width=600",
  },
  {
    title: "Education Support",
    description: "Empowering communities through quality education and learning opportunities.",
    image: "/al khair c-6.png?height=500&width=600",
  },
  {
    title: "Emergency Relief",
    description: "Providing immediate assistance during times of crisis and natural disasters.",
    image: "/campus 4.png?height=500&width=600",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Animation */}
      <section className="relative h-screen overflow-hidden">
        <Suspense
          fallback={<div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50" />}
        >
          {mounted && <Hero3D />}
        </Suspense>
        <div className="absolute inset-0 flex items-start pt-10">
          <div className="container mx-auto px-6 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/5 rounded-2xl p-8">
              {/* Left Side - Text Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentSlide}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-darkblue drop-shadow-lg"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-webblack leading-relaxed drop-shadow-md"
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <Link href="/contact#donation-details">
                      <Button
                        size="lg"
                        className="bg-lightblue hover:bg-lightblue/90 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Donate Now
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Right Side - Image Content */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`image-${currentSlide}`}
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={heroSlides[currentSlide].image || "/placeholder.svg"}
                        alt={heroSlides[currentSlide].title}
                        className="w-full h-[300px] md:h-[350px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-darkblue/20 to-transparent" />
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="absolute -top-4 -right-4 w-16 h-16 bg-lightblue rounded-full flex items-center justify-center shadow-lg"
                    >
                      <div className="w-8 h-8 bg-white rounded-full" />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-darkblue rounded-full shadow-lg"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Arrows */}
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-3 bg-lightblue rounded-full"
                  : "w-3 h-3 bg-white/70 rounded-full hover:bg-white/90"
              }`}
            />
          ))}
        </div>
        {/* Removed Slide Counter */}
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <Suspense fallback={null}>{mounted && <FloatingElements />}</Suspense>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="ml-10 text-lightblue font-semibold mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-4" />
                  ABOUT OUR MISSION
                </div>
                <h2 className="ml-8 text-4xl lg:text-5xl font-bold text-darkblue mb-6">
                  Empowering Communities Through
                  <span className="ml-8 text-lightblue"> Education & Care</span>
                </h2>

              <p className="ml-8 text-xl text-gray mb-8 leading-relaxed">
                  Since 1987, Idara Al-Khair has been at the forefront of social transformation in Pakistan. Through
                  unwavering dedication and community support, we've built a network of educational institutions,
                  healthcare centers, and vocational training facilities that continue to change lives every day.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: Building, label: "Healthcare Centers", count: "12+", color: "text-lightblue" },
                    { icon: Award, label: "Awards Received", count: "25+", color: "text-lightblue" },
                    { icon: Globe, label: "Communities Served", count: "150+", color: "text-lightblue" },
                    { icon: Lightbulb, label: "Innovation Projects", count: "8+", color: "text-lightblue" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="ml-5 w-12 h-12 bg-light-gray dark:bg-black rounded-xl flex items-center justify-center">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <div className="font-bold text-dark-gray dark:text-white">{item.count}</div>
                        <div className="text-sm text-dark-gray dark:text-gray-300">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 ml-6">
                  <Link href="/about#explore-our-organization">
                    <Button className="bg-lightblue hover:bg-lightblue/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Learn More About Us
                    </Button>
                  </Link>
                  <a href="/projects/campuses#educational-excellence-across" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white ">
                      {/* Animated gradient overlay */}
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </button>
                  </a>
                </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-2 rounded-2xl max-w-lg mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-darkblue via-lightblue to-darkblue bg-[length:200%_100%] animate-gradient-x"></div>
                <div className="relative rounded-xl p-1">
                  <img
                    src="/al-khair.png?height=500&width=600"
                    alt="Al-Khair"
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
         {/* Image Carousel Section */}
         <ImageCarousel />

         {/* Stats Section */}
      <StatsSection />

      {/* {/* Project Cards Section */}
      <ProjectCards />

      {/* {/* Donors Carousel Section */}
      <DonorsCarousel />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* {/* Contact Us Section */} 
      <CallToAction />

    </div> 
  )
}
