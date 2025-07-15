import Image from "next/image";

export default function AlKhairHospital() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12 md:py-20 gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Al-Khair Hospital</h1>
          <p className="text-lg md:text-xl text-blue-800 mb-6 max-w-xl">
            Providing quality healthcare services to the community with compassion, modern facilities, and a dedicated team of professionals.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-blue-200 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow">Open 24/7</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/hospital.png"
            alt="Al-Khair Hospital"
            width={480}
            height={340}
            className="rounded-2xl shadow-lg object-cover border-4 border-blue-200"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-24 py-10 md:py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <Image
            src="/health-care.jpg"
            alt="Hospital Facilities"
            width={400}
            height={300}
            className="rounded-xl shadow-md object-cover border-2 border-blue-100"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">About Al-Khair Hospital</h2>
          <p className="text-base md:text-lg text-blue-800 mb-4">
            Al-Khair Hospital is committed to delivering affordable and accessible healthcare to all. Our hospital is equipped with modern medical technology and staffed by experienced doctors, nurses, and support staff. We believe in holistic care, focusing on both treatment and prevention.
          </p>
          <ul className="list-disc pl-6 text-blue-800 space-y-2">
            <li>State-of-the-art emergency and trauma care</li>
            <li>Specialist consultations and diagnostics</li>
            <li>Inpatient and outpatient services</li>
            <li>Pharmacy and laboratory facilities</li>
            <li>Community health awareness programs</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-24 py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Our Hospital Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform border-t-4 border-blue-300">
            <Image src="/Emergency-Care.jpg" alt="Emergency Care" width={80} height={80} className="rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-blue-900 text-lg mb-2">Emergency Care</h3>
            <p className="text-blue-800 text-sm text-center">24/7 emergency services with rapid response and expert trauma care.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform border-t-4 border-blue-300">
            <Image src="/Specialist-Consultations.jpg" alt="Specialist Consultations" width={80} height={80} className="rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-blue-900 text-lg mb-2">Specialist Consultations</h3>
            <p className="text-blue-800 text-sm text-center">Experienced specialists in medicine, surgery, pediatrics, gynecology, and more.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform border-t-4 border-blue-300">
            <Image src="/Pharmacy-Services.jpg" alt="Pharmacy Services" width={80} height={80} className="rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-blue-900 text-lg mb-2">Pharmacy</h3>
            <p className="text-blue-800 text-sm text-center">On-site pharmacy with a wide range of medicines and expert advice.</p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform border-t-4 border-blue-300">
            <Image src="/Laboratory-Services.jpg" alt="Laboratory Services" width={80} height={80} className="rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-blue-900 text-lg mb-2">Laboratory</h3>
            <p className="text-blue-800 text-sm text-center">Modern lab for diagnostics, blood tests, and health screenings.</p>
          </div>
          {/* Service Card 5 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform border-t-4 border-blue-300">
            <Image src="/Pediatric-Care.jpg" alt="Pediatric Care" width={80} height={80} className="rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-blue-900 text-lg mb-2">Pediatric Care</h3>
            <p className="text-blue-800 text-sm text-center">Comprehensive care for children, from newborns to adolescents.</p>
          </div>
          {/* Service Card 6 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform border-t-4 border-blue-300">
            <Image src="/Women's-Health.jpg" alt="Women's Health" width={80} height={80} className="rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-blue-900 text-lg mb-2">Women's Health</h3>
            <p className="text-blue-800 text-sm text-center">Specialized care for women’s health, maternity, and gynecology.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 