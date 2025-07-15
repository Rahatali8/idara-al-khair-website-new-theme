import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  Users, 
  Award, 
  Shield,
  Send,
  MessageCircle,
  Building2,
  Smartphone,
  Calendar,
  User,
  MessageSquare,
  Globe,
  Star,
  Zap,
  Target,
  TrendingUp
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: "R-510/15 Federal B Area, Karachi",
    description: "Main administrative center"
  },
  {
    icon: Phone,
    title: "Primary Contact",
    details: "+92 300 211 2609",
    description: "24/7 support available"
  },
  {
    icon: Mail,
    title: "Email Support",
    details: "info@idaraalkhair.com",
    description: "Quick response guaranteed"
  },
  {
    icon: Clock,
    title: "Established",
    details: "Since 1987",
    description: "37+ years of service"
  }
]

const donationMethods = [
  {
    title: "Meezan Bank",
    accountName: "Idara Al-Khair Welfare Society",
    accountNumber: "0101018353",
    branchCode: "0133",
    swiftCode: "MEZNPKKA",
    iban: "PK85MEZN0001330101018353"
  },
  {
    title: "MCB Bank",
    accountName: "Idara Al-Khair Welfare Society", 
    accountNumber: "10008429",
    branchCode: "0055",
    swiftCode: "MUCBPKKA",
    iban: "PK87MUCB0005501010008429"
  }
]

const organizationStats = [
  { number: "1987", label: "Founded", icon: Award },
  { number: "37+", label: "Years of Service", icon: Clock },
  { number: "500+", label: "Active Volunteers", icon: Users },
  { number: "50+", label: "Programs", icon: Heart }
]

const services = [
  {
    title: "Education Programs",
    description: "Schools, Technical Center, IT Institute",
    icon: Globe
  },
  {
    title: "Food Support",
    description: "Food Support Program, Roti Bank",
    icon: Heart
  },
  {
    title: "Healthcare",
    description: "Medical Center services",
    icon: Shield
  },
  {
    title: "Social Welfare",
    description: "Disaster Relief Program",
    icon: Users
  }
]

const faqData = [
  {
    question: "How can I donate to Idara Al-Khair?",
    answer: "You can donate through bank transfers to our official accounts at Meezan Bank or MCB Bank. All donation details are provided above for your convenience. We also accept donations in person at our head office."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve communities across Pakistan, with our main operations in Karachi and surrounding areas. Our programs reach thousands of families in need throughout the country."
  },
  {
    question: "How can I volunteer with Idara Al-Khair?",
    answer: "We welcome volunteers from all backgrounds. You can contact us directly or visit our volunteer page to learn about current opportunities and requirements. We have various programs where you can contribute your time and skills."
  },
  {
    question: "Are my donations tax-deductible?",
    answer: "Yes, all donations to Idara Al-Khair Welfare Society are tax-deductible. We provide official receipts for all contributions which you can use for tax purposes."
  },
  {
    question: "What services do you provide?",
    answer: "We provide comprehensive services including education programs (schools, technical centers, IT institute), food support (food distribution, roti bank), healthcare (medical centers), and social welfare (disaster relief programs)."
  },
  {
    question: "How can I contact you for emergencies?",
    answer: "For emergencies, you can call our primary contact number +92 300 211 2609. We have 24/7 support available for urgent matters and disaster relief operations."
  },
  {
    question: "Do you provide medical services?",
    answer: "Yes, we operate medical centers that provide healthcare services to communities in need. Our medical programs include general healthcare, emergency care, and specialized medical services."
  },
  {
    question: "How long has Idara Al-Khair been operating?",
    answer: "Idara Al-Khair was founded in 1987 and has been serving communities for over 37 years. We have a long history of dedicated service to humanity across Pakistan."
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0 hover:from-teal-600 hover:to-blue-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Idara Al-Khair</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Ready to make a difference? Reach out to us and discover how you can contribute to our mission of serving humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <a href="mailto:info@idaraalkhair.com">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Stats */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {organizationStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs serving communities across Pakistan with dedication and excellence.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group hover:-translate-y-2 hover:opacity-90">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with us through multiple channels. Our dedicated team is ready to assist you with any inquiries.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group hover:-translate-y-2 hover:opacity-90">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <info.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-teal-600 mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0 hover:from-teal-600 hover:to-blue-700">
              <Heart className="w-4 h-4 mr-2" />
              Support Our Cause
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Donation Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your generous donations help us continue our mission. Choose from our secure banking options below.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {donationMethods.map((method, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:opacity-90">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Building2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{method.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-700">
                    {method.accountName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-4 space-y-2 shadow-inner">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Account Number:</span>
                      <span className="font-semibold text-gray-900">{method.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Branch Code:</span>
                      <span className="font-semibold text-gray-900">{method.branchCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Swift Code:</span>
                      <span className="font-semibold text-gray-900">{method.swiftCode}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">IBAN:</span>
                        <span className="font-semibold text-gray-900 text-sm">{method.iban}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our organization and how you can get involved.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:opacity-90">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Have questions or want to get involved? We'd love to hear from you.
              </p>
            </div>
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          className="pl-10 h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          className="pl-10 h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-gray-700 font-medium">Preferred Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="date"
                          type="date"
                          className="pl-10 h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Textarea
                        id="message"
                        placeholder="Write your message here..."
                        className="pl-10 min-h-[120px] border-gray-300 focus:border-teal-500 focus:ring-teal-500 resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 shadow-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in our mission to serve humanity. Every contribution, no matter how small, makes a significant impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Users className="w-5 h-5 mr-2" />
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
