import { Badge } from "@/components/ui/badge"
import { BookOpen, Building2, Users, Award, Star, Clock, Heart, GraduationCap, TreePine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const milestones = [
  {
    year: "1987",
    title: "Foundation",
    description: "Idara Al-Khair Welfare Society was formed and registered in Karachi, starting with a small one-room school in Mustafa Colony.",
    icon: Building2
  },
  {
    year: "1990s",
    title: "Growth in Education",
    description: "Expanded to multiple campuses, providing quality education to underprivileged children in Karachi.",
    icon: GraduationCap
  },
  {
    year: "2000s",
    title: "Healthcare & Social Welfare",
    description: "Launched basic health centers, vocational training, and social welfare programs.",
    icon: Heart
  },
  {
    year: "2010s",
    title: "Food Security & Roti Bank",
    description: "Started Food Support Program and Roti Bank to ensure no family goes hungry.",
    icon: Award
  },
  {
    year: "2020s",
    title: "Environmental & Technical Initiatives",
    description: "Tree plantation, solar wells, and IT Institute for skill-based learning.",
    icon: TreePine
  },
  {
    year: "2024",
    title: "38+ Years of Service",
    description: "Over 850,000 people served, 6,000+ students, 1,575 trees planted, and growing.",
    icon: Star
  }
]

const stats = [
  { icon: Users, value: "850,750+", label: "People Served" },
  { icon: GraduationCap, value: "6,000+", label: "Students Enrolled" },
  { icon: TreePine, value: "1,575", label: "Trees Planted" },
  { icon: Clock, value: "38+", label: "Years of Experience" }
]

export default function AboutHistoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <Badge className="ml-6-6 text-center bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">History & Achievements</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Our Journey: Idara Al-Khair Welfare Society</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto mb-8">
            {/* Text Section */}
            <div className="flex-1 text-lg text-gray-700 text-center md:text-left px-4 md:px-8">
              <p className="mb-4">
                <strong>Idara Al-Khair Welfare Society</strong> was founded in 1987 in Karachi with a vision to transform lives through education, healthcare, and social welfare. What began as a small one-room school in Mustafa Colony has grown into a leading welfare organization impacting hundreds of thousands of lives across Pakistan.
              </p>
              <p>
                With constant devotion, dedication, and the support of philanthropists and organizations, Idara Al-Khair has established schools, a college, health centers, vocational training, and a wide range of welfare programs. Our journey is a testament to the power of community and the belief that education is the key to lasting change.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex justify-center md:justify-end">
              <Image
                src="/al-khair.png"
                alt="Idara Al-Khair Main Campus"
                width={400}
                height={400}
                className="rounded-xl shadow-lg object-cover max-w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex flex-wrap gap-8 justify-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 min-w-[160px]">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Milestones & Achievements</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-white rounded-xl shadow-lg p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                  <milestone.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-teal-600">{milestone.year}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{milestone.title}</div>
                  <div className="text-gray-700 text-base">{milestone.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to serve humanity. Your support helps us continue to provide education, healthcare, and hope to thousands across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 