import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Code, Wrench, Users, ExternalLink, CheckCircle, Building, Globe, Briefcase, Award, GraduationCap, Clock, MapPin } from "lucide-react"

const programs = [
  {
    title: "Information Technology",
    duration: "2 Years",
    description: "Comprehensive IT program covering programming, web development, and system administration.",
    modules: [
      "Programming Fundamentals",
      "Web Development",
      "Database Management",
      "Network Administration",
      "Cybersecurity Basics",
    ],
    image: "/Programming-language.jpg",
  },
  {
    title: "Computer Hardware & Networking",
    duration: "18 Months",
    description: "Hands-on training in computer assembly, repair, and network setup and maintenance.",
    modules: ["PC Assembly & Repair", "Network Setup", "Server Management", "Troubleshooting", "Hardware Diagnostics"],
    image: "/hardware.jpg",
  },
  {
    title: "Digital Marketing",
    duration: "12 Months",
    description: "Modern marketing techniques using digital platforms and social media strategies.",
    modules: ["Social Media Marketing", "SEO/SEM", "Content Creation", "Analytics", "E-commerce"],
    image: "/Digital-marketing.jpg",
  },
  {
    title: "Graphic Design",
    duration: "15 Months",
    description: "Creative design skills using industry-standard software and design principles.",
    modules: ["Adobe Creative Suite", "Logo Design", "Print Design", "Web Graphics", "Brand Identity"],
    image: "/Graphic.jpg",
  },
  {
    title: "Mobile App Development",
    duration: "18 Months",
    description: "Learn to develop mobile applications for Android and iOS platforms.",
    modules: [
      "Android Development",
      "iOS Basics",
      "Cross-platform Development",
      "UI/UX Design",
      "App Store Deployment",
    ],
    image: "/web-devp.jpg",
  },
  {
    title: "Data Entry & Office Management",
    duration: "6 Months",
    description: "Essential office skills including data management and administrative tasks.",
    modules: ["MS Office Suite", "Data Entry", "File Management", "Communication Skills", "Office Procedures"],
    image: "/office.jpg",
  },
]

const facilities = [
  {
    icon: Laptop,
    title: "Modern Computer Labs",
    description: "50+ latest computers with high-speed internet connectivity",
  },
  {
    icon: Code,
    title: "Programming Labs",
    description: "Dedicated spaces for coding practice and software development",
  },
  {
    icon: Wrench,
    title: "Hardware Workshop",
    description: "Fully equipped workshop for hands-on hardware training",
  },
  {
    icon: Building,
    title: "Smart Classrooms",
    description: "Interactive learning environments with modern teaching aids",
  },
]

const stats = [
  { number: "2000+", label: "Graduates", description: "Successfully trained professionals" },
  { number: "85%", label: "Job Placement", description: "Employment rate within 6 months" },
  { number: "15+", label: "Industry Partners", description: "Companies providing internships" },
  { number: "12", label: "Specialized Courses", description: "Technical and vocational programs" },
]

export default function TechnicalPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">Institute of Technology</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-teal-600">Technical</span> Education
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Preparing students for the digital future with cutting-edge technical and vocational training programs.
              Building careers in IT, programming, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="https://ait.iak.ngo/register" target="_blank">
                  <Laptop className="mr-2 h-5 w-5" />
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://ait.iak.ngo/" target="_blank" rel="noopener noreferrer">
                  Visit Official Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Visit our dedicated website at{" "}
              <Link href="https://ait.iak.ngo/" className="text-teal-600 hover:underline" target="_blank">
                ait.iak.ngo
              </Link>{" "}
              for detailed information and online applications.
            </p>
          </div>
        </div>
      </section>

      {/* AIT Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/reference.png"
                  alt="Advanced Institute of Technology (AIT)"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">2000+</div>
                  <div className="text-sm opacity-90">Graduates</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Advanced Institute of Technology
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Empowering Students Through{" "}
                <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                  Quality Technical Education
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                AIT is a premier technical institute under Idara Al-Khair, dedicated to providing world-class 
                technical and vocational education. Our mission is to bridge the gap between education and 
                employment by offering industry-relevant programs that prepare students for successful careers 
                in the digital economy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry-Relevant Curriculum</h4>
                    <p className="text-sm text-gray-600">Courses designed in collaboration with industry experts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Learning</h4>
                    <p className="text-sm text-gray-600">Full-time and part-time programs available</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Faculty</h4>
                    <p className="text-sm text-gray-600">Experienced professionals from the industry</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Campus</h4>
                    <p className="text-sm text-gray-600">State-of-the-art facilities and equipment</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="https://ait.iak.ngo/register" target="_blank">
                    <Laptop className="mr-2 h-5 w-5" />
                    Apply for Admission
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <Link href="https://ait.iak.ngo/" target="_blank">
                    Visit AIT Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-relevant courses designed to meet current market demands and prepare students for successful
              careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-teal-600 text-white">{program.duration}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Course Modules:</h4>
                    <ul className="space-y-1">
                      {program.modules.map((module, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure and equipment to provide hands-on learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <facility.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Partnerships</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Strong connections with leading companies ensuring internship opportunities and job placements for our
              graduates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Internship Programs</h3>
              <p className="opacity-90">Hands-on experience with industry partners during the course</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Job Placement</h3>
              <p className="opacity-90">85% of our graduates find employment within 6 months</p>
            </div>
            <div className="text-center">
              <Globe className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Industry Network</h3>
              <p className="opacity-90">Connected with 15+ leading technology companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Tech Career Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of successful graduates who have transformed their lives through technical education. Your
            future in technology starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="https://ait.iak.ngo/register" target="_blank">
                Apply for Admission
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://ait.iak.ngo/" target="_blank">
                Visit AIT Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
