import { MapPin, Phone, Mail, Clock, Building, CreditCard, Globe, Users, Heart, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with us to learn more about our programs, partnerships, or how you can make a difference
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Main Office</h3>
                  <p className="text-gray-600">
                    Sector 51-B, Korangi
                    <br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                  <p className="text-gray-600">
                    Main Office: +92-21-1234-5678
                    <br />
                    Emergency: +92-21-8765-4321
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Addresses</h3>
                  <p className="text-gray-600">
                    General: info@idaraalkhair.org
                    <br />
                    Donations: donate@idaraalkhair.org
                    <br />
                    Partnerships: partners@idaraalkhair.org
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Account Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Donation Information</h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Local Bank Account</h3>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Account Title:</span>
                  <span>Idara Al-Khair Welfare Society</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Bank Name:</span>
                  <span>Allied Bank Limited</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Account Number:</span>
                  <span>0010-1234567890</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Branch Code:</span>
                  <span>0010</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">International Transfers</h3>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">SWIFT Code:</span>
                  <span>ABPAPKKA</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">IBAN:</span>
                  <span>PK36ABPA0010001234567890</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Bank Address:</span>
                  <span>I.I. Chundrigar Road, Karachi</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center mb-3">
                <CreditCard className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Important Notes</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tax receipts available for donations above PKR 1,000</li>
                <li>• Please mention your contact details in transfer remarks</li>
                <li>• All donations are used transparently for welfare activities</li>
                <li>• Monthly financial reports available upon request</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partnership & Collaboration Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership & Collaboration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We welcome partnerships with organizations, businesses, and individuals who share our vision of creating
              positive change in underserved communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Partnerships</h3>
              <p className="text-gray-600">
                Partner with us for CSR initiatives, employee engagement programs, and sustainable community development
                projects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NGO Collaborations</h3>
              <p className="text-gray-600">
                Collaborate with fellow NGOs and social organizations to maximize impact and reach more beneficiaries
                effectively.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Individual Supporters</h3>
              <p className="text-gray-600">
                Join our community of dedicated supporters who contribute their time, skills, and resources to our
                mission.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Ready to make a difference? Contact our partnerships team to explore collaboration opportunities.
            </p>
            <a
              href="mailto:partners@idaraalkhair.org"
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Partnership
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
