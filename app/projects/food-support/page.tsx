import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, MapPin, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

const foodPrograms = [
  {
    title: "Roti Bank",
    description: "Daily nutritious meals and monthly ration support for students and families in need.",
    image: "/food-security.jpg",
    link: "/projects/food-support/roti-bank",
    features: ["Daily Lunch Program", "Monthly Ration", "Emergency Support", "200+ Recipients"],
  },
  {
    title: "Ramzan Ration",
    description: "Comprehensive food distribution during Ramadan, supporting 1,700+ families.",
    image: "/relief-aids.jpg",
    link: "/projects/food-support/ramzan-ration",
    features: ["Ramadan Distribution", "Eid Support", "Sehri & Iftar", "1,700+ Families"],
  },
  {
    title: "Poor Villages Program",
    description: "Extending food support to rural communities across 15+ villages in Sindh.",
    image: "/sindh.jpg",
    link: "/projects/food-support/poor-villages",
    features: ["Rural Development", "Agricultural Support", "15+ Villages", "500+ Families"],
  },
]

const achievements = [
  {
    icon: Users,
    title: "200+ Daily Recipients",
    description: "Students and teachers receiving daily meals",
  },
  {
    icon: Calendar,
    title: "1,700+ Families",
    description: "Supported during Ramadan",
  },
  {
    icon: MapPin,
    title: "15+ Villages",
    description: "Rural communities served",
  },
  {
    icon: Heart,
    title: "20+ Years Service",
    description: "Consistent food support",
  },
]

export default function FoodSupportPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Food Support Program</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Food Support</span> Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Ensuring food security and nutrition for deserving families across urban and rural communities. 
              Our comprehensive programs serve over 2,000 families annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Heart className="mr-2 h-5 w-5" />
                Support Food Programs
              </Button>
              <Button size="lg" variant="outline">
                Volunteer with Us
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Food Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive food support initiatives designed to address different aspects of food security 
              and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {foodPrograms.map((program, index) => (
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

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Food Security Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Help us provide nutritious food to more families. Your support can ensure no one goes hungry 
            and every family has access to essential nutrition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Donate to Food Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/contact">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
