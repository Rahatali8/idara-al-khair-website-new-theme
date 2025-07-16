import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, MapPin, Heart, Wrench, GraduationCap, Star, Clock, Award, Building, Thermometer, Snowflake, Fan } from "lucide-react"
import Link from "next/link"

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
    icon: "🔧",
  },
  {
    title: "Refrigeration Specialist",
    salary: "PKR 40,000 - 70,000",
    description: "Specialize in refrigeration and cooling systems",
    icon: "❄️",
  },
  {
    title: "HVAC Engineer",
    salary: "PKR 60,000 - 100,000",
    description: "Design and oversee HVAC system projects",
    icon: "🏗️",
  },
  {
    title: "Energy Consultant",
    salary: "PKR 50,000 - 80,000",
    description: "Optimize energy efficiency in HVAC systems",
    icon: "⚡",
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
    <main className="/">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-5 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">HVAC Program</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">HVAC</span> Training Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
            Comprehensive HVAC training program that thoroughly prepares students for high-demand, well-paying careers in heating, ventilation, air conditioning, and refrigeration systems. Gain hands-on experience with modern tools and technology, learn from industry experts, and develop the practical skills employers are looking for. Start your journey toward a stable, rewarding career with our in-depth curriculum and dedicated job placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                <Link href="/contact">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Apply for Training
                </Link>
              </Button>
<<<<<<< Updated upstream
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white hover:bg-gray-50 rounded-lg text-center">
                <Link href="/projects/technical/hvac-program#hvac-courses">
                  View Courses
                </Link>
              </Button>
=======
              <Link href="/projects/technical/hvac-program#hvac-courses" className="block px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white hover:bg-gray-50 rounded-lg">
                  View Courses
                </Link>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hvacStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About HVAC Program */}
      <section className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About HVAC Program</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our HVAC Training Program is designed to meet the growing demand for skilled professionals 
                in the heating, ventilation, air conditioning, and refrigeration industry. With Pakistan's 
                expanding construction and industrial sectors, HVAC technicians are in high demand.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our program combines theoretical knowledge with extensive hands-on training using modern 
                equipment. Students learn installation, maintenance, repair, and energy optimization of 
                various HVAC systems.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-cyan-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Duration</h4>
                    <p className="text-gray-600">2-4 Months</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-cyan-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Graduates</h4>
                    <p className="text-gray-600">200+ Placed</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-cyan-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Karachi Central</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-cyan-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certification</h4>
                    <p className="text-gray-600">Industry Recognized</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
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
      <section className="py-20 bg-white ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="hvac-courses" className="text-4xl font-bold text-gray-900 mb-4">HVAC Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs covering all aspects of HVAC systems and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hvacCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-600 text-white">{course.duration}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 px-8">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Skills Covered:</span>
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-demand career paths with excellent salary prospects in the growing HVAC industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{career.icon}</div>
                  <CardTitle className="text-lg text-cyan-600">{career.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{career.description}</p>
                  <Badge className="bg-cyan-100 text-cyan-800">
                    {career.salary}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading HVAC manufacturers and companies to ensure our graduates find excellent employment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {industryPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{partner.name}</h4>
                  <p className="text-xs text-gray-600">{partner.sector}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your HVAC Career</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the growing HVAC industry with our comprehensive training program. 
            High demand, excellent salaries, and job security await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 