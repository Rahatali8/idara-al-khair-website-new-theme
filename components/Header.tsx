"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleHashLink(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="/about#"]') as HTMLAnchorElement | null;
      if (anchor) {
        const hash = anchor.getAttribute('href')?.split('#')[1];
        if (!hash) return;
        const el = document.getElementById(hash);
        if (el) {
          e.preventDefault();
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          const startY = window.scrollY;
          const diff = y - startY;
          let start: number | undefined;
          function step(timestamp: number) {
            if (start === undefined) start = timestamp;
            const progress = Math.min((timestamp - start) / 1500, 1);
            window.scrollTo(0, startY + diff * progress);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          }
          window.requestAnimationFrame(step);
        }
      }
    }
    document.addEventListener('click', handleHashLink);
    return () => document.removeEventListener('click', handleHashLink);
  }, []);

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 relative flex items-center justify-center">
              <Image
                src="/Al Khair logo.png"
                alt="Idara Al-Khair Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>
            {/* About Us Dropdown (Desktop) */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors">
                About Us
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/about#our-journey1" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                  Our Journey
                </Link>
                <Link href="/about#our-journey" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                  History and Achievements
                </Link>
                <Link href="/about#president-message" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                  Message from the President
                </Link>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Projects
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {/* Education Dropdown */}
                <div className="relative group/education">
                  <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                    Education
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover/education:opacity-100 group-hover/education:visible transition-all duration-300">
                    <Link
                      href="/projects/education/campuses"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Our Campuses
                    </Link>
                    <Link
                      href="/projects/education/alkhair-college"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Al-Khair College
                    </Link>
                  </div>
                </div>
                {/* Food Support Dropdown */}
                <div className="relative group/food">
                  <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                    Food Support
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover/food:opacity-100 group-hover/food:visible transition-all duration-300">
                    <Link
                      href="/projects/food-support/ramzan-ration"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Ramzan Ration
                    </Link>
                    <Link
                      href="/projects/food-support/roti-bank"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Roti Bank
                    </Link>
                    <Link
                      href="/projects/food-support/poor-villages"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Poor Villages Program
                    </Link>
                  </div>
                </div>
                {/* Health Programs Dropdown */}
                <div className="relative group/health">
                  <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                    Health Programs
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover/health:opacity-100 group-hover/health:visible transition-all duration-300">
                    <Link
                      href="/projects/medical"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Al-Khair Medical Center
                    </Link>
                    <Link
                      href="/projects/medical/alkhair-hospital"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Al-Khair Hospital
                    </Link>
                  </div>
                </div>
                {/* Welfare Works Dropdown */}
                <div className="relative group/welfare">
                  <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                    Welfare Works
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover/welfare:opacity-100 group-hover/welfare:visible transition-all duration-300">
                    <Link
                      href="/projects/disaster-relief/disaster-relief-program"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Disaster Relief Program
                    </Link>
                    <Link
                      href="/projects/disaster-relief/free-rozgar"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Free Rozgar Program
                    </Link>
                  </div>
                </div>
                {/* Technical Institute Dropdown */}
                <div className="relative group/technical">
                  <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                    Technical Institute
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover/technical:opacity-100 group-hover/technical:visible transition-all duration-300">
                    <Link
                      href="/projects/technical"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Al-Khair Institute of Technology
                    </Link>
                    <Link
                      href="/projects/technical/hvac-program"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      HVAC Program
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/volunteers" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Volunteers
            </Link>
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
              {/* About Us Dropdown (Mobile) */}
              <div className="space-y-2">
                <span className="text-gray-700 font-medium">About Us</span>
                <div className="pl-4 space-y-2">
                  <Link href="/about/history" className="block text-gray-600 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>
                    History And Achievements
                  </Link>
                  <Link href="/about/board-of-directors" className="block text-gray-600 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>
                    Chairman and Board
                  </Link>
                  <Link href="/about/mission-and-values" className="block text-gray-600 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>
                    Mission And Values
              </Link>
                </div>
              </div>

              {/* Mobile Projects */}
              <div className="space-y-2">
                <span className="text-gray-700 font-medium">Projects</span>
                <div className="pl-4 space-y-2">
                  {/* Mobile Education Dropdown */}
                  <div className="space-y-2">
                    <span className="text-gray-600 font-medium">Education</span>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/projects/education/campuses"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Our Campuses
                      </Link>
                      <Link
                        href="/projects/education/alkhair-college"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Al-Khair College
                      </Link>
                    </div>
                  </div>
                  {/* Mobile Food Support Dropdown */}
                  <div className="space-y-2">
                    <span className="text-gray-600 font-medium">Food Support</span>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/projects/food-support/ramzan-ration"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Ramzan Ration
                      </Link>
                      <Link
                        href="/projects/food-support/roti-bank"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Roti Bank
                      </Link>
                      <Link
                        href="/projects/food-support/poor-villages"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Poor Villages Program
                      </Link>
                    </div>
                  </div>
                  {/* Mobile Health Programs Dropdown */}
                  <div className="space-y-2">
                    <span className="text-gray-600 font-medium">Health Programs</span>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/projects/medical"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Al-Khair Medical Center
                      </Link>
                      <Link
                        href="/projects/medical/alkhair-hospital"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Al-Khair Hospital
                      </Link>
                    </div>
                  </div>
                  {/* Mobile Welfare Works Dropdown */}
                  <div className="space-y-2">
                    <span className="text-gray-600 font-medium">Welfare Works</span>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/projects/disaster-relief/disaster-relief-program"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Disaster Relief Program
                      </Link>
                      <Link
                        href="/projects/disaster-relief/free-rozgar"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Free Rozgar Program
                      </Link>
                    </div>
                  </div>
                  {/* Mobile Technical Institute Dropdown */}
                  <div className="space-y-2">
                    <span className="text-gray-600 font-medium">Technical Institute</span>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/projects/technical"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Al-Khair Institute of Technology
                      </Link>
                      <Link
                        href="/projects/technical/hvac-program"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        HVAC Program
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/volunteers"
                className="text-gray-700 hover:text-teal-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Volunteers
              </Link>
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
