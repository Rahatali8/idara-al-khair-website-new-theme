import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InformationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/reference.png"
                alt="Idara Al-Khair Organization"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">35+</div>
                <div className="text-sm opacity-90">Years of Service</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              About Our Mission
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Communities Through{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Sustainable Development
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Idara Al-Khair has been at the forefront of humanitarian work in Pakistan since 1987. 
              We focus on education, healthcare, disaster relief, and community development to create 
              lasting positive change in underserved communities.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Education Programs</span>
                </div>
                <p className="text-sm text-gray-600">Providing quality education to underprivileged children</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Healthcare Services</span>
                </div>
                <p className="text-sm text-gray-600">Medical camps and healthcare facilities for communities</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Disaster Relief</span>
                </div>
                <p className="text-sm text-gray-600">Emergency response and rehabilitation support</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Community Development</span>
                </div>
                <p className="text-sm text-gray-600">Infrastructure and livelihood improvement projects</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 