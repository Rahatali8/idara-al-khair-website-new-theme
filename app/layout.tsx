import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FontFallback from "@/components/FontFallback"
import "aos/dist/aos.css"
// import CustomCursor from "@/components/CustomCursor"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

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
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`} suppressHydrationWarning={true}>
        <FontFallback />
        <Header />
        {/* < CustomCursor/> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
