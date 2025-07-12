"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Utensils, Stethoscope, Laptop, Shield } from "lucide-react"

const projects = [
  {
    id: "education",
    title: "Education",
    description: "Quality education from primary to higher levels, empowering students with knowledge and skills.",
    image: "/quality-education.jpg",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    stats: "6000+ Students",
  },
  {
    id: "food-support",
    title: "Food Support",
    description: "Ensuring food security through our Roti Bank and nutrition programs for families in need.",
    image: "/food-security.jpg",
    icon: Utensils,
    color: "from-green-500 to-green-600",
    stats: "50,000+ Meals",
  },
  {
    id: "medical",
    title: "Medical Center",
    description: "Comprehensive healthcare services including free medical camps and specialized treatments.",
    image: "/health-care.jpg",
    icon: Stethoscope,
    color: "from-red-500 to-red-600",
    stats: "25,000+ Patients",
  },
  {
    id: "technical",
    title: "Technical Institute",
    description: "Vocational training and IT education preparing youth for modern employment opportunities.",
    image: "/skill-devp.jpg",
    icon: Laptop,
    color: "from-purple-500 to-purple-600",
    stats: "2000+ Got Skils",
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief",
    description: "Emergency response and rehabilitation support during natural disasters and crises.",
    image: "/disaster.jpeg",
    icon: Shield,
    color: "from-orange-500 to-orange-600",
    stats: "100+ Operations",
  },
  {
    id: "environment",
    title: "environment-care",
    description: "Creating a sustainable future through environmental initiatives.",
    image: "/environment.jpg",
    icon: Shield,
    color: "from-orange-500 to-orange-600",
    stats: "10000+ Plants Planted",
  },
]

export default function ProjectCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold mb-2 uppercase tracking-wide">Our Impact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs addressing the core needs of underserved communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Icon */}
                <div
                  className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">{project.stats}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  Learn More
                  <ArrowRight
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                      hoveredCard === project.id ? "translate-x-1" : ""
                    }`}
                  />
                </Link>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
