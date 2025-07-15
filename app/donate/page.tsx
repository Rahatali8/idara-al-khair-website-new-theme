"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, CreditCard, Shield, Users, BookOpen, Stethoscope } from "lucide-react"

const donationPresets = [1000, 2500, 5000, 10000, 25000, 50000]

const programs = [
  {
    id: "education",
    title: "Education Program",
    description: "Support quality education for underprivileged children",
    icon: BookOpen,
    impact: "PKR 1000 can provide school supplies for 5 students for a month",
  },
  {
    id: "healthcare",
    title: "Healthcare Services",
    description: "Provide medical care and health services to communities",
    icon: Stethoscope,
    impact: "PKR 2500 can cover basic medical treatment for 10 patients",
  },
  {
    id: "food",
    title: "Food Support",
    description: "Ensure food security for families in need",
    icon: Heart,
    impact: "PKR 500 can provide meals for a family of 4 for a week",
  },
  {
    id: "general",
    title: "General Fund",
    description: "Support all our programs and initiatives",
    icon: Users,
    impact: "Your donation will be allocated where it's needed most",
  },
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("general")
  const [isRecurring, setIsRecurring] = useState(false)

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const getCurrentAmount = () => {
    return selectedAmount || Number.parseInt(customAmount) || 0
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[86vh] bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Make a <span className="text-teal-600">Difference</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Your generous donation helps us continue our mission of empowering communities through education,
              healthcare, and welfare programs.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-green-600" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-6 h-6 mr-2 text-red-600" />
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-600" />
                <span>Direct Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="one-time" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                <TabsTrigger value="monthly">Monthly Giving</TabsTrigger>
              </TabsList>

              <TabsContent value="one-time" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-6 h-6 mr-2 text-teal-600" />
                      One-Time Donation
                    </CardTitle>
                    <CardDescription>Make a single donation to support our programs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Program Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Choose a Program</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {programs.map((program) => (
                          <div
                            key={program.id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              selectedProgram === program.id
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => setSelectedProgram(program.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <program.icon
                                className={`w-6 h-6 mt-1 ${
                                  selectedProgram === program.id ? "text-teal-600" : "text-gray-400"
                                }`}
                              />
                              <div>
                                <h4 className="font-semibold text-gray-900">{program.title}</h4>
                                <p className="text-sm text-gray-600 mb-2">{program.description}</p>
                                <p className="text-xs text-teal-600 font-medium">{program.impact}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Select Amount (PKR)</h3>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                        {donationPresets.map((amount) => (
                          <button
                            key={amount}
                            onClick={() => handleAmountSelect(amount)}
                            className={`p-3 border-2 rounded-lg font-semibold transition-all ${
                              selectedAmount === amount
                                ? "border-teal-500 bg-teal-500 text-white"
                                : "border-gray-200 hover:border-teal-300 text-gray-700"
                            }`}
                          >
                            {amount.toLocaleString()}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          className="flex-1"
                        />
                        <span className="text-gray-500 font-medium">PKR</span>
                      </div>
                    </div>

                    {/* Payment Button */}
                    <div className="pt-6 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold">Total Amount:</span>
                        <span className="text-2xl font-bold text-teal-600">
                          PKR {getCurrentAmount().toLocaleString()}
                        </span>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-4 text-lg font-semibold"
                        disabled={getCurrentAmount() === 0}
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Donate Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="monthly" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-6 h-6 mr-2 text-teal-600" />
                      Monthly Giving Program
                    </CardTitle>
                    <CardDescription>Join our community of monthly donors and create lasting impact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-teal-800 mb-2">Sponsor a Child's Education</h3>
                      <p className="text-teal-700 mb-4">
                        For just PKR 1,000 per month, you can sponsor a child's complete education, including books,
                        supplies, and meals.
                      </p>
                      <div className="flex items-center space-x-4">
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white">Sponsor Now</Button>
                        <span className="text-sm text-teal-600 font-medium">Join 500+ monthly sponsors</span>
                      </div>
                    </div>

                    {/* Monthly Amount Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Monthly Contribution (PKR)</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {[500, 1000, 2500, 5000].map((amount) => (
                          <button
                            key={amount}
                            onClick={() => handleAmountSelect(amount)}
                            className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                              selectedAmount === amount
                                ? "border-teal-500 bg-teal-500 text-white"
                                : "border-gray-200 hover:border-teal-300 text-gray-700"
                            }`}
                          >
                            <div className="text-lg">{amount.toLocaleString()}</div>
                            <div className="text-xs opacity-75">per month</div>
                          </button>
                        ))}
                      </div>

                      <Input
                        type="number"
                        placeholder="Enter custom monthly amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="mb-4"
                      />
                    </div>

                    <div className="pt-6 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold">Monthly Contribution:</span>
                        <span className="text-2xl font-bold text-teal-600">
                          PKR {getCurrentAmount().toLocaleString()}/month
                        </span>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-4 text-lg font-semibold"
                        disabled={getCurrentAmount() === 0}
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        Start Monthly Giving
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Impact in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donations are making a real difference in communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                amount: "PKR 1,000",
                impact: "Provides school supplies for 5 students for one month",
                story: "Thanks to donors like you, Ahmad can now attend school with proper books and supplies.",
              },
              {
                amount: "PKR 5,000",
                impact: "Covers medical treatment for 20 patients in our health camps",
                story: "Your contribution helped provide essential healthcare to families in remote villages.",
              },
              {
                amount: "PKR 10,000",
                impact: "Feeds 40 families for one week through our food program",
                story: "During difficult times, your donation ensured no family went hungry in our community.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 px-8">
                  <div className="text-2xl font-bold text-teal-600 mb-2">{item.amount}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.impact}</h3>
                  <p className="text-gray-600 italic">"{item.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How is my donation used?",
                  answer:
                    "100% of your donation goes directly to our programs. Administrative costs are covered separately through grants and partnerships.",
                },
                {
                  question: "Can I get a tax receipt?",
                  answer:
                    "Yes, we provide tax receipts for all donations. You will receive an email receipt immediately after your donation.",
                },
                {
                  question: "Is my payment secure?",
                  answer:
                    "Absolutely. We use industry-standard encryption and secure payment gateways to protect your financial information.",
                },
                {
                  question: "Can I cancel my monthly donation?",
                  answer:
                    "Yes, you can cancel or modify your monthly donation at any time by contacting our support team.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6 px-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
