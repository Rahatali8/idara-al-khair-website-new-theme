"use client"
import { Stethoscope, Baby, FlaskConical, HeartPulse, Pill, Eye, ActivitySquare, MapPin, Phone, Mail, HandCoins } from "lucide-react";
import { motion } from "framer-motion"
import CallToAction from "@/components/CallToAction";




export default function AlKhairHospital() {
  return (
    <main className="min-h-screen pb-16">
     {/* Hero / Banner Section */}
<section className="relative min-h-[85vh] w-full px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center text-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/hospital-back.png"
      alt="Hospital Background"
      className="object-cover w-full h-full blur-[2px]"
      style={{ objectFit: "cover" }}
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/50 to-teal-50/40 backdrop-blur-[2px] z-10" />

  {/* Content */}
  <div className="relative z-20 max-w-5xl mx-auto px-2 sm:px-4">
    {/* Animated Heading */}
    {(() => {
      const headingWords = ["Al-Khair", "Welfare", "Hospital"];
      const subtext =
        "Providing 24/7 compassionate, affordable, and quality healthcare for all — especially mothers, children, and the underprivileged. Modern facilities, experienced doctors, and a mission of service to humanity.";

      return (
        <>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight flex flex-wrap justify-center"
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
                className={`mx-2 ${
                  ["Welfare", "Hospital"].includes(word)
                    ? "text-lightblue"
                    : "text-darkblue"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.7,
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray leading-relaxed max-w-3xl mx-auto mb-8 px-2"
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
                className="inline-block mr-1 sm:mr-2"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.4, type: "spring", bounce: 0.3 },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </>
      );
    })()}

    {/* Trust Indicators */}
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-gray-700 mb-4 sm:mb-2">
      {[
        { color: "bg-green-500", text: "24/7 Emergency" },
        { color: "bg-blue-500", text: "Mother & Child Care" },
        { color: "bg-teal-500", text: "Community Focus" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-sm sm:text-base">
          <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse`} />
          <span className="font-medium">{item.text}</span>
        </div>
      ))}
    </div>

    {/* Call-to-Action Button */}
    <a
      href="https://hospital.idaraalkhair.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-5"
    >
      <button className="relative px-6 sm:px-8 py-2.5 sm:py-3 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-all duration-300 bg-white text-sm sm:text-base">
        {/* Gradient Overlay Animation */}
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
        <span className="relative z-10">Learn More Information</span>
      </button>
    </a>
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative mb-16">
            <div className="flex items-center justify-center">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-lightblue to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-4">Our <span className="text-lightblue">Services</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">
                  Comprehensive medical services for all ages, with a focus on quality, compassion, and accessibility.
                </p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
            {/* Card: Dialysis Ward */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/general-ward.png"
                    alt="Dialysis Ward"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors">Dialysis Ward</h3>
                  <p className="text-gray mb-4 leading-relaxed">State-of-the-art dialysis services for patients with kidney disease</p>
                  <a href="https://hospital.idaraalkhair.com/services" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      {/* Animated gradient overlay */}
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Card: Paeds */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/pediatric-hos.jpg"
                    alt="Paeds"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
                    <Baby className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors">Pediatric OPD</h3>
                  <p className="text-gray mb-4 leading-relaxed">Pediatric OPD, NICU, and child health services</p>
                  <a href="https://hospital.idaraalkhair.com/services" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      {/* Animated gradient overlay */}
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Card: Diagnostics */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Laboratory-Services.jpg"
                    alt="Diagnostics"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
                    <FlaskConical className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors">Diagnostics</h3>
                  <p className="text-gray mb-4 leading-relaxed">24/7 lab, X-ray, ultrasound, and blood bank</p>
                  <a href="https://hospital.idaraalkhair.com/services" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      {/* Animated gradient overlay */}
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Card: O.R & Emergency */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Emergency-Care.jpg"
                    alt="O.R & Emergency"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
                    <HeartPulse className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors">O.R & Emergency</h3>
                  <p className="text-gray mb-4 leading-relaxed">Observation, emergency, and trauma care</p>
                  <a href="https://hospital.idaraalkhair.com/services" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      {/* Animated gradient overlay */}
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Card: Pharmacy */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Pharmacy-Services.jpg"
                    alt="Pharmacy"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors">Pharmacy</h3>
                  <p className="text-gray mb-4 leading-relaxed">24/7 pharmacy with quality medicines</p>
                  <a href="https://hospital.idaraalkhair.com/services" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      {/* Animated gradient overlay */}
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Card: Cardiology */}
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Specialist-Consultations.jpg"
                    alt="Cardiology"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
                    <HeartPulse className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors">Cardiology</h3>
                  <p className="text-gray mb-4 leading-relaxed">Heart care, ECG, and specialist consultations</p>
                  <a href="https://hospital.idaraalkhair.com/services" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                    <button className="relative px-6 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      {/* Animated gradient overlay */}
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 inline-flex items-center">Learn More
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Program Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center justify-center w-full mb-2">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-lightblue to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-darkblue mb-3 text-center">Charity <span className="text-lightblue">Program</span></h2>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center mb-2">Your support enables us to provide free and subsidized healthcare to those who need it most.</p>
            <p className="text-base text-blue-600 max-w-xl text-center">Every rupee you give goes directly to patient care, medical camps, and life-saving treatments for the underprivileged.</p>
          </div>
          {/* How You Can Help - as cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Donate */}
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 group backdrop-blur-md bg-white/40 shadow-2xl relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
              <div className='relative z-10 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg] mb-3'>
                <HandCoins className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-darkblue mb-1 group-hover:text-lightblue transition-colors">Donate</h3>
              <p className="text-gray-600 text-sm">Support free and subsidized treatments for deserving patients.</p>
            </div>
            {/* Zakat/Sadaqah */}
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 group backdrop-blur-md bg-white/40 shadow-2xl relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
              <div className='relative z-10 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg] mb-3'>
                <Pill className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-darkblue mb-1 group-hover:text-lightblue transition-colors">Zakat & Sadaqah</h3>
              <p className="text-gray-600 text-sm">Contribute Zakat, Sadaqah, or general charity—100% goes to patient care.</p>
            </div>
            {/* Medical Camps */}
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 group backdrop-blur-md bg-white/40 shadow-2xl relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
              <div className='relative z-10 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg] mb-3'>
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-darkblue mb-1 group-hover:text-lightblue transition-colors">Medical Camps</h3>
              <p className="text-gray-600 text-sm">Support special medical camps and outreach programs for the community.</p>
            </div>
            {/* Share Mission */}
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 group backdrop-blur-md bg-white/40 shadow-2xl relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
              <div className='relative z-10 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:rotate-[360deg] mb-3'>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-darkblue mb-1 group-hover:text-lightblue transition-colors">Share Our Mission</h3>
              <p className="text-gray-600 text-sm">Spread the word and encourage others to join this cause.</p>
            </div>
          </div>
          {/* Call to Action */}
          <div className="flex flex-col items-center">
          <a href="https://hospital.idaraalkhair.com/charity-programs" className="inline-block mt-4">
              <button className="relative px-8 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                {/* Animated gradient overlay */}
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                <span className="relative z-10">Learn More Information</span>
              </button>
            </a>
            <span className="mt-3 text-sm text-gray-500">Transparent. Impactful. 100% for patients.</span>
          </div>
        </div>
      </section>

 {/* Our Charity Initiatives Section */}
<section className="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
  <div className="container mx-auto px-4 max-w-6xl">
    {/* Section Heading */}
    <div className="flex flex-col items-center mb-10 text-center">
      <div className="flex items-center justify-center w-full mb-4">
        <div className="hidden lg:block flex-1 mr-8">
          <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-darkblue">
          Our Charity <span className="text-lightblue">Initiatives</span>
        </h2>
        <div className="hidden lg:block flex-1 ml-8">
          <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
        </div>
      </div>
      <p className="text-base md:text-lg text-gray-600 max-w-3xl">
        Through our charity initiatives, we strive to provide free and subsidized healthcare to those in need. Our programs include free medical camps, support for surgeries, provision of medicines, and community outreach to ensure no one is left behind in receiving quality healthcare.
      </p>
    </div>

    {/* Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {/* Card Template */}
      {[
        {
          icon: <HandCoins className="w-6 h-6 text-white" />,
          title: "Free Medical Camps",
          desc: "Organizing free medical camps in underserved areas, providing consultations, medicines, and referrals for specialized care."
        },
        {
          icon: <HeartPulse className="w-6 h-6 text-white" />,
          title: "Surgery & Treatment Support",
          desc: "Financial assistance for life-saving surgeries and treatments for patients who cannot afford medical expenses."
        },
        {
          icon: <Pill className="w-6 h-6 text-white" />,
          title: "Medicines & Pharmacy Aid",
          desc: "Provision of free or subsidized medicines to patients in need, ensuring access to essential drugs."
        },
        {
          icon: <MapPin className="w-6 h-6 text-white" />,
          title: "Community Outreach",
          desc: "Health awareness, preventive care, and outreach programs to educate and support the local community."
        },
        {
          icon: <HandCoins className="w-6 h-6 text-white" />,
          title: "Zakat & Donation Fund",
          desc: "Transparent collection and distribution of Zakat and donations, directly benefiting patient care and hospital services."
        },
        {
          icon: <ActivitySquare className="w-6 h-6 text-white" />,
          title: "Volunteer Engagement",
          desc: "Engaging volunteers in hospital activities, medical camps, and community programs to maximize impact."
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-white/60 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 group backdrop-blur-md relative overflow-hidden"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
          <div className="relative z-10 w-12 h-12 bg-lightblue rounded-full flex items-center justify-center shadow-md transition-transform duration-700 group-hover:rotate-[360deg] mb-3">
            {card.icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-darkblue mb-1 group-hover:text-lightblue transition-colors">
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    <CallToAction />
    </main>
  );
} 