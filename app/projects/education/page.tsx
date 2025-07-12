import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen, Award, MapPin, Phone, Star } from "lucide-react"
import Link from "next/link"

const campuses = [
  {
    name: "Idara Al-Khair School - Main Campus",
    location: "Karachi Central",
    established: "1995",
    students: "1,200+",
    grades: "Pre-K to Grade 12",
    image: "/placeholder.svg?height=300&width=400",
    facilities: ["Science Labs", "Computer Lab", "Library", "Sports Ground", "Cafeteria"],
    contact: "+92 21 1234 5678",
    description: "Our flagship campus offering comprehensive education from early childhood to matriculation.",
  },
  {
    name: "Idara Al-Khair School - North Campus",
    location: "North Karachi",
    established: "2003",
    students: "800+",
    grades: "Pre-K to Grade 10",
    image: "/placeholder.svg?height=300&width=400",
    facilities: ["Modern Classrooms", "Science Lab", "Computer Center", "Playground"],
    contact: "+92 21 2345 6789",
    description: "Serving the North Karachi community with quality education and modern facilities.",
  },
  {
    name: "Idara Al-Khair School - East Campus",
    location: "Gulshan-e-Iqbal",
    established: "2007",
    students: "950+",
    grades: "Pre-K to Grade 12",
    image: "/placeholder.svg?height=300&width=400",
    facilities: ["Digital Classrooms", "Science Labs", "Library", "Art Studio", "Sports Complex"],
    contact: "+92 21 3456 7890",
    description: "Modern educational facility with emphasis on technology integration and creative learning.",
  },
  {
    name: "Idara Al-Khair School - West Campus",
    location: "Orangi Town",
    established: "2010",
    students: "700+",
    grades: "Pre-K to Grade 8",
    image: "/placeholder.svg?height=300&width=400",
    facilities: ["Smart Classrooms", "Computer Lab", "Library", "Health Center"],
    contact: "+92 21 4567 8901",
    description: "Providing accessible education to underserved communities in West Karachi.",
  },
  {
    name: "Idara Al-Khair School - South Campus",
    location: "Korangi",
    established: "2012",
    students: "600+",
    grades: "Pre-K to Grade 10",
    image: "/placeholder.svg?height=300&width=400",
    facilities: ["Modern Labs", "IT Center", "Multipurpose Hall", "Playground"],
    contact: "+92 21 5678 9012",
    description: "Serving the industrial area with focus on technical and vocational preparation.",
  },
  {
    name: "Idara Al-Khair School - Malir Campus",
    location: "Malir",
    established: "2015",
    students: "500+",
    grades: "Pre-K to Grade 12",
    image: "/placeholder.svg?height=300&width=400",
    facilities: ["Science Labs", "Computer Center", "Library", "Sports Facilities"],
    contact: "+92 21 6789 0123",
    description: "Our newest campus bringing quality education to the Malir district.",
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
              Empowering students through comprehensive education across 6 campuses, serving over 6,000 students with
              modern facilities and experienced faculty.
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

      {/* Campus Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Campuses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six strategically located campuses across Karachi, each designed to serve local communities with quality
              education and modern facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={campus.image || "/placeholder.svg"}
                    alt={campus.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-600 text-white">Est. {campus.established}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{campus.name}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {campus.location}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{campus.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Students:</span>
                      <p className="text-teal-600 font-bold">{campus.students}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Grades:</span>
                      <p className="text-gray-600">{campus.grades}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Facilities:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {campus.facilities.map((facility, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-1" />
                      {campus.contact}
                    </div>
                    <Button size="sm" variant="outline">
                      Visit Campus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to nurture young minds and prepare them for future success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Early Childhood Education",
                description: "Pre-K to Grade 2 with focus on foundational skills, creativity, and social development.",
                features: ["Play-based Learning", "Montessori Method", "Art & Craft", "Basic Literacy & Numeracy"],
              },
              {
                title: "Primary Education",
                description: "Grade 3 to Grade 5 building strong academic foundation with modern teaching methods.",
                features: ["Core Subjects", "Science Experiments", "Computer Basics", "Sports & Recreation"],
              },
              {
                title: "Middle School",
                description:
                  "Grade 6 to Grade 8 preparing students for higher education with comprehensive curriculum.",
                features: ["Advanced Sciences", "Mathematics", "Languages", "Social Studies", "Life Skills"],
              },
              {
                title: "Secondary Education",
                description: "Grade 9 to Grade 10 with focus on board exam preparation and career guidance.",
                features: ["Board Exam Prep", "Career Counseling", "Practical Labs", "Extra-curricular Activities"],
              },
              {
                title: "Higher Secondary",
                description: "Grade 11 to Grade 12 with specialization tracks for university preparation.",
                features: ["Science Track", "Commerce Track", "Arts Track", "University Prep", "Scholarship Guidance"],
              },
              {
                title: "Special Programs",
                description: "Additional support programs for students with diverse learning needs.",
                features: [
                  "Remedial Classes",
                  "Gifted Student Program",
                  "Special Needs Support",
                  "Scholarship Program",
                ],
              },
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-teal-600">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
