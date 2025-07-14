import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CEOPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-12">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">Leadership</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CEO - Al-Khair Institute of Technology (AIT)</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the leader shaping the future of technical education at AIT, a flagship initiative of Idara Al-Khair Welfare Society.
          </p>
        </div>

        {/* CEO Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 justify-center">
          <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-teal-500 shadow-lg">
            <Image src="/placeholder-user.jpg" alt="AIT CEO" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Chief Executive Officer</h2>
            <p className="text-gray-700 font-semibold mb-1">Al-Khair Institute of Technology (AIT)</p>
            <p className="text-gray-600 max-w-xl">
              The CEO of AIT leads a team dedicated to empowering students with modern technical skills and knowledge. AIT is committed to bridging the gap between education and industry, preparing youth for successful careers in a tech-driven world.
            </p>
          </div>
        </div>

        {/* About AIT Section */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-lg p-8 border border-teal-100">
          <h4 className="text-xl font-bold text-teal-700 mb-2">About Al-Khair Institute of Technology (AIT)</h4>
          <p className="text-gray-700">
            Al-Khair Institute of Technology (AIT) is a premier technical education institute established by Idara Al-Khair Welfare Society. AIT offers a range of vocational and IT programs designed to equip students with practical skills for the modern workforce. The institute is recognized for its innovative curriculum, experienced faculty, and strong industry partnerships.
          </p>
        </div>
      </section>
    </main>
  )
} 