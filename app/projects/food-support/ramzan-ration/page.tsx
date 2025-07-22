"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Heart, Package, Clock, Star, Moon, Truck } from "lucide-react"
import { motion } from "framer-motion"
import CallToAction from "@/components/CallToAction"
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
    icon: <Package className="w-8 h-8 text-white" />,
    items: ["Rice & Flour", "Cooking Oil", "Pulses & Spices", "Sugar & Tea", "Dates & Fruits"],
    timing: "Throughout Ramadan",
  },
  {
    title: "Eid-ul-Fitr Support",
    description: "Special food packages and festive items for Eid celebrations",
    icon: <Star className="w-8 h-8 text-white" />,
    items: ["Special Sweets", "Meat & Chicken", "Festive Items", "Eid Gifts", "Family Packages"],
    timing: "Eid-ul-Fitr",
  },
  {
    title: "Sehri & Iftar Programs",
    description: "Daily meals for fasting students and families in need",
    icon: <Moon className="w-8 h-8 text-white" />,
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
    icon: <Truck className="w-8 h-8 text-white" />,
  },
  {
    week: "Week 2",
    focus: "Extended Support",
    description: "Additional families and emergency cases",
    date: "8th-14th Ramadan",
    icon: <Users className="w-8 h-8 text-white" />,
  },
  {
    week: "Week 3",
    focus: "Community Programs",
    description: "Sehri and Iftar programs for students",
    date: "15th-21st Ramadan",
    icon: <Moon className="w-8 h-8 text-white" />,
  },
  {
    week: "Week 4",
    focus: "Eid Preparation",
    description: "Eid-ul-Fitr packages and festive items",
    date: "22nd-30th Ramadan",
    icon: <Star className="w-8 h-8 text-white" />,
  },
]

export default function RamzanRationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ramzan-rashon-bg.png"
            alt="Ramzan Ration Background"
            fill
            className="object-cover blur-sm"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-darkblue mb-6">Ramzan Ration <span className="text-lightblue">Program</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray leading-relaxed mb-8">
              Supporting 1,700+ families with essential food items during the holy month of Ramadan. 
              Our comprehensive ration distribution ensures no family goes hungry during this blessed time.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                <button className="relative px-8 py-3 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                  <span className="relative z-10 flex items-center">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Ramzan Program
                  </span>
                </button>
                </Link>
              </div>
          </div>
        </div>
      </section>

     

      {/* About Ramzan Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl font-bold text-darkblue mb-2">About <span className="text-lightblue">Ramzan Program</span></h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">Learn more about our impactful Ramzan Ration initiative and how it supports families during the holy month.</p>
            </div>
            <div className="hidden md:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
            <div>
              <h2 className="text-4xl font-bold text-darkblue mb-6">Ramzan <span className="text-lightblue">Ration </span></h2>
              <p className="text-lg text-gray mb-6">
                Our Ramzan Ration Distribution program is one of our most impactful initiatives, reaching over 
                1,700 families during the holy month of Ramadan. We believe that every family should be able 
                to observe their fasts with dignity and have access to nutritious food.
              </p>
              <p className="text-lg text-gray mb-6">
                In collaboration with other organizations and generous donors, we arrange comprehensive ration 
                packages that include all essential food items needed for the month. Our program extends beyond 
                basic ration to include daily Sehri and Iftar support for students and special Eid packages.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Duration</h4>
                    <p className="text-gray">Full Ramadan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Families</h4>
                    <p className="text-gray">1,700+ Supported</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Package className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Packages</h4>
                    <p className="text-gray">Complete Ration</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Service</h4>
                    <p className="text-gray">100% Free</p>
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

       {/* Stats Section */}
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
            {ramzanStats.map((stat, index) => (
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

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl font-bold text-darkblue mb-2">Our <span className="text-lightblue">Programs</span></h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">Explore the various programs we offer to support families during Ramadan.</p>
            </div>
            <div className="hidden md:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            {ramzanPrograms.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 text-left flex flex-col gap-3 max-w-xs mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
                    {program.timing}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Items Included:</span>
                    <div className="flex flex-wrap gap-1 mt-2 justify-center">
                      {program.items.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {item}
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

      {/* Distribution Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl font-bold text-darkblue mb-2">Our <span className="text-lightblue">Distribution</span></h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">View our organized schedule for timely and efficient distribution throughout Ramadan.</p>
            </div>
            <div className="hidden md:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
            {distributionSchedule.map((schedule, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 text-left flex flex-col gap-3 max-w-xs mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 bg-lightblue/80 group-hover:bg-lightblue transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
                    {schedule.icon}
                  </div>
                  <h3 className="text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1 text-center">{schedule.week}</h3>
                  <div className="font-semibold text-gray-900 text-center mb-1">{schedule.focus}</div>
                  <p className="text-gray mb-2 font-light leading-relaxed text-center">{schedule.description}</p>
                  <Badge variant="outline" className="text-xs mx-auto">{schedule.date}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  )
} 