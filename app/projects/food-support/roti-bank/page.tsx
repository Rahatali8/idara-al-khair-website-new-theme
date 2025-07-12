import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, MapPin, Heart, Utensils, Clock, Package, Truck } from "lucide-react"
import Link from "next/link"

const rotiBankStats = [
  {
    icon: Users,
    title: "200+ Daily Recipients",
    description: "Students and teachers receiving daily meals",
  },
  {
    icon: Utensils,
    title: "50,000+ Meals Served",
    description: "Nutritious meals provided annually",
  },
  {
    icon: Calendar,
    title: "20+ Years Service",
    description: "Consistent food support since establishment",
  },
  {
    icon: Heart,
    title: "100% Free Service",
    description: "No cost to deserving families",
  },
]

const dailyPrograms = [
  {
    title: "Daily Lunch Program",
    description: "Fresh, nutritious meals served to 200+ students and teachers daily",
    time: "12:00 PM - 1:00 PM",
    icon: "🍽️",
    features: ["Balanced Nutrition", "Fresh Ingredients", "Hygienic Preparation", "Regular Schedule"],
  },
  {
    title: "Monthly Ration Support",
    description: "Essential grocery items distributed to 50+ teachers and staff monthly",
    time: "1st Saturday of every month",
    icon: "📦",
    features: ["Rice & Flour", "Cooking Oil", "Pulses & Spices", "Personal Care Items"],
  },
  {
    title: "Emergency Food Support",
    description: "Immediate assistance for families facing food insecurity",
    time: "Available 24/7",
    icon: "🚨",
    features: ["Quick Response", "Essential Items", "Family Support", "Follow-up Care"],
  },
]

const distributionCenters = [
  {
    name: "Main Campus - Korangi",
    location: "Sector 51-B, Korangi, Karachi",
    services: ["Daily Lunch", "Monthly Ration", "Emergency Support"],
    contact: "+92 21 1234 5678",
    hours: "Mon-Sat: 8:00 AM - 4:00 PM",
  },
  {
    name: "Community Center - Landhi",
    location: "Landhi Town, Karachi",
    services: ["Emergency Support", "Special Programs", "Ramadan Distribution"],
    contact: "+92 21 2345 6789",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
  },
]

export default function RotiBankPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Roti Bank</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">Roti Bank</span> - Food for All
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Providing daily nutritious meals and essential food support to over 200 deserving students, 
              teachers, and families. Our commitment to food security spans over 20 years of dedicated service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Heart className="mr-2 h-5 w-5" />
                Support Roti Bank
              </Button>
              <Button size="lg" variant="outline">
                Volunteer with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rotiBankStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Roti Bank */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Roti Bank</h2>
              <p className="text-lg text-gray-600 mb-6">
                Roti Bank is Idara Al-Khair's flagship food support initiative, established to ensure that no 
                student goes hungry. We believe that proper nutrition is fundamental to education and development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                For over 20 years, we have been providing daily lunches to 200+ orphaned and deserving students, 
                along with their teachers. Our program extends beyond daily meals to include monthly ration support 
                and emergency food assistance for families in need.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Established</h4>
                    <p className="text-gray-600">2003</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Daily Recipients</h4>
                    <p className="text-gray-600">200+ Students</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Centers</h4>
                    <p className="text-gray-600">2 Locations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service</h4>
                    <p className="text-gray-600">100% Free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/food-security.jpg"
                alt="Students receiving meals at Roti Bank"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Food Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive food support programs designed to ensure nutrition and food security for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dailyPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <CardTitle className="text-xl text-orange-600">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.time}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Features:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {program.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Centers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Distribution Centers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our centers to receive food support or learn more about our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {distributionCenters.map((center, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{center.name}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {center.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Services:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {center.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Hours:</span>
                      <p className="text-gray-600">{center.hours}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Contact:</span>
                      <p className="text-orange-600 font-bold">{center.contact}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Visit Center
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Support Our Roti Bank Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Help us provide nutritious meals to more children. Your support can ensure no child goes hungry 
            and every student has the energy to learn and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Donate to Roti Bank
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Link href="/contact">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 