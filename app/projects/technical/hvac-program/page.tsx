"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {ArrowRight ,Users, MapPin, Heart, Wrench,Clock, Award, Building, Thermometer, Snowflake, Fan } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import CallToAction from "@/components/CallToAction"

const hvacStats = [
  {
    icon: Users,
    title: "200+ Graduates",
    description: "Successfully placed in HVAC industry",
  },
  {
    icon: Wrench,
    title: "Practical Training",
    description: "Hands-on experience with real equipment",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Internationally recognized certifications",
  },
  {
    icon: Heart,
    title: "High Demand",
    description: "Growing HVAC industry opportunities",
  },
]

const hvacCourses = [
  {
    title: "HVAC Installation",
    description: "Learn to install and set up HVAC systems for residential and commercial buildings",
    icon: "🔧",
    duration: "3 Months",
   
    features: ["System Installation", "Ductwork", "Electrical Wiring", "Testing & Commissioning"],
    image: "/HVAC-installation.jpg",
  },
  {
    title: "HVAC Maintenance",
    description: "Comprehensive maintenance and repair of HVAC systems",
    icon: "🛠️",
    duration: "2 Months",
    
    features: ["Preventive Maintenance", "Troubleshooting", "Repair Techniques", "System Optimization"],
    image: "/HVAC-maintenance.jpg",
  },
  {
    title: "Refrigeration Systems",
    description: "Specialized training in refrigeration and cooling systems",
    icon: "❄️",
    duration: "4 Months",

    features: ["Refrigeration Cycles", "Compressor Systems", "Cooling Units", "Commercial Refrigeration"],
    image: "/Refrigiration-system.jpg",
  },
  {
    title: "Air Conditioning",
    description: "Advanced air conditioning system installation",
    icon: "🌬️",
    duration: "3 Months",

    features: ["AC Installation", "Split Systems", "Central AC", "Ductless Systems", "Smart Controls"],
    image: "/Air-conditining.jpg",
  },
  {
    title: "Energy Management",
    description: "Energy-efficient HVAC systems and green technology",
    icon: "⚡",
    duration: "2 Months",
    features: ["Energy Audits", "Green Technology", "Smart Systems", "Sustainability"],
    image: "/energy-management system.jpg",
  },
  {
    title: "Commercial HVAC",
    description: "Large-scale commercial and industrial HVAC systems",
    icon: "🏢",
    duration: "4 Months",
    
    features: ["Commercial Systems", "Industrial HVAC", "Large-scale Projects", "Project Management"],
    image: "/commercial-hvac.jpg",
  },
]

const careerOpportunities = [
  {
    title: "HVAC Technician",
    salary: "PKR 35,000 - 60,000",
    description: "Install, maintain, and repair HVAC systems",
    icon: Wrench,
  },
  {
    title: "Refrigeration Specialist",
    salary: "PKR 40,000 - 70,000",
    description: "Specialize in refrigeration and cooling systems",
    icon: Snowflake,
  },
  {
    title: "HVAC Engineer",
    salary: "PKR 60,000 - 100,000",
    description: "Design and oversee HVAC system projects",
    icon: Building,
  },
  {
    title: "Energy Consultant",
    salary: "PKR 50,000 - 80,000",
    description: "Optimize energy efficiency in HVAC systems",
    icon: Thermometer,
  },
]

const industryPartners = [
  { name: "Daikin Pakistan", logo: "/Daikin-pakistan.png", sector: "Air Conditioning" },
  { name: "Carrier Pakistan", logo: "/Carrier-Pakistan.png", sector: "HVAC Systems" },
  { name: "LG Electronics", logo: "/LG-Electronics.png", sector: "Cooling Solutions" },
  { name: "Samsung HVAC", logo: "/Smsung-HVAC.jpg", sector: "Smart Systems" },
  { name: "Mitsubishi Electric", logo: "/Mitsubashi-Electric.png", sector: "Commercial HVAC" },
  { name: "Hitachi Cooling", logo: "/Hitachi-Cooling.jpg", sector: "Industrial Systems" },
]
export default function HVACProgramPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hvac-back.png"
            alt="HVAC Background"
            fill
            className="object-cover w-full h-full blur-sm opacity-80"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-darkblue mb-6 leading-tight flex flex-wrap justify-center"
              variants={{
                visible: { transition: { staggerChildren: 0.18 } },
                hidden: {},
              }}
              initial="hidden"
              animate="visible"
            >
              {['HVAC', 'Training', 'Program'].map((word, i) => (
                <motion.span
                  key={i}
                  className={word === 'Program' ? 'text-lightblue mx-2' : 'text-darkblue mx-2'}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.7 } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto flex flex-wrap justify-center"
              variants={{
                visible: { transition: { staggerChildren: 0.045 } },
                hidden: {},
              }}
              initial="hidden"
              animate="visible"
            >
              {"Comprehensive HVAC training program that thoroughly prepares students for high-demand, well-paying careers in heating, ventilation, air conditioning, and refrigeration systems. Gain hands-on experience with modern tools and technology.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: 'spring', bounce: 0.3 } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <a href="#hvac-courses" className="inline-block mt-2" target="_blank" rel="noopener noreferrer">
              <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                <span className="relative z-10 inline-flex items-center">Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-5xl font-bold text-darkblue mb-2">Program <span className="text-lightblue">Stats</span></h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">Key highlights and outcomes of our HVAC training program.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hvacStats.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/40 backdrop-blur-md shadow-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-[320px] mx-auto transform group-hover:scale-105 rounded-3xl"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-3xl" />
                <div className="w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-700 group-hover:rotate-[360deg] mx-auto mt-8">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center p-8 pt-2">
                  <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">{stat.title}</h3>
                  <p className="text-gray text-sm">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About HVAC Program */}
      <section className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-5xl font-bold text-darkblue mb-2">About <span className="text-lightblue">HVAC Program</span></h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">Learn about our mission, training approach, and the growing demand for HVAC professionals.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
              <h2 className="text-4xl font-bold text-darkblue mb-6">About HVAC <span className="text-lightblue">Program</span></h2>
              <p className="text-lg text-gray mb-6">
                Our HVAC Training Program is designed to meet the growing demand for skilled professionals 
                in the heating, ventilation, air conditioning, and refrigeration industry. With Pakistan's 
                expanding construction and industrial sectors, HVAC technicians are in high demand.
              </p>
              <p className="text-lg text-gray mb-6">
                Our program combines theoretical knowledge with extensive hands-on training using modern 
                equipment. Students learn installation, maintenance, repair, and energy optimization of 
                various HVAC systems.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Duration</h4>
                    <p className="text-gray">2-4 Months</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Graduates</h4>
                    <p className="text-gray">200+ Placed</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Location</h4>
                    <p className="text-gray">Karachi Central</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Certification</h4>
                    <p className="text-gray">Industry Recognized</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/HVAC-Center.jpg"
                alt="HVAC Training Program"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HVAC Courses */}
      <section id="hvac-courses" className="py-20 bg-white ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-5xl font-bold text-darkblue mb-2">HVAC <span className="text-lightblue">Courses</span></h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">Explore our comprehensive courses covering all aspects of HVAC systems and technology.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hvacCourses.map((course, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                <div className="relative h-48 overflow-hidden rounded-t-lg z-10">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-600 text-white">{course.duration}</Badge>
                  </div>
                </div>
                <div className="relative z-10">
                  <CardHeader>
                    <CardTitle className="text-xl text-darkblue">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-8">
                    <div>
                      <span className="font-semibold text-darkblue text-sm">Skills Covered:</span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {course.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link href={"/contact"}>
                      <Button className="mt-5 w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-5xl font-bold text-darkblue mb-2">Career <span className="text-lightblue">Opportunities</span></h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">Discover high-demand career paths and excellent salary prospects in the HVAC industry.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {careerOpportunities.map((career, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/40 backdrop-blur-md shadow-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-[320px] mx-auto transform group-hover:scale-105 rounded-3xl text-center"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-3xl" />
                <div className="w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-700 group-hover:rotate-[360deg] mx-auto mt-8">
                  <career.icon className="w-7 h-7 text-white" />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center p-8 pt-2">
                  <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">{career.title}</h3>
                  <p className="text-gray text-sm mb-3">{career.description}</p>
                  <Badge className="bg-cyan-100 text-cyan-800">{career.salary}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-5xl font-bold text-darkblue mb-2">Industry <span className="text-lightblue">Partners</span></h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">We partner with leading HVAC manufacturers and companies to ensure our graduates find excellent employment opportunities.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {industryPartners.map((partner, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/40 backdrop-blur-md shadow-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-[200px] mx-auto transform group-hover:scale-105 rounded-3xl text-center"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-3xl" />
                <div className="w-16 h-16 bg-lightblue rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-700 group-hover:rotate-[360deg] mx-auto mt-8">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center p-4 pt-2">
                  <h4 className="font-semibold text-darkblue text-sm mb-1 group-hover:text-lightblue transition-colors">{partner.name}</h4>
                  <p className="text-xs text-gray">{partner.sector}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction/>
    </main>
  )
} 