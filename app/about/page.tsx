import Image from "next/image"
import { Users, Target, Eye, Award } from "lucide-react"

const milestones = [
  {
    year: "1987",
    title: "Foundation Established",
    description: "Idara Al-Khair was founded with a vision to serve underserved communities",
  },
  {
    year: "1995",
    title: "First School Opened",
    description: "Launched our first educational institute providing quality education",
  },
  {
    year: "2005",
    title: "Medical Center Launch",
    description: "Established comprehensive healthcare services for the community",
  },
  {
    year: "2010",
    title: "Technical Institute",
    description: "Started vocational training programs for skill development",
  },
  {
    year: "2015",
    title: "Disaster Relief Program",
    description: "Expanded services to include emergency response and disaster relief",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Embraced technology to reach more communities effectively",
  },
]

const leadership = [
  {
    name: "Dr. Ahmed Hassan",
    role: "Chairman",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading the organization with over 25 years of experience in social welfare and community development.",
  },
  {
    name: "Fatima Ali",
    role: "Executive Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Overseeing daily operations and program implementation with expertise in project management.",
  },
  {
    name: "Dr. Muhammad Tariq",
    role: "Medical Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading our healthcare initiatives with extensive experience in community health programs.",
  },
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-teal-600">Idara Al-Khair</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Since 1987, we have been dedicated to empowering underserved communities through comprehensive education,
              healthcare, and welfare programs across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our mission in action"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower underserved communities by providing access to quality education, healthcare, and essential
                  welfare services, fostering sustainable development and creating opportunities for a better future.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A Pakistan where every individual has access to education, healthcare, and opportunities to thrive,
                  regardless of their socioeconomic background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over three decades of dedicated service and continuous growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-teal-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders dedicated to our mission of community empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-teal-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to the communities we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Community First",
                description: "We prioritize the needs and voices of the communities we serve",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in all our programs and services",
              },
              {
                icon: Target,
                title: "Transparency",
                description: "We maintain open and honest communication with all stakeholders",
              },
              {
                icon: Eye,
                title: "Sustainability",
                description: "We focus on creating lasting positive change and self-reliance",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="opacity-90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
