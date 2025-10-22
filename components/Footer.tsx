"use client"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <>
      {/* FOOTER MAIN SECTION */}
      <footer className="bg-darkblue  py-10 px-4 sm:px-6 md:px-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1️⃣ Logo and About */}
          <div className="space-y-4  sm:text-left">
            <Link href="/home" className="flex  sm:justify-start items-center gap-2">
              <Image
                src="/alkhairwhitelogo.png"
                width={140}
                height={40}
                alt="IDARA AL-KHAIR Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed">
              Serving humanity since 1987 – we’re here to help and make the world a better place, one step at a time!
            </p>
            <Link
              href="https://www.google.com/maps"
              className="flex items-center  sm:justify-start gap-2 text-lightblue hover:underline text-sm"
            >
              <MapPin className="h-4 w-4" /> Find Us on the Map
            </Link>

            {/* Social Links */}
            <div className="flex  sm:justify-start gap-4 pt-3">
              <Link href="https://www.facebook.com/idaraalkhairwelfaresociety/" className="hover:text-lightblue transition">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/idara_al" className="hover:text-lightblue transition">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/idaraalkhair/" className="hover:text-lightblue transition">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/c/idaraalkhairwelfaresociety" className="hover:text-lightblue transition">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* 2️⃣ Let's Talk */}
          <div className="space-y-4  sm:text-left">
            <h3 className="text-lg font-semibold text-lightblue">LET&apos;S TALK!</h3>
            <address className="not-italic text-gray-200 text-sm space-y-2">
              <p className="flex  sm:justify-start items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Sector 5-J, New Karachi Town, Karachi, Pakistan</span>
              </p>
              <p className="flex  sm:justify-start items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:03002112609" className="hover:underline">0300 2112609</Link>
              </p>
              <p className="flex  sm:justify-start items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:info@idaraalkhair.com" className="hover:underline">
                  info@idaraalkhair.com
                </Link>
              </p>
            </address>
          </div>

          {/* 3️⃣ Quick Links */}
          <div className="space-y-4 sm:text-left">
            <h3 className="text-lg font-semibold text-lightblue">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Volunteer Teams", "Get in Touch!"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "")}`}
                    className="group relative inline-block"
                  >
                    <span>{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lightblue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4️⃣ Newsletter */}
          <div className="space-y-4  sm:text-left">
            <h3 className="text-lg font-semibold text-lightblue">FRESH NEWS! 📦</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Exciting News: The IAK IT Institute is Here! 🚀 Join Our Newsletter and Stay Updated!
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lightblue transition"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3 py-2 bg-lightblue hover:bg-lightblue/80 text-white rounded-lg transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              {isSubmitted && (
                <p className="text-green-400 text-xs">
                  ✅ Thank you! You've been subscribed.
                </p>
              )}
            </form>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT STRIP */}
      <div className="border-t border-white/20 bg-darkblue text-white text-center text-xs sm:text-sm py-4 px-3 tracking-wide">
        © 1987 - 2024 All rights reserved | Idara Al-Khair – Your welfare, our priority!
      </div>
    </>
  )
}
