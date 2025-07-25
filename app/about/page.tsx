'use client'
import Image from "next/image"
import { Heart, Users, Award, Clock, Building2, BookOpen } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import StatsSection from "@/components/StatsSection"
import CallToAction from "@/components/CallToAction"
import React, { useState } from "react";

const organizationStats = [
  { number: "1987", label: "Founded", icon: Award, description: "Year Idara Al-Khair was established." },
  { number: "37+", label: "Years of Service", icon: Clock, description: "Serving communities for over 37 years." },
  { number: "700+", label: "Active Volunteers", icon: Users, description: "Dedicated volunteers supporting our mission." },
  { number: "60+", label: "Programs", icon: Heart, description: "Diverse programs for community welfare." }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-section-back.png"
            alt="About Section Background"
            fill
            className="object-cover opacity-60 blur-sm"
            priority
          />
        </div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.18 } },
                hidden: {},
              }}
            >
              {['About', 'Idara', 'Al-Khair'].map((word, i) => (
                <motion.span
                  key={i}
                  className={word === 'Al-Khair' ? 'text-lightblue mx-2' : 'text-darkblue mx-2'}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.7 } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 flex flex-wrap justify-center"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.045 } },
                hidden: {},
              }}
            >
              {"Idara Al-Khair Welfare Society is a non-profit organization dedicated to providing quality education, accessible healthcare, and comprehensive social welfare programs for communities across Pakistan. Our mission is to uplift underprivileged families and foster sustainable development through compassion and service.".split(" ").map((word, i) => (
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/donate"}>
                <button className="relative px-8 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                  {/* Animated gradient overlay */}
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                  <span className="relative z-10 flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Mission
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Chairman & Board Section */}
      <section id="president-message" className="py-20 mx-10">
        <div className="container mx-auto px-4 ">
        <div className="mb-10">
          <div className="flex items-center justify-center mb-4">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
                <h2 className="text-5xl font-bold text-darkblue text-center">Message from the <span className="text-lightblue">President</span></h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2">A note from our founder and president, sharing the vision and journey of Idara Al-Khair.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white rounded-xl p-8">
            {/* Image Side */}
            <div className="flex justify-center mt-10">
              <Image
                src="/chairmain.jpg"
                alt="President Mohammad Mazahir"
                width={350}
                height={300}
                className="rounded-xl shadow-lg object-cover"
                priority
              />
          </div>
            {/* Info Side */}
            <div>
              <h3 className="text-2xl font-bold text-darkblue mb-2">Mohammad Mazahir</h3>
              <p className="text-lg text-gray mb-4">
                Born in 1954 in District Dadu, Sindh, Mohammad Mazahir completed his Master’s in Chemistry from the University of Karachi. Coming from a middle-class background and being socially conscious from a young age, he dedicated himself to helping the poor, often using his own resources. After moving to Karachi, he became involved in social welfare, especially in underprivileged areas like Orangi Town, Landhi, and Korangi.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Throughout his journey, Mazahir faced several challenges: convincing families to send their children to school for free, overcoming parental dependence on child labor, recruiting and retaining teachers with limited funds, and dealing with student dropouts due to economic pressures. Despite these obstacles, his commitment and grassroots approach have transformed the lives of many underprivileged children through access to education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Section Heading */}
      <section id="mission-vision" className="px-2 md:px-8 py-20 bg-white">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkblue">Our Mission <span className="text-lightblue"> & Vision</span></h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2">Empowering communities through education, healthcare, and hope for a brighter future.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        </div>
        {/* Mission & Vision - Split Image/Text Professional Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[320px] flex items-center justify-center">
            <img src="/vision-back.jpg" alt="Mission" className="absolute inset-0 w-full h-full object-cover z-0 blur-sm" />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 flex flex-col justify-center items-center p-10 md:p-16 w-full h-full text-center font-sans">
              <div className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-2 drop-shadow-xl uppercase">Mission</div>
              <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mb-4" />
              <div className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-lg max-w-xl mx-auto tracking-wide" style={{letterSpacing: '0.01em'}}>
                Our mission is to empower underserved communities by providing quality education, accessible healthcare, and humanitarian support—enabling every individual to lead a dignified, productive life.
              </div>
            </div>
          </div>
          {/* Vision Card */}
          <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[320px] flex items-center justify-center">
            <img src="/mission-back.jpg" alt="Vision" className="absolute inset-0 w-full h-full object-cover z-0 blur-sm" />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 flex flex-col justify-center items-center p-10 md:p-16 w-full h-full text-center font-sans">
              <div className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-2 drop-shadow-xl uppercase">Vision</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mb-4" />
              <div className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-lg max-w-xl mx-auto tracking-wide" style={{letterSpacing: '0.01em'}}>
                Our vision is a society where every person has access to quality education, healthcare, and basic necessities—fostering sustainable development and social harmony for all.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Organization Stats */}
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
            {organizationStats.map((stat, index) => (
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
                  <h3 className="text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1 text-center">{stat.label}</h3>
                  <div className="text-3xl font-extrabold text-darkblue mb-2 text-center">{stat.number}</div>
                  <p className="text-gray mb-2 font-light leading-relaxed text-center">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <StatsSection />

      {/* Our Journey Section - Timeline Requirements Style */}
      <section id="our-journey" className="py-20 bg-white">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-darkblue mb-2">Our <span className="text-lightblue">Journey</span></h2>
              <p className="text-xl text-gray max-w-3xl mx-auto">A timeline of our major milestones and achievements over the past 37 years.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        </div>
        {/* Timeline vertical cards with show more/less */}
        {(() => {
          const [showAll, setShowAll] = useState(false);
          const timeline = [
            {
              icon: <Award className="w-5 h-5 text-white animate-bounce" />, border: "border-lightblue", arrow: "border-l-lightblue", title: "Founded in 1987", desc: "First school established", left: true
            },
            {
              icon: <Users className="w-5 h-5 text-white animate-bounce" />, border: "border-cyan-400", arrow: "border-r-cyan-400", title: "Founded in 1992", desc: "Second School Established", left: false
            },
            {
              icon: <Heart className="w-5 h-5 text-white animate-bounce" />, border: "border-lightblue", arrow: "border-l-lightblue", title: "Founded in 1995", desc: "Third School Established", left: true
            },
            {
              icon: <BookOpen className="w-5 h-5 text-white animate-bounce" />, border: "border-cyan-400", arrow: "border-r-cyan-400", title: "College Established", desc: "Al-Khair College opened in 2005", left: false
            },
            {
              icon: <Building2 className="w-5 h-5 text-white animate-bounce" />, border: "border-cyan-400", arrow: "border-r-cyan-400", title: "Multiple Campuses", desc: "Schools, college, health centers", left: true
            },
            {
              icon: <Clock className="w-5 h-5 text-white animate-bounce" />, border: "border-lightblue", arrow: "border-l-lightblue", title: "Founded in 2024", desc: "First Software House Established", left: true
            },
          ];
          const first = timeline[0];
          const last = timeline[timeline.length - 1];
          const middle = timeline.slice(1, -1);
          return (
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-lightblue via-cyan-400 to-blue-200 opacity-40 -translate-x-1/2 rounded-full"></div>
              <div className="flex flex-col gap-6 relative z-10">
                {/* First card */}
                <div className={`flex flex-col sm:flex-row items-center relative mb-4`}>
                  <div className="hidden sm:flex flex-col items-center w-0 sm:w-1/2 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-20">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lightblue to-cyan-400 shadow-2xl flex items-center justify-center animate-pulse ring-4 ring-lightblue/30">
                        {first.icon}
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 flex justify-end relative">
                    <div className={`relative bg-white/60 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border-l-4 ${first.border} max-w-md w-full text-left ml-4`}>
                      <div className={`hidden sm:block absolute top-10 -right-4 w-0 h-0 border-t-8 border-b-8 border-l-8 ${first.arrow} border-transparent`}></div>
                      <h4 className="font-extrabold text-darkblue text-2xl mb-3 flex items-center gap-2">{first.icon}{first.title}</h4>
                      <p className="text-gray-700 text-base font-medium leading-relaxed">{first.desc}</p>
                    </div>
                  </div>
                </div>
                {/* Show more/less button or middle cards */}
                {!showAll && (
                  <button
                    className="mx-auto my-4 px-6 py-2 bg-lightblue text-white rounded-full shadow-lg font-bold hover:bg-cyan-500 transition"
                    onClick={() => setShowAll(true)}
                  >
                    Show All Milestones
                  </button>
                )}
                {showAll && middle.map((item, idx) => (
                  <div key={idx} className={`flex flex-col sm:${item.left ? 'flex-row' : 'flex-row-reverse'} items-center relative mb-4`}>
                    <div className="hidden sm:flex flex-col items-center w-0 sm:w-1/2 relative">
                      <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-20">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lightblue to-cyan-400 shadow-2xl flex items-center justify-center animate-pulse ring-4 ring-lightblue/30">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    <div className={`w-full sm:w-1/2 flex ${item.left ? 'justify-end' : 'justify-start'} relative`}>
                      <div className={`relative bg-white/60 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border-l-4 ${item.border} max-w-md w-full text-left ${item.left ? 'ml-4' : 'mr-4'}`}>
                        <div className={`hidden sm:block absolute top-10 ${item.left ? '-right-4' : '-left-4'} w-0 h-0 border-t-8 border-b-8 ${item.left ? 'border-l-8 ' + item.arrow : 'border-r-8 ' + item.arrow} border-transparent`}></div>
                        <h4 className="font-extrabold text-darkblue text-2xl mb-3 flex items-center gap-2">{item.icon}{item.title}</h4>
                        <p className="text-gray-700 text-base font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {showAll && (
                  <button
                    className="mx-auto my-4 px-6 py-2 bg-lightblue text-white rounded-full shadow-lg font-bold hover:bg-cyan-500 transition"
                    onClick={() => setShowAll(false)}
                  >
                    Hide Milestones
                  </button>
                )}
                {/* Last card */}
                <div className={`flex flex-col sm:flex-row items-center relative mb-4`}>
                  <div className="hidden sm:flex flex-col items-center w-0 sm:w-1/2 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-20">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lightblue to-cyan-400 shadow-2xl flex items-center justify-center animate-pulse ring-4 ring-lightblue/30">
                        {last.icon}
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 flex justify-end relative">
                    <div className={`relative bg-white/60 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border-l-4 ${last.border} max-w-md w-full text-left ml-4`}>
                      <div className={`hidden sm:block absolute top-10 -right-4 w-0 h-0 border-t-8 border-b-8 border-l-8 ${last.arrow} border-transparent`}></div>
                      <h4 className="font-extrabold text-darkblue text-2xl mb-3 flex items-center gap-2">{last.icon}{last.title}</h4>
                      <p className="text-gray-700 text-base font-medium leading-relaxed">{last.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      
      {/* Call to Action */}
      <CallToAction />
    </main>
  )
}

