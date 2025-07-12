import Image from "next/image"
import { ArrowLeft, Stethoscope, MapPin, Phone, Users, Heart, Award, Clock, Shield, Activity, Baby, UserCheck, Pill, Syringe, Microscope, Eye, Brain, Bone } from "lucide-react"
// import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const medicalServices = [
  {
    title: "General Medicine",
    description: "Comprehensive primary healthcare services with experienced physicians",
    icon: Stethoscope,
    image: "/al-khair.png",
    features: ["Health Checkups", "Diagnosis & Treatment", "Prescription Services", "Follow-up Care"]
  },
  {
    title: "Pediatric Care",
    description: "Specialized healthcare services for children and infants",
    icon: Baby,
    image: "/al-khair.png",
    features: ["Child Vaccinations", "Growth Monitoring", "Nutrition Counseling", "Child Development"]
  },
  {
    title: "Women's Health",
    description: "Comprehensive women's healthcare including maternal services",
    icon: UserCheck,
    image: "/al-khair.png",
    features: ["Prenatal Care", "Gynecological Services", "Family Planning", "Maternal Health"]
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services for urgent healthcare needs",
    icon: Activity,
    image: "/hospital.png",
    features: ["Trauma Care", "Critical Care", "Emergency Surgery", "Ambulance Services"]
  },
  {
    title: "Laboratory Services",
    description: "Advanced diagnostic testing and laboratory services",
    icon: Microscope,
    image: "/al-khair.png",
    features: ["Blood Tests", "Pathology", "Microbiology", "Biochemistry"]
  },
  {
    title: "Pharmacy Services",
    description: "In-house pharmacy with essential medications",
    icon: Pill,
    image: "/al-khair.png",
    features: ["Prescription Drugs", "Over-the-counter", "Medicine Counseling", "Generic Options"]
  },
  {
    title: "Vaccination Center",
    description: "Comprehensive vaccination services for all age groups",
    icon: Syringe,
    image: "/al-khair.png",
    features: ["Child Vaccines", "Adult Vaccines", "Travel Vaccines", "Seasonal Vaccines"]
  },
  {
    title: "Specialist Consultations",
    description: "Expert consultations in various medical specialties",
    icon: Shield,
    image: "/al-khair.png",
    features: ["Cardiology", "Dermatology", "Orthopedics", "Neurology"]
  }
]

const facilities = [
  {
    icon: Heart,
    title: "Modern Medical Equipment",
    description: "State-of-the-art diagnostic and treatment equipment"
  },
  {
    icon: Users,
    title: "Expert Medical Staff",
    description: "Experienced doctors, nurses, and healthcare professionals"
  },
  {
    icon: Clock,
    title: "24/7 Emergency Services",
    description: "Round-the-clock emergency medical care"
  },
  {
    icon: Award,
    title: "Quality Healthcare",
    description: "Certified healthcare services meeting international standards"
  }
]

const stats = [
  { number: "25,000+", label: "Patients Treated", description: "Successfully treated patients" },
  { number: "50+", label: "Medical Camps", description: "Community outreach programs" },
  { number: "15+", label: "Specialist Doctors", description: "Expert medical professionals" },
  { number: "10+", label: "Years of Service", description: "Dedicated healthcare service" },
]

export default function MedicalPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200 inline-flex items-center gap-2">
              <Heart className="w-5 h-5 text-teal-500" />
              Healthcare Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-teal-600">Medical</span> Care at Al-Khair Hospital
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-2">
              Idara Al-Khair Hospital provides quality healthcare services to underserved communities with compassion and dedication.
              Our hospital offers comprehensive care for all age groups in Karachi.
            </p>
            <p className="text-lg text-teal-700 font-medium mb-8">
              From preventive care to emergency support, the Al-Khair Hospital team is here for your family's health at every stage of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="text-base text-teal-800 font-semibold bg-teal-50 rounded-xl px-6 py-4 shadow text-center">
                For appointments and emergencies, please refer to our contact details below.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Center Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/al-khair.png"
                  alt="Al-Khair Hospital"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">25,000+</div>
                  <div className="text-sm opacity-90">Patients Treated at Al-Khair</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Quality Healthcare at Al-Khair
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Providing <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                  Compassionate Care at Al-Khair Hospital
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Al-Khair Hospital is dedicated to providing comprehensive healthcare services to underserved 
                communities. We believe that quality healthcare is a fundamental right and work tirelessly 
                to make it accessible to all, regardless of economic status.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Medical Staff</h4>
                    <p className="text-sm text-gray-600">Experienced doctors and healthcare professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Emergency Care</h4>
                    <p className="text-sm text-gray-600">Round-the-clock emergency medical services</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Equipment</h4>
                    <p className="text-sm text-gray-600">State-of-the-art medical facilities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Standards</h4>
                    <p className="text-sm text-gray-600">Certified healthcare services</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <div className="text-base text-blue-900 font-medium bg-blue-50 rounded-xl px-6 py-4 shadow text-center">
                  Walk-ins are welcome during working hours. For urgent needs, visit us directly—your health is our priority.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet the diverse medical needs of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-teal-600 text-white">
                      <service.icon className="w-3 h-3 mr-1" />
                      Service
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 px-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <a href="#visit-medical-center">Contact Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art medical facilities and equipment to provide the best possible care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <facility.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Doctors at Al-Khair Hospital</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The Al-Khair Hospital team is dedicated to your health and well-being.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: "Dr. Ahmed Khan",
              specialty: "General Physician",
              experience: "15+ years experience",
              image: "/al-khair.png"
            }, {
              name: "Dr. Sara Ali",
              specialty: "Pediatrician",
              experience: "10+ years experience",
              image: "/al-khair.png"
            }, {
              name: "Dr. Imran Siddiqui",
              specialty: "Cardiologist",
              experience: "12+ years experience",
              image: "/al-khair.png"
            }].map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <Image src={doc.image} alt={doc.name} width={96} height={96} className="rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-teal-600 font-medium mb-1">{doc.specialty}</p>
                <p className="text-gray-500 text-sm">{doc.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Al-Khair Hospital?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">We are committed to providing the best healthcare experience for you and your family at Al-Khair Hospital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Stethoscope className="w-10 h-10 mb-3 text-white bg-teal-500 rounded-full p-2" />
              <h4 className="font-semibold text-xl mb-1">24/7 Emergency</h4>
              <p className="opacity-90">Round-the-clock emergency care for all patients.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-10 h-10 mb-3 text-white bg-blue-500 rounded-full p-2" />
              <h4 className="font-semibold text-xl mb-1">Experienced Staff</h4>
              <p className="opacity-90">Highly qualified doctors, nurses, and support staff.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-10 h-10 mb-3 text-white bg-purple-500 rounded-full p-2" />
              <h4 className="font-semibold text-xl mb-1">Modern Equipment</h4>
              <p className="opacity-90">Latest diagnostic and treatment technology.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="w-10 h-10 mb-3 text-white bg-orange-500 rounded-full p-2" />
              <h4 className="font-semibold text-xl mb-1">Affordable Care</h4>
              <p className="opacity-90">Quality healthcare at reasonable costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Facilities Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Take a look at some of the key facilities at Al-Khair Hospital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Operation Theater",
              desc: "Sterile, modern operation rooms for all types of surgeries.",
              image: "/al-khair.png"
            }, {
              title: "Pharmacy",
              desc: "Fully stocked in-house pharmacy for all your medication needs.",
              image: "/al-khair.png"
            }, {
              title: "Ambulance Service",
              desc: "24/7 ambulance service for emergency patient transport.",
              image: "/al-khair.png"
            }].map((f, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                <Image src={f.image} alt={f.title} width={320} height={180} className="rounded-xl mb-4 object-cover" />
                <h4 className="text-lg font-bold text-gray-900 mb-1">{f.title}</h4>
                <p className="text-gray-600 text-sm text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">What our patients say about their experience at Al-Khair Hospital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <p className="text-lg text-gray-700 italic mb-4">“The staff at Al-Khair Hospital was very caring and the facilities are excellent!”</p>
              <div className="font-semibold text-teal-700">Ayesha S.</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <p className="text-lg text-gray-700 italic mb-4">“I received prompt treatment in the emergency room at Al-Khair Hospital. Highly recommended!”</p>
              <div className="font-semibold text-teal-700">Mohammad R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="visit-medical-center" className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Visit Our Medical Center</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Quality healthcare services available to all members of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Location & Hours
              </h4>
              <div className="space-y-2 opacity-90">
                <p><strong>Address:</strong> Sector 51-B, Korangi, Karachi</p>
                <p><strong>Operating Hours:</strong></p>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 2:00 PM</p>
                <p>Sunday: Emergency services only</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Information
              </h4>
              <div className="space-y-2 opacity-90">
                <p><strong>Emergency:</strong> +92-21-1234-5678</p>
                <p><strong>General Inquiry:</strong> +92-21-8765-4321</p>
                <p><strong>Email:</strong> medical@idaraalkhair.org</p>
                <p><strong>Free Medical Camps:</strong> Every 2nd Saturday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Quality Healthcare Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your health is our priority. Visit our medical center for comprehensive healthcare services 
            provided with compassion and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-base text-teal-800 font-semibold bg-teal-50 rounded-xl px-6 py-4 shadow text-center">
              Need help? Visit our center or call during working hours for assistance.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
