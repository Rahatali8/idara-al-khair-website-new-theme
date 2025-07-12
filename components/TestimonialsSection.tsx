"use client"

import { useState, useEffect } from "react"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Fatima Ahmed",
    role: "Graduate Student",
    image: "/",
    content:
      "Idara Al-Khair gave me the opportunity to pursue higher education when my family couldn't afford it. Today, I'm a software engineer helping others in my community.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Hassan Ali",
    role: "Medical Volunteer",
    image: "/",
    content:
      "Working with Idara Al-Khair's medical camps has been incredibly rewarding. We've been able to provide healthcare to thousands of people in remote areas.",
    rating: 5,
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "Beneficiary Mother",
    image: "/",
    content:
      "The food support program helped my family during the most difficult time. My children never went hungry, and now they're thriving in school.",
    rating: 5,
  },
  {
    id: 4,
    name: "Muhammad Tariq",
    role: "Technical Graduate",
    image: "/",
    content:
      "The technical training I received opened doors to employment opportunities I never thought possible. I'm now running my own IT business.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold mb-2 uppercase tracking-wide">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the people whose lives have been transformed through our programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 transform translate-x-full absolute inset-0"
                }`}
              >
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                  <div className="flex items-center justify-center mb-8">
                    <Quote className="w-12 h-12 text-teal-500" />
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-teal-500 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
