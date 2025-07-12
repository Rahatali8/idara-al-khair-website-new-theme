"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
const donors = [
  {
    name: "Japan Foundation",
    logo: "/japan.png",
    contribution: "Education Sponsor",
    description: "Supporting 500+ students annually",
  },
  {
    name: "Cherity Giver",
    logo: "Cherity-Giver.png",
    contribution: "Healthcare Partner",
    description: "Funding medical equipment and facilities",
  },
  {
    name: "Blessed Live Foundation",
    logo: "Blessed-Live.png",
    contribution: "Disaster Relief Partner",
    description: "Joint emergency response operations",
  },
  {
    name: "Hansalim Foundation",
    logo: "chines.png",
    contribution: "Food Program Supporter",
    description: "Collaborative food distribution initiatives",
  },
  {
    name: "Coop Foundation",
    logo: "coop.png",
    contribution: "Development Partner",
    description: "Community development programs",
  },
  {
    name: "Gift Usa Foundation",
    logo: "Gift-Usa.png",
    contribution: "Humanitarian Partner",
    description: "Joint welfare and relief activities",
  },
  {
    name: "JFSA Foundation",
    logo: "JFSA.png",
    contribution: "Education Collaborator",
    description: "Shared educational initiatives",
  },
  {
    name: "Meezan bank",
    logo: "Meezan-bank.png",
    contribution: "Medical Partner",
    description: "Healthcare service collaboration",
  },
  {
    name: "one ummah",
    logo: "one-ummah.png",
    contribution: "Medical Partner",
    description: "Healthcare service collaboration",
  },
  {
    name: "pearls",
    logo: "Pearls.png",
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

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, donors.length - itemsPerView) : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= donors.length ? 0 : prevIndex + 1))
  }

  const visibleDonors = donors.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-teal-600 mr-3" />
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Our Partners</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Generous Donors & Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are grateful to our donors and partner organizations who make our mission possible through their generous
            support and collaboration.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {donors.map((donor, index) => (
                <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="bg-white rounded-2xl p-8 px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="text-center">
                      <div className="mb-6 h-20 flex items-center justify-center">
                        <Image
                          src={donor.logo || "/placeholder.svg"}
                          alt={donor.name}
                          width={160}
                          height={80}
                          className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{donor.name}</h3>

                      <div className="mb-3">
                        <span className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {donor.contribution}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">{donor.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            disabled={currentIndex + itemsPerView >= donors.length}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(donors.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === index ? "bg-teal-500 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Partner</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our network of generous donors and partners. Together, we can create lasting positive impact in
            communities across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Partner with Us
            </button>
            <button className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Corporate Sponsorship
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
