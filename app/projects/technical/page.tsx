"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Building2, Users, Award, ArrowRight, GraduationCap, BookOpen, Brain, UserCheck, MessageCircle, FlaskConical, MonitorPlay, UserPlus, Shield } from "lucide-react"
import CallToAction from "@/components/CallToAction"
import { motion } from "framer-motion"


const aiTechnologies = [
  {
    icon: Brain,
    title: "Apprentice Tutors",
    description: "Personalized, adaptive AI tutoring for math problem solving and skill learning. Provides on-demand hints, feedback, and mastery tracking for students and teachers.",
  },
  {
    icon: BookOpen,
    title: "iTELL",
    description: "Transforms traditional text into interactive, intelligent learning experiences with AI feedback, summary scoring, and comprehension questions.",
  },
  {
    icon: MonitorPlay,
    title: "Ivy",
    description: "An AI coach for online video learning, combining cognitive skill modeling with generative AI for explanations and active learning.",
  },
  {
    icon: UserCheck,
    title: "Jill Watson",
    description: "Virtual teaching assistant that answers student questions 24/7, integrated into course forums to support and engage all students.",
  },
  {
    icon: MessageCircle,
    title: "SAMI",
    description: "AI agent that builds community in online learning by connecting students based on shared interests and supporting social engagement.",
  },
  {
    icon: FlaskConical,
    title: "SMART",
    description: "AI-powered formative assessment system that analyzes student summaries, compares to expert models, and provides personalized feedback.",
  },
]

export default function TechnicalPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
   <section className="relative py-16 sm:py-20 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
  {/* Blurred Campus Background */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/campus-page-back.png"
      alt="AIT Campus Background"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10 z-10" />
  </div>

  <motion.div
    className="relative z-20 text-center max-w-3xl px-4 sm:px-6 md:px-8 mx-auto"
    initial="hidden"
    animate="visible"
  >
    {/* Heading */}
    <motion.h1
      className="text-3xl sm:text-4xl md:text-6xl font-bold text-darkblue mb-4 sm:mb-6 leading-snug flex flex-wrap justify-center"
      variants={{
        visible: { transition: { staggerChildren: 0.18 } },
        hidden: {},
      }}
      initial="hidden"
      animate="visible"
    >
      {['Empowering', 'Futures', 'with', 'AI', '&', 'Technical', 'Skills'].map((word, i) => (
        <motion.span
          key={i}
          className={`mx-1 sm:mx-2 ${
            ['AI', '&', 'Technical', 'Skills'].includes(word)
              ? 'text-lightblue'
              : 'text-darkblue'
          }`}
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.8 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: 'spring', bounce: 0.4, duration: 0.7 },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>

    {/* Paragraph */}
    <motion.p
      className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto flex flex-wrap justify-center"
      variants={{
        visible: { transition: { staggerChildren: 0.045 } },
        hidden: {},
      }}
      initial="hidden"
      animate="visible"
    >
      {"AIT is dedicated to providing world-class technical and vocational education, integrating cutting-edge AI technologies to prepare students for the future of work."
        .split(" ")
        .map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-1 sm:mr-2"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.4, type: 'spring', bounce: 0.3 },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
    </motion.p>

    {/* Button */}
    <motion.div
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      <a
        href="https://ait.iak.ngo/"
        className="inline-block mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="relative px-5 sm:px-6 py-2 sm:py-3 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
          <span className="relative z-10 inline-flex items-center text-sm sm:text-base">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </a>
    </motion.div>
  </motion.div>
</section>


     {/* About AIT */}
<section className="py-12 sm:py-16 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    {/* Section Header */}
    <div className="flex flex-col lg:flex-row items-center justify-center mb-10 text-center">
      <div className="hidden lg:block flex-1 mr-8">
        <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
      </div>

      <div className="px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-3">
          About <span className="text-lightblue">Alkhair (AIT)</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Al-Khair Institute of Technology (AIT) is a leader in technical education, offering hands-on training and industry partnerships.
        </p>
      </div>

      <div className="hidden lg:block flex-1 ml-8">
        <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
      </div>
    </div>

    {/* Image + Text Section */}
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md sm:max-w-lg">
          <Image
            src="/ait.jpg"
            alt="AIT Campus"
            width={500}
            height={350}
            className="object-cover w-full h-56 sm:h-64 md:h-80"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-darkblue mb-4">
          Idara Alkhair Institute <span className="text-lightblue">of Technology</span>
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Al-Khair Institute of Technology (AIT) is a leader in technical education, offering hands-on training, industry partnerships, and innovative AI-powered learning tools. 
          Our mission is to bridge the skills gap and empower youth for success in the digital economy.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Programs Offered */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-center mb-12">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
           <div className="text-center px-4 sm:px-6 md:px-8">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-3 leading-tight">
    Our <span className="text-lightblue">Programs</span>
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
    AIT offers a range of technical and vocational programs designed to equip
    students with practical, job-ready skills in high-demand fields.
  </p>
</div>

            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer max-w-[420px] mx-auto">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image src="/Web-development.jpg" alt="Web Development" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">Web Development</h3>
                  <p className="text-gray mb-4 leading-relaxed">Learn to build modern, responsive websites and web apps with hands-on projects.</p>
                  <a href="https://ait.iak.ngo/" className="inline-block mt-2" target="_blank" rel="noopener noreferrer">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Computer Applications */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer max-w-[420px] mx-auto">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image src="/computer-applications.jpg" alt="Computer Applications" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">Computer Applications</h3>
                  <p className="text-gray mb-4 leading-relaxed">Essential ICT skills for office and daily life, including MS Office and internet basics.</p>
                  <a href="https://ait.iak.ngo/" className="inline-block mt-2" target="_blank" rel="noopener noreferrer">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Cybersecurity */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer max-w-[420px] mx-auto">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image src="/cybersecurity.webp" alt="Cybersecurity" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">Cybersecurity</h3>
                  <p className="text-gray mb-4 leading-relaxed">Protect systems and data with hands-on cybersecurity and ethical hacking skills.</p>
                  <a href="https://ait.iak.ngo/" className="inline-block mt-2" target="_blank" rel="noopener noreferrer">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-center mb-12">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
        <div className="text-center px-4 sm:px-6 md:px-8">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-3 leading-tight">
    AI <span className="text-lightblue">Technologies</span> at AIT
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
    AIT integrates advanced AI tools to enhance learning, assessment, and student support.
    Explore our suite of intelligent technologies powering the future of education.
  </p>
</div>

            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTechnologies.map((tech, idx) => (
              <Card key={idx} className="bg-white/40 backdrop-blur-md shadow-2xl border-0 group relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                <div className="relative z-10 flex flex-col items-center text-center p-8">
                  <div className="w-14 h-14 bg-lightblue rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-700 group-hover:rotate-[360deg]">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">{tech.title}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
           <div className="text-center px-4 sm:px-6 md:px-8">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-3 leading-tight">
    Our <span className="text-lightblue">Achievements</span>
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
    AIT is proud of its impact—hundreds of students trained, high job placement rates,
    and strong industry partnerships.
  </p>
</div>

            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Students Trained */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-[320px] mx-auto transform group-hover:scale-105">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10 flex flex-col items-center text-center p-8">
                <div className="w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-700 group-hover:rotate-[360deg]">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">500+ Students</h3>
                <p className="text-gray-600 text-sm">Trained in technical skills</p>
              </div>
            </div>
            {/* Courses Offered */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-[320px] mx-auto transform group-hover:scale-105">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10 flex flex-col items-center text-center p-8">
                <div className="w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-700 group-hover:rotate-[360deg]">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">15+ Courses</h3>
                <p className="text-gray-600 text-sm">Available for training</p>
              </div>
            </div>
            {/* Placement Rate */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-[320px] mx-auto transform group-hover:scale-105">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10 flex flex-col items-center text-center p-8">
                <div className="w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-700 group-hover:rotate-[360deg]">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">80% Placement</h3>
                <p className="text-gray text-sm">Successful job placement rate</p>
              </div>
            </div>
            {/* Industry Partners */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-[320px] mx-auto transform group-hover:scale-105">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10 flex flex-col items-center text-center p-8">
                <div className="w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-700 group-hover:rotate-[360deg]">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-lightblue transition-colors">Industry Partners</h3>
                <p className="text-gray-600 text-sm">Collaborating with companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       <CallToAction />     
    </main>
  )
}
