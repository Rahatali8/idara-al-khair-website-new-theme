import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BoardOfDirectorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-12">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">Leadership</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Chairman & Board of Directors</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries and leaders guiding Idara Al-Khair Welfare Society in its mission to uplift underserved communities through education, healthcare, and social welfare.
          </p>
        </div>

        {/* Chairman Section - Horizontal */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 bg-white rounded-2xl shadow-xl p-8 border border-teal-100 max-w-4xl mx-auto">
          <div className="relative w-full md:w-1/2 h-80 max-w-md rounded-2xl overflow-hidden shadow-2xl mb-8 md:mb-0">
            <Image src="/chairmain.jpg" alt="Muhammad Mazahir Shaikh" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-teal-600 font-semibold mb-2 uppercase tracking-wide">Chairman</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Muhammad Mazahir Shaikh</h2>
            <p className="text-lg text-gray-700 font-semibold mb-2">Founder & President</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Founder of Idara Al-Khair Welfare Society, dedicated to transforming lives through accessible education since 1987.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              <span className="font-semibold">Vision:</span> To empower underprivileged communities by providing quality education and hope for a better future.
            </p>
            <p className="text-base text-gray-500">
              "True change comes from action and commitment to the cause."
            </p>
          </div>
        </div>

        {/* Board Members Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Example Board Member Card */}
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
              <CardHeader className="flex flex-col items-center">
                <div className="w-48 h-36 relative rounded-xl overflow-hidden border-2 border-blue-500 mb-5">
                  <Image src="/saad Bhai.jpg" alt="Board Member" fill className="object-cover" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Jiyad Ahsan</CardTitle>
                <CardDescription className="text-teal-600">Business Strategist</CardDescription>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Building brands, teams, and systems for growth at Idara Al-Khair.
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
              <CardHeader className="flex flex-col items-center">
                <div className="w-48 h-36 relative rounded-xl overflow-hidden border-2 border-blue-500 mb-5">
                  <Image src="/placeholder-user.jpg" alt="Board Member" fill className="object-cover" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Kausar Nazir</CardTitle>
                <CardDescription className="text-teal-600">Board Member</CardDescription>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Dedicated to advancing quality education and academic excellence.
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
              <CardHeader className="flex flex-col items-center">
                <div className="w-48 h-36 relative rounded-xl overflow-hidden border-2 border-blue-500 mb-5">
                  <Image src="/placeholder-user.jpg" alt="Board Member" fill className="object-cover" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Sohaib Ahmed</CardTitle>
                <CardDescription className="text-teal-600">Lead Architect / Interior Designer</CardDescription>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Leading the design and development of modern educational spaces.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Board Statement */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-lg p-8 border border-teal-100">
          <h4 className="text-xl font-bold text-teal-700 mb-2">Our Commitment</h4>
          <p className="text-gray-700">
            The Board of Directors at Idara Al-Khair Welfare Society is committed to transparency, innovation, and sustainable impact. Together, they ensure the organization remains true to its mission of empowering communities through education, healthcare, and social welfare.
          </p>
        </div>
      </section>
    </main>
  )
} 