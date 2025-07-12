"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Idara Al-Khair</h1>
              <p className="text-sm text-gray-600">Welfare Society</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              About Us
            </Link>

            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Projects
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isProjectsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    href="/projects/education"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Education
                  </Link>
                  <Link
                    href="/projects/food-support"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Food Support
                  </Link>
                  <Link
                    href="/projects/medical"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Medical Center
                  </Link>
                  <Link
                    href="/projects/technical"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Technical Institute
                  </Link>
                  <Link
                    href="/projects/disaster-relief"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Disaster Relief
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Contact Us
            </Link>

            <Link
              href="/donate"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-teal-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Projects */}
              <div className="space-y-2">
                <span className="text-gray-700 font-medium">Projects</span>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/projects/education"
                    className="block text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Education
                  </Link>
                  <Link
                    href="/projects/food-support"
                    className="block text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Food Support
                  </Link>
                  <Link
                    href="/projects/medical"
                    className="block text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Medical Center
                  </Link>
                  <Link
                    href="/projects/technical"
                    className="block text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Technical Institute
                  </Link>
                  <Link
                    href="/projects/disaster-relief"
                    className="block text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Disaster Relief
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-teal-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                href="/donate"
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
