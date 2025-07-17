import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, MapPin, Heart, Moon, Package, Truck, Star, Clock } from "lucide-react"
import Link from "next/link"

const ramzanStats = [
  {
    icon: Users,
    title: "1,700+ Families",
    description: "Supported during Ramadan",
  },
  {
    icon: Package,
    title: "Essential Items",
    description: "Complete ration packages distributed",
  },
  {
    icon: Calendar,
    title: "30 Days Service",
    description: "Throughout the holy month",
  },
  {
    icon: Heart,
    title: "100% Free",
    description: "No cost to deserving families",
  },
]

const ramzanPrograms = [
  {
    title: "Ramadan Ration Distribution",
    description: "Complete ration packages with essential food items for 1,700+ families",
    icon: "📦",
    items: ["Rice & Flour", "Cooking Oil", "Pulses & Spices", "Sugar & Tea", "Dates & Fruits"],
    timing: "Throughout Ramadan",
  },
  {
    title: "Eid-ul-Fitr Support",
    description: "Special food packages and festive items for Eid celebrations",
    icon: "🌟",
    items: ["Special Sweets", "Meat & Chicken", "Festive Items", "Eid Gifts", "Family Packages"],
    timing: "Eid-ul-Fitr",
  },
  {
    title: "Sehri & Iftar Programs",
    description: "Daily meals for fasting students and families in need",
    icon: "🌙",
    items: ["Sehri Meals", "Iftar Packages", "Dates & Water", "Nutritious Food", "Community Iftar"],
    timing: "Daily during Ramadan",
  },
]

const distributionSchedule = [
  {
    week: "Week 1",
    focus: "Initial Distribution",
    description: "First round of ration packages to registered families",
    date: "1st-7th Ramadan",
  },
  {
    week: "Week 2",
    focus: "Extended Support",
    description: "Additional families and emergency cases",
    date: "8th-14th Ramadan",
  },
  {
    week: "Week 3",
    focus: "Community Programs",
    description: "Sehri and Iftar programs for students",
    date: "15th-21st Ramadan",
  },
  {
    week: "Week 4",
    focus: "Eid Preparation",
    description: "Eid-ul-Fitr packages and festive items",
    date: "22nd-30th Ramadan",
  },
]

export default function RamzanRationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ramzan-rashon-bg.png"
            alt="Ramzan Ration Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-teal-600 hover:bg-purple-200">Ramzan Ration</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Ramzan Ration Program</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Supporting 1,700+ families with essential food items during the holy month of Ramadan. 
              Our comprehensive ration distribution ensures no family goes hungry during this blessed time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                Support Ramzan Program
              </Button>
              <Button size="lg" variant="outline">
                Register for Ration
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ramzanStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Ramzan Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ramzan Ration Program</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Ramzan Ration Distribution program is one of our most impactful initiatives, reaching over 
                1,700 families during the holy month of Ramadan. We believe that every family should be able 
                to observe their fasts with dignity and have access to nutritious food.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                In collaboration with other organizations and generous donors, we arrange comprehensive ration 
                packages that include all essential food items needed for the month. Our program extends beyond 
                basic ration to include daily Sehri and Iftar support for students and special Eid packages.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Duration</h4>
                    <p className="text-gray-600">Full Ramadan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Families</h4>
                    <p className="text-gray-600">1,700+ Supported</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Package className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Packages</h4>
                    <p className="text-gray-600">Complete Ration</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service</h4>
                    <p className="text-gray-600">100% Free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/relief-aids.jpg"
                alt="Ramzan ration distribution"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ramzan Programs</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Comprehensive food support programs during the holy month of Ramadan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            {ramzanPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.timing}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Items Included:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {program.items.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {item}
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

      {/* Distribution Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Distribution Schedule</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Our organized approach ensures timely and efficient distribution throughout Ramadan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
            {distributionSchedule.map((schedule, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-teal-600">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900">{schedule.week}</CardTitle>
                  <CardDescription className="font-semibold text-gray-900">{schedule.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{schedule.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {schedule.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Support Our Ramzan Mission</h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Help us provide essential food items to more families during Ramadan. Your support can ensure 
            every family observes their fasts with dignity and has access to nutritious food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Donate for Ramzan
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Link href="/contact">Volunteer for Distribution</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 