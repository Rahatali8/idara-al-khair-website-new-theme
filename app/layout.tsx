import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FontFallback from "@/components/FontFallback"
import "aos/dist/aos.css"
// import CustomCursor from "@/components/CustomCursor"

// Google font fetching disabled for offline/CI builds. Using Tailwind's font-sans fallback.

export const metadata: Metadata = {
  title: "Idara Al-Khair Welfare Society - Empowering Communities Since 1987",
  description:
    "Empowering underserved communities through education, health & welfare. Join us in making a difference.",
  keywords: "welfare, education, health, charity, Pakistan, community service",
    // generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/alkhairwhitelogo.png" type="image/png" />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden`} suppressHydrationWarning={true}>
        <FontFallback />
        <Header />
        {/* < CustomCursor/> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
