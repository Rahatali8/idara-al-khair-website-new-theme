import { Stethoscope, Baby, FlaskConical, HeartPulse, Pill, Eye, ActivitySquare, MapPin, Phone, Mail, HandCoins } from "lucide-react";

export default function AlKhairHospital() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 pb-16">
      {/* Hero/Banner Section with background image */}
      <section className="relative min-h-[86vh] w-full px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image and overlay only for header */}
        <div className="absolute inset-0 bg-[url('/hospital.png')] bg-cover bg-center z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-teal-50/80 backdrop-blur-sm z-10" />
        <div className="relative z-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Al-Khair Hospital</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 tracking-wide">A Welfare Hospital</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8">
            Providing 24/7 compassionate, affordable, and quality healthcare for all—especially mothers, children, and the underprivileged. Modern facilities, experienced doctors, and a mission of service to humanity.
          </p>
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">24/7 Emergency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Mother & Child Care</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Community Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-teal-400">
              <Stethoscope className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Gynae & Obs</h3>
              <p className="text-gray-600 text-sm">24/7 maternity, labor, recovery, and gynecology care</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
              <Baby className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Paeds</h3>
              <p className="text-gray-600 text-sm">Pediatric OPD, NICU, and child health services</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-green-400">
              <FlaskConical className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Diagnostics</h3>
              <p className="text-gray-600 text-sm">24/7 lab, X-ray, ultrasound, and blood bank</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-pink-400">
              <HeartPulse className="w-10 h-10 text-pink-600 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">O.R & Emergency</h3>
              <p className="text-gray-600 text-sm">Observation, emergency, and trauma care</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400">
              <Pill className="w-10 h-10 text-yellow-500 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Pharmacy</h3>
              <p className="text-gray-600 text-sm">24/7 pharmacy with quality medicines</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-orange-400">
              <ActivitySquare className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dental</h3>
              <p className="text-gray-600 text-sm">Dental OPD, root canal, scaling, and more</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-cyan-400">
              <Eye className="w-10 h-10 text-cyan-500 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Eye</h3>
              <p className="text-gray-600 text-sm">Eye testing and vision care</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-lime-400">
              <ActivitySquare className="w-10 h-10 text-lime-500 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Rehabilitation</h3>
              <p className="text-gray-600 text-sm">Physiotherapy and rehab services</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 