import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div> 
              <div>
                <h3 className="font-bold text-xl">IDARA AL-KHAIR</h3>
                <p className="text-gray-400">Welfare Society</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering underserved communities through education, health & welfare since 1987. Join us in making a
              lasting impact across Pakistan.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/volunteers" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Karachi, Pakistan</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+92 300 211 2609</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@idaraalkhair.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Idara Al-Khair Welfare Society. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
