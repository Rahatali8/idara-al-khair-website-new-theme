import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen, Award, MapPin, Phone, Star, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

const educationPrograms = [
  {
    title: "Our Campuses",
    description: "Explore our six campuses across Karachi, each serving local communities with quality education and modern facilities.",
    image: "/quality-education.jpg",
    link: "/projects/education/campuses",
    features: ["6 Campuses", "6000+ Students", "Modern Facilities", "Experienced Faculty"],
  },
  {
    title: "Al-Khair College",
    description: "Our premier technical institute offering cutting-edge programs in computer science, business, and digital arts.",
    image: "/Programming-language.jpg",
    link: "/projects/education/alkhair-college",
    features: ["Technical Programs", "Industry Partners", "Modern Labs", "Career Support"],
  },
]

const achievements = [
  {
    icon: Award,
    title: "95% Pass Rate",
    description: "Consistently high academic performance across all campuses",
  },
  {
    icon: Users,
    title: "6000+ Students",
    description: "Currently enrolled across all our educational institutes",
  },
  {
    icon: GraduationCap,
    title: "15,000+ Graduates",
    description: "Alumni making positive impact in their communities",
  },
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description: "Updated syllabus with focus on practical skills and critical thinking",
  },
]

export default function EducationPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">Education Program</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Quality <span className="text-teal-600">Education</span> for All
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Empowering students through comprehensive education across multiple campuses and institutes, serving over 6,000 students 
              with modern facilities and experienced faculty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
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

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Educational Institutes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive educational offerings through our school campuses and technical college.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {educationPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href={program.link}>
                      Explore {program.title}
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Educational Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Help us provide quality education to more children. Your support can transform lives and build a better
            future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              Donate to Education
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Become a Volunteer Teacher</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
