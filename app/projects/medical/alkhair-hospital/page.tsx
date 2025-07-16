import { Stethoscope, Baby, FlaskConical, HeartPulse, Pill, Eye, ActivitySquare, MapPin, Phone, Mail, HandCoins } from "lucide-react";

export default function AlKhairHospital() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 pb-16">
      {/* Hero/Banner Section without background image */}
      <section className="relative min-h-[86vh] w-full px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Removed background image div */}
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
          {/* Visit our website button */}
          <a
            href="https://hospital.idaraalkhair.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500 transition-colors duration-200"
          >
            Visit our website
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10 text-center">Our Services</h2>
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

      {/* Charity Program Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-2">
            <HandCoins className="w-8 h-8 text-yellow-500" /> Charity Program
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
            Idara Al Khair Hospital runs a comprehensive Charity Program to support underprivileged patients with quality healthcare. The program is dedicated to providing free or subsidized medical services, including consultations, diagnostics, surgeries, medicines, and emergency care, to those who cannot afford treatment. Donations and Zakat are collected transparently and used solely for patient care, ensuring that every contribution directly benefits those in need.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 shadow-md mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">How You Can Help</h3>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
              <li>Donate to support free and subsidized treatments for deserving patients.</li>
              <li>Contribute Zakat, Sadaqah, or general charity—100% goes to patient care.</li>
              <li>Support special medical camps and outreach programs for the community.</li>
              <li>Share our mission and encourage others to join this cause.</li>
            </ul>
          </div>
          <div className="text-center">
            <a
              href="https://hospital.idaraalkhair.com/charity-programs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-teal-500 hover:to-yellow-400 transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Our Charity Initiatives Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">Our Charity Initiatives</h2>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Through our charity initiatives, we strive to provide free and subsidized healthcare to those in need. Our programs include free medical camps, support for surgeries, provision of medicines, and community outreach to ensure no one is left behind in receiving quality healthcare.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1: Free Medical Camps */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-teal-400">
              <HandCoins className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Free Medical Camps</h3>
              <p className="text-gray-600 text-sm">Organizing free medical camps in underserved areas, providing consultations, medicines, and referrals for specialized care.</p>
            </div>
            {/* Card 2: Surgery & Treatment Support */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
              <HeartPulse className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Surgery & Treatment Support</h3>
              <p className="text-gray-600 text-sm">Financial assistance for life-saving surgeries and treatments for patients who cannot afford medical expenses.</p>
            </div>
            {/* Card 3: Medicines & Pharmacy Aid */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-green-400">
              <Pill className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Medicines & Pharmacy Aid</h3>
              <p className="text-gray-600 text-sm">Provision of free or subsidized medicines to patients in need, ensuring access to essential drugs.</p>
            </div>
            {/* Card 4: Community Outreach */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-yellow-400">
              <MapPin className="w-10 h-10 text-yellow-500 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Community Outreach</h3>
              <p className="text-gray-600 text-sm">Health awareness, preventive care, and outreach programs to educate and support the local community.</p>
            </div>
            {/* Card 5: Zakat & Donation Fund */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-pink-400">
              <HandCoins className="w-10 h-10 text-pink-500 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Zakat & Donation Fund</h3>
              <p className="text-gray-600 text-sm">Transparent collection and distribution of Zakat and donations, directly benefiting patient care and hospital services.</p>
            </div>
            {/* Card 6: Volunteer Engagement */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-orange-400">
              <ActivitySquare className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Volunteer Engagement</h3>
              <p className="text-gray-600 text-sm">Engaging volunteers in hospital activities, medical camps, and community programs to maximize impact.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 