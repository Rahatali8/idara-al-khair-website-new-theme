import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen, Award, MapPin, Phone, Star, Building, Globe, Clock, Users2 } from "lucide-react"
import Link from "next/link"

const collegeStats = [
  {
    icon: Users,
    title: "2,500+ Students",
    description: "Currently enrolled in various programs",
  },
  {
    icon: Building,
    title: "Modern Campus",
    description: "State-of-the-art facilities and infrastructure",
  },
  {
    icon: Award,
    title: "95% Success Rate",
    description: "High employment rate after graduation",
  },
  {
    icon: Globe,
    title: "Industry Partners",
    description: "Strong connections with leading companies",
  },
]

const programs = [
  {
    title: "Computer Science",
    duration: "4 Years",
    seats: "120",
    description: "Comprehensive program covering software development, AI, and data science",
    features: ["Programming Languages", "Database Management", "Web Development", "Artificial Intelligence", "Project Management"],
    image: "/Programming-language.jpg",
  },
  {
    title: "Business Administration",
    duration: "4 Years",
    seats: "100",
    description: "Prepare for leadership roles in business and management",
    features: ["Marketing", "Finance", "Human Resources", "Operations Management", "Strategic Planning"],
    image: "/Office.jpg",
  },
  {
    title: "Digital Marketing",
    duration: "2 Years",
    seats: "80",
    description: "Master the art of digital marketing and online business",
    features: ["SEO & SEM", "Social Media Marketing", "Content Creation", "Analytics", "E-commerce"],
    image: "/Digital-marketing.jpg",
  },
  {
    title: "Graphic Design",
    duration: "2 Years",
    seats: "60",
    description: "Develop creative skills for visual communication",
    features: ["Adobe Creative Suite", "Typography", "Brand Design", "UI/UX Design", "Print & Digital Media"],
    image: "/Graphic.jpg",
  },
  {
    title: "Animation & Multimedia",
    duration: "2 Years",
    seats: "50",
    description: "Create stunning animations and multimedia content",
    features: ["2D & 3D Animation", "Video Editing", "Motion Graphics", "Character Design", "Visual Effects"],
    image: "/animation-courses.jpg",
  },
  {
    title: "Hardware & Networking",
    duration: "2 Years",
    seats: "70",
    description: "Build and maintain computer systems and networks",
    features: ["Computer Hardware", "Network Administration", "Cybersecurity", "System Administration", "Cloud Computing"],
    image: "/hardware.jpg",
  },
]

const facilities = [
  {
    title: "Modern Computer Labs",
    description: "Latest hardware and software for hands-on learning",
    icon: "💻",
  },
  {
    title: "Library & Study Centers",
    description: "Extensive collection of books and digital resources",
    icon: "📚",
  },
  {
    title: "Conference Hall",
    description: "State-of-the-art auditorium for events and presentations",
    icon: "🎤",
  },
  {
    title: "Cafeteria",
    description: "Comfortable dining area with healthy meal options",
    icon: "🍽️",
  },
  {
    title: "Sports Complex",
    description: "Indoor and outdoor sports facilities for recreation",
    icon: "⚽",
  },
  {
    title: "Wi-Fi Campus",
    description: "High-speed internet connectivity throughout campus",
    icon: "📶",
  },
]

export default function AlKhairCollegePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Al-Khair College</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Al-Khair College</span> of Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Empowering students with cutting-edge technology education and practical skills for the digital age.
              Established in 2010, we have been at the forefront of technical education in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <GraduationCap className="mr-2 h-5 w-5" />
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* College Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collegeStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About College */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Al-Khair College</h2>
              <p className="text-lg text-gray-600 mb-6">
                Al-Khair College of Technology was established in 2010 with a vision to provide world-class technical 
                education to Pakistani students. Our institution combines traditional academic excellence with modern 
                technological innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We offer a diverse range of programs in computer science, business administration, digital marketing, 
                graphic design, animation, and hardware networking. Our curriculum is designed in collaboration with 
                industry experts to ensure students are job-ready upon graduation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Established</h4>
                    <p className="text-gray-600">2010</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users2 className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Faculty</h4>
                    <p className="text-gray-600">50+ Experts</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Karachi Central</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Accreditation</h4>
                    <p className="text-gray-600">HEC Recognized</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Al-Khair College Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical and business programs designed to prepare students for successful careers in the digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{program.duration}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 px-8">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-900">Available Seats:</span>
                    <span className="text-blue-600 font-bold">{program.seats}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Key Features:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {program.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern facilities designed to enhance learning experience and provide students with the best resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <CardTitle className="text-xl text-blue-600">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Journey at Al-Khair College</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of successful graduates who have transformed their careers through quality technical education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 