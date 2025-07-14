import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/25">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Heart className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  IDARA AL-KHAIR
                </h3>
                <p className="text-gray-300 font-medium text-sm">Welfare Society</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Empowering underserved communities through education, health & welfare since 1987. 
              Join us in making a lasting impact across Pakistan.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3 mb-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center hover:from-teal-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-700/50">
              <h4 className="font-semibold text-base mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-xs mb-3">Get the latest updates about our projects</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-l-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 px-4 py-2 rounded-r-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Our Projects" },
                { href: "/volunteers", label: "Volunteer" },
                { href: "/contact", label: "Contact Us" },
                { href: "/donate", label: "Donate" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-gray-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-teal-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="group">
                <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-lg border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium text-sm">Address</p>
                    <p className="text-gray-400 text-xs">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-lg border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium text-sm">Phone</p>
                    <p className="text-gray-400 text-xs">+92 300 211 2609</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-lg border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium text-sm">Email</p>
                    <p className="text-gray-400 text-xs">info@idaraalkhair.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs mb-3 md:mb-0">
              © {new Date().getFullYear()} Idara Al-Khair Welfare Society. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-xs transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-teal-400 text-xs transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-2xl"></div>
    </footer>
  )
}
