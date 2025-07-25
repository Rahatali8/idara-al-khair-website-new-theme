"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Utensils, Stethoscope, Laptop, Shield} from "lucide-react"

const projects = [
  {
    id: "education",
    title: "Education",
    description: "Quality education from primary to higher levels, empowering students with knowledge and skills.",
    image: "/quality-education.jpg",
    icon: BookOpen,
    stats: "6000+ Students",
    link: "/projects/education"
  },
  {
    id: "food-support",
    title: "Food Support",
    description: "Ensuring food security through our Roti Bank and nutrition programs for families in need.",
    image: "/food-security.jpg",
    icon: Utensils,
    stats: "50,000+ Meals",
    link: "/projects/food-support"
  },
  {
    id: "medical",
    title: "Medical Center",
    description: "Comprehensive healthcare services including free medical camps and specialized treatments.",
    image: "/health-care.jpg",
    icon: Stethoscope,
    stats: "25,000+ Patients",
    link: "/projects/medical"
  },
  {
    id: "technical",
    title: "Technical Institute",
    description: "Vocational training and IT education preparing youth for modern employment opportunities.",
    image: "/skill-devp.jpg",
    icon: Laptop,
    stats: "2000+ Got Skills",
    link: "/projects/technical"
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief",
    description: "Emergency response and rehabilitation support during natural disasters, humanitarian emergencies.",
    image: "/disaster.jpeg",
    icon: Shield,
    stats: "100+ Operations",
    link: "/projects/disaster-relief"
  },
  {
    id: "environment",
    title: "Environment Care",
    description: "Creating a sustainable future through innovative environmental protection and conservation initiatives.",
    image: "/environment.jpg",
    icon: Shield,
    stats: "10000+ Plants Planted",
    link: "/projects/environment"
  }
]

export default function ProjectCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-lightblue to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-4">Our Valuable Projects</h2>
              <p className="text-xl text-gray max-w-3xl mx-auto">
                Comprehensive programs addressing the core needs of underserved communities
              </p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {projects.map((project) => (
            <Link href={project.link} key={project.id}>
              <div
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="relative z-10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 to-transparent" />

                  {/* Icon */}
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray">{project.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray mb-4 leading-relaxed">{project.description}</p>

                  <div className="inline-flex items-center text-lightblue hover:text-lightblue font-semibold transition-colors group">
                    Learn More
                    <ArrowRight
                      className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                        hoveredCard === project.id ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

