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
    <header className={`font-  bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur-md bg-opacity-95 shadow-xl border-b border-blue-100 sticky top-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-16 h-16 relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Image
                src="/alkhairlogo.png"
                alt="Idara Al-Khair Logo"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-darkblue to-lightblue bg-clip-text text-transparent">Idara Al-Khair</h1>
              <p className="text-xs text-gray-600">Serving Humanity</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* About Us Dropdown (Desktop) */}
            <div className="relative group flex items-center">
              <Link href="/about" className="relative text-gray-700 hover:text-lightblue font-semibold transition-all duration-300 group-hover:scale-105 px-2 py-1">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button type="button" className="ml-1 flex items-center focus:outline-none" tabIndex={0}>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-300 z-50 transform origin-top scale-95 group-hover:scale-100">
                <Link href="/about#president-message" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105">
                  <span className="relative font-medium">
                    Message from President
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                  </span>
                </Link>
                <Link href="/about#mission-vision" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105">
                  <span className="relative font-medium">
                    Our Mission and Vision
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                  </span>
                </Link>
                <Link href="/about#our-journey" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105">
                  <span className="relative font-medium">
                    Our Journey
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div className="relative group">
              <button className="relative flex items-center text-gray-700 hover:text-lightblue font-semibold transition-all duration-300 group-hover:scale-105">
                <span className="relative">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                {/* Education Dropdown */}
                <div className="relative group/education">
                  <button className="relative flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue font-medium rounded-lg mx-2 transition-all duration-300 hover:scale-105 group/education">
                    <span className="relative">
                      Education
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/education:w-full"></span>
                    </span>
                    <ChevronDown className="ml-1 w-4 h-4 group-hover/education:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-100 py-3 opacity-0 invisible group-hover/education:opacity-100 group-hover/education:visible transition-all duration-300 transform origin-left scale-95 group-hover/education:scale-100">
                    <Link
                      href="/projects/education/campuses"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Our Campuses
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                    <Link
                      href="/projects/education/alkhair-college"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Al-Khair College
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Food Support Dropdown */}
                <div className="relative group/food">
                  <button className="relative flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue font-medium rounded-lg mx-2 transition-all duration-300 hover:scale-105 group/food">
                    <span className="relative">
                      Food Support
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/food:w-full"></span>
                    </span>
                    <ChevronDown className="ml-1 w-4 h-4 group-hover/food:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-100 py-3 opacity-0 invisible group-hover/food:opacity-100 group-hover/food:visible transition-all duration-300 transform origin-left scale-95 group-hover/food:scale-100">
                    <Link
                      href="/projects/food-support/ramzan-ration"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Ramzan Ration
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                    <Link
                      href="/projects/food-support/roti-bank"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Roti Bank
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                    <Link
                      href="/projects/food-support/poor-villages"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Poor Villages Program
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Health Programs Dropdown */}
                <div className="relative group/health">
                  <button className="relative flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue font-medium rounded-lg mx-2 transition-all duration-300 hover:scale-105 group/health">
                    <span className="relative">
                      Health Programs
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/health:w-full"></span>
                    </span>
                    <ChevronDown className="ml-1 w-4 h-4 group-hover/health:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-100 py-3 opacity-0 invisible group-hover/health:opacity-100 group-hover/health:visible transition-all duration-300 transform origin-left scale-95 group-hover/health:scale-100">
                    <Link
                      href="/projects/medical"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Al-Khair Medical Center
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                    <Link
                      href="/projects/medical/alkhair-hospital"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Al-Khair Hospital
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Welfare Works Dropdown */}
                <div className="relative group/welfare">
                  <button className="relative flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue font-medium rounded-lg mx-2 transition-all duration-300 hover:scale-105 group/welfare">
                    <span className="relative">
                      Welfare Works
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/welfare:w-full"></span>
                    </span>
                    <ChevronDown className="ml-1 w-4 h-4 group-hover/welfare:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-100 py-3 opacity-0 invisible group-hover/welfare:opacity-100 group-hover/welfare:visible transition-all duration-300 transform origin-left scale-95 group-hover/welfare:scale-100">
                    <Link
                      href="/projects/disaster-relief"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Disaster Relief
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Technical Institute Dropdown */}
                <div className="relative group/technical">
                  <button className="relative flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue font-medium rounded-lg mx-2 transition-all duration-300 hover:scale-105 group/technical">
                    <span className="relative">
                      Technical Institute
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/technical:w-full"></span>
                    </span>
                    <ChevronDown className="ml-1 w-4 h-4 group-hover/technical:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-100 py-3 opacity-0 invisible group-hover/technical:opacity-100 group-hover/technical:visible transition-all duration-300 transform origin-left scale-95 group-hover/technical:scale-100">
                    <Link
                      href="/projects/technical"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        Al-Khair Institute of Technology
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                    <Link
                      href="/projects/technical/hvac-program"
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-lightblue group/item rounded-lg mx-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative font-medium">
                        HVAC Program
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/volunteers" className="relative group">
              <span className="relative text-gray-700 hover:text-lightblue font-semibold transition-all duration-300 group-hover:scale-105">
                Volunteers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/contact" className="relative group">
              <span className="relative text-gray-700 hover:text-lightblue font-semibold transition-all duration-300 group-hover:scale-105">
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lightblue to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>

            <Link href="/donate" className="relative group bg-gradient-to-r from-darkblue to-lightblue text-white font-bold px-8 py-3 rounded-full text-md transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2 overflow-hidden">
              <span className="relative text-white font-semibold transition-all duration-300 group-hover:scale-105">
                Donate Now
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
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
                        href="/projects/disaster-relief"
                        className="block text-gray-600 hover:text-teal-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Disaster Relief
                      </Link>
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
