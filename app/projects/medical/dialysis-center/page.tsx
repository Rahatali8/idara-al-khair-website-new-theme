import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Clock, Users, MapPin, Phone, Star, Construction, Calendar, AlertCircle } from "lucide-react"
import Link from "next/link"

const comingSoonFeatures = [
  {
    icon: Heart,
    title: "Advanced Dialysis Equipment",
    description: "State-of-the-art dialysis machines for optimal patient care",
  },
  {
    icon: Users,
    title: "Expert Nephrologists",
    description: "Specialized kidney care physicians and trained staff",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Services",
    description: "Round-the-clock dialysis services for critical patients",
  },
  {
    icon: Star,
    title: "Quality Care Standards",
    description: "International standards of dialysis treatment and care",
  },
]

const plannedServices = [
  {
    title: "Hemodialysis",
    description: "Advanced hemodialysis treatment for kidney patients",
    icon: "💉",
    features: ["Modern Machines", "Expert Staff", "Comfortable Environment", "Regular Monitoring"],
  },
  {
    title: "Peritoneal Dialysis",
    description: "Home-based dialysis treatment options",
    icon: "🏠",
    features: ["Home Training", "Equipment Support", "24/7 Support", "Regular Checkups"],
  },
  {
    title: "Kidney Care Consultation",
    description: "Specialized consultation and treatment planning",
    icon: "👨‍⚕️",
    features: ["Expert Consultation", "Treatment Planning", "Diet Guidance", "Follow-up Care"],
  },
]

export default function DialysisCenterPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Coming Soon</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Al-Khair Hospital</span> - Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              We are excited to announce our new Al-Khair Hospital, currently under development. 
              This facility will provide specialized healthcare services to our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Heart className="mr-2 h-5 w-5" />
                Get Notified
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dialysis Center */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Al-Khair Hospital</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our upcoming Al-Khair Hospital will be a state-of-the-art facility dedicated to providing 
                comprehensive healthcare services. We understand the critical need for accessible medical 
                treatment in our community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The hospital will feature modern medical equipment, experienced doctors, and a 
                compassionate care team. Our goal is to provide high-quality healthcare services 
                to patients who need regular treatment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Construction className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Status</h4>
                    <p className="text-gray-600">Under Development</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expected Opening</h4>
                    <p className="text-gray-600">2024</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Karachi Central</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service</h4>
                    <p className="text-gray-600">Specialized Care</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/hospital.png"
                alt="Al-Khair Hospital - Coming Soon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center text-red-600">
                  <Construction className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Planned Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Al-Khair Hospital will offer comprehensive healthcare services with modern facilities 
              and expert medical staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plannedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-red-600">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Features:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {service.features.map((feature, idx) => (
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

      {/* Coming Soon Alert */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Al-Khair Hospital is currently under development. We are working hard to bring 
                you the best healthcare services. Stay tuned for updates on our opening date.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Get Notified When Ready
                </Button>
                <Button size="lg" variant="outline">
                  Contact for Updates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Support Our Al-Khair Hospital</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Help us build this essential healthcare facility. Your support can make quality healthcare 
            accessible to more patients in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Donate for Al-Khair Hospital
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              <Link href="/contact">Contact for Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 