"use client"
import Image from "next/image"
import { Heart, Stethoscope, Ambulance, Users, Pill, Phone, MapPin, Star, User } from "lucide-react"
import CallToAction from "@/components/CallToAction"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"


const services = [
  {
    id: "emergency",
    title: "General & Emergency Care",
    description: "Handling regular and emergency medical cases for students, parents, and the community.",
    image: "/Emergency-Care.jpg",
    icon: Stethoscope,
    color: "from-red-500 to-red-600",
    stats: "24/7 Service",
  },
  {
    id: "pharmacy",
    title: "Dispensary & Pharmacy",
    description: "Well-equipped dispensary and pharmacy for immediate medical needs.",
    image: "/Pharmacy-Services.jpg",
    icon: Pill,
    color: "from-blue-500 to-blue-600",
    stats: "On-site",
  },
  {
    id: "ambulance",
    title: "Ambulance Service",
    description: "Ambulance available for urgent transport to high-tech hospitals when needed.",
    image: "/ambulance.jpg",
    icon: Ambulance,
    color: "from-green-500 to-green-600",
    stats: "Quick Response",
  },
  {
    id: "staff",
    title: "Qualified Staff",
    description: "Experienced doctors, nurses, and support staff for compassionate care.",
    image: "/health-care.jpg",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    stats: "Expert Team",
  },
  {
    id: "support",
    title: "Support for the Needy",
    description: "Medical support for poor and deprived families, funded by donors and philanthropists.",
    image: "/medical-aid.jpg",
    icon: Heart,
    color: "from-teal-500 to-teal-600",
    stats: "Charity Care",
  },
  {
    id: "fully-free",
    title: "Support for Poors",
    description: "Medical support for poor and deprived families, funded by donors and philanthropists.",
    image: "/non-profit.webp",
    icon: Heart,
    color: "from-teal-500 to-teal-600",
    stats: "Charity Care",
  },
]

export default function MedicalCenterPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[85vh] py-12 sm:py-16 px-4 sm:px-6 text-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/hospital-back.png"
      alt="Hospital Background"
      fill
      className="object-cover opacity-70 blur-sm"
      priority
    />
  </div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl w-full mx-auto">
    <>
      {/* Animated Heading */}
      {(() => {
        const headingWords = ["Serving", "Health", "Hope", "Since", "2010"];
        return (
          <motion.h1
            className="text-darkblue text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 flex flex-wrap justify-center leading-tight"
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
                className={word === "Health" || word === "2010" ? "text-lightblue mx-2" : "mx-2"}
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
        );
      })()}

      {/* Animated Subtext */}
      {(() => {
        const subtext =
          "Al-Khair Medical Center is dedicated to providing accessible, compassionate healthcare for all. We serve our community with modern facilities, expert staff, and a mission to heal and uplift lives.";
        return (
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4 max-w-3xl"
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
                className="inline-block mr-1"
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
        );
      })()}

      {/* Button */}
      <a href="#our-services" className="inline-block mt-2 sm:mt-4">
        <button className="relative px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-all duration-300 bg-white hover:bg-lightblue hover:text-white">
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
          <span className="relative z-10">Learn More</span>
        </button>
      </a>
    </>
  </div>
</section>


     {/* About Section */}
<section className="mb-16 mt-20">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <div className="flex flex-col lg:flex-row items-center justify-center mb-10 text-center">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="hidden lg:block flex-1 mr-8"
      >
        <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="text-center px-4 sm:px-8"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-3">
          About Al-Khair
          <span className="text-lightblue"> Medical Center</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray leading-relaxed max-w-2xl mx-auto">
          Al-Khair Medical Center is an initiative to provide regular and emergency
          medical care for students, their parents, and the local community.
        </p>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="hidden lg:block flex-1 ml-8"
      >
        <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
      </div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 md:px-12">
      {/* Left Image Section */}
      <div
        className="relative"
        data-aos="fade-up-right"
        data-aos-duration="1200"
      >
        <div className="relative h-72 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hospital.png"
            alt="Al-Khair Medical Center"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

          {/* Floating Stats Card */}
          <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-teal-600">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Emergency Care
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Beneficiaries
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Right Text Section */}
      <div data-aos="fade-up-left" data-aos-duration="1200">
        <h3 className="text-xl sm:text-2xl font-bold text-lightblue mb-4">
          About Medical
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 max-w-2xl">
          Al-Khair Medical Center is an initiative to provide regular and
          emergency medical care for students, their parents, and the local
          community. Our mission is to ensure timely, quality healthcare for
          those in need, especially the underprivileged, through a
          well-equipped medical department, dispensary, pharmacy, and ambulance
          service.
        </p>

        <div className="flex flex-col items-start gap-4 mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-600" />
            <span className="text-gray-700 text-sm sm:text-base">
              R-510/15 Federal B Area, Karachi
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-teal-600" />
            <span className="text-gray-700 text-sm sm:text-base">
              +92 300 211 2609
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
    <section id="our-services" className="mb-16 mt-20">
  <div className="flex items-center justify-center mb-10">
    <div className="hidden lg:block flex-1 mr-8">
      <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
    </div>
    <div
      className="text-center px-8"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-2">
        Our <span className="text-lightblue">Services</span>
      </h2>
      <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2 px-2 sm:px-6">
        Comprehensive healthcare services for the community, including emergency care, pharmacy, ambulance, and more.
      </p>
    </div>
    <div className="hidden lg:block flex-1 ml-8">
      <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
    </div>
  </div>

  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
          data-aos="zoom-in-up"
          data-aos-delay={index * 100}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />

          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Icon */}
            <div
              className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg`}
            >
              <service.icon className="w-6 h-6 text-white" />
            </div>

            {/* Stats Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-sm font-semibold text-gray-900">
                {service.stats}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-darkblue mb-3 group-hover:text-lightblue transition-colors">
              {service.title}
            </h3>
            <p className="text-gray mb-4 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Simple Hover Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          />
        </div>
      ))}
    </div>
  </div>
</section>
    {/* Mission Section */}
<section className="mb-16 mt-20">
  <div className="flex items-center justify-center mb-10">
    {/* Left Line */}
    <div className="hidden lg:block flex-1 mr-8">
      <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
    </div>

    {/* Heading */}
    <div
      className="text-center px-8"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-2">
        Our <span className="text-lightblue">Mission</span>
      </h2>
      <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2 px-2 sm:px-6">
        Our medical support program aims to establish a self-sufficient medical department
        to efficiently meet all regular and emergency cases of students and their parents.
      </p>
    </div>

    {/* Right Line */}
    <div className="hidden lg:block flex-1 ml-8">
      <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
    </div>
  </div>

  {/* Content Box */}
  <div
    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
      Besides providing education, Al-Khair is actively engaged in social and financial programs
      for the poor and deprived people of our country. Our medical support program aims to establish
      a self-sufficient medical department to efficiently meet all regular and emergency cases of
      students and their parents. We consider the health of our students and their families as a
      top priority and strive to provide timely treatment, even referring to high-tech hospitals
      when necessary.
    </p>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
      All these programs are made possible through the support of donors and philanthropists.
      With their help, we aim to inaugurate a medical department that can handle all sorts of
      medical cases and emergencies within our organization, saving crucial time and lives.
    </p>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
      We request your support in establishing a proper medical department with a well-equipped
      dispensary, pharmacy, and ambulance for our ailing students and their parents. Your generosity
      can help us save lives and provide hope to the most vulnerable.
    </p>
  </div>
</section>


    {/* Supporters & Testimonials Section - Autoplay Carousel */}
<section className="mb-16 py-12 rounded-2xl">
  {/* Section Heading */}
  <div className="flex items-center justify-center mb-10">
    <div className="hidden lg:block flex-1 mr-8">
      <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
    </div>

    <div
      className="text-center px-8"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-2">
        Our <span className="text-lightblue">Kind Supporters</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2 px-2 sm:px-4">
        Testimonials and kind words from those who have supported and witnessed our mission.
      </p>
    </div>

    <div className="hidden lg:block flex-1 ml-8">
      <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
    </div>
  </div>

  {/* Testimonial Carousel */}
  <div
    className="max-w-2xl mx-auto relative px-6 sm:px-8"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <>
      {(() => {
        const testimonials = [
          {
            quote:
              '"My heart is so happy, Saad. What a campus and what a technical department, and the food bank, everything is so clean, neat, and organized. I am so impressed, it was delightful, and I would want everyone to help support Idara Al-Khair..."',
            name: "Ayesha Omar, Artist",
          },
          {
            quote:
              '"I was so happy to attend the Fun Mela 2023. The children put on a fantastic tableau. Thank you for inviting us."',
            name: "Naila Naqvi, CEO Pie In The Sky",
          },
          {
            quote:
              '"This has been such an amazing event! You can see how hard the kids and faculty have worked to make this event possible! Special mention to the hosts and students who performed."',
            name: "Sitara Chawla, Senior Brand Executive Pie in the Sky",
          },
          {
            quote:
              '"Mind boggling initiative to educate ... only if we had more schools like this, the country would look a whole lot different."',
            name: "Omar Javaid, IOBM",
          },
        ];

        const [current, setCurrent] = useState(0);

        useEffect(() => {
          const interval = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
          }, 4000);
          return () => clearInterval(interval);
        }, [testimonials.length]);

        const prev = () =>
          setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
        const next = () =>
          setCurrent((c) => (c + 1) % testimonials.length);

        return (
          <div className="relative flex flex-col items-center">
            {/* Carousel */}
            <div className="flex w-full justify-center items-center relative">
              <button
                onClick={prev}
                className="hidden sm:flex p-2 rounded-full bg-lightblue/10 hover:bg-lightblue/30 text-lightblue transition-colors absolute left-0 z-10"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="w-full flex justify-center">
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 sm:p-10 flex flex-col items-center text-center group overflow-hidden min-w-[300px] sm:min-w-[340px] md:min-w-[400px] mx-auto">
                  {/* Quote Icon */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4z"
                      />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-700 italic mb-4 mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
                    {testimonials[current].quote}
                  </p>
                  <span className="font-semibold text-lightblue mt-4 block text-sm sm:text-base">
                    {testimonials[current].name}
                  </span>
                </div>
              </div>

              <button
                onClick={next}
                className="hidden sm:flex p-2 rounded-full bg-lightblue/10 hover:bg-lightblue/30 text-lightblue transition-colors absolute right-0 z-10"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === current ? "bg-lightblue scale-110" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        );
      })()}
    </>
  </div>
</section>


      {/* Call to Action Section */}
      <CallToAction />
    </main>
  )
}