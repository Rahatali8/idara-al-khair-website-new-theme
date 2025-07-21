import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Heart, Users, Award, MapPin, Phone, Star, ArrowRight, GraduationCap } from "lucide-react"
import Link from "next/link"

const technicalPrograms = [
  {
    title: "HVAC Program",
    description: "Comprehensive training in Heating, Ventilation, and Air Conditioning systems.",
    image: "/skill-devp.jpg",
    link: "/projects/technical/hvac-program",
    features: ["HVAC Training", "Practical Skills", "Industry Certification", "Job Placement"],
  },
]

const achievements = [
  {
    icon: GraduationCap,
    title: "500+ Students",
    description: "Trained in technical skills",
  },
  {
    icon: Users,
    title: "15+ Courses",
    description: "Available for training",
  },
  {
    icon: Award,
    title: "80% Placement",
    description: "Successful job placement rate",
  },
  {
    icon: Building2,
    title: "Industry Partners",
    description: "Collaborating with companies",
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
              Skill <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Development</span> Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Empowering youth with practical technical skills and vocational training to prepare them 
              for modern employment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent">
                View Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <achievement.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technical Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive vocational training programs designed to equip students with practical skills for the modern workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
            {technicalPrograms.map((program, index) => (
              <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{program.title}</CardTitle>
                  <CardDescription className="text-lg">{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 px-8">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Key Features:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {program.features.map((feature, idx) => (
                        <Badge key={idx} className="bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg">
                    <Link href={program.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Support Technical Education</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Help us provide quality technical training to more students. Your support can create 
            employment opportunities and build a skilled workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 shadow-lg">
              <Heart className="w-5 h-5 mr-2" />
              Donate for Training
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Become a Trainer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
