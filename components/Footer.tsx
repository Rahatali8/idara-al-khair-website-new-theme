"use client"
// import React, { useState } from "react"
// import Link from "next/link"
// import {
//   Facebook, Twitter, Instagram, Youtube,
//   Mail, Phone, MapPin, ArrowRight
// } from "lucide-react"

// export default function Footer() {
//   const [email, setEmail] = useState("")
//   const [feedback, setFeedback] = useState("")
//   const [submitted, setSubmitted] = useState(false)
//   const [error, setError] = useState("")

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     if (feedback.trim() === "") {
//       setError("Please enter your feedback.")
//       setSubmitted(false)
//     } else {
//       setError("")
//       setSubmitted(true)
//       setEmail("")
//       setFeedback("")
//     }
//   }

//   return (
//     <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
//       </div>

//       <div className="relative container mx-auto px-10 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Left Section: Logo & Social */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="w-14 h-14 relative flex items-center justify-center">
//                 <img
//                   src="/Al Khair logo.png"
//                   alt="Idara Al-Khair Logo"
//                   className="object-contain w-full h-full rounded-xl shadow-lg"
//                   style={{ background: 'white', padding: '4px' }}
//                 />
//               </div>
//               <div>
//                 <h3 className="font-bold text-xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
//                   IDARA AL-KHAIR
//                 </h3>
//                 <p className="text-gray-300 font-medium text-sm">Welfare Society</p>
//               </div>
//             </div>
//             <p className="text-gray-300 mb-4 leading-relaxed text-sm">
//               Empowering underserved communities through education, health & welfare since 1987. 
//               Join us in making a lasting impact across Pakistan.
//             </p>

//             {/* Social Icons */}
//             <div className="flex space-x-3 mb-4">
//               {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
//                 <a key={i} href="#" className="group w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center hover:from-teal-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25">
//                   <Icon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
//                 </a>
//               ))}
//             </div>

//             {/* Feedback Form */}
//             <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-700/50">
//               <h4 className="font-semibold text-base mb-2">Your feedbacks</h4>
//               <p className="text-gray-400 text-xs mb-3">Get the latest updates about our projects</p>

//               <form onSubmit={handleSubmit}>
//                 <div className="flex">
//                   <input
//                     type="email"
//                     required
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value)
//                       setSubmitted(false)
//                       setError("")
//                     }}
//                     className="flex-1 bg-gray-800 border border-gray-600 rounded-l-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors text-sm"
//                   />
//                   <button
//                     type="submit"
//                     className="bg-gradient-to-r from-teal-500 to-blue-600 px-4 py-2 rounded-r-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
//                   >
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>

//                 <textarea
//                   placeholder="Leave your feedback..."
//                   rows={3}
//                   value={feedback}
//                   onChange={(e) => {
//                     setFeedback(e.target.value)
//                     setSubmitted(false)
//                     setError("")
//                   }}
//                   className="mt-4 w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 text-sm"
//                 />

//                 {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
//                 {submitted && !error && <p className="text-teal-400 text-xs mt-2 text-center font-extrabold">Thanks for our response.</p>}
//               </form>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4 text-teal-400">Quick Links</h4>
//             <ul className="space-y-2">
//               {[
//                 { href: "/about", label: "About Us" },
//                 { href: "/volunteers", label: "Volunteer" },
//                 { href: "/contact", label: "Contact Us" },
//                 { href: "/donate", label: "Donate" }
//               ].map((link, i) => (
//                 <li key={i}>
//                   <Link href={link.href} className="group flex items-center text-gray-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-2 text-sm">
//                     <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4 text-teal-400">Contact Info</h4>
//             <div className="space-y-3">
//               {[
//                 { icon: MapPin, label: "Address", value: "Karachi, Pakistan" },
//                 { icon: Phone, label: "Phone", value: "+92 300 211 2609" },
//                 { icon: Mail, label: "Email", value: "info@idaraalkhair.org" }
//               ].map((item, i) => (
//                 <div key={i} className="group">
//                   <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-lg border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300">
//                     <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <item.icon className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-gray-300 font-medium text-sm">{item.label}</p>
//                       <p className="text-gray-400 text-xs">{item.value}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700/50 mt-8 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-xs mb-3 md:mb-0">
//               © {new Date().getFullYear()} Idara Al-Khair Welfare Society. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-xs transition-colors hover:underline">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="text-gray-400 hover:text-teal-400 text-xs transition-colors hover:underline">
//                 Terms of Service
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decoration */}
//       <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full blur-2xl"></div>
//       <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-2xl"></div>
//     </footer>
//   )
// }


'use client'

import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import AIT_Logo_Night from '@/public/assets/mainPics/AIT_Logo_Night.png'

const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Schools That Rock', 'Our Projects', 'Gallery of Wonders', 'Get in Touch!']
  const news = ['Exciting News: The IAK IT Institute is Here! 🚀', 'Join Our Newsletter and Stay Updated! 📰']

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white pt-12 pb-6 px-6 sm:px-10 tracking-wide">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-36 h-10 bg-white">
                <Image
                  src={"/Al Khair logo.png"}
                  alt="Idara Al-Khair"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Serving humanity since 1987 – we&apos;re here to help and make the world a better place, one step at a time!
            </p>
            <Link
              href="/contact"
              className="text-teal-400 hover:text-orange-400 flex items-center space-x-2 text-sm transition-transform duration-300 hover:scale-105"
            >
              <span>Find Us on the Map</span>
              <FaMapMarkerAlt />
            </Link>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-teal-400 text-sm uppercase font-semibold mb-4">Let&apos;s Talk!</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                { icon: <FaMapMarkerAlt />, text: 'A 507, Sector 11-A, Near Power House Chorangi, North Karachi, Karachi, Pakistan' },
                { icon: <FaPhoneAlt />, text: '021 3690 2991' },
                { icon: <FaEnvelope />, text: 'AIT.info@iak.ngo' },
                { icon: <FaWhatsapp />, text: '+92 326 2393892' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2 group">
                  <span className="text-teal-400 mt-1 group-hover:text-orange-400 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-teal-400 text-sm uppercase font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-transform duration-300 hover:scale-105 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News Section */}
          <div>
            <h2 className="text-teal-400 text-sm uppercase font-semibold mb-4">Fresh News! 🍞</h2>
            <ul className="space-y-3 text-sm">
              {news.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 hover:text-orange-400 transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-12 mb-6 border-gray-700" />

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 1987 - 2025 All rights reserved | Idara Al-Khair – Your welfare, our priority!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
