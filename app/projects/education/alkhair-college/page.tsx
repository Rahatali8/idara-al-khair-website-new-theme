"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, MapPin, Phone, Building, Globe, Clock, Users2, Activity, Palette, TrendingUp, Users as UsersIcon, CheckCircle, Monitor, Mic, Utensils, Dumbbell, Wifi } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import CallToAction from "@/components/CallToAction"

const collegeStats = [
  {
    icon: Users,
    title: "2,500+ Students",
    description: "Currently enrolled in various programs",
  },
  {
    icon: Building,
    title: "Modern Campus",
    description: "State-of-the-art facilities and infrastructure",
  },
  {
    icon: Award,
    title: "95% Success Rate",
    description: "High employment rate after graduation",
  },
  {
    icon: Globe,
    title: "Industry Partners",
    description: "Strong connections with leading companies",
  },
]

const academicPrograms = [
  {
    name: "Pre-Medical",
    icon: BookOpen,
    students: 320,
    description: "Comprehensive preparation for medical entrance exams",
    subjects: ["Biology", "Chemistry", "Physics", "Zool / Bot"],
    highlights: [
      { icon: UsersIcon, label: "Enrolled: 320 Students" },
      { icon: TrendingUp, label: "Success Rate: 95%" },
      { icon: Clock, label: "Duration: 2 Years" },
    ],
    image: "/medical-program.avif",
  },
  {
    name: "Pre Engineering",
    icon: Activity,
    students: 280,
    description: "Strong foundation in engineering and technology subjects",
    subjects: ["Mathematics", "Physics", "Chemistry", "Urdu / English"],
    highlights: [
      { icon: UsersIcon, label: "Enrolled: 280 Students" },
      { icon: TrendingUp, label: "Success Rate: 92%" },
      { icon: Clock, label: "Duration: 2 Years" },
    ],
    image: "/pre-engenering-program.jpg",
  },
  {
    name: "Commerce",
    icon: TrendingUp,
    students: 250,
    description: "Business, accounting, and commerce education for future leaders",
    subjects: ["Accounting", "Business Studies", "Economics", "Mathematics"],
    highlights: [
      { icon: UsersIcon, label: "Enrolled: 250 Students" },
      { icon: TrendingUp, label: "Success Rate: 90%" },
      { icon: Clock, label: "Duration: 2 Years" },
    ],
    image: "/commerce-program.jpg",
  },
  {
    name: "Arts & Humanities",
    icon: Palette,
    students: 180,
    description: "Creative and critical thinking through arts and humanities subjects",
    subjects: ["English", "Urdu", "Civics", "Education"],
    highlights: [
      { icon: UsersIcon, label: "Enrolled: 180 Students" },
      { icon: TrendingUp, label: "Success Rate: 88%" },
      { icon: Clock, label: "Duration: 2 Years" },
    ],
    image: "/arts-program.avif",
  },
]

const facilities = [
  {
    title: "Modern Computer Labs",
    description: "Step into our cutting-edge computer labs, where technology meets creativity. Explore, code, and innovate with the latest devices and software at your fingertips.",
    icon: <Monitor className="w-8 h-8 text-lightblue" />,
  },
  {
    title: "Library & Study Centers",
    description: "Discover a world of knowledge in our vibrant library and study spaces. Find your perfect spot and let your curiosity soar.",
    icon: <BookOpen className="w-8 h-8 text-lightblue" />,
  },
  {
    title: "Innovation Hub",
    description: "A collaborative zone for brainstorming, group projects, and hands-on experiments—where your ideas become reality!",
    icon: <Activity className="w-8 h-8 text-lightblue" />,
  },
  {
    title: "Conference Hall",
    description: "Experience live events, inspiring talks, and creative workshops in our state-of-the-art hall—where ideas come alive.",
    icon: <Mic className="w-8 h-8 text-lightblue" />,
  },
  {
    title: "Sports Complex",
    description: "From football to fitness, our sports complex is the place to play, compete, and build lifelong friendships.",
    icon: <Dumbbell className="w-8 h-8 text-lightblue" />,
  },
  {
    title: "Wi-Fi Campus",
    description: "Our high-speed Wi-Fi lets you learn, share, and stream—anywhere on campus. Stay connected everywhere!",
    icon: <Wifi className="w-8 h-8 text-lightblue" />,
  },
]

export default function AlKhairCollegePage() {
  const [selected, setSelected] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)
  const program = academicPrograms[selected]
  const detailRef = useRef(null)

  useEffect(() => {
    setFadeKey((k) => k + 1)
  }, [selected])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/campus-page-back.png"
            alt="Campus Background"
            fill
            className="object-cover blur-sm"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {(() => {
              const headingWords = ["Al-Khair", "College", "of", "Technology"];
              const subtext = "Empowering students with cutting-edge technology education and practical skills for the digital age. Established in 2010, we have been at the forefront of technical education in Pakistan.";
              return (
                <>
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
                        className={word === "Technology" ? "text-lightblue mx-2" : "mx-2"}
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
                  <a href="#join-college" className="inline-block mt-4">
                    <button className="relative px-8 py-2 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                      {/* Animated gradient overlay */}
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                      <span className="relative z-10 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Apply for Admission
                      </span>
                    </button>
              </a>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* College Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkblue">Our <span className="text-lightblue">Achievements</span></h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2">Celebrating our milestones and impact in education.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:ml-0 sm:mr-0 md:ml-8 md:mr-8 lg:ml-12 lg:mr-12">
            {collegeStats.map((collegeStat, index) => (
              <div
                key={index}
                className="group text-center bg-white/90 border border-gray-200 shadow-xl rounded-2xl p-8 flex flex-col items-center relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-lightblue"
              >
                {/* Animated gradient overlay */}
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 flex items-center justify-center shadow-lg p-1 transition-transform duration-700 group-hover:rotate-[360deg]">
                    <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                      <collegeStat.icon className="w-8 h-8 text-lightblue" />
                    </div>
                  </div>
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-darkblue mb-2">
                  {collegeStat.title}
                </h3>
                <p className="relative z-10 text-gray-600">{collegeStat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About College */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkblue">About <span className="text-lightblue">Us</span></h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2">Learn more about our vision, mission, and educational philosophy.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-2 sm:px-4 md:px-8">
              <h2 className="text-4xl font-bold text-darkblue mb-6">About Al-Khair <span className="text-lightblue">College</span></h2>
              <p className="text-lg text-gray mb-6">
                Al-Khair College of Technology was established in 2010 with a vision to provide world-class technical 
                education to Pakistani students. Our institution combines traditional academic excellence with modern 
                technological innovation.
              </p>
              <p className="text-lg text-gray mb-6">
                We offer a diverse range of programs in computer science, business administration, digital marketing, 
                graphic design, animation, and hardware networking. Our curriculum is designed in collaboration with 
                industry experts to ensure students are job-ready upon graduation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Established</h4>
                    <p className="text-gray">2010</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users2 className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Faculty</h4>
                    <p className="text-gray">50+ Experts</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Location</h4>
                    <p className="text-gray">Karachi Central</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-lightblue mr-3" />
                  <div>
                    <h4 className="font-semibold text-darkblue">Accreditation</h4>
                    <p className="text-gray">HEC Recognized</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden min-w-0 w-full max-w-lg mx-auto">
              <Image
                src="/hospital.png"
                alt="Al-Khair College Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-5xl font-extrabold text-center text-darkblue mb-2">Academic <span className="text-lightblue">Programs</span></h2>
                <p className="text-center text-xl text-gray mb-12">Choose your path to success with our comprehensive intermediate programs</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* Program List */}
            <div className="flex-1 flex flex-col gap-6">
              {academicPrograms.map((p, idx) => (
                <button
                  key={p.name}
                  onClick={() => setSelected(idx)}
                  className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all text-left bg-white focus:outline-none font-semibold shadow-none ${selected === idx ? "border-gradient-to-r from-lightblue via-blue-400 to-cyan-400 border-4 shadow-xl" : "border-gray-200 hover:border-blue-300"}`}
                  style={{ boxShadow: selected === idx ? "0 8px 32px rgba(0,60,255,0.10)" : "none" }}
                >
                  <div className={`rounded-xl p-3 border ${selected === idx ? "bg-blue-50 border-blue-500 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-500"}`}><p.icon className="w-7 h-7" /></div>
                  <div>
                    <div className="font-bold text-lg mb-1 text-gray-900">{p.name}</div>
                    <div className="text-gray-500 text-base font-normal">{p.students} Students</div>
                  </div>
                </button>
              ))}
            </div>
            {/* Program Details */}
            <div className="flex-1 min-h-[220px] sm:min-h-[280px] md:min-h-[320px]">
              <div
                key={fadeKey}
                ref={detailRef}
                className="relative bg-white/80 backdrop-blur-md border border-lightblue/20 shadow-2xl rounded-2xl p-8 flex flex-col gap-6 h-full overflow-hidden group"
                style={{ boxShadow: "0 8px 32px rgba(0,60,255,0.10)" }}
              >
                {/* Animated gradient overlay only on text section */}
                <span className="absolute left-0 right-0 top-0 h-[calc(100%-13rem)] z-10 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                {/* Decorative bottom image */}
                <div className="absolute left-0 right-0 bottom-0 w-full h-52 pointer-events-none select-none z-0">
                  <Image
                    src={program.image}
                    alt="Decorative Background"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'bottom' }}
                    priority={false}
                  />
                </div>
                {/* Content above image */}
                <div className="flex items-center gap-4 mb-2 relative z-10">
                  {/* Glassy gradient ring icon */}
                  <div className="mb-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 flex items-center justify-center shadow-lg p-1 transition-transform duration-700 group-hover:rotate-[360deg]">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                        <program.icon className="w-8 h-8 text-lightblue" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-extrabold text-2xl text-darkblue">{program.name}</div>
                    <div className="text-gray-600 font-medium">{program.description}</div>
                  </div>
                </div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Core Subjects */}
                <div>
                  <div className="font-bold text-gray-800 mb-2">Core Subjects</div>
                  <ul className="flex flex-col gap-2 ml-2">
                    {program.subjects.map((subj) => (
                      <li key={subj} className="flex items-center gap-2 text-green-600 font-semibold text-base"><CheckCircle className="w-5 h-5" /> {subj}</li>
                    ))}
                  </ul>
                </div>
                  {/* Program Highlights */}
                <div>
                  <div className="font-bold text-gray-800 mb-2">Program Highlights</div>
                  <ul className="flex flex-col gap-2 ml-2">
                    {program.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-base font-medium"><h.icon className="w-5 h-5 text-blue-600" /> {h.label}</li>
                    ))}
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-5xl font-bold text-darkblue mb-4">Campus <span className="text-lightblue">Facilities</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">
                  Modern facilities designed to enhance learning experience and provide students with the best resources.
                </p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="group bg-white/80 backdrop-blur-md border border-lightblue/20 shadow-2xl drop-shadow-[0_8px_32px_rgba(0,60,255,0.10)] rounded-2xl p-4 flex flex-col items-center relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_48px_rgba(0,60,255,0.18)]">
                {/* Animated gradient overlay */}
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                {/* Glassy gradient ring icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 flex items-center justify-center shadow-lg p-1 transition-transform duration-700 group-hover:rotate-[360deg]">
                    <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-3xl">
                      {facility.icon}
                    </div>
                  </div>
                </div>
                {/* Divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-lightblue via-cyan-400 to-blue-400 rounded-full mb-3" />
                <CardHeader className="relative z-10 text-center">
                  <CardTitle className="text-xl text-darkblue mb-2">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-gray-600 text-center mb-2">
                  <p>{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Location & Contact Section */}
      <section id="join-college" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-full md:max-w-4xl">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-darkblue mb-4"> Join <span className="text-lightblue">Al-Khair College ?</span></h2>
                <p className="text-lg text-gray mb-10">Take the first step towards your bright future. Contact us for admissions and campus visits.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Address & Contact Info */}
            <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
                <MapPin className="w-7 h-7 text-lightblue mt-1" />
              <div>
                  <div className="font-bold text-lg text-darkblue">Campus Address</div>
                  <div className="text-gray">Al Khair College ,B-5/5M, North Karachi.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-7 h-7 text-lightblue mt-1" />
                <div>
                  <div className="font-bold text-lg text-darkblue">Admissions Office</div>
                  <div className="text-gray">(021) 36943503</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
                <svg className="w-7 h-7 text-lightblue mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              <div>
                  <div className="font-bold text-lg text-darkblue">Email</div>
                  <div className="text-gray">info@idaraalkhair.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
                <svg className="w-7 h-7 text-lightblue mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              <div>
                  <div className="font-bold text-lg text-darkblue">Admission Season</div>
                  <div className="text-gray">Applications Open: March - Aprail Every Year</div>
                </div>
              </div>
            </div>
            {/* Right: Map */}
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-80 rounded-2xl overflow-hidden shadow-lg border border-lightblue">
              <iframe
                title="Al-Khair College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.073073289889!2d67.0665245!3d24.9957681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341192dcd8747%3A0xc1e63060dfca51c2!2sAl%20Khair%20College%20B-5%2F5M%2C%20North%20Karachi!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  )
} 