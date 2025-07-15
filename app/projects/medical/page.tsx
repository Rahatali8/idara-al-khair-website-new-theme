import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Stethoscope, Ambulance, Users, Pill, Phone, MapPin, Star } from "lucide-react"

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
]

export default function MedicalCenterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Banner Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-gradient-to-br from-blue-50 via-teal-50 to-white text-center overflow-hidden">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full text-base shadow">
            <Heart className="w-5 h-5 text-teal-500" />
            Medical Center
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Serving <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Health</span> &amp; Hope<br />
          Since <span className="text-blue-700">2010</span>
        </h1>
        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Al-Khair Medical Center is dedicated to providing accessible, compassionate healthcare for all. We serve our community with modern facilities, expert staff, and a mission to heal and uplift lives.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/donate" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Support Our Mission
          </a>
          <a href="#our-services" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 text-lg bg-transparent flex items-center gap-2">
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">About Al-Khair Medical Center</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 md:px-12">
            {/* Image Side */}
            <div className="relative">
              <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hospital.png"
                  alt="Al-Khair Medical Center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-teal-600">24/7</div>
                      <div className="text-xs text-gray-600">Emergency Care</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">1000+</div>
                      <div className="text-xs text-gray-600">Beneficiaries</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            {/* Info Side */}
            <div>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Al-Khair Medical Center is an initiative to provide regular and emergency medical care for students, their parents, and the local community. Our mission is to ensure timely, quality healthcare for those in need, especially the underprivileged, through a well-equipped medical department, dispensary, pharmacy, and ambulance service.
              </p>
              <div className="flex flex-col items-start gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">R-510/15 Federal B Area, Karachi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">+92 300 211 2609</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">Our Services</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
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
                    <span className="text-sm font-semibold text-gray-900">{service.stats}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                </div>
                {/* Simple Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">Our Mission</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-4">
            Besides providing education, Al-Khair is actively engaged in social and financial programs for the poor and deprived people of our country. Our medical support program aims to establish a self-sufficient medical department to efficiently meet all regular and emergency cases of students and their parents. We consider the health of our students and their families as a top priority and strive to provide timely treatment, even referring to high-tech hospitals when necessary.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            All these programs are made possible through the support of donors and philanthropists. With their help, we aim to inaugurate a medical department that can handle all sorts of medical cases and emergencies within our organization, saving crucial time and lives.
          </p>
          <p className="text-lg text-gray-700">
            We request your support in establishing a proper medical department with a well-equipped dispensary, pharmacy, and ambulance for our ailing students and their parents. Your generosity can help us save lives and provide hope to the most vulnerable.
          </p>
        </div>
      </section>

      {/* Supporters & Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">Our Kind Supporters</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-lg p-6 shadow">
              <p className="text-gray-700 italic mb-2">"My heart is so happy, Saad. What a campus and what a technical department, and the food bank, everything is so clean, neat, and organized. I am so impressed, it was delightful, and I would want everyone to help support Idara Al-Khair..."</p>
              <span className="font-semibold text-teal-700">Ayesha Omar, Artist</span>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 shadow">
              <p className="text-gray-700 italic mb-2">"I was so happy to attend the Fun Mela 2023. The children put on a fantastic tableau. Thank you for inviting us."</p>
              <span className="font-semibold text-teal-700">Naila Naqvi, CEO Pie In The Sky</span>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 shadow">
              <p className="text-gray-700 italic mb-2">"This has been such an amazing event! You can see how hard the kids and faculty have worked to make this event possible! Special mention to the hosts and students who performed."</p>
              <span className="font-semibold text-teal-700">Sitara Chawla, Senior Brand Executive Pie in the Sky</span>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 shadow">
              <p className="text-gray-700 italic mb-2">"Mind boggling initiative to educate ... only if we had more schools like this, the country would look a whole lot different."</p>
              <span className="font-semibold text-teal-700">Omar Javaid, IOBM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4 text-center">Support Our Medical Center</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Help us build and sustain this essential healthcare facility. Your support can make quality healthcare accessible to more people in need. Donate or volunteer to make a difference!
          </p>
          <a href="/donate" className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
            Donate Now
          </a>
        </div>
      </section>
    </main>
  )
}