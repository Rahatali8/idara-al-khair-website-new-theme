'use client'
import Image from "next/image"
import {  Users, MapPin, Heart, Building ,GraduationCap,Clock, Award,Shield, BookOpen, Stethoscope, Shield as ShieldIcon, Utensils, ClipboardList, Monitor } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"
import FadeInSection from "@/components/fade-in-section"
import Animated3DIcon from "@/components/animated-3d-icon"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import CallToAction from "@/components/CallToAction"

const volunteerPrograms = [
  {
    title: "Education Support",
    description: "Help in teaching, mentoring, and educational activities",
    icon: BookOpen,
    duration: "Flexible",
    location: "Multiple Campuses",
    features: ["Teaching Assistance", "Student Mentoring", "Library Support", "Computer Training", "Sports Coaching"],
    image: "/quality-education.jpg",
    commitment: "2-4 hours/week",
    impact: "500+ Students",
  },
  {
    title: "Healthcare Services",
    description: "Support in medical camps and health awareness programs",
    icon: Stethoscope,
    duration: "Flexible",
    location: "Medical Centers",
    features: ["Medical Camps", "Health Awareness", "Patient Care", "Pharmacy Support", "Emergency Response"],
    image: "/health-care.jpg",
    commitment: "3-6 hours/week",
    impact: "1000+ Patients",
  },
  {
    title: "Disaster Relief",
    description: "Emergency response and disaster relief operations",
    icon: ShieldIcon,
    duration: "On-call",
    location: "Nationwide",
    features: ["Emergency Response", "Relief Distribution", "Shelter Support", "Medical Aid", "Rehabilitation"],
    image: "/disaster.jpeg",
    commitment: "24/7 Availability",
    impact: "50,000+ Affected",
  },
  {
    title: "Food Distribution",
    description: "Help in food distribution and community feeding programs",
    icon: Utensils,
    duration: "Flexible",
    location: "Community Centers",
    features: ["Food Distribution", "Kitchen Support", "Packaging", "Delivery", "Community Outreach"],
    image: "/food-security.jpg",
    commitment: "2-5 hours/week",
    impact: "2000+ Families",
  },
  {
    title: "Administrative Support",
    description: "Office work, data entry, and administrative tasks",
    icon: ClipboardList,
    duration: "Flexible",
    location: "Head Office",
    features: ["Data Entry", "Office Management", "Event Planning", "Social Media", "Documentation"],
    image: "/Office.jpg",
    commitment: "3-8 hours/week",
    impact: "Organization Support",
  },
  {
    title: "Technical Support",
    description: "IT support, website maintenance, and technical assistance",
    icon: Monitor,
    duration: "Flexible",
    location: "Technical Institute",
    features: ["IT Support", "Website Maintenance", "Software Training", "Hardware Repair", "Digital Marketing"],
    image: "/hardware.jpg",
    commitment: "4-10 hours/week",
    impact: "Technical Excellence",
  },
]

const volunteerBenefits = [
  {
    title: "Skill Development",
    description: "Learn new skills and gain valuable experience",
    icon: GraduationCap,
    features: ["Leadership Skills", "Communication", "Problem Solving", "Team Work", "Project Management"],
  },
  {
    title: "Community Impact",
    description: "Make a direct impact on people's lives",
    icon: Heart,
    features: ["Direct Service", "Community Building", "Social Change", "Personal Growth", "Meaningful Work"],
  },
  {
    title: "Networking",
    description: "Connect with like-minded individuals and professionals",
    icon: Users,
    features: ["Professional Network", "Mentorship", "Career Opportunities", "Social Connections", "Industry Exposure"],
  },
  {
    title: "Recognition",
    description: "Get certificates and recognition for your contributions",
    icon: Award,
    features: ["Volunteer Certificates", "Awards", "Public Recognition", "Portfolio Building", "References"],
  },
]

const volunteerStories = [
  {
    name: "Ahmed Khan",
    role: "Education Volunteer",
    duration: "2 Years",
    hours: "500+ Hours",
    image: "/placeholder-user.jpg",
    story: "Teaching children has been the most rewarding experience. Seeing their progress motivates me to continue.",
  },
  {
    name: "Fatima Ali",
    role: "Healthcare Volunteer",
    duration: "1.5 Years",
    hours: "300+ Hours",
    image: "/placeholder-user.jpg",
    story: "Helping in medical camps has taught me compassion and the importance of community service.",
  },
  {
    name: "Muhammad Hassan",
    role: "Disaster Relief Volunteer",
    duration: "3 Years",
    hours: "800+ Hours",
    image: "/placeholder-user.jpg",
    story: "Being part of emergency response teams has shown me the true meaning of humanity and service.",
  },
]

const volunteerRequirements = [
  { name: "Age 18+", logo: "/placeholder-logo.png", requirement: "Minimum Age" },
  { name: "Background Check", logo: "/placeholder-logo.png", requirement: "Security Clearance" },
  { name: "Training Program", logo: "/placeholder-logo.png", requirement: "Orientation Required" },
  { name: "Commitment", logo: "/placeholder-logo.png", requirement: "Regular Participation" },
  { name: "Team Spirit", logo: "/placeholder-logo.png", requirement: "Collaborative Attitude" },
  { name: "Passion", logo: "/placeholder-logo.png", requirement: "Service Mindset" },
]

export default function VolunteersPage() {
  const [headingShine, setHeadingShine] = useState(false);
  return (
    <main className="/">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/volunteers-back.png"
            alt="Volunteers-team-background"
            fill
            className="object-cover blur-sm"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
                  {(() => {
                    const headingWords = ["Join", "Our", "Volunteers", "Family"];
                    const subtext = "Join our volunteer program to make a real difference in countless lives across Pakistan. Our volunteers are the backbone of our mission, reaching out to communities in need and spreading hope where it matters most. Every hour you give helps us build a brighter, more compassionate future.";
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
                              className={word === "Volunteers" ? "text-lightblue mx-2" : "mx-2"}
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
                        {/* Learn More Button */}
                        <a href="#volunteer-about" className="inline-block mt-4">
                          <button className="relative px-8 py-3 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                            {/* Animated gradient overlay */}
                            <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                            <span className="relative z-10">Learn More</span>
                          </button>
                        </a>
                      </>
                    );
               })()}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ml-7 mr-7 py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="relative mb-16">
              <div className="flex items-center justify-center">
                <div className="hidden lg:block flex-1 mr-8">
                  <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
                </div>
                <div className="text-center px-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkblue">
                    Our Impact in Numbers
                  </h2>
                  <p className="text-xl text-gray max-w-3xl mx-auto">Transforming lives across Pakistan since 1987</p>
                </div>
                <div className="hidden lg:block flex-1 ml-8">
                  <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FadeInSection delay={0.1}>
              <div className="group relative overflow-hidden p-8 text-center bg-white/10 rounded-2xl shadow-xl">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                {/* Card content */}
                <div className="relative z-10">
                <Animated3DIcon Icon={Users} color="text-lightblue" delay={0.2} />
                  <h3 className="text-4xl font-bold text-darkblue group-hover:text-darkblue transition-colors duration-500 mt-2 mb-2">
                    <AnimatedCounter end={600} />+
                </h3>
                  <p className="text-gray text-md">Active Volunteers are here to help</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="group relative overflow-hidden p-8 text-center bg-white/10 rounded-2xl shadow-xl">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="relative z-10">
                <Animated3DIcon Icon={GraduationCap} color="text-lightblue" delay={0.3} />
                  <h3 className="text-4xl font-bold text-darkblue group-hover:text-darkblue transition-colors duration-500 mt-2 mb-2">
                    <AnimatedCounter end={60}/>+
                </h3>
                <p className="text-gray text-md">Programs Volunteer opportunities available</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="group relative overflow-hidden p-8 text-center bg-white/10 rounded-2xl shadow-xl">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="relative z-10">
                <Animated3DIcon Icon={Heart} color="text-lightblue" delay={0.4} />
                  <h3 className="text-4xl font-bold text-darkblue group-hover:text-darkblue transition-colors duration-500 mt-2 mb-2">
                    <AnimatedCounter end={24} />/7 hours
                </h3>
                <p className="text-gray text-md">Support Round-the-clock volunteer coordination</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="group relative overflow-hidden p-8 text-center bg-white/10 rounded-2xl shadow-xl">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="relative z-10">
                <Animated3DIcon Icon={Building} color="text-lightblue" delay={0.5} />
                  <h3 className="text-4xl font-bold text-darkblue group-hover:text-darkblue transition-colors duration-500 mt-2 mb-2">
                    <AnimatedCounter end={100} />%
                </h3>
                <p className="text-gray text-md">Direct community impact through volunteers</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* About Volunteering */}
      <section id="volunteer-about" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
            <div className="px-8 md:px-16">
              <div className="text-lightblue font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-5 h-4" />
                VOLUNTEER WITH US
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-darkblue mb-6">
                Why Volunteer With <span className="text-lightblue">Us?</span>
              </h2>
              <p className="text-lg text-gray mb-6">
                Idara Al-Khair's volunteer program offers meaningful opportunities to serve communities in need. 
                Our volunteers are the backbone of our operations, helping us reach more people and create greater impact.
              </p>
              <p className="text-lg text-gray mb-6">
                Whether you're passionate about education, healthcare, disaster relief, or community service, 
                we have a place for you. Join our diverse team of dedicated volunteers and make a real difference.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-lightblue" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray">Flexible Hours</h4>
                    <p className="text-gray font-light">Choose your schedule</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-lightblue" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray">500+ Volunteers</h4>
                    <p className="text-gray font-light">Active community</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-lightblue" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray">Multiple Locations</h4>
                    <p className="text-g font-light">Across Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-lightblue" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray">Recognition</h4>
                    <p className="text-gray font-light">Certificates & awards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white mt-6 mr-8">
              <Image
                src="/volunteers.jpg"
                alt="Idara Al-Khair Volunteers Group Photo"
                fill
                className="object-cover object-center blur-[0.5px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Programs */}
      <section id="volunteer-opportunities" className="py-20 bg-white">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-darkblue mb-2">Volunteer <span className="text-lightblue">Opportunities</span></h2>
              <p className="text-xl text-gray max-w-3xl mx-auto">Choose from various volunteer programs that match your skills, interests, and availability.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerPrograms.map((program, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 text-left flex flex-col gap-3 max-w-xs mx-auto"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                {/* Card content */}
                <div className="relative z-10">
                  <div
                    className="w-10 h-10 bg-lightblue/80 group-hover:bg-white transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700"
                  >
                    <program.icon className="w-6 h-6 text-white group-hover:text-lightblue transition-colors duration-500" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1">{program.title}</h3>
                  <p className="text-gray mb-2 font-light leading-relaxed">{program.description}</p>
                  <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Location:</span>
                  <span className="text-gray font-semibold">{program.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Impact:</span>
                  <span className="text-lightblue font-semibold">{program.impact}</span>
                </div>
              </div>
                  <ul className="list-disc list-inside text-gray text-sm mt-2 space-y-1">
                    {program.features.slice(0,2).map((feature, idx) => (
                  <li key={idx} className="font-light">{feature}</li>
                ))}
              </ul>
            </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="my-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-darkblue mb-2">Benefits of <span className="text-lightblue">Volunteering</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">Volunteering with Idara Al-Khair offers numerous personal and professional benefits.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {volunteerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-6 text-left flex flex-col gap-3 items-start"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                {/* Card content */}
                <div className="relative z-10 w-full">
                  <div
                    className="w-12 h-12 bg-lightblue/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700"
                  >
                  <benefit.icon className="w-6 h-6 text-white" strokeWidth={2.2} />
                </div>
                  <h3 className="text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1">{benefit.title}</h3>
                  <p className="text-gray mb-2 font-light">{benefit.description}</p>
                  <ul className="list-disc list-inside text-gray text-sm mt-2 space-y-1">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="font-light">{feature}</li>
                  ))}
                </ul>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-darkblue mb-2">Volunteer <span className="text-lightblue">Stories</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">Hear from our dedicated volunteers about their experiences and the impact they've made.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerStories.map((story, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-6 text-left flex flex-col gap-2"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                {/* Card content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-lightblue mb-1">{story.name} <span className="text-sm text-darkblue font-normal">({story.role})</span></h3>
                  <div className="text-sm text-darkblue mb-1"><strong>Duration:</strong> {story.duration} &nbsp; <strong>Hours:</strong> {story.hours}</div>
                  <blockquote className="italic text-gray border-l-4 border-lightblue pl-4">"{story.story}"</blockquote>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-darkblue mb-2">Volunteer <span className="text-lightblue">Requirements</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">Basic requirements to join our volunteer program and start making a difference.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          {/* Show/hide requirements state */}
          {(() => {
            const [showAllRequirements, setShowAllRequirements] = useState(false);
            const icons = [Shield, Users, GraduationCap, Award, Heart, MapPin];
            const renderCard = (req: any, idx: any, isLeft: any) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={idx} className={`flex flex-col sm:flex-row items-center relative ${isLeft ? '' : 'sm:flex-row-reverse'} mb-4`}>
                  {/* Timeline dot with glow and animated icon */}
                  <div className="hidden sm:flex flex-col items-center w-0 sm:w-1/2 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-20">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lightblue to-cyan-400 shadow-2xl flex items-center justify-center animate-pulse ring-4 ring-lightblue/30">
                        <Icon className="w-5 h-5 text-white animate-bounce" />
                      </div>
                    </div>
                  </div>
                  {/* Card with arrow/triangle */}
                  <div className={`w-full sm:w-1/2 flex ${isLeft ? 'justify-end' : 'justify-start'} relative`}>
                    <div className={`relative bg-white/60 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border-l-4 ${isLeft ? 'border-lightblue' : 'border-cyan-400'} max-w-md w-full text-left ${isLeft ? 'ml-4' : 'mr-4'}`}>
                      {/* Arrow/triangle */}
                      <div className={`hidden sm:block absolute top-10 ${isLeft ? '-right-4' : '-left-4'} w-0 h-0 border-t-8 border-b-8 ${isLeft ? 'border-l-8 border-l-lightblue' : 'border-r-8 border-r-cyan-400'} border-transparent`}></div>
                      <h4 className="font-extrabold text-darkblue text-2xl mb-3 flex items-center gap-2"><Icon className="w-6 h-6 text-lightblue" />{req.name}</h4>
                      <p className="text-gray-700 text-base font-medium leading-relaxed">{req.requirement}</p>
                    </div>
                  </div>
                </div>
              );
            };
            if (!showAllRequirements) {
              return (
                <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-lightblue via-cyan-400 to-blue-200 opacity-40 -translate-x-1/2 rounded-full"></div>
                  <div className="flex flex-col gap-6 relative z-10">
                    {renderCard(volunteerRequirements[0], 0, true)}
                    <button
                      className="mx-auto my-4 px-6 py-2 bg-lightblue text-white rounded-full shadow-lg font-bold hover:bg-cyan-500 transition"
                      onClick={() => setShowAllRequirements(true)}
                    >
                      Show All Requirements
                    </button>
                    {renderCard(volunteerRequirements[volunteerRequirements.length - 1], volunteerRequirements.length - 1, (volunteerRequirements.length - 1) % 2 === 0)}
                  </div>
              </div>
              );
            } else {
              return (
                <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-lightblue via-cyan-400 to-blue-200 opacity-40 -translate-x-1/2 rounded-full"></div>
                  <div className="flex flex-col gap-6 relative z-10">
                    <AnimatePresence>
                      {volunteerRequirements.map((req, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 40 }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                        >
                          {renderCard(req, idx, idx % 2 === 0)}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    <AnimatePresence>
                      <motion.button
                        key="hide-btn"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.4, delay: volunteerRequirements.length * 0.08 }}
                        className="mx-auto my-4 px-6 py-2 bg-lightblue text-white rounded-full shadow-lg font-bold hover:bg-lightblue transition"
                        onClick={() => setShowAllRequirements(false)}
                      >
                        Hide Requirements
                      </motion.button>
                    </AnimatePresence>
                  </div>
          </div>
              );
            }
          })()}
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  )
} 