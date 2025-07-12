import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Truck,
  Home,
  Heart,
  Users,
  Clock,
  AlertTriangle,
  Package,
  Utensils,
  Tent,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react"
import Link from "next/link"

const reliefServices = [
  {
    title: "Emergency Response",
    description:
      "Immediate response to natural disasters with rescue operations, first aid, and emergency shelter setup.",
    icon: AlertTriangle,
    services: ["Rescue Operations", "First Aid", "Emergency Shelter", "Evacuation Support", "Crisis Coordination"],
    image: "/emergency-resp.jpg",
    responseTime: "Within 24 Hours",
  },
  {
    title: "Food & Water Distribution",
    description:
      "Essential food supplies and clean drinking water distribution to affected communities during emergencies.",
    icon: Utensils,
    services: ["Cooked Meals", "Food Packages", "Clean Water", "Nutrition Support", "Kitchen Setup"],
    image: "/water-des.jpg",
    responseTime: "Immediate",
  },
  {
    title: "Temporary Shelter",
    description: "Providing temporary housing solutions and shelter materials for displaced families and communities.",
    icon: Tent,
    services: ["Tent Distribution", "Temporary Housing", "Shelter Materials", "Bedding Supplies", "Privacy Solutions"],
    image: "/temp-shelter.jpg",
    responseTime: "Within 48 Hours",
  },
  {
    title: "Medical Aid",
    description: "Emergency medical care, mobile health units, and medical supplies for disaster-affected populations.",
    icon: Heart,
    services: ["Mobile Clinics", "Emergency Medicine", "First Aid Training", "Health Screening", "Medical Supplies"],
    image: "/medical-aid.jpg",
    responseTime: "Within 12 Hours",
  },
  {
    title: "Relief Supplies",
    description: "Distribution of essential items including clothing, hygiene kits, and household necessities.",
    icon: Package,
    services: ["Clothing Distribution", "Hygiene Kits", "Household Items", "Baby Supplies", "Personal Care"],
    image: "/relief-aids.jpg",
    responseTime: "Within 72 Hours",
  },
  {
    title: "Rehabilitation Support",
    description: "Long-term support for community rebuilding, livelihood restoration, and infrastructure repair.",
    icon: Home,
    services: [
      "House Reconstruction",
      "Livelihood Support",
      "Infrastructure Repair",
      "Community Building",
      "Skill Training",
    ],
    image: "/rehlibation.jpg",
    responseTime: "Ongoing Support",
  },
]

const pastOperations = [
  {
    disaster: "Karachi Floods 2020",
    affected: "50,000+ People",
    duration: "3 Months",
    support: "Emergency shelter, food distribution, medical aid",
    image: "/flood-rel.jpg",
  },
  {
    disaster: "Balochistan Earthquake 2019",
    affected: "25,000+ People",
    duration: "6 Months",
    support: "Rescue operations, temporary housing, rehabilitation",
    image: "/blochistan-erth.jpg",
  },
  {
    disaster: "Sindh Drought Relief 2018",
    affected: "75,000+ People",
    duration: "8 Months",
    support: "Water supply, livestock support, agricultural aid",
    image: "/sindh.jpg",
  },
  {
    disaster: "Punjab Flood Relief 2021",
    affected: "40,000+ People",
    duration: "4 Months",
    support: "Evacuation, food supplies, medical camps",
    image: "/punjab-rel.jpg",
  },
]

const stats = [
  {
    icon: Users,
    number: "200,000+",
    label: "People Assisted",
    description: "Lives impacted through disaster relief operations",
  },
  {
    icon: Shield,
    number: "100+",
    label: "Relief Operations",
    description: "Emergency responses across Pakistan",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Emergency Hotline",
    description: "Round-the-clock disaster response coordination",
  },
  {
    icon: Truck,
    number: "15+",
    label: "Mobile Units",
    description: "Equipped vehicles for rapid deployment",
  },
]

export default function DisasterReliefPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">Disaster Relief Program</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Emergency <span className="text-teal-600">Disaster Relief</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Rapid response to natural disasters and emergencies, providing immediate relief, rehabilitation support,
              and long-term recovery assistance to affected communities across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: 1122
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="mr-2 h-5 w-5" />
                Support Relief Efforts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <stat.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relief Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Relief Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive disaster response services designed to provide immediate relief and long-term recovery
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reliefServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-teal-600 text-white">{service.responseTime}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services Provided:</h4>
                    <ul className="space-y-1">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Shield className="w-4 h-4 mr-2 text-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Operations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Relief Operations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record of successful disaster response operations across Pakistan, helping communities recover
              and rebuild.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastOperations.map((operation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative h-40 overflow-hidden rounded-t-lg">
                  <Image
                    src={operation.image || "/placeholder.svg"}
                    alt={operation.disaster}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-sm">{operation.disaster}</h3>
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Affected:</span>
                      <p className="text-teal-600 font-bold">{operation.affected}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Duration:</span>
                      <p className="text-gray-600">{operation.duration}</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700 text-sm">Support Provided:</span>
                    <p className="text-gray-600 text-sm mt-1">{operation.support}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Preparedness */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Emergency Preparedness</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We maintain constant readiness to respond to disasters with pre-positioned supplies, trained teams, and
              strategic partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Rapid Deployment</h3>
              <p className="opacity-90">Mobile response units ready for immediate deployment to disaster zones</p>
            </div>
            <div className="text-center">
              <Package className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Pre-positioned Supplies</h3>
              <p className="opacity-90">Strategic stockpiles of relief materials in key locations across Pakistan</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Trained Volunteers</h3>
              <p className="opacity-90">Network of trained volunteers ready to assist in emergency situations</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
              <p className="text-xl text-gray-600">
                Join our disaster relief efforts and help us be ready to respond when communities need us most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Make a Donation</h3>
                  <p className="text-gray-600 mb-6">
                    Your financial contribution helps us maintain emergency supplies, equipment, and rapid response
                    capabilities.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 w-full">Donate for Disaster Relief</Button>
                </div>
              </Card>

              <Card className="p-8">
                <div className="text-center">
                  <Users className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer with Us</h3>
                  <p className="text-gray-600 mb-6">
                    Join our volunteer network and receive training to help during emergency response operations.
                  </p>
                  <Button
                    variant="outline"
                    asChild
                    className="border-teal-500 text-teal-600 hover:bg-teal-50 w-full bg-transparent"
                  >
                    <Link href="/contact">Become a Volunteer</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Emergency Contact Information</h2>
          <p className="text-xl opacity-90 mb-8">
            In case of emergency or to report a disaster situation, contact us immediately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Emergency Hotline</h3>
              <p className="text-2xl font-bold">1122</p>
              <p className="text-sm opacity-80">24/7 Available</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Coordination Center</h3>
              <p>Disaster Response HQ</p>
              <p>Karachi, Pakistan</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-xl font-bold">Within 24 Hours</p>
              <p className="text-sm opacity-80">Emergency deployment</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
