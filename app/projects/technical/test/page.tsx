import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Heart, Users, Award, MapPin, Phone, Star, ArrowRight, GraduationCap } from "lucide-react"
import Link from "next/link"

const technicalPrograms = [
  {
    title: "AIT Program",
    description: "Comprehensive training in Heating, Ventilation, and Air Conditioning systems.",
    image: "/ait.jpg",
    link: "https://ait.iak.ngo/",
    features: ["Data Science", "Python Programming", "Game Development", "Job Placement"],
  },
]

const courses = [
  {
    title: "Data Analysis",
    description: "Comprehensive training in Data Analysis.",
    image: "/data-analysis.jpg",
    link: "https://ait.iak.ngo/",
  },
  {
    title: "Programming Specialization",
    description: "Comprehensive training in programming",
    image: "/programming.jpg",
    link: "https://ait.iak.ngo/",
    
  },
  {
    title: "Web Development",
    description: "Comprehensive training Web Development.",
    image: "/Web-development.jpg",
    link: "https://ait.iak.ngo/",
   
  },
  {
    title: "Graphic Designing",
    description: "Comprehensive training in Graphic Designing",
    image: "/Graphic-design.jpg",
    link: "https://ait.iak.ngo/",
    
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive training in Digital Marketing and communication.",
    image: "/dibital-marketing.jpg",
    link: "https://ait.iak.ngo/",
   
  },
  {
    title: "Game development",
    description: "Comprehensive training in Game development.",
    image: "/game-development.png",
    link: "https://ait.iak.ngo/",
    
  },

]


export default function TechnicalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0 hover:from-teal-600 hover:to-blue-700">
              <Building2 className="w-4 h-4 mr-2" />
              Technical Training
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Al-khair <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Institute of</span> Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              AIT is dedicated to empowering underserved communities through exceptional tech education, fueled by innovation and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"https://ait.iak.ngo/register"}>
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg">
                <GraduationCap className="mr-2 h-5 w-5" />
               View Website
              </Button>
              </Link>
              <Link href={"/projects/technical/test#our-courses"}>
              <Button size="lg" variant="outline" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent">
                View Courses
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Programs */}
     <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive vocational training programs designed to equip students with practical skills for the modern workforce.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side: AIT Text */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Al Khair Institute of Technology (AIT)
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          AIT is committed to empowering underserved communities by providing high-quality tech education, driven by innovation and technology.
          To empower individuals through cutting-edge technological education, fostering innovation and ethical leadership that addresses the challenges
          of tomorrow's digital landscape while serving humanity with compassion and excellence.
        </p>
      </div>

      {/* Right Side: Full Column Background Image */}
      {technicalPrograms.map((program, index) => (
        <div
          key={index}
          className="h-[400px] w-full rounded-lg bg-cover bg-center shadow-xl hover:shadow-2xl transition-all duration-300"
          style={{
            backgroundImage: `url(${program.image || "/placeholder.svg"})`,
          }}
        ></div>
      ))}
    </div>
  </div>
</section>
     
        <section id = "our-courses" className="py-20 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Courses</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Explore a range of courses designed to equip you with future-ready technical skills.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">{course.title}</CardTitle>
            <CardDescription className="text-gray-600">
              {course.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Link href={course.link} target="_blank">
              <Button
                className="w-[90%] mx-auto block bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700"
              >
                Apply Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>

     </section>
    </main>
  )
}
