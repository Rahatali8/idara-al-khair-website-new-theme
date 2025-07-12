import Link from "next/link"
import { ArrowRight, Heart, Users } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Together, we can create lasting change in the lives of those who need it most. Your support makes a real
            difference in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Donate Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 px-10 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Make a Donation</h3>
            <p className="text-white/80 mb-6">
              Your generous contribution helps us continue our vital work in education, healthcare, and community
              support.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Donate Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Partner Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 px-10 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Become a Partner</h3>
            <p className="text-white/80 mb-6">
              Join our network of volunteers and partners to make a direct impact in our community programs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
