import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, Users, Truck, MapPin, Phone, Star, ArrowRight, AlertTriangle } from "lucide-react"
import Link from "next/link"

const disasterPrograms = [
  {
    title: "Disaster Relief Program",
    description: "Emergency response and relief operations during natural disasters and crises.",
    image: "/disaster.jpeg",
    link: "/projects/disaster-relief/disaster-relief-program",
    features: ["Emergency Response", "Relief Operations", "Crisis Management", "Community Support"],
  },
  {
    title: "Free Rozgar Program",
    description: "Employment and skill development programs for disaster-affected communities.",
    image: "/disaster.jpeg",
    link: "/projects/disaster-relief/free-rozgar",
    features: ["Skill Training", "Job Placement", "Economic Recovery", "Community Rebuilding"],
  },
]

const achievements = [
  {
    icon: Shield,
    title: "100+ Operations",
    description: "Successfully completed relief operations",
  },
  {
    icon: Users,
    title: "3000+ Families",
    description: "Supported during disasters",
  },
  {
    icon: Truck,
    title: "24/7 Response",
    description: "Emergency response team",
  },
  {
    icon: Heart,
    title: "10+ Regions",
    description: "Served across Pakistan",
  },
]

export default function DisasterReliefPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0 hover:from-teal-600 hover:to-blue-700">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Disaster Relief Program
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Emergency <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Response</span> & Relief
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Providing immediate emergency response and long-term recovery support to communities affected 
              by natural disasters and humanitarian crises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg">
                <Shield className="mr-2 h-5 w-5" />
                Emergency Support
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent">
                Volunteer for Relief
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

      {/* Disaster Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Disaster Relief Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive emergency response and recovery programs designed to help communities rebuild and recover.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {disasterPrograms.map((program, index) => (
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
          <h2 className="text-4xl font-bold mb-4">Support Disaster Relief Efforts</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Help us provide emergency relief and recovery support to communities affected by disasters. 
            Your support can make a difference in times of crisis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 shadow-lg">
              <Heart className="w-5 h-5 mr-2" />
              Donate for Relief
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Volunteer for Relief</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
