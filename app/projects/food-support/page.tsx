import Image from "next/image"
import { ArrowLeft, Users, Calendar, MapPin, Heart } from "lucide-react"
import Link from "next/link"

export default function FoodSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-4">Food Support Program</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Ensuring food security and nutrition for deserving families and students across our community
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Children receiving meals"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-red-500" />
                <span className="font-semibold text-gray-900">50,000+ Meals Served</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Food Support Program</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In addition to our educational projects, it is worth mentioning that Idara Al-Khair has been catering to
              daily lunches for its deserving students along with grocery bags for many students' families since the
              last twenty years. Details of the food support that we provide are as mentioned:
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong>Daily Lunch Program:</strong> We provide lunches to 200 orphaned students, other deserving
                  students and teachers on a daily basis
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong>Monthly Ration Support:</strong> We distribute ration bags to 50 teachers and lower staff
                  members on a monthly basis
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong>Ramadan Distribution:</strong> We arrange for the distribution of ration bags to families of
                  about 1700 students every Ramadan with the co-operation of other organizations
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong>Monthly Rice Distribution:</strong> We ensure monthly distribution of rice to students
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong>Emergency Support:</strong> We responsibly administer to the distribution of ration to those
                  students whose parents are jobless
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Daily Lunch Recipients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Monthly Ration Bags</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,700+</div>
              <div className="text-gray-600">Ramadan Support</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>

        {/* Distribution Centers */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Distribution Centers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 px-8 shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Main Campus - Korangi</h4>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Daily Lunch:</strong> 12:00 PM - 1:00 PM
                </p>
                <p>
                  <strong>Ration Distribution:</strong> 1st Saturday of every month
                </p>
                <p>
                  <strong>Address:</strong> Sector 51-B, Korangi, Karachi
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 px-8 shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Community Center - Landhi</h4>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Emergency Support:</strong> Available daily
                </p>
                <p>
                  <strong>Special Programs:</strong> Ramadan & Eid distributions
                </p>
                <p>
                  <strong>Address:</strong> Landhi Town, Karachi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
