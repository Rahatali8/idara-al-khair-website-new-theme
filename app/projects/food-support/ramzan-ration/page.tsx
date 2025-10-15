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
 <section className="relative min-h-[80vh] sm:min-h-[86vh] flex items-center justify-center overflow-hidden px-4 sm:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ramzan-rashon-bg.png"
          alt="Ramzan Ration Background"
          fill
          className="object-cover blur-sm opacity-80"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          className="  text-darkblue text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-wrap justify-center leading-tight"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.18 } },
            hidden: {},
          }}
        >
          {["Ramzan", "Ration", "Program"].map((word, i) => (
            <motion.span
              key={i}
              className={`mx-2 ${
                word === "Program" ? "text-lightblue" : "text-darkblue"
              }`}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", bounce: 0.4, duration: 0.7 },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray leading-relaxed mb-8 px-2 sm:px-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.045 } },
            hidden: {},
          }}
        >
          {"Supporting 1,700+ families with essential food items during the holy month of Ramadan. Our comprehensive ration distribution ensures no family goes hungry during this blessed time."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.9, type: "spring", bounce: 0.3 },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
        </motion.p>

        {/* Responsive Button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="/donate">
            <button
              className="relative  sm:w-auto px-5 sm:px-8 md:px-10 py-2 sm:py-3 md:py-3.5
                         text-sm sm:text-base md:text-lg font-semibold rounded-full
                         border-2 border-lightblue text-lightblue bg-white
                         overflow-hidden group transition duration-300
                         hover:bg-lightblue hover:text-white"
            >
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Support Ramzan Program</span>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>     

      {/* About Ramzan Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-4 sm:px-6 md:px-8">
              <h2 className="  mb-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue  sm:mb-">About <span className="text-lightblue">Ramzan Program</span></h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 leading-relaxed">Learn more about our impactful Ramzan Ration initiative and how it supports families during the holy month.</p>
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
<section className="py-12 md:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-12 md:mb-16">
      <div className="flex flex-col lg:flex-row items-center justify-center mb-10">
        <div className="hidden lg:block flex-1 mr-6">
          <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
        </div>
        <div className="text-center px-4 sm:px-6 md:px-8">
          <h2 className="ttext-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2 sm:mb-32">
            Our <span className="text-lightblue">Organization</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 leading-relaxed">
            Key facts and achievements that define Idara Al-Khair's journey and impact.
          </p>
        </div>
        <div className="hidden lg:block flex-1 ml-6">
          <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
        </div>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {ramzanStats.map((stat, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 flex flex-col gap-3 w-full"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
          
          {/* Card content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lightblue/80 group-hover:bg-white transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
              <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-lightblue transition-colors duration-500" strokeWidth={2.2} />
            </div>
            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1">{stat.title}</h3>
            <p className="text-sm sm:text-base md:text-base text-gray font-light leading-relaxed">{stat.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Programs */}
    {/* Programs Section */}
<section className="py-16 md:py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-12 flex flex-col md:flex-row items-center justify-center">
      <div className="hidden md:block flex-1 mr-4 lg:mr-8">
        <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
      </div>
      <div className="text-center px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2">
          Our <span className="text-lightblue">Programs</span>
        </h2>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-2">
          Explore the various programs we offer to support families during Ramadan.
        </p>
      </div>
      <div className="hidden md:block flex-1 ml-4 lg:ml-8">
        <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
      </div>
    </div>

    {/* Programs Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {ramzanPrograms.map((program, index) => (
        <div
          key={index}
          className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 flex flex-col gap-3 w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
          
          {/* Card content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lightblue/80 group-hover:bg-lightblue transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
              {program.icon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1">{program.title}</h3>
            <p className="text-sm sm:text-base md:text-base text-gray-700 font-light leading-relaxed mb-2">{program.description}</p>

            {/* Timing */}
            <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
              <Clock className="w-4 h-4 mr-2" />
              {program.timing}
            </div>

            {/* Items */}
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
            <div className="text-center px-4 sm:px-6 md:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2 sm:mb-32">Our <span className="text-lightblue">Distribution</span></h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 leading-relaxed">View our organized schedule for timely and efficient distribution throughout Ramadan.</p>
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
                  <div className="w-10 h-10 bg-lightblue/80 group-hover:bg-lightblue transition-color backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
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