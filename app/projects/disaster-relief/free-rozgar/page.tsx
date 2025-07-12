import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, MapPin, Heart, Briefcase, GraduationCap, Star, Clock, Award, Building, Globe, DollarSign, TrendingUp, Lightbulb, Target, Zap } from "lucide-react"
import Link from "next/link"

const rozgarStats = [
  {
    icon: Users,
    title: "500+ Entrepreneurs",
    description: "Successfully started their own businesses",
  },
  {
    icon: DollarSign,
    title: "PKR 50M+",
    description: "Total business value generated",
  },
  {
    icon: TrendingUp,
    title: "85% Success Rate",
    description: "Businesses still operating after 2 years",
  },
  {
    icon: Heart,
    title: "100% Free",
    description: "No cost to participants",
  },
]

const businessCategories = [
  {
    title: "Digital Business",
    description: "Online businesses and digital services",
    icon: "💻",
    duration: "3 Months",
    seats: "30",
    features: ["E-commerce Setup", "Social Media Business", "Digital Marketing", "Online Services", "App Development"],
    image: "/Digital-marketing.jpg",
    startupCost: "PKR 10,000 - 50,000",
    potentialIncome: "PKR 30,000 - 100,000/month",
  },
  {
    title: "Food & Catering",
    description: "Restaurant, catering, and food delivery services",
    icon: "🍽️",
    duration: "2 Months",
    seats: "25",
    features: ["Restaurant Management", "Catering Services", "Food Delivery", "Menu Planning", "Kitchen Operations"],
    image: "/food-security.jpg",
    startupCost: "PKR 50,000 - 200,000",
    potentialIncome: "PKR 40,000 - 150,000/month",
  },
  {
    title: "Beauty & Wellness",
    description: "Beauty salon, spa, and wellness services",
    icon: "💄",
    duration: "3 Months",
    seats: "20",
    features: ["Beauty Salon", "Spa Services", "Makeup Artistry", "Hair Styling", "Wellness Products"],
    image: "/placeholder.jpg",
    startupCost: "PKR 30,000 - 100,000",
    potentialIncome: "PKR 25,000 - 80,000/month",
  },
  {
    title: "Automotive Services",
    description: "Car wash, repair, and maintenance services",
    icon: "🚗",
    duration: "4 Months",
    seats: "20",
    features: ["Car Wash Service", "Auto Repair", "Detailing Services", "Parts Sales", "Mobile Services"],
    image: "/hardware.jpg",
    startupCost: "PKR 100,000 - 300,000",
    potentialIncome: "PKR 50,000 - 120,000/month",
  },
  {
    title: "Home Services",
    description: "Cleaning, maintenance, and home improvement",
    icon: "🏠",
    duration: "2 Months",
    seats: "35",
    features: ["House Cleaning", "Plumbing Services", "Electrical Work", "Painting", "Gardening"],
    image: "/Office.jpg",
    startupCost: "PKR 20,000 - 80,000",
    potentialIncome: "PKR 20,000 - 60,000/month",
  },
  {
    title: "Education & Training",
    description: "Tutoring, coaching, and skill development",
    icon: "📚",
    duration: "3 Months",
    seats: "25",
    features: ["Private Tutoring", "Skill Training", "Online Courses", "Language Classes", "Exam Preparation"],
    image: "/quality-education.jpg",
    startupCost: "PKR 15,000 - 50,000",
    potentialIncome: "PKR 25,000 - 80,000/month",
  },
]

const successStories = [
  {
    name: "Ahmed Khan",
    business: "Digital Marketing Agency",
    investment: "PKR 25,000",
    currentIncome: "PKR 80,000/month",
    image: "/placeholder-user.jpg",
    story: "Started with social media marketing, now runs a full digital agency with 5 employees.",
  },
  {
    name: "Fatima Ali",
    business: "Home Bakery",
    investment: "PKR 40,000",
    currentIncome: "PKR 60,000/month",
    image: "/placeholder-user.jpg",
    story: "From home kitchen to supplying 20+ cafes and restaurants with custom cakes.",
  },
  {
    name: "Muhammad Hassan",
    business: "Mobile Car Wash",
    investment: "PKR 50,000",
    currentIncome: "PKR 45,000/month",
    image: "/placeholder-user.jpg",
    story: "Started with one car, now has a fleet of 3 mobile units serving corporate clients.",
  },
]

const supportServices = [
  {
    title: "Business Planning",
    description: "Complete business plan development and market research",
    icon: Target,
    features: ["Market Analysis", "Financial Planning", "Business Model", "Risk Assessment", "Growth Strategy"],
  },
  {
    title: "Financial Support",
    description: "Micro-loans and financial assistance for business startup",
    icon: DollarSign,
    features: ["Micro-loans", "Equipment Financing", "Working Capital", "Interest-free Loans", "Repayment Plans"],
  },
  {
    title: "Marketing Support",
    description: "Digital marketing and promotional assistance",
    icon: TrendingUp,
    features: ["Social Media Setup", "Website Development", "Branding", "Advertising", "Customer Acquisition"],
  },
  {
    title: "Mentorship Program",
    description: "One-on-one guidance from successful entrepreneurs",
    icon: Lightbulb,
    features: ["Business Mentoring", "Skill Development", "Networking", "Problem Solving", "Growth Guidance"],
  },
]

const businessResources = [
  { name: "Business Registration", logo: "/placeholder-logo.png", service: "Legal Support" },
  { name: "Banking Partners", logo: "/placeholder-logo.png", service: "Financial Services" },
  { name: "Marketing Agencies", logo: "/placeholder-logo.png", service: "Promotional Support" },
  { name: "Equipment Suppliers", logo: "/placeholder-logo.png", service: "Business Supplies" },
  { name: "Insurance Partners", logo: "/placeholder-logo.png", service: "Business Protection" },
  { name: "Technology Partners", logo: "/placeholder-logo.png", service: "Digital Solutions" },
]

export default function FreeRozgarPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Free Rozgar Program</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Apna Rozgar</span> Shuru Karein
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Apne sapne ko haqeeqat mein badalne ka mauka! Free Rozgar Program aapko apna business shuru karne mein 
              madad karta hai. Training, financial support, aur mentorship ke sath apna rozgar banayein.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                <Briefcase className="mr-2 h-5 w-5" />
                Business Plan Banayein
              </Button>
              <Button size="lg" variant="outline">
                Training Programs Dekhein
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rozgarStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Apna Business Shuru Karein</h2>
              <p className="text-lg text-gray-600 mb-6">
                Free Rozgar Program sirf job placement nahi, balke aapko apna business shuru karne mein madad karta hai. 
                Hum aapko training, financial support, aur mentorship provide karte hain taky aap apne sapne ko haqeeqat mein badal sakein.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Humare program mein aap business planning, marketing strategies, financial management, aur practical 
                training seekhte hain. Iske baad hum aapko micro-loans aur mentorship provide karte hain taky aap 
                apna business successfully shuru kar sakein.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Duration</h4>
                    <p className="text-gray-600">2-4 Months</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Entrepreneurs</h4>
                    <p className="text-gray-600">500+ Started</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Karachi Central</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service</h4>
                    <p className="text-gray-600">100% Free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/skill-devp.jpg"
                alt="Free Rozgar Program - Entrepreneurship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apne interest aur skills ke hisab se business category choose karein. Har category mein 
              comprehensive training aur support milta hai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{category.duration}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 px-8">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-900">Available Seats:</span>
                    <span className="text-blue-600 font-bold">{category.seats}</span>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-gray-900">Startup Cost:</span>
                      <span className="text-green-600 font-bold">{category.startupCost}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-900">Potential Income:</span>
                      <span className="text-blue-600 font-bold">{category.potentialIncome}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Skills Covered:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {category.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Business shuru karne ke liye comprehensive support services jo aapko successful entrepreneur banane mein madad karte hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-blue-600">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 mr-2 text-blue-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hamare graduates ki success stories jo apne business shuru karke successful entrepreneurs ban gaye hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg text-blue-600">{story.name}</CardTitle>
                  <CardDescription>{story.business}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">
                      <strong>Initial Investment:</strong> {story.investment}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Current Income:</strong> {story.currentIncome}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hamare partner organizations jo aapke business ke liye essential services provide karte hain.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {businessResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={resource.logo}
                      alt={resource.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{resource.name}</h4>
                  <p className="text-xs text-gray-600">{resource.service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Apna Business Shuru Karein</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Abhi apply karein aur apne sapne ko haqeeqat mein badalne ka safar shuru karein. 
            Free training, financial support, aur mentorship ke sath apna rozgar banayein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Briefcase className="mr-2 h-5 w-5" />
              Business Plan Banayein
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 