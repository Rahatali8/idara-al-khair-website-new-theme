import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, MapPin, Heart, Briefcase, GraduationCap, Star, Clock, Award, Building, Globe, HandHeart, Shield, Lightbulb, Target, Zap } from "lucide-react"
import Link from "next/link"

const volunteerStats = [
  {
    icon: Users,
    title: "500+ Active Volunteers",
    description: "Dedicated volunteers across Pakistan",
  },
  {
    icon: Heart,
    title: "50+ Programs",
    description: "Volunteer opportunities available",
  },
  {
    icon: Award,
    title: "24/7 Support",
    description: "Round-the-clock volunteer coordination",
  },
  {
    icon: Shield,
    title: "100% Impact",
    description: "Direct community impact through volunteers",
  },
]

const volunteerPrograms = [
  {
    title: "Education Support",
    description: "Help in teaching, mentoring, and educational activities",
    icon: "📚",
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
    icon: "🏥",
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
    icon: "🚨",
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
    icon: "🍽️",
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
    icon: "📋",
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
    icon: "💻",
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
  return (
    <main className="/">
      {/* Hero Section */}
      <section className="min-h-[86vh] bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 bg-teal-100 text-teal-800 hover:bg-teal-200">Volunteer Program</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Volunteer</span> Family
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
            Join our volunteer program to make a real difference!
            Use your time and skills to uplift communities and create lasting impact across Pakistan. Help those in need, gain experience, and be part of positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50" asChild>
                <a href="#volunteer-opportunities">View Opportunities</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <stat.icon className="w-9 h-9 text-teal-600" strokeWidth={2.2} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.title}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Volunteering */}
      <section className="py-20 bg-gray-50 px-4 md:px-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Volunteer With Us?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Idara Al-Khair's volunteer program offers meaningful opportunities to serve communities in need. 
                Our volunteers are the backbone of our operations, helping us reach more people and create greater impact.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're passionate about education, healthcare, disaster relief, or community service, 
                we have a place for you. Join our diverse team of dedicated volunteers and make a real difference.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-7 h-7 text-teal-600 mr-3" strokeWidth={2.2} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Hours</h4>
                    <p className="text-gray-600">Choose your schedule</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-7 h-7 text-teal-600 mr-3" strokeWidth={2.2} />
                  <div>
                    <h4 className="font-semibold text-gray-900">500+ Volunteers</h4>
                    <p className="text-gray-600">Active community</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-7 h-7 text-teal-600 mr-3" strokeWidth={2.2} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multiple Locations</h4>
                    <p className="text-gray-600">Across Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-7 h-7 text-teal-600 mr-3" strokeWidth={2.2} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Recognition</h4>
                    <p className="text-gray-600">Certificates & awards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/volunteers.jpg"
                alt="Idara Al-Khair Volunteers Group Photo"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Programs */}
      <section id="volunteer-opportunities" className="py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from various volunteer programs that match your skills, interests, and availability.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerPrograms.map((program, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow text-left flex flex-col gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50">
              <h3 className="text-2xl font-semibold text-teal-700 mb-1">{program.title}</h3>
              <p className="text-gray-700 mb-2">{program.description}</p>
              <div className="text-sm text-gray-500 mb-1"><strong>Location:</strong> {program.location}</div>
              <div className="text-sm text-gray-500 mb-1"><strong>Commitment:</strong> {program.commitment}</div>
              <div className="text-sm text-gray-500 mb-1"><strong>Impact:</strong> {program.impact}</div>
              <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                {program.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="my-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Volunteering</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteering with Idara Al-Khair offers numerous personal and professional benefits.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {volunteerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow text-left flex flex-col gap-2 items-start transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50">
                <benefit.icon className="w-8 h-8 text-teal-600 mb-2" strokeWidth={2.2} />
                <h3 className="text-xl font-semibold text-teal-700 mb-1">{benefit.title}</h3>
                <p className="text-gray-700 mb-2">{benefit.description}</p>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our dedicated volunteers about their experiences and the impact they've made.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow text-left flex flex-col gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50">
                <h3 className="text-xl font-semibold text-teal-700 mb-1">{story.name} <span className="text-sm text-gray-500 font-normal">({story.role})</span></h3>
                <div className="text-sm text-gray-500 mb-1"><strong>Duration:</strong> {story.duration} &nbsp; <strong>Hours:</strong> {story.hours}</div>
                <blockquote className="italic text-gray-700 border-l-4 border-teal-400 pl-4">"{story.story}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Basic requirements to join our volunteer program and start making a difference.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerRequirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50">
                <Shield className="w-7 h-7 text-teal-600 mb-2" strokeWidth={2.2} />
                <h4 className="font-semibold text-teal-700 text-lg mb-2">{requirement.name}</h4>
                <p className="text-gray-600 text-sm">{requirement.requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Volunteer Family</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Your time and skills can transform lives. Join our dedicated team of volunteers and 
            help us create a better future for communities across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 