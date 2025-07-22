"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, CreditCard, Shield, Users, BookOpen, Stethoscope } from "lucide-react"
import { Dialog } from "@/components/ui/dialog"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRef } from "react";

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

const donateFaqs = [
  {
    question: "How is my donation used?",
    answers: [
      "100% of your donation goes directly to our programs. Administrative costs are covered separately.",
      "You can request a detailed report of how your donation was spent.",
      "We allocate funds based on your selected program (education, healthcare, food, etc.).",
      "You will receive updates and impact stories related to your donation."
    ]
  },
  {
    question: "Can I get a tax receipt?",
    answers: [
      "Yes, we provide tax receipts for all donations, sent to your email.",
      "Physical receipts are available on request; contact our support team.",
      "Our receipts are valid for tax purposes under applicable laws.",
      "If you need a duplicate or have issues, email us at info@idaraalkhair.com."
    ]
  },
  {
    question: "Is my payment secure?",
    answers: [
      "We use industry-standard encryption and secure payment gateways.",
      "Your payment details are never stored on our servers.",
      "You can donate via trusted banks (MCB, Meezan) for extra security.",
      "For any security concerns, contact us directly and we’ll assist you."
    ]
  },
  {
    question: "Can I cancel my monthly donation?",
    answers: [
      "Yes, you can cancel or modify your monthly donation anytime.",
      "There are no penalties for cancellation; your support is always appreciated.",
      "To cancel, email us or use the contact form on our website.",
      "You will receive a confirmation once your cancellation is processed."
    ]
  },
];

const DonatePage = () => {
  // Move all hooks here:
  const [selectedAmount, setSelectedAmount] = useState<number>(500)
  const [customAmount, setCustomAmount] = useState("500")
  const [selectedProgram, setSelectedProgram] = useState("general")
  const [isRecurring, setIsRecurring] = useState(false)
  const [showSponsorModal, setShowSponsorModal] = useState(false)
  const [sponsorChildren, setSponsorChildren] = useState(1)
  const [showReceipt, setShowReceipt] = useState(false)
  const [selectedBank, setSelectedBank] = useState("MCB")
  const [donationMethod, setDonationMethod] = useState("Bank Account")
  const [faqQuestions, setFaqQuestions] = useState<{ question: string; reply: string; history: { question: string; answer: string }[] }[]>(
    donateFaqs.map(() => ({ question: "", reply: "", history: [] }))
  )
  const [faqAnswerIndexes, setFaqAnswerIndexes] = useState(donateFaqs.map(() => 0))
  const faqInputRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  const handleFaqQuestionSubmit = (idx: number) => {
    const userQuestion = faqQuestions[idx].question;
    setFaqQuestions(prev => prev.map((q, i) =>
      i === idx
        ? { ...q, question: "", reply: "Loading..." }
        : q
    ));
    setTimeout(() => {
      setFaqQuestions(prev => prev.map((q, i) => {
        if (i === idx) {
          const answer = donateFaqs[idx].answers[((faqAnswerIndexes[idx] % (donateFaqs[idx].answers.length - 1)) + 1)];
          return {
            ...q,
            reply: answer,
            history: [
              ...q.history,
              { question: userQuestion, answer }
            ]
          };
        }
        return q;
      }));
      setFaqAnswerIndexes(prev => prev.map((val, i) =>
        i === idx
          ? (val + 1) % donateFaqs[idx].answers.length
          : val
      ));
    }, 1200);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount(amount.toString())
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(0)
  }

  const getCurrentAmount = () => {
    return selectedAmount || Number.parseInt(customAmount) || 0
  }

  const handleSponsorNow = () => {
    setShowSponsorModal(true)
  }

  const handleSponsorConfirm = () => {
    setSelectedAmount(sponsorChildren * 2000)
    setShowSponsorModal(false)
  }

  const handleDownloadReceipt = () => {
    let bankInfo = "";
    if (donationMethod === "Bank Account") {
      bankInfo = `Bank Account: ${selectedBank === "MCB" ? "MCB - 10008429  (Branch: Karachi)" : "Meezan - 10008429  (Branch: Karachi)"}`;
    } else {
      bankInfo = `Payment Method: ${donationMethod}`;
    }
    const content = `Donation Receipt\n\nOrganization: Idara Al-Khair Welfare Society\nProgram: ${getProgramTitle()}\nAmount: PKR ${getCurrentAmount().toLocaleString()}\n${bankInfo}\n\nThank you for your donation! Your support helps us continue our mission.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'donation-receipt.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Helper to get program title
  const getProgramTitle = () => {
    const program = programs.find(p => p.id === selectedProgram)
    return program ? program.title : "General Fund"
  }

  return (
    <main className="/">
      {/* Hero Section */}
      <section className="min-h-[86vh] bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/donation-back.png"
            alt="Donation Background"
            className="object-cover w-full h-full opacity-60 blur-sm"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-darkblue mb-6">
              Make a <span className="text-lightblue">Difference</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray leading-relaxed mb-8">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkblue">Donate <span className="text-lightblue">Now</span></h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2">Support our mission by making a secure donation. Every contribution brings hope and positive change to those in need.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="one-time" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                <TabsTrigger value="monthly">Monthly Giving</TabsTrigger>
              </TabsList>

              <TabsContent value="one-time" className="space-y-8">
                <Card className="bg-white/90 border-lightblue/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-6 h-6 mr-2 text-lightblue" />
                      One-Time Donation
                    </CardTitle>
                    <CardDescription>Make a single donation to support our programs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Program Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-darkblue">Choose a Program</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {programs.map((program) => (
                          <div
                            key={program.id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              selectedProgram === program.id
                                ? "border-lightblue bg-lightblue/10"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => setSelectedProgram(program.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <program.icon
                                className={`w-6 h-6 mt-1 ${
                                  selectedProgram === program.id ? "text-lightblue" : "text-gray-400"
                                }`}
                              />
                              <div>
                                <h4 className="font-semibold text-lightblue">{program.title}</h4>
                                <p className="text-sm text-gray-700 mb-2">{program.description}</p>
                                <p className="text-xs text-lightblue font-medium">{program.impact}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-darkblue">Select Amount (PKR)</h3>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                        {donationPresets.map((amount) => (
                          <button
                            key={amount}
                            onClick={() => handleAmountSelect(amount)}
                            className={`p-3 border-2 rounded-lg font-semibold transition-all ${
                              selectedAmount === amount
                                ? "border-lightblue bg-lightblue text-white"
                                : "border-gray-200 hover:border-lightblue text-gray-700"
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
                          min={500}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value === "" || Number(value) < 500) {
                              setCustomAmount("500");
                            } else {
                              setCustomAmount(value);
                            }
                            setSelectedAmount(0);
                          }}
                          className="flex-1"
                        />
                        <span className="text-gray-500 font-medium">PKR</span>
                      </div>
                    </div>

                    {/* Donation Method Selection */}
                    <div className="mb-4">
                      <label className="block text-darkblue font-semibold mb-2">Select Donation Method</label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="donationMethod"
                            value="Bank Account"
                            checked={donationMethod === "Bank Account"}
                            onChange={() => setDonationMethod("Bank Account")}
                            className="accent-lightblue"
                          />
                          <span className="text-darkblue">Bank Account</span>
                        </label>
                        <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                          <input
                            type="radio"
                            name="donationMethod"
                            value="Easypaisa"
                            disabled
                            className="accent-lightblue"
                          />
                          <span>Easypaisa <span className="text-xs text-gray-500">(Coming Soon)</span></span>
                        </label>
                        <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                          <input
                            type="radio"
                            name="donationMethod"
                            value="JazzCash"
                            disabled
                            className="accent-lightblue"
                          />
                          <span>JazzCash <span className="text-xs text-gray-500">(Coming Soon)</span></span>
                        </label>
                      </div>
                    </div>
                    {donationMethod === "Bank Account" && (
                      <div className="mb-4">
                        <label className="block text-darkblue font-semibold mb-2">Select Bank Account</label>
                        <select
                          value={selectedBank}
                          onChange={e => setSelectedBank(e.target.value)}
                          className="w-full border border-lightblue rounded-lg px-4 py-2 text-darkblue focus:outline-none focus:ring-2 focus:ring-lightblue"
                        >
                          <option value="MCB">MCB - 10008429  (Branch: Karachi)</option>
                          <option value="Meezan">Meezan - 0101018353 (Branch: Karachi)</option>
                        </select>
                        <div className="mt-2 text-xs text-gray-600">
                          {selectedBank === "MCB"
                            ? "Account Title: Idara Al-Khair Welfare Society | MCB Account #: 1234567890 | Branch: Karachi"
                            : "Account Title: Idara Al-Khair Welfare Society | Meezan Account #: 9876543210 | Branch: Karachi"}
                        </div>
                      </div>
                    )}
                    {donationMethod !== "Bank Account" && (
                      <div className="mb-4 text-lightblue font-semibold">This payment method is coming soon.</div>
                    )}

                    {/* Payment Button */}
                    <div className="pt-6 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold text-darkblue">Total Amount:</span>
                        <span className="text-2xl font-bold text-lightblue">
                          PKR {getCurrentAmount().toLocaleString()}
                        </span>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-lightblue to-blue-600 hover:from-lightblue hover:to-blue-700 text-white py-4 text-lg font-semibold"
                        disabled={getCurrentAmount() === 0}
                        onClick={e => {
                          e.preventDefault();
                          setShowReceipt(true);
                        }}
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Donate Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="monthly" className="space-y-8">
                <Card className="bg-white/90 border-lightblue/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-darkblue">
                      <Users className="w-6 h-6 mr-2 text-lightblue" />
                      Monthly Giving Program
                    </CardTitle>
                    <CardDescription>Join our community of monthly donors and create lasting impact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-lightblue/10 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-darkblue mb-2">Sponsor a Child's Education</h3>
                      <p className="text-gray mb-4">
                        For just PKR 2,000 per month, you can sponsor a child's complete education, including books, supplies, and meals.
                      </p>
                      <div className="flex items-center space-x-4">
                        <Button className="bg-lightblue hover:bg-lightblue text-white" onClick={handleSponsorNow}>Sponsor Now</Button>
                        <span className="text-sm text-darkblue font-medium">Join 500+ monthly sponsors</span>
                      </div>
                    </div>
                    {/* Sponsor Modal */}
                    {showSponsorModal && (
                      <Dialog open={showSponsorModal} onOpenChange={setShowSponsorModal}>
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
                          <div className="bg-white rounded-xl p-8 max-w-sm w-full shadow-2xl border border-lightblue">
                            <h3 className="text-xl font-bold text-darkblue mb-4">How many children do you want to sponsor monthly?</h3>
                            <input
                              type="number"
                              min={1}
                              value={sponsorChildren}
                              onChange={e => setSponsorChildren(Math.max(1, Number(e.target.value)))}
                              className="w-full border border-lightblue rounded-lg px-4 py-2 mb-4 text-lg text-darkblue focus:outline-none focus:ring-2 focus:ring-lightblue"
                            />
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-gray-700">Monthly Amount:</span>
                              <span className="text-lg font-bold text-lightblue">PKR {(sponsorChildren * 2000).toLocaleString()}</span>
                            </div>
                            <div className="flex gap-4">
                              <Button className="flex-1 bg-lightblue text-white" onClick={handleSponsorConfirm}>Confirm</Button>
                              <Button className="flex-1 bg-gray-200 text-darkblue" onClick={() => setShowSponsorModal(false)}>Cancel</Button>
                            </div>
                          </div>
                        </div>
                      </Dialog>
                    )}
                    {/* Monthly Amount Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-darkblue">Monthly Contribution (PKR)</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {[500, 1000, 2500, 5000].map((amount) => (
                          <button
                            key={amount}
                            onClick={() => handleAmountSelect(amount)}
                            className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                              selectedAmount === amount
                                ? "border-lightblue bg-lightblue text-white"
                                : "border-gray-200 hover:border-lightblue text-gray-700"
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
                        <span className="text-lg font-semibold text-darkblue">Monthly Contribution:</span>
                        <span className="text-2xl font-bold text-lightblue">
                          PKR {getCurrentAmount().toLocaleString()}/month
                        </span>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-lightblue to-blue-600 hover:from-lightblue hover:to-blue-400 text-white py-4 text-lg font-semibold"
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
        {/* Receipt Modal */}
        {showReceipt && (
          <Dialog open={showReceipt} onOpenChange={setShowReceipt}>
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
              <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl border border-lightblue text-center">
                <h3 className="text-2xl font-bold text-darkblue mb-4">Thank You for Your Donation!</h3>
                <div className="mb-4">
                  <div className="text-lg text-gray-700 mb-2">Organization:</div>
                  <div className="text-xl font-semibold text-gray-500 mb-2">Idara Al-Khair Welfare Society</div>
                  {donationMethod === "Bank Account" ? (
                    <>
                      <div className="text-lg text-gray-700 mb-2">Bank Account:</div>
                      <div className="text-xl font-semibold text-gray-500 mb-2">{selectedBank === "MCB" ? "MCB - 1234567890 (Branch: Karachi)" : "Meezan - 9876543210 (Branch: Karachi)"}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-lg text-gray-700 mb-2">Payment Method:</div>
                      <div className="text-xl font-semibold text-gray-500 mb-2">{donationMethod} (Coming Soon)</div>
                    </>
                  )}
                  <div className="text-lg text-gray-700 mb-2">Program:</div>
                  <div className="text-xl font-semibold text-gray-500 mb-2">{getProgramTitle()}</div>
                  <div className="text-lg text-gray-700 mb-2">Amount:</div>
                  <div className="text-2xl font-bold text-darkblue">PKR {getCurrentAmount().toLocaleString()}</div>
                </div>
                <p className="text-gray-600 mb-6">Your support helps us continue our mission. You will receive a confirmation email shortly.</p>
                <Button className="bg-darkblue text-white w-full mb-2" onClick={handleDownloadReceipt}>Download Receipt</Button>
                <Button className="bg-lightblue text-white w-full" onClick={() => setShowReceipt(false)}>Close</Button>
              </div>
            </div>
          </Dialog>
        )}
      </section>

      {/* Impact Stories */}
      <section id="mission-vision" className="px-2 md:px-8 py-20 bg-white">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="hidden lg:block flex-1 mr-8">
              <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
            </div>
            <div className="text-center px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkblue">Your Impect <span className="text-lightblue">in Action</span></h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mt-2">Empowering communities through education, healthcare, and hope for a brighter future.</p>
            </div>
            <div className="hidden lg:block flex-1 ml-8">
              <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
            </div>
          </div>
        </div>
        {/* Mission & Vision - Split Image/Text Professional Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission Card */}
          <div className="relative rounded-2xl shadow-2xl drop-shadow-[0_4px_16px_rgba(0,60,255,0.08)] overflow-hidden min-h-[340px] flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/10 p-8 group transition-transform duration-300 hover:scale-105">
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-lightblue/10 text-lightblue font-semibold text-xs px-3 py-1 rounded-full shadow">Education</span>
            {/* Gradient ring icon */}
            <div className="relative z-10 mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 flex items-center justify-center shadow-lg p-1">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
                  <BookOpen className="w-10 h-10 text-lightblue" />
                </div>
              </div>
            </div>
            <div className="relative z-10 text-2xl font-bold text-darkblue mb-2">PKR 1,000</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-lightblue via-cyan-400 to-blue-400 rounded-full mb-3" />
            <div className="relative z-10 text-md text-gray-700 mb-2 text-center"><span className="font-bold text-lightblue">Impact:</span> Provides school supplies for 5 students for one month</div>
            <div className="relative z-10 text-gray-600 italic text-sm text-center mb-3"><span className="font-bold text-darkblue">Story:</span> Thanks to donors like you, Ahmad can now attend school with proper books and supplies.</div>
            <div className="relative z-10 text-xs text-lightblue font-semibold mt-auto">Thank you!</div>
          </div>
          {/* Vision Card */}
          <div className="relative rounded-2xl shadow-2xl drop-shadow-[0_4px_16px_rgba(0,60,255,0.08)] overflow-hidden min-h-[340px] flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/10 p-8 group transition-transform duration-300 hover:scale-105">
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-lightblue/10 text-lightblue font-semibold text-xs px-3 py-1 rounded-full shadow">Healthcare</span>
            {/* Gradient ring icon */}
            <div className="relative z-10 mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 flex items-center justify-center shadow-lg p-1">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
                  <Stethoscope className="w-10 h-10 text-lightblue" />
                </div>
              </div>
            </div>
            <div className="relative z-10 text-2xl font-bold text-darkblue mb-2">PKR 5,000</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-lightblue via-cyan-400 to-blue-400 rounded-full mb-3" />
            <div className="relative z-10 text-md text-gray-700 mb-2 text-center"><span className="font-bold text-lightblue">Impact:</span> Covers medical treatment for 20 patients in our health camps</div>
            <div className="relative z-10 text-gray-600 italic text-sm text-center mb-3"><span className="font-bold text-darkblue">Story:</span> Your contribution helped provide essential healthcare to families in remote villages.</div>
            <div className="relative z-10 text-xs text-lightblue font-semibold mt-auto">Thank you!</div>
          </div>
          {/* Vision Card */}
          <div className="relative rounded-2xl shadow-2xl drop-shadow-[0_4px_16px_rgba(0,60,255,0.08)] overflow-hidden min-h-[340px] flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/10 p-8 group transition-transform duration-300 hover:scale-105">
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-lightblue/10 text-lightblue font-semibold text-xs px-3 py-1 rounded-full shadow">Relief</span>
            {/* Gradient ring icon */}
            <div className="relative z-10 mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 flex items-center justify-center shadow-lg p-1">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
                  <Heart className="w-10 h-10 text-lightblue" />
                </div>
              </div>
            </div>
            <div className="relative z-10 text-2xl font-bold text-darkblue mb-2">PKR 10,000</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-lightblue via-cyan-400 to-blue-400 rounded-full mb-3" />
            <div className="relative z-10 text-md text-gray-700 mb-2 text-center"><span className="font-bold text-lightblue">Impact:</span> Funds 100+ families with food and shelter for 3 months</div>
            <div className="relative z-10 text-gray-600 italic text-sm text-center mb-3"><span className="font-bold text-darkblue">Story:</span> Your donation helped provide essential food and shelter to families affected by natural disasters.</div>
            <div className="relative z-10 text-xs text-lightblue font-semibold mt-auto">Thank you!</div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-1xl mx-auto">
            <div className="relative mb-16 ">
              <div className="flex items-center justify-center">
                <div className="hidden lg:block flex-1 mr-8">
                  <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
                </div>
                <div className="text-center px-8">
                  <h2 className="text-5xl md:text-5xl font-bold mb-4 text-darkblue">
                    FAQS <span className="text-lightblue">Section</span>
                  </h2>
                  <p className="text-xl text-gray max-w-3xl mx-auto">Transforming lives across Pakistan since 1987</p>
                </div>
                <div className="hidden lg:block flex-1 ml-8">
                  <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
                </div>
              </div>
            </div>
            <Accordion type="single" collapsible className="rounded-2xl shadow-xl border border-lightblue/20 bg-white/80">
              {donateFaqs.map((faq, idx) => (
                <AccordionItem key={idx} value={"faq-" + idx} className="border-b border-lightblue/10">
                  <AccordionTrigger className="text-lg font-semibold text-darkblue hover:text-lightblue transition-colors py-4 px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-6 pb-6">
                    <div className="mb-2 text-gray-700 bg-lightblue/5 rounded p-3">{faq.answers[0]}</div>
                    {/* User Q&A history */}
                    {faqQuestions[idx].history.map((item, hIdx) => (
                      <div key={hIdx} className="mt-3 p-4 bg-lightblue/10 rounded-lg text-gray-700 animate-fade-in">
                        <div className="font-semibold text-darkblue mb-1">User asked:</div>
                        <div className="mb-2">{item.question}</div>
                        <div className="font-semibold text-darkblue mb-1">Answer:</div>
                        <div>{item.answer}</div>
                      </div>
                    ))}
                    {/* User input */}
                    <div className="mt-4">
                      <textarea
                        ref={el => { faqInputRefs.current[idx] = el; }}
                        value={faqQuestions[idx].question}
                        onChange={e => setFaqQuestions(prev => prev.map((q, i) => i === idx ? { ...q, question: e.target.value } : q))}
                        placeholder="Ask your own question about this topic..."
                        className="w-full border border-lightblue rounded-lg px-4 py-2 text-gray-700 mb-2 focus:outline-none focus:ring-2 focus:ring-lightblue"
                        rows={2}
                      />
                      <Button
                        className="bg-lightblue text-white px-6 py-2 rounded-full"
                        disabled={!faqQuestions[idx].question.trim()}
                        onClick={() => handleFaqQuestionSubmit(idx)}
                      >Ask</Button>
                      {faqQuestions[idx].reply && (
                        <div className="mt-3 p-4 bg-lightblue/10 rounded-lg text-gray-700 animate-fade-in">
                          <span className="font-semibold text-darkblue">Answer:</span> {faqQuestions[idx].reply}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DonatePage;
