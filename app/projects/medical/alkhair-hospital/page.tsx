import Image from "next/image";
import DonorsCarousel from "@/components/DonorsCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function AlKhairHospital() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 pb-16">
      {/* Hero/Banner Section with background image */}
      <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image and overlay only for header */}
        <div className="absolute inset-0 bg-[url('/hospital.png')] bg-cover bg-center z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-teal-50/80 backdrop-blur-sm z-10" />
        <div className="relative z-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Al-Khair Hospital</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 tracking-wide">A Welfare Hospital</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8">
            Al-Khair Hospital is dedicated to providing quality, affordable healthcare to all, with a special focus on serving the underprivileged and supporting community well-being.
          </p>
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">24/7 Emergency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Affordable Care</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Community Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* About/Welfare Info Section */}
      <section className="max-w-3xl mx-auto mt-12 px-6">
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">About Al-Khair Welfare Hospital</h3>
          <p className="text-base md:text-lg text-blue-800 mb-4">
            Al-Khair Welfare Hospital is a non-profit healthcare institution committed to serving people from all walks of life, especially those in need. Our mission is to ensure that everyone has access to modern medical facilities, experienced doctors, and compassionate care, regardless of their financial background.
          </p>
          <ul className="list-disc pl-6 text-blue-800 space-y-2 mb-4">
            <li>24/7 Emergency and trauma care</li>
            <li>Specialist consultations and diagnostics</li>
            <li>Inpatient and outpatient services</li>
            <li>Pharmacy and laboratory facilities</li>
            <li>Community health awareness programs</li>
          </ul>
          <p className="text-base md:text-lg text-blue-800">
            With a focus on welfare and social responsibility, Al-Khair Hospital stands as a beacon of hope and health for the community, striving to make a positive impact every day.
          </p>
        </div>
      </section>
      <TestimonialsSection />
    </main>
  );
} 