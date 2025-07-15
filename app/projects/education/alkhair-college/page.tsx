"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen, Award, MapPin, Phone, Star, Building, Globe, Clock, Users2, Activity, Palette, TrendingUp, Users as UsersIcon, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

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
    subjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
    highlights: [
      { icon: UsersIcon, label: "Enrolled: 320 Students" },
      { icon: TrendingUp, label: "Success Rate: 95%" },
      { icon: Clock, label: "Duration: 2 Years" },
    ],
  },
  {
    name: "Pre Engineering",
    icon: Activity,
    students: 280,
    description: "Strong foundation in engineering and technology subjects",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    highlights: [
      { icon: UsersIcon, label: "Enrolled: 280 Students" },
      { icon: TrendingUp, label: "Success Rate: 92%" },
      { icon: Clock, label: "Duration: 2 Years" },
    ],
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
  },
]

const facilities = [
  {
    title: "Modern Computer Labs",
    description: "Latest hardware and software for hands-on learning",
    icon: "💻",
  },
  {
    title: "Library & Study Centers",
    description: "Extensive collection of books and digital resources",
    icon: "📚",
  },
  {
    title: "Conference Hall",
    description: "State-of-the-art auditorium for events and presentations",
    icon: "🎤",
  },
  {
    title: "Cafeteria",
    description: "Comfortable dining area with healthy meal options",
    icon: "🍽️",
  },
  {
    title: "Sports Complex",
    description: "Indoor and outdoor sports facilities for recreation",
    icon: "⚽",
  },
  {
    title: "Wi-Fi Campus",
    description: "High-speed internet connectivity throughout campus",
    icon: "📶",
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">Al-Khair College</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Al-Khair College</span> of Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Empowering students with cutting-edge technology education and practical skills for the digital age.
              Established in 2010, we have been at the forefront of technical education in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#join-college">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Apply for Admission
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* College Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collegeStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About College */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-4 md:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Al-Khair College</h2>
              <p className="text-lg text-gray-600 mb-6">
                Al-Khair College of Technology was established in 2010 with a vision to provide world-class technical 
                education to Pakistani students. Our institution combines traditional academic excellence with modern 
                technological innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We offer a diverse range of programs in computer science, business administration, digital marketing, 
                graphic design, animation, and hardware networking. Our curriculum is designed in collaboration with 
                industry experts to ensure students are job-ready upon graduation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Established</h4>
                    <p className="text-gray-600">2010</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users2 className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Faculty</h4>
                    <p className="text-gray-600">50+ Experts</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Karachi Central</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Accreditation</h4>
                    <p className="text-gray-600">HEC Recognized</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden min-w-[340px] w-full max-w-lg mx-auto">
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
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center text-blue-800 mb-2">Academic Programs</h2>
          <p className="text-center text-xl text-gray-700 mb-12">Choose your path to success with our comprehensive intermediate programs</p>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* Program List */}
            <div className="flex-1 flex flex-col gap-6">
              {academicPrograms.map((p, idx) => (
                <button
                  key={p.name}
                  onClick={() => setSelected(idx)}
                  className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all text-left bg-white focus:outline-none font-semibold shadow-none ${selected === idx ? "border-blue-500 bg-white" : "border-gray-200 hover:border-blue-300"}`}
                  style={{ boxShadow: "none" }}
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
            <div className="flex-1 min-h-[320px]">
              <div
                key={fadeKey}
                ref={detailRef}
                className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-6 h-full"
                style={{ boxShadow: "0 4px 24px rgba(34, 197, 246, 0.08)" }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="rounded-xl p-3 bg-blue-50 border border-blue-500 text-blue-700"><program.icon className="w-7 h-7" /></div>
                  <div>
                    <div className="font-extrabold text-2xl text-gray-900">{program.name}</div>
                    <div className="text-gray-600 font-medium">{program.description}</div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-800 mb-2">Core Subjects</div>
                  <ul className="flex flex-col gap-2 ml-2">
                    {program.subjects.map((subj) => (
                      <li key={subj} className="flex items-center gap-2 text-green-600 font-semibold text-base"><CheckCircle className="w-5 h-5" /> {subj}</li>
                    ))}
                  </ul>
                </div>
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
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern facilities designed to enhance learning experience and provide students with the best resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <CardTitle className="text-xl text-teal-600">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Location & Contact Section */}
      <section id="join-college" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">Ready to Join Al-Khair College?</h2>
          <p className="text-lg text-gray-700 mb-10">Take the first step towards your bright future. Contact us for admissions and campus visits.</p>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-900">Campus Address</div>
                <div className="text-gray-700">Al Khair College ,B-5/5M, North Karachi.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-7 h-7 text-green-500 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-900">Admissions Office</div>
                <div className="text-gray-700">(021) 36943503</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-7 h-7 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              <div>
                <div className="font-bold text-lg text-gray-900">Email</div>
                <div className="text-gray-700">info@idaraalkhair.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-7 h-7 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              <div>
                <div className="font-bold text-lg text-gray-900">Admission Season</div>
                <div className="text-gray-700">Applications Open: March - Aprail Every Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Journey at Al-Khair College</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of successful graduates who have transformed their careers through quality technical education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      
    </main>
  )
} 