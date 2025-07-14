import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, Heart, Users, Truck, MapPin, Phone, Star, Building, ArrowRight, Gift } from "lucide-react"
import Link from "next/link"

const foodPrograms = [
  {
    title: "Food Support Program",
    description: "Regular food distribution to families in need across multiple communities.",
    image: "/food-security.jpg",
    link: "/projects/food-support",
    features: ["Daily Distribution", "5000+ Families", "Fresh Food", "Community Centers"],
  },
  {
    title: "Roti Bank",
    description: "Providing fresh bread daily to families who cannot afford basic food items.",
    image: "/food-security.jpg",
    link: "/projects/food-support/roti-bank",
    features: ["Daily Bread", "Fresh Baked", "Local Bakeries", "Community Support"],
  },
  {
    title: "Ramzan Ration",
    description: "Special food packages distributed during the holy month of Ramadan.",
    image: "/food-security.jpg",
    link: "/projects/food-support/ramzan-ration",
    features: ["Monthly Packages", "Essential Items", "Ramadan Focus", "Family Support"],
  },
  {
    title: "Poor Villages Support",
    description: "Targeted food assistance for the most vulnerable communities in rural areas.",
    image: "/food-security.jpg",
    link: "/projects/food-support/poor-villages",
    features: ["Rural Focus", "Village Outreach", "Sustainable Support", "Community Building"],
  },
]

const achievements = [
  {
    icon: Heart,
    title: "50,000+ Meals",
    description: "Distributed monthly to families in need",
  },
  {
    icon: Users,
    title: "5000+ Families",
    description: "Regularly supported through our programs",
  },
  {
    icon: Truck,
    title: "15 Centers",
    description: "Operating across different communities",
  },
  {
    icon: Utensils,
    title: "Daily Distribution",
    description: "Fresh food provided every day",
  },
]

export default function FoodSupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0 hover:from-teal-600 hover:to-blue-700">
              <Utensils className="w-4 h-4 mr-2" />
              Food Security Program
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fighting <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Hunger</span> Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Ensuring food security for vulnerable families through comprehensive programs including daily distribution, 
              roti banks, and special assistance during Ramadan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg">
                <Heart className="mr-2 h-5 w-5" />
                Support Food Program
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent">
                Volunteer for Distribution
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

      {/* Food Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Food Support Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive food assistance programs designed to address hunger and food insecurity in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foodPrograms.map((program, index) => (
              <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
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
          <h2 className="text-4xl font-bold mb-4">Help Us Fight Hunger</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Your support can provide meals to families in need. Every contribution helps us reach more people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 shadow-lg">
              <Gift className="w-5 h-5 mr-2" />
              Donate for Food
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Volunteer for Distribution</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
