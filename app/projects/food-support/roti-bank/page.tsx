"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Heart, Utensils, Clock, Package, Truck, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import CallToAction from "@/components/CallToAction";

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
];

const dailyPrograms = [
  {
    title: "Daily Lunch Program",
    description: "Fresh, nutritious meals served to 200+ students and teachers daily",
    time: "12:00 PM - 1:00 PM",
    icon: <Utensils className="w-8 h-8 text-white" />,
    features: [
      "Balanced Nutrition",
      "Fresh Ingredients",
      "Hygienic Preparation",
      "Regular Schedule",
    ],
  },
  {
    title: "Monthly Ration Support",
    description: "Essential grocery items distributed to 50+ teachers and staff monthly",
    time: "1st Saturday of every month",
    icon: <Package className="w-8 h-8 text-white" />,
    features: [
      "Rice & Flour",
      "Cooking Oil",
      "Pulses & Spices",
      "Personal Care Items",
    ],
  },
  {
    title: "Emergency Food Support",
    description: "Immediate assistance for families facing food insecurity",
    time: "Available 24/7",
    icon: <AlertTriangle className="w-8 h-8 text-white" />,
    features: [
      "Quick Response",
      "Essential Items",
      "Family Support",
      "Follow-up Care",
    ],
  },
];

const distributionCenters = [
  {
    name: "Idara al-khair campus-1 (Main campus)",
    location: "Sector 5-J Sector 5 J New Karachi Town, Karachi",
    services: ["Daily Lunch", "Monthly Ration", "Emergency Support"],
    contact: "+92 300 2112609",
    hours: "Mon-Sat: 8:00 AM - 4:00 PM",
    link: "https://www.google.com/maps/place/Idara+Al+Khair+Campus+1/@25.0001846,67.0760591,21z/data=!4m14!1m7!3m6!1s0x3eb34123801a71e9:0xe5bac7442b1e8f41!2sIdara+Al+Khair+Campus+1!8m2!3d25.000129!4d67.0760504!16s%2Fg%2F11g7y4_v4l!3m5!1s0x3eb34123801a71e9:0xe5bac7442b1e8f41!8m2!3d25.000129!4d67.0760504!16s%2Fg%2F11g7y4_v4l?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Idara al-khair CFK (central food kitchen)",
    location: "Block-5, Sector 5-M, near Kifayah in North Karachi.",
    services: ["Emergency Support", "Special Programs", "Ramadan Distribution"],
    contact: "+92 300 2112609",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    link: "https://www.google.com/maps/place/ST+5,+Sector+5M+Sector+5+M+New+Karachi+Town,+Karachi,+Pakistan/@24.9967076,67.0667843,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb34118b060ffa3:0x99e621c15f86c708!8m2!3d24.9967028!4d67.0693592!16s%2Fg%2F11hc__9lrp?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function RotiBankPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/roti-bank-back.png"
            alt="Roti Bank Background"
            fill
            className="object-cover opacity-60 blur-sm"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* campuses-style animation for hero section */}
            {/* Heading */}
            <>
              {(() => {
                const headingWords = ["Al-khair", "Roti", "Bank"];
                return (
                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-darkblue mb-6 flex flex-wrap justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.18 } },
                      hidden: {},
                    }}
                  >
                    {headingWords.map((word, i) => (
                      <motion.span
                        key={i}
                        className={["Roti", "Bank"].includes(word.replace(/[^a-zA-Z]/g, "")) ? "text-lightblue mx-2" : "mx-2"}
                        variants={{
                          hidden: { opacity: 0, y: 40, scale: 0.8 },
                          visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.7 } },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>
                );
              })()}
              {(() => {
                const subtext = "Providing daily nutritious meals and essential food support to over 200 deserving students, teachers, and families. Our commitment to food security spans over 20 years of dedicated service.";
                return (
                  <motion.p
                    className="text-xm md:text-2xl text-gray leading-relaxed mb-8 flex flex-wrap justify-center"
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
                );
              })()}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="inline-block mt-4">
                <button className="relative px-8 py-3 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                  {/* Animated gradient overlay */}
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                    <span className="relative z-10">Support Alkhair Roti Bank</span>
                </button>
              </a>
            </div>
            </>
          </div>
        </div>
      </section>

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
            {rotiBankStats.map((stat, index) => (
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
                  <h3 className="text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1 text-center">{stat.title}</h3>
                  <p className="text-gray mb-2 font-light leading-relaxed text-center">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Roti Bank */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl font-bold text-darkblue mb-2">About <span className="text-lightblue">Our Program</span></h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">Roti Bank is Idara Al-Khair's flagship food support initiative, ensuring no student goes hungry and every family has access to nutritious meals.</p>
            </div>
            <div className="hidden md:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
            <div>
              <h2 className="text-4xl font-bold text-darkblue mb-6">
                Roti <span className="text-lightblue">Bank</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Roti Bank is Idara Al-Khair's flagship food support initiative,
                established to ensure that no student goes hungry. We believe
                that proper nutrition is fundamental to education and
                development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                For over 20 years, we have been providing daily lunches to 200+
                orphaned and deserving students, along with their teachers. Our
                program extends beyond daily meals to include monthly ration
                support and emergency food assistance for families in need.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Established</h4>
                    <p className="text-gray-600">2003</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">
                      Daily Recipients
                    </h4>
                    <p className="text-gray-600">200+ Students</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Centers</h4>
                    <p className="text-gray-600">2 Locations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Service</h4>
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
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl font-bold text-darkblue mb-2">Our <span className="text-lightblue">Food Programs</span></h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">Comprehensive food support programs designed to ensure nutrition and food security for our community.</p>
            </div>
            <div className="hidden md:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            {dailyPrograms.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/30 backdrop-blur-[6px] border border-white/30 shadow-[0_8px_32px_rgba(0,60,255,0.10)] rounded-2xl p-4 text-left flex flex-col gap-3 max-w-xs mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_48px_rgba(0,60,255,0.18)]"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 bg-lightblue/80 group-hover:bg-lightblue transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1 text-center">{program.title}</h3>
                  <p className="text-gray mb-2 font-light leading-relaxed text-center">{program.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.time}
                  </div>
                  <div>
                    <span className="font-semibold text-darkblue text-sm">Features:</span>
                    <div className="flex flex-wrap gap-1 mt-2 justify-center">
                      {program.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Centers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl font-bold text-darkblue mb-2">Distribution <span className="text-lightblue">Centers</span></h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">Visit our centers to receive food support or learn more about our programs.</p>
            </div>
            <div className="hidden md:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
            {distributionCenters.map((center, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/30 backdrop-blur-[6px] border border-white/30 shadow-[0_8px_32px_rgba(0,60,255,0.10)] rounded-2xl p-4 text-left flex flex-col gap-3 w-full max-w-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_48px_rgba(0,60,255,0.18)]"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                {/* Card content */}
                <div className="relative z-10">
                  <div className="text-xl text-darkblue font-bold mb-2 text-center">{center.name}</div>
                  <div className="flex items-center justify-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {center.location}
                  </div>
                  <div className="font-semibold text-darkblue text-sm mb-1">Services:</div>
                  <div className="flex flex-wrap gap-1 mb-2 justify-center">
                    {center.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                    <div>
                      <span className="font-semibold text-darkblue">Hours:</span>
                      <p className="text-gray-600">{center.hours}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-darkblue">Contact:</span>
                      <p className="text-lightblue font-bold">{center.contact}</p>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="w-full h-0.5 bg-gradient-to-r from-lightblue via-cyan-400 to-blue-400 rounded-full my-4" />
                  {/* Button */}
                  <Button
                    size="lg"
                    className="w-full border-2 border-lightblue text-lightblue bg-transparent hover:bg-lightblue/10 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href={center.link} target="_blank" rel="noopener noreferrer">
                      Visit Center
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
