import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Heart, Target, ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <p className="text-teal-600 font-semibold mb-2 uppercase tracking-wide">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                  Idara Al-Khair
                </span>{" "}
                Welfare Society
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">Idara Al-Khair Welfare Society</strong> was formed and registered in
                the year 1987. After a period of toiling around the clock for more than 37 years with constant devotion,
                dedication and the kind support of several philanthropist individuals and organizations.
              </p>

              <p>
                We have been able to establish schools, a college, basic health centers and vocational training centers.
                To emphasize the needs and importance of education in this millennium will be nothing but mere
                stereotypical words and a waste of time.
              </p>

              <p>
                Our mission extends beyond education to encompass comprehensive welfare services including healthcare,
                disaster relief, food security, and community development programs that have transformed thousands of
                lives across Pakistan.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">37+ Years</h3>
                  <p className="text-sm text-gray-600">Of Dedicated Service</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">850K+</h3>
                  <p className="text-sm text-gray-600">Lives Transformed</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">6 Campuses</h3>
                  <p className="text-sm text-gray-600">Educational Institutes</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">100%</h3>
                  <p className="text-sm text-gray-600">Transparent Operations</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/al-khair.png"
                alt="Idara Al-Khair campus and activities"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-teal-600">6000+</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1575</div>
                    <div className="text-xs text-gray-600">Trees Planted</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">35+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
