import Link from "next/link"
import { ArrowRight, Heart, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
   <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 shadow-lg">
  <div className="container mx-auto px-4">
    {/* Heading Section */}
    <div className="relative mb-10 sm:mb-14">
      <div className="flex flex-col lg:flex-row items-center justify-center text-center">
        {/* Left Line */}
        <div className="hidden lg:block flex-1 mr-8">
          <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
        </div>

        {/* Text */}
        <div className="px-4 sm:px-6 md:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue mb-3">
            Join Our <span className="text-lightblue">Mission</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Together, we can create lasting change in the lives of those who need it most.
            Your support makes a real difference in our community.
          </p>
        </div>

        {/* Right Line */}
        <div className="hidden lg:block flex-1 ml-8">
          <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
        </div>
      </div>
    </div>

    {/* Cards Section */}
    <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
      {/* Donate Card */}
      <motion.div
        className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 sm:p-8 text-center border border-blue-100 shadow-xl group hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lightblue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md group-hover:rotate-[360deg] transition-transform duration-700">
          <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-darkblue mb-2 sm:mb-3">
          Make a Donation
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-5">
          Your generous contribution helps us continue our vital work in education, healthcare, and community support.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/donate"
            className="inline-flex items-center bg-lightblue text-white hover:bg-lightblue/90 px-5 sm:px-7 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-base"
          >
            Donate Now
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Partner Card */}
      <motion.div
        className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 sm:p-8 text-center border border-blue-100 shadow-xl group hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lightblue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md group-hover:rotate-[360deg] transition-transform duration-700">
          <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-darkblue mb-2 sm:mb-3">
          Become a Partner
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-5">
          Join our network of volunteers and partners to make a direct impact in our community programs.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/volunteers"
            className="inline-flex items-center bg-lightblue text-white hover:bg-lightblue/90 px-5 sm:px-7 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-base"
          >
            Get Involved
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

  )
}
