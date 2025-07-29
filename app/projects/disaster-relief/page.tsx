"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Shield,Truck,Home,Heart,Users,Clock,AlertTriangle,Package,Utensils,Tent,Phone,MapPin,Calendar,} from "lucide-react"
import Link from "next/link"
import CallToAction from "@/components/CallToAction"
import { motion } from "framer-motion"
import { useState } from "react";

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

export default function DisasterReliefProgramPage() {
  const [headingShine, setHeadingShine] = useState(false);
  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/disaster-back.png"
            alt="Disaster Relief Background"
            fill
            className="object-cover opacity-70 blur-sm"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Animated Heading and Paragraph */}
          {(() => {
            const headingWords = ["Disaster", "Relief", "Program"];
            const subtext = "Comprehensive disaster response services designed to provide immediate relief and long-term recovery support. Our team mobilizes quickly to deliver food, shelter, medical aid, and hope to families affected by floods, earthquakes, and other emergencies. Together, we help communities rebuild and recover stronger than before.";
            return (
              <>
                <motion.h1
                  className={`text-5xl md:text-6xl font-bold mb-6 text-darkblue flex flex-wrap justify-center ${headingShine ? "shimmer" : ""}`}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.18 } },
                    hidden: {},
                  }}
                  onAnimationComplete={() => setHeadingShine(true)}
                >
                  {headingWords.map((word, i) => (
                    <motion.span
                      key={i}
                      className={word === "Relief" ? "text-lightblue mx-2" : "mx-2"}
                      variants={{
                        hidden: { opacity: 0, y: 40, scale: 0.8 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.7 } },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-gray leading-relaxed mb-8 flex flex-wrap justify-center"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.045 } },
                    hidden: {},
                  }}
                >
                  {subtext.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-2"
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.8 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: 'spring', bounce: 0.3 } },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
                <div className="flex justify-center">
                  <Link href="/donate">
                    <button className="relative px-8 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 flex items-center">
                        <Heart className="mr-2 h-5 w-5" />
                        Donate for Relief
                      </span>
                    </button>
                  </Link>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-2">Our <span className="text-lightblue">Organization</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">Key facts and achievements that define Idara Al-Khair's journey and impact.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto px-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 text-left flex flex-col gap-3 max-w-xs mx-auto"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                {/* Card content */}
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-lightblue/80 group-hover:bg-white transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700 mx-auto">
                    <stat.icon className="w-6 h-6 text-white group-hover:text-lightblue transition-colors duration-500" strokeWidth={2.2} />
                  </div>
                  <div className="text-3xl font-bold text-darkblue mb-2 text-center">{stat.number}</div>
                  <h3 className="text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1 text-center">{stat.label}</h3>
                  <p className="text-gray mb-2 font-light leading-relaxed text-center">{stat.description}</p>
                </div>
              </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray">
                          <Shield className="w-4 h-4 mr-2 text-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Link href="/donate">
                      <button className="relative w-full px-8 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                        <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                        <span className="relative z-10 flex items-center justify-center">
                          <Heart className="mr-2 h-5 w-5" />
                          Donate for relief services
                        </span>
                      </button>
                    </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pastOperations.map((operation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow w-full mx-auto">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={operation.image || "/placeholder.svg"}
                    alt={operation.disaster}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{operation.disaster}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {operation.affected}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {operation.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{operation.support}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  )
} 