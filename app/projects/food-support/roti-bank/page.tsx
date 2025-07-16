import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Users,
  Calendar,
  MapPin,
  Heart,
  Utensils,
  Clock,
  Package,
  Truck,
} from "lucide-react";
import Link from "next/link";

const rotiBankStats = [
  {
    icon: Users,
    title: "200+ Daily Recipients",
    description: "Students and teachers receiving daily meals",
  },
  {
    icon: Utensils,
    title: "50,000+ Meals Served",
    description: "Nutritious meals provided annually",
  },
  {
    icon: Calendar,
    title: "20+ Years Service",
    description: "Consistent food support since establishment",
  },
  {
    icon: Heart,
    title: "100% Free Service",
    description: "No cost to deserving families",
  },
];

const dailyPrograms = [
  {
    title: "Daily Lunch Program",
    description:
      "Fresh, nutritious meals served to 200+ students and teachers daily",
    time: "12:00 PM - 1:00 PM",
    icon: "🍽️",
    features: [
      "Balanced Nutrition",
      "Fresh Ingredients",
      "Hygienic Preparation",
      "Regular Schedule",
    ],
  },
  {
    title: "Monthly Ration Support",
    description:
      "Essential grocery items distributed to 50+ teachers and staff monthly",
    time: "1st Saturday of every month",
    icon: "📦",
    features: [
      "Rice & Flour",
      "Cooking Oil",
      "Pulses & Spices",
      "Personal Care Items",
    ],
  },
  {
    title: "Emergency Food Support",
    description: "Immediate assistance for families facing food insecurity",
    time: "Available 24/7",
    icon: "🚨",
    features: [
      "Quick Response",
      "Essential Items",
      "Family Support",
      "Follow-up Care",
    ],
  },
];

const distributionCenters = [
  {
    name: "Idara al-khair campus-1 (Main campus)",
    location: "Sector 5-J Sector 5 J New Karachi Town, Karachi",
    services: ["Daily Lunch", "Monthly Ration", "Emergency Support"],
    contact: "+92 300 2112609",
    hours: "Mon-Sat: 8:00 AM - 4:00 PM",
    link: "https://www.google.com/maps/place/Idara+Al+Khair+Campus+1/@25.0001846,67.0760591,21z/data=!4m14!1m7!3m6!1s0x3eb34123801a71e9:0xe5bac7442b1e8f41!2sIdara+Al+Khair+Campus+1!8m2!3d25.000129!4d67.0760504!16s%2Fg%2F11g7y4_v4l!3m5!1s0x3eb34123801a71e9:0xe5bac7442b1e8f41!8m2!3d25.000129!4d67.0760504!16s%2Fg%2F11g7y4_v4l?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Idara al-khair CFK (central food kitchen)",
    location: "Block-5, Sector 5-M, near Kifayah in North Karachi.",
    services: ["Emergency Support", "Special Programs", "Ramadan Distribution"],
    contact: "+92 300 2112609",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    link: "https://www.google.com/maps/place/ST+5,+Sector+5M+Sector+5+M+New+Karachi+Town,+Karachi,+Pakistan/@24.9967076,67.0667843,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb34118b060ffa3:0x99e621c15f86c708!8m2!3d24.9967028!4d67.0693592!16s%2Fg%2F11hc__9lrp?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function RotiBankPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-600 hover:bg-teal-200">
              Roti Bank
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Roti Bank
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Providing daily nutritious meals and essential food support to
              over 200 deserving students, teachers, and families. Our
              commitment to food security spans over 20 years of dedicated
              service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support Roti Bank
              </Button>
              <Button className="text-blue-700" size="lg" variant="outline">
                Volunteer with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rotiBankStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Roti Bank */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Roti Bank
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Roti Bank is Idara Al-Khair's flagship food support initiative,
                established to ensure that no student goes hungry. We believe
                that proper nutrition is fundamental to education and
                development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                For over 20 years, we have been providing daily lunches to 200+
                orphaned and deserving students, along with their teachers. Our
                program extends beyond daily meals to include monthly ration
                support and emergency food assistance for families in need.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Established</h4>
                    <p className="text-gray-600">2003</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Daily Recipients
                    </h4>
                    <p className="text-gray-600">200+ Students</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Centers</h4>
                    <p className="text-gray-600">2 Locations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service</h4>
                    <p className="text-gray-600">100% Free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/food-security.jpg"
                alt="Students receiving meals at Roti Bank"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Food Programs
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive food support programs designed to ensure nutrition
              and food security for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            {dailyPrograms.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <CardTitle className="text-xl text-teal-600">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.time}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">
                      Features:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {program.features.map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Centers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Distribution Centers
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Visit our centers to receive food support or learn more about our
              programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
            {distributionCenters.map((center, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {center.name}
                  </CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {center.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">
                      Services:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {center.services.map((service, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">
                        Hours:
                      </span>
                      <p className="text-gray-600">{center.hours}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Contact:
                      </span>
                      <p className="text-teal-600 font-bold">
                        {center.contact}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a
                      href={center.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Center
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Support Our Roti Bank Mission
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Help us provide nutritious meals to more children. Your support can
            ensure no child goes hungry and every student has the energy to
            learn and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/donate"}>
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Donate to Roti Bank
            </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Link href="/volunteers">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
