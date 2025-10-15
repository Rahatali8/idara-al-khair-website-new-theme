"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Heart, Truck, Package, Globe, Clock, AlertTriangle, Utensils, Book, Hospital, Briefcase } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import CallToAction from "@/components/CallToAction"


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
    icon: <Package className="w-8 h-8 text-white" />,
    items: ["Rice & Flour", "Cooking Oil", "Pulses", "Sugar & Tea", "Hygiene Items"],
    frequency: "Monthly",
  },
  {
    title: "Agricultural Support",
    description: "Seeds, tools, and training for sustainable farming",
    icon: <Globe className="w-8 h-8 text-white" />,
    items: ["Seeds & Fertilizers", "Farming Tools", "Training Programs", "Water Management", "Crop Support"],
    frequency: "Seasonal",
  },
  {
    title: "Emergency Relief",
    description: "Immediate assistance during natural disasters",
    icon: <AlertTriangle className="w-8 h-8 text-white" />,
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
    icon: Utensils,
    impact: "500+ families fed monthly",
  },
  {
    title: "Education Support",
    description: "Providing educational materials and support for village children",
    icon: Book,
    impact: "200+ children enrolled",
  },
  {
    title: "Healthcare Access",
    description: "Regular health camps and medical assistance in villages",
    icon: Hospital,
    impact: "15+ health camps annually",
  },
  {
    title: "Economic Development",
    description: "Skill training and microfinance for sustainable livelihoods",
    icon: Briefcase,
    impact: "100+ families empowered",
  },
]

export default function PoorVillagesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[86vh] flex items-center justify-center overflow-hidden px-4 sm:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/roti-bank-back.png"
          alt="Poor Villages Background"
          fill
          className="object-cover opacity-70 blur-sm"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-wrap justify-center leading-tight"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.18 } },
            hidden: {},
          }}
        >
          {["Poor", "Villages", "Food", "Support"].map((word, i) => (
            <motion.span
              key={i}
              className={`mx-2 ${
                word === "Support" ? "text-lightblue" : "text-darkblue"
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
          {"Extending our food support and development programs to rural communities across Sindh. We reach 15+ villages, supporting 500+ families with sustainable food security and development initiatives."
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

        {/* Animated Button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="/contact">
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
                <span>Support Village Program</span>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>

      {/* Stats Section */}
       <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          className="mb-10 sm:mb-14 flex flex-col md:flex-row items-center justify-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="hidden md:block flex-1 mr-8">
            <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
          </div>

          <div className="px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-3">
              Our <span className="text-lightblue">Organization</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray max-w-2xl mx-auto">
              Key facts and achievements that define Idara Al-Khair's journey and impact.
            </p>
          </div>

          <div className="hidden md:block flex-1 ml-8">
            <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mx-auto">
          {villageStats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lightblue/80 group-hover:bg-white transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-lightblue transition-colors duration-500" strokeWidth={2.2} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1">
                  {stat.title}
                </h3>
                <p className="text-gray text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
{/* About Village Program */}
<section className="py-16 sm:py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="mb-10 sm:mb-14 flex flex-col md:flex-row items-center justify-center text-center">
      <div className="hidden md:block flex-1 mr-6">
        <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
      </div>
      <div className="px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-darkblue mb-3">
          About <span className="text-lightblue">Village Program</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Extending food security, development, and empowerment to rural communities across Sindh.
        </p>
      </div>
      <div className="hidden md:block flex-1 ml-6">
        <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
      </div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-darkblue mb-5">
          Poor <span className="text-lightblue">Villages</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-5 leading-relaxed">
          Our Poor Villages Program extends Idara Al-Khair's mission to rural communities across Sindh. 
          We believe that every family, regardless of their location, deserves access to food security 
          and basic necessities.
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          Through regular visits, we provide monthly food packages, agricultural support, and development 
          programs to 15+ villages. Our approach focuses on sustainable development, empowering communities 
          to become self-reliant while ensuring immediate food security.
        </p>

        {/* Info Grid (Responsive 2 per row on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { icon: MapPin, title: "Coverage", desc: "15+ Villages" },
            { icon: Users, title: "Families", desc: "500+ Supported" },
            { icon: Truck, title: "Frequency", desc: "Monthly Visits" },
            { icon: Heart, title: "Service", desc: "100% Free" },
          ].map((item, i) => (
            <div key={i} className="flex items-start sm:items-center">
              <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-lightblue mr-3 mt-1 sm:mt-0" />
              <div>
                <h4 className="font-semibold text-darkblue text-sm sm:text-base">{item.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-lg overflow-hidden shadow-md">
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
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          <div className="text-center px-4 sm:px-6 md:px-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2 sm:mb-3">
    Village <span className="text-lightblue">Programs</span>
  </h2>
  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 leading-relaxed">
    Comprehensive support programs designed for rural communities and sustainable development.
  </p>
</div>

            <div className="hidden md:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            {villagePrograms.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 text-left flex flex-col gap-3 w-full max-w-sm mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
                    {program.frequency}
                  </div>
                  <div>
                    <span className="font-semibold text-darkblue text-sm">Services:</span>
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

      {/* Target Villages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-4 sm:px-6 md:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2 sm:mb-32">Target <span className="text-lightblue">Villages</span></h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 leading-relaxed">Our programs reach villages across different districts of Sindh, providing comprehensive support.</p>
            </div>
          <div className="flex-1 ml-0 sm:ml-2 md:ml-8">
  <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent w-full"></div>
</div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
            {targetVillages.map((village, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 flex flex-col gap-3 w-full max-w-sm mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl items-center"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="w-10 h-10 bg-lightblue/80 group-hover:bg-lightblue transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
                    <MapPin className="w-6 h-6 text-white group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="text-lg text-lightblue font-bold mb-1 text-center">{village.name}</div>
                  <div className="flex items-center justify-center text-gray mb-2">
                    <MapPin className="w-4 h-4 mr-1 text-lightblue group-hover:text-white transition-colors duration-500" />
                    {village.location}
                  </div>
                  <div className="flex justify-between text-sm w-full">
                    <span className="font-semibold text-darkblue">Families:</span>
                    <span className="text-lightblue font-bold">{village.families}</span>
                  </div>
                  <div className="w-full">
                    <span className="font-semibold text-darkblue text-sm">Programs:</span>
                    <div className="flex flex-wrap gap-1 mt-2 justify-center">
                      {village.programs.map((program, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 w-full">
                    <Badge className="bg-teal-100 text-teal-800">
                      {village.status}
                    </Badge>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(village.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-20 relative border-2 border-lightblue text-lightblue rounded-full px-4 py-1 bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-lightblue transition-all duration-200 active:scale-90 active:shadow-inner active:bg-lightblue/20 hover:scale-105 hover:shadow-lg"
                      style={{ boxShadow: "0 2px 8px 0 rgba(0,60,255,0.04)" }}
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center">
            <div className="hidden md:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-4 sm:px-6 md:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-2 sm:mb-32">Our <span className="text-lightblue">Impact Areas</span></h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 leading-relaxed">Comprehensive development programs addressing multiple aspects of rural community needs.</p>
            </div>
            <div className="hidden md:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  whileHover={{ scale: 1.05, y: -16, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                  className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 flex flex-col gap-3 w-full max-w-sm mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl items-center"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                  {/* Card content */}
                  <div className="relative z-10 flex flex-col items-center w-full">
                    <div className="w-10 h-10 bg-lightblue/80 group-hover:bg-lightblue transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
                      <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="text-lg text-lightblue font-bold mb-1 text-center">{area.title}</div>
                    <p className="text-gray mb-2 font-light leading-relaxed text-center">{area.description}</p>
                    <Badge className="bg-teal-100 text-teal-800">{area.impact}</Badge>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
} 