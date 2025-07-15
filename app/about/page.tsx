import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Clock, MapPin, Phone, Star, ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"

const milestones = [
  {
    year: "1987",
    title: "Foundation",
    description: "Idara Al-Khair Welfare Society was established with a vision to serve humanity.",
    icon: Building2
  },
  {
    year: "1988",
    title: "First School",
    description: "Opened our first educational institution to provide quality education.",
    icon: Award
  },
  {
    year: "2010",
    title: "Healthcare Services",
    description: "Launched comprehensive healthcare programs for communities in need.",
    icon: Heart
  },
  {
    year: "2015",
    title: "Technical Institute",
    description: "Established technical training programs to empower youth with skills.",
    icon: Users
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Expanded services and embraced technology for better outreach.",
    icon: Star
  },
  {
    year: "2024",
    title: "Future Vision",
    description: "Continuing to expand and serve more communities across Pakistan.",
    icon: Clock
  }
]

const achievements = [
  {
    icon: Users,
    title: "850K+ Lives",
    description: "Impacted through our programs",
  },
  {
    icon: Award,
    title: "37+ Years",
    description: "Of dedicated service",
  },
  {
    icon: Heart,
    title: "50+ Programs",
    description: "Comprehensive services offered",
  },
  {
    icon: Building2,
    title: "15+ Centers",
    description: "Operating across Pakistan",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0 hover:from-teal-600 hover:to-blue-700">
              <Heart className="w-4 h-4 mr-2" />
              <div id="our-journey1">About Us</div>
            </Badge >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Serving <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Humanity</span> Since 1987
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Idara Al-Khair Welfare Society is a non-profit organization dedicated to serving communities 
              through education, healthcare, and social welfare programs across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg">
                <Heart className="mr-2 h-5 w-5" />
                Support Our Mission
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <achievement.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-10 py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-xl border-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide education, healthcare, and humanitarian support to underserved communities, empowering them to lead dignified and productive lives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-xl border-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a society where every individual has access to quality education, healthcare, and 
                  basic necessities, fostering sustainable development and social harmony.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of our major milestones and achievements over the past 37 years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <milestone.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-2xl font-bold text-teal-600 mb-2">{milestone.year}</div>
                    <CardTitle className="text-xl text-gray-900">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section id="our-journey" className="py-20 bg-white mx-10">
        <div className="container mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-teal-700 mb-8 text-center">History & Achievements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Idara Al-Khair Welfare Society</strong> was formed and registered in 1987. After more than 38 years of constant devotion, dedication, and the kind support of several philanthropists and organizations, we have established schools, a college, basic health centers, and vocational training centers. Our journey began with a small one-room school in Mustafa Colony, New Karachi, and has grown to impact thousands of lives through education and welfare.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The importance of education cannot be overstated. Our mission is to transform lives by providing access to quality education, healthcare, and social support to the underprivileged. Today, we serve nearly 2,500 students and continue to expand our reach and impact.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Established multiple campuses and a college</li>
                <li>Launched basic health centers and vocational training</li>
                <li>Started food support and Roti Bank programs</li>
                <li>Planted over 1,575 trees for environmental care</li>
                <li>Served over 850,000 people since inception</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/achivements.jpg"
                alt="Idara Al-Khair Main Campus"
                width={400}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full "
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chairman & Board Section */}
      <section id="president-message" className="py-20 bg-gradient-to-r from-teal-50 to-blue-50 mx-10">
        <div className="container mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-teal-700 mb-8 text-center">Message from the President</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-xl shadow-lg p-8">
            {/* Image Side */}
            <div className="flex justify-center">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mohammad Mazahir</h3>
              <p className="text-lg text-gray-700 mb-4">
                Born in 1954 in District Dadu, Sindh, Mohammad Mazahir completed his Master’s in Chemistry from the University of Karachi. Coming from a middle-class background and being socially conscious from a young age, he dedicated himself to helping the poor, often using his own resources. After moving to Karachi, he became involved in social welfare, especially in underprivileged areas like Orangi Town, Landhi, and Korangi.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Initially, his efforts focused on providing basic necessities to displaced families and supporting widows and children. Over time, he realized that long-term change could only come through <strong>education</strong>. This led him to found Idara Al-Khair, starting with a small one-room school in Mustafa Colony, New Karachi. What began with just two students has now grown to nearly 2,500 students.
              </p>
              {/* <p className="text-lg text-gray-700 mb-4">
                Throughout his journey, Mazahir faced several challenges: convincing families to send their children to school for free, overcoming parental dependence on child labor, recruiting and retaining teachers with limited funds, and dealing with student dropouts due to economic pressures. Despite these obstacles, his commitment and grassroots approach have transformed the lives of many underprivileged children through access to education.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Help us continue our work of serving humanity. Your support can make a difference in the lives 
            of thousands of people across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 shadow-lg">
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
