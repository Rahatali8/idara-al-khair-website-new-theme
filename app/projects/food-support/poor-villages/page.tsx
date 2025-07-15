import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, MapPin, Heart, Truck, Package, Globe, Clock, Star } from "lucide-react"
import Link from "next/link"

const villageStats = [
  {
    icon: Users,
    title: "500+ Families",
    description: "Supported in rural areas",
  },
  {
    icon: MapPin,
    title: "15+ Villages",
    description: "Across Sindh province",
  },
  {
    icon: Truck,
    title: "Monthly Visits",
    description: "Regular food distribution",
  },
  {
    icon: Heart,
    title: "Sustainable Support",
    description: "Long-term assistance programs",
  },
]

const villagePrograms = [
  {
    title: "Rural Food Distribution",
    description: "Monthly food packages delivered to remote villages",
    icon: "🏘️",
    items: ["Rice & Flour", "Cooking Oil", "Pulses", "Sugar & Tea", "Hygiene Items"],
    frequency: "Monthly",
  },
  {
    title: "Agricultural Support",
    description: "Seeds, tools, and training for sustainable farming",
    icon: "🌾",
    items: ["Seeds & Fertilizers", "Farming Tools", "Training Programs", "Water Management", "Crop Support"],
    frequency: "Seasonal",
  },
  {
    title: "Emergency Relief",
    description: "Immediate assistance during natural disasters",
    icon: "🚨",
    items: ["Emergency Food", "Clean Water", "Medical Supplies", "Shelter Support", "Rehabilitation"],
    frequency: "As Needed",
  },
]

const targetVillages = [
  {
    name: "Village Al-Khair",
    location: "Tharparkar District",
    families: "50+",
    programs: ["Monthly Ration", "Agricultural Support", "Education"],
    status: "Active",
  },
  {
    name: "Village Rehmat",
    location: "Umerkot District",
    families: "35+",
    programs: ["Food Distribution", "Water Projects", "Health Camps"],
    status: "Active",
  },
  {
    name: "Village Barkat",
    location: "Mirpurkhas District",
    families: "40+",
    programs: ["Rural Development", "Skill Training", "Microfinance"],
    status: "Active",
  },
  {
    name: "Village Noor",
    location: "Sanghar District",
    families: "30+",
    programs: ["Food Security", "Education", "Healthcare"],
    status: "Active",
  },
]

const impactAreas = [
  {
    title: "Food Security",
    description: "Ensuring regular access to nutritious food for rural families",
    icon: "🍽️",
    impact: "500+ families fed monthly",
  },
  {
    title: "Education Support",
    description: "Providing educational materials and support for village children",
    icon: "📚",
    impact: "200+ children enrolled",
  },
  {
    title: "Healthcare Access",
    description: "Regular health camps and medical assistance in villages",
    icon: "🏥",
    impact: "15+ health camps annually",
  },
  {
    title: "Economic Development",
    description: "Skill training and microfinance for sustainable livelihoods",
    icon: "💼",
    impact: "100+ families empowered",
  },
]

export default function PoorVillagesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-600 hover:bg-teal-200">Poor Villages Program</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Poor Villages Food Support</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Extending our food support and development programs to rural communities across Sindh. 
              We reach 15+ villages, supporting 500+ families with sustainable food security and development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                Support Village Program
              </Button>
              <Button size="lg" variant="outline">
                Adopt a Village
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {villageStats.map((stat, index) => (
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

      {/* About Village Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
        <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Poor Villages Program</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Poor Villages Program extends Idara Al-Khair's mission to rural communities across Sindh. 
                We believe that every family, regardless of their location, deserves access to food security 
                and basic necessities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through regular visits, we provide monthly food packages, agricultural support, and development 
                programs to 15+ villages. Our approach focuses on sustainable development, empowering communities 
                to become self-reliant while ensuring immediate food security.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Coverage</h4>
                    <p className="text-gray-600">15+ Villages</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Families</h4>
                    <p className="text-gray-600">500+ Supported</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Frequency</h4>
                    <p className="text-gray-600">Monthly Visits</p>
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
                src="/sindh.jpg"
                alt="Rural village development program"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Village Programs</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Comprehensive support programs designed for rural communities and sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            {villagePrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <CardTitle className="text-xl text-teal-600">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.frequency}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Services:</span>
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

      {/* Target Villages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Target Villages</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Our programs reach villages across different districts of Sindh, providing comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
            {targetVillages.map((village, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-teal-600">{village.name}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {village.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-900">Families:</span>
                    <span className="text-teal-600 font-bold">{village.families}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Programs:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {village.programs.map((program, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Badge className="bg-teal-100 text-teal-800">
                      {village.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact Areas</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Comprehensive development programs addressing multiple aspects of rural community needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
            {impactAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <CardTitle className="text-xl text-teal-600">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Badge className="bg-teal-100 text-teal-800">
                    {area.impact}
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
          <h2 className="text-4xl font-bold mb-4 text-white">Support Our Village Mission</h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Help us reach more rural communities and provide sustainable support to families in need. 
            Your contribution can transform entire villages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Donate for Villages
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Link href="/contact">Volunteer for Villages</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 