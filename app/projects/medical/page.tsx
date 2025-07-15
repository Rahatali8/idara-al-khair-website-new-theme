import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Stethoscope, Ambulance, Users, Pill, Phone, MapPin, Star } from "lucide-react"

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
    title: "General & Emergency Care",
    description: "Handling regular and emergency medical cases for students, parents, and the community.",
  },
  {
    icon: <Pill className="w-8 h-8 text-teal-600" />,
    title: "Dispensary & Pharmacy",
    description: "Well-equipped dispensary and pharmacy for immediate medical needs.",
  },
  {
    icon: <Ambulance className="w-8 h-8 text-teal-600" />,
    title: "Ambulance Service",
    description: "Ambulance available for urgent transport to high-tech hospitals when needed.",
  },
  {
    icon: <Users className="w-8 h-8 text-teal-600" />,
    title: "Qualified Staff",
    description: "Experienced doctors, nurses, and support staff for compassionate care.",
  },
  {
    icon: <Heart className="w-8 h-8 text-teal-600" />,
    title: "Support for the Needy",
    description: "Medical support for poor and deprived families, funded by donors and philanthropists.",
  },
]

export default function MedicalCenterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Banner Section */}
      <section className="relative min-h-[60vh] flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 w-full mb-12">
        {/* Text Left */}
        <div className="relative z-10 flex-1 px-6 md:px-12 py-12 lg:py-0 flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Al-Khair Medical Center</span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-700 font-semibold">Accessible, Compassionate Healthcare</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
            Providing regular and emergency medical care for students, parents, and the community. Our mission is to ensure timely, quality healthcare for all, especially the underprivileged.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/donate" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">Donate Now</a>
            <a href="/contact" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 text-lg bg-transparent">Contact Us</a>
          </div>
        </div>
        {/* Image Right */}
        <div className="relative flex-1 w-full h-72 md:h-96 lg:h-[420px] flex items-center justify-center">
          <Image
            src="/hospital.png"
            alt="Al-Khair Medical Center Banner"
            fill
            className="object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8 text-center">About Al-Khair Medical Center</h2>
        <div className="container mx-auto px-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-teal-600 text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
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
