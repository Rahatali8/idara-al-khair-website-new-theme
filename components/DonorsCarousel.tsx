"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Star, Award } from "lucide-react"
import { motion } from "framer-motion"
const donors = [
  {
    name: "Japan Foundation",
    logo: "/japan.png",
    contribution: "Education Sponsor",
    description: "Supporting 500+ students annually",
  },
  {
    name: "Cherity Giver",
    logo: "/Cherity-Giver.png",
    contribution: "Healthcare Partner",
    description: "Funding medical equipment and facilities",
  },
  {
    name: "Blessed Live Foundation",
    logo: "/Blessed-Live.png",
    contribution: "Disaster Relief Partner",
    description: "Joint emergency response operations",
  },
  {
    name: "Hansalim Foundation",
    logo: "/chines.png",
    contribution: "Food Program Supporter",
    description: "Collaborative food distribution initiatives",
  },
  {
    name: "Coop Foundation",
    logo: "/coop.png",
    contribution: "Development Partner",
    description: "Community development programs",
  },
  {
    name: "Gift Usa Foundation",
    logo: "/Gift-Usa.png",
    contribution: "Humanitarian Partner",
    description: "Joint welfare and relief activities",
  },
  {
    name: "JFSA Foundation",
    logo: "/JFSA.png",
    contribution: "Education Collaborator",
    description: "Shared educational initiatives",
  },
  {
    name: "Meezan bank",
    logo: "/Meezan-bank.png",
    contribution: "Medical Partner",
    description: "Healthcare service collaboration",
  },
  {
    name: "one ummah",
    logo: "/one-ummah.png",
    contribution: "Medical Partner",
    description: "Healthcare service collaboration",
  },
  {
    name: "pearls",
    logo: "/Pearls.png",
    contribution: "Medical Partner",
    description: "Healthcare service collaboration",
  },

]

export default function DonorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= donors.length ? 0 : prevIndex + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [itemsPerView])



  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="px-4 sm:px-8 lg:px-0 text-left sm:text-left">
              <div className="flex items-center mb-4">
                {/* You can add decorative elements here if needed */}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-4">
                Generous Donors <span className="text-lightblue">And Partners</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray max-w-full sm:max-w-2xl lg:max-w-3xl">
                We are grateful to our donors and partner organizations who make our mission possible through their generous
                support and collaboration.
              </p>
            </div>

            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {donors.map((donor, index) => (
                <div key={index} className="flex-shrink-0 px-4 mt-8 mb-8" style={{ width: `${100 / itemsPerView}%` }}>
                  <motion.div
                    className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 px-10 border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 h-full group overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-lightblue/50 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-lightblue/50 rounded-br-3xl"></div>

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-lightblue to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="relative z-10 text-center">
                      <div className="mb-6 h-20 flex items-center justify-center">
                        <Image
                          src={donor.logo || "/placeholder.svg"}
                          alt={donor.name}
                          width={160}
                          height={80}
                          className="max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors duration-300">{donor.name}</h3>

                      <div className="mb-4">
                        <span className="inline-block bg-gradient-to-r from-lightblue/90 to-cyan-500/90 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30 shadow-lg group-hover:shadow-xl transition-all duration-300">
                          {donor.contribution}
                        </span>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{donor.description}</p>

                      {/* Rating Stars */}
                      <div className="flex justify-center mt-4 space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={star}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: star * 0.1 }}
                          >
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(donors.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerView) === index ? "bg-lightblue w-8" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
