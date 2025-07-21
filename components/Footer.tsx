"use client"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  // const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <footer className="bg-darkblue text-white py-12 p-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Link href="/home" className="flex items-center gap-2">
            <Image
              src="/alkhairwhitelogo.png?height=40&width=150"
              width={150}
              height={40}
              alt="IDARA AL-KHAIR Logo"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Serving humanity since 1987 – we’re here to help and make the world a better place, one step at a time!
          </p>
          <Link href="https://www.google.com/maps?s=web&client=firefox-b-d&lqi=CiBpZGFyYSBBbCBLaGFpciBBZGRyZXNzIHRlbGVwaG9uZSICSAFIktG_0p-ugIAIWiYQABABEAIYABgBGAIiDmlkYXJhIGFsIGtoYWlyKggIAhAAEAEQApIBBnNjaG9vbKoBRgoNL2cvMTFnN3k0X3Y0bBABMh8QASIbg5XmMYt9RDdm4KDQCj9p00xTzBygmZpMVTRWMhIQAiIOaWRhcmEgYWwga2hhaXI&vet=12ahUKEwjbkafc2ciOAxXBVvEDHSJRI6EQ1YkKegQIHBAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=pk&sa=X&geocode=KelxGoAjQbM-MUGPHitEx7rl&daddr=Sector+5-J+Sector+5+J+New+Karachi+Town,+Karachi" className="flex items-center gap-2 text-white hover:underline text-sm">
            Find Us on the Map
            <MapPin className="h-4 w-4" />
          </Link>
       
          {/* Social Media Icons */}
          <div className="flex items-center gap-3 pt-2">
            <Link href="https://www.facebook.com/idaraalkhairwelfaresociety/" className="text-white hover:text-lightblue transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/idara_al" className="text-white hover:text-lightblue transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/idaraalkhair/?hl=en" className="text-white hover:text-lightblue transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.youtube.com/c/idaraalkhairwelfaresociety" className="text-white hover:text-lightblue transition-colors duration-300">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Let's Talk! */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">LET&apos;S TALK!</h3>
          <address className="not-italic text-gray-300 text-sm space-y-2">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-1 hover:text-lightblue" />
              <span>Sector 5-J Sector 5 J New Karachi Town, Karachi, Pakistan</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 hover:text-lightblue" />
              <Link href="tel:0300 2112609" className="hover:underline">
                0300 2112609
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 hover:text-lightblue " />
              <Link href="mailto:info@idaraalkhair.com" className="hover:underline">
                info@idaraalkhair.com
              </Link>
            </p>
          </address>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/home" className="relative group">
                <span className="relative">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lightblue transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="relative group">
                <span className="relative">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lightblue transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/volunteers" className="relative group">
                <span className="relative">
                  Volunteer Teams
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lightblue transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative group">
                <span className="relative">
                  Get in Touch!
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lightblue transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Fresh News! */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">FRESH NEWS! 📦</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Exciting News: The IAK IT Institute is Here! 🚀</p>
          <p className="text-gray-300 text-sm">Join Our Newsletter and Stay Updated! 📰</p>
          
          {/* Email Newsletter Signup */}
          <div className="pt-2">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lightblue transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3 py-2 bg-lightblue hover:bg-lightblue/80 text-white rounded-lg transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              {isSubmitted && (
                <p className="text-green-400 text-xs">Thank you! You've been subscribed to our newsletter.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
