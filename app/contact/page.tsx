'use client'
import { Button } from "@/components/ui/button"
import CallToAction from "@/components/CallToAction"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {MapPin, Phone, Mail, Clock,Send,Building2,Smartphone,Calendar,User,MessageSquare,} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRef } from "react";

type DonationMethod = {
  icon: any;
  image: string;
  title: string;
  accountName: string;
  accountNumber: string;
  branchCode: string;
  swiftCode: string;
  iban: string;
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: "Sector 5-J Sector 5 J New Karachi Town, Karachi",
    description: "Main administrative center"
  },
  {
    icon: Phone,
    title: "Primary Contact",
    details: "+92 300 211 2609",
    description: "24/7 support available"
  },
  {
    icon: Mail,
    title: "Email Support",
    details: "info@idaraalkhair.com",
    description: "Quick response guaranteed"
  },
  {
    icon: Clock,
    title: "Established",
    details: "Since 1987",
    description: "37+ years of service"
  }
]

const donationMethods: DonationMethod[] = [
  {
    icon: Building2,
    image: "/socailwalfare.jpg.webp",
    title: "Meezan Bank",
    accountName: "Idara Al-Khair Welfare Society",
    accountNumber: "0101018353",
    branchCode: "0133",
    swiftCode: "MEZNPKKA",
    iban: "PK85MEZN0001330101018353"
  },
  {
    icon: Building2,
    image: "/donate-card.png",
    title: "MCB Bank",
    accountName: "Idara Al-Khair Welfare Society", 
    accountNumber: "10008429 ",
    branchCode: "0055 ",
    swiftCode: "MUCBPKKA ",
    iban: "PK87MUCB0005501010008429"
  }
]




const faqData = [
  {
    question: "How can I donate to Idara Al-Khair?",
  },
  {
    question: "What areas do you serve?",
  },
  {
    question: "How can I volunteer with Idara Al-Khair?",
  },
  {
    question: "Are my donations tax-deductible?",
  },
  {
    question: "What services do you provide?",
  },
  {
    question: "How can I contact you for emergencies?",
  },
  {
    question: "How long has Idara Al-Khair been operating?",
  }
]

// Helper for FAQ question state
type FaqQuestionState = {
  question: string;
  reply: string;
  history: { question: string; answer: string }[];
};

export default function ContactPage() {
  const [headingShine, setHeadingShine] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [faqQuestions, setFaqQuestions] = useState<FaqQuestionState[]>(faqData.map(() => ({ question: "", reply: "", history: [] })));
  const [faqAnswerIndexes, setFaqAnswerIndexes] = useState<number[]>(faqData.map(() => 0));
  const faqInputRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  const faqHardcodedAnswers = [
    [
      "You can donate to Idara Al-Khair through multiple convenient methods. We accept donations via direct bank transfer to our official accounts (details are provided above), in-person contributions at our head office, and through secure online payment gateways. Every contribution, no matter the size, helps us continue our mission to serve those in need.",
      "For online donations, please visit our website's donation page and follow the secure payment instructions. If you prefer, you can also contact our support team for personalized assistance with your donation process.",
      "All donations are acknowledged with an official receipt. If you have any questions about the donation process or need help, please reach out to us at info@idaraalkhair.com."
    ],
    [
      "Idara Al-Khair serves communities across Pakistan, with a primary focus on Karachi and its surrounding areas. Our outreach programs extend to various regions, ensuring that families and individuals in need receive support, education, healthcare, and relief services regardless of their location.",
      "We have active projects in both urban and rural areas, and our team regularly assesses new locations where our help is needed most. If you want to know about a specific area, please contact us for details.",
      "Our mission is to reach as many deserving people as possible, and we are always expanding our network to maximize our impact across the country."
    ],
    [
      "We welcome volunteers from all backgrounds and skill sets. To join as a volunteer, please visit our dedicated volunteer page or contact us directly through the provided channels. Our team will guide you through the application process, orientation, and help you find a program that matches your interests and availability.",
      "Volunteering with Idara Al-Khair is a rewarding experience. We offer flexible opportunities in education, healthcare, food support, and more. Training and support are provided to all new volunteers.",
      "If you have specific skills or interests, let us know! We value every contribution and will help you find the best way to make a difference."
    ],
    [
      "Yes, all donations made to Idara Al-Khair Welfare Society are tax-deductible under applicable laws. We issue official receipts for every contribution, which you can use for your tax records. If you require additional documentation or have specific queries regarding tax benefits, please contact our support team.",
      "Our organization is registered and compliant with all relevant regulations. We are happy to provide any paperwork you need for your tax filings or for your company’s CSR requirements.",
      "Transparency is important to us. If you have any questions about how your donation is used or about tax benefits, please get in touch with our finance department."
    ],
    [
      "Idara Al-Khair provides a comprehensive range of services including quality education through schools and technical centers, food support programs such as Roti Bank and Ramzan Rashan, accessible healthcare via our medical centers, and social welfare initiatives like disaster relief and free employment schemes.",
      "Our education programs include both academic and vocational training, while our healthcare services are open to all, regardless of background. We also run seasonal and emergency relief projects.",
      "For a full list of our services and ongoing projects, please visit our website or contact our office for a brochure."
    ],
    [
      "For emergencies, you can reach our 24/7 support team by calling our primary contact number: +92 300 211 2609. Our staff is trained to respond promptly to urgent matters, including disaster relief, medical emergencies, and other critical situations requiring immediate assistance.",
      "We have a dedicated team for disaster response and urgent needs. Please do not hesitate to call us at any time if you or someone you know needs immediate help.",
      "You can also email us at info@idaraalkhair.com for non-urgent queries, and we will respond as quickly as possible."
    ],
    [
      "Idara Al-Khair was established in 1987 and has been dedicated to serving communities for over 37 years. Our long-standing commitment to humanitarian work has positively impacted thousands of lives, and we continue to expand our programs to reach even more people in need.",
      "Over the decades, we have built a reputation for transparency, compassion, and effective service delivery. Our team is passionate about making a real difference in the lives of those we serve.",
      "We invite you to join us in our mission—whether as a donor, volunteer, or supporter—and help us continue this legacy of service."
    ]
  ];

  // Handler for submitting a question
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
          const answer = faqHardcodedAnswers[idx][faqAnswerIndexes[idx]];
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
          ? (val + 1) % faqHardcodedAnswers[idx].length
          : val
      ));
    }, 1200);
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contect-back.jpg"
            alt="Contact background"
            className="object-cover w-full h-full blur-sm"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {(() => {
              const headingWords = ["Contact", "Idara", "Al-Khair"];
              const subtext = "Ready to make a difference? Reach out to us and discover how you can contribute to our mission of serving humanity.";
              return (
                <>
                  <motion.h1
                    className={`text-5xl md:text-6xl font-bold mb-6 text-darkblue flex flex-wrap justify-center ${headingShine ? "shimmer" : ""}`}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.18 } },
                      hidden: {},
                    }}
                    onAnimationComplete={() => setHeadingShine(true)}
                  >
                    {headingWords.map((word, i) => (
                      <motion.span
                        key={i}
                        className={word === "Al-Khair" ? "text-lightblue mx-2" : "mx-2"}
                        variants={{
                          hidden: { opacity: 0, y: 40, scale: 0.8 },
                          visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.7 } },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>
                  <motion.p
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 flex flex-wrap justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.045 } },
                      hidden: {},
                    }}
                  >
                    {subtext.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-2"
                        variants={{
                          hidden: { opacity: 0, y: 20, scale: 0.8 },
                          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: 'spring', bounce: 0.3 } },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-lightblue to-cyan-400 hover:from-cyan-400 hover:to-lightblue text-white shadow-lg font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    <a href="mailto:info@idaraalkhair.com">
                      <Button size="lg" variant="outline" className="border-2 border-lightblue text-lightblue hover:bg-lightblue/10 bg-transparent font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </Button>
                    </a>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      
     

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-full">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="hidden lg:block flex-1">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-2">Get In <span className="text-lightblue">Touch</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">Connect with us through multiple channels. Our dedicated team is ready to assist you with any inquiries.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4 text-left flex flex-col gap-3 min-w-[280px] max-w-[280px] w-full h-[200px] mx-auto"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 bg-lightblue/80 group-hover:bg-white transition-colors duration-500 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
                    <info.icon className="w-6 h-6 text-white  group-hover:text-lightblue transition-colors duration-500" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-bold text-lightblue group-hover:text-darkblue transition-colors duration-500 mb-1 text-center">{info.title}</h3>
                  <p className="text-gray mb-2 text-center font-light leading-relaxed">{info.details}</p>
                  <p className="text-gray text-sm text-center">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section  id="donation-details" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-2">Donation <span className="text-lightblue">Details</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">Your generous donations help us continue our mission. Choose from our secure banking options below.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {donationMethods.map((method, index) => {
              // Website theme color for each card
              const colorTheme = index === 0
                ? {
                    main: 'from-lightblue to-cyan-500',
                    accent: 'bg-lightblue',
                    heading: 'bg-lightblue text-white',
                    block: 'bg-lightblue/10',
                  }
                : {
                    main: 'from-darkblue to-gray',
                    accent: 'bg-darkblue',
                    heading: 'bg-darkblue text-white',
                    block: 'bg-lightblue/10',
                  };
              return (
                <div key={index} className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[420px]">
                  {/* Diagonal bands and image */}
                  <div className="w-full h-40 md:h-56 overflow-hidden rounded-t-3xl">
                    <img src={method.image} alt={method.title + ' image'} className="object-cover w-full h-full" />
                  </div>
                  {/* Card content blocks */}
                  <div className="flex-1 flex flex-col justify-start p-0">
                    {/* Heading and target */}
                    <div className={`px-8 pt-6 pb-3 ${colorTheme.heading} rounded-b-3xl`}> 
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <div className="text-lg font-bold uppercase tracking-wider text-gray-500">{method.title}</div>
                          <div className={`text-2xl font-extrabold ${colorTheme.heading}`}>{method.accountName}</div>
                        </div>
                        <div className="text-center md:text-right mt-2 md:mt-0">
                          <div className="text-xs font-semibold text-gray-500 uppercase">Help us to reach our target</div>
                          <div className={`text-2xl font-extrabold ${colorTheme.heading}`}>PKR 1,000,000</div>
                        </div>
                      </div>
                    </div>
                    {/* Account info */}
                    <div className={`px-8 py-3 flex flex-col gap-1 ${colorTheme.block}`}> 
                      <div className="flex justify-between border-b pb-1">
                        <span className="font-medium text-gray-600">Account Title:</span>
                        <span className="font-semibold text-gray-900">{method.accountName}</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                      <span className="font-medium text-gray-600">Account Number:</span>
                      <span className="font-semibold text-gray-900">{method.accountNumber}</span>
                    </div>
                      <div className="flex justify-between border-b pb-1">
                      <span className="font-medium text-gray-600">Branch Code:</span>
                      <span className="font-semibold text-gray-900">{method.branchCode}</span>
                    </div>
                      <div className="flex justify-between border-b pb-1">
                      <span className="font-medium text-gray-600">Swift Code:</span>
                      <span className="font-semibold text-gray-900">{method.swiftCode}</span>
                    </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">IBAN:</span>
                        <span className="font-semibold text-gray-900 text-sm">{method.iban}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-2">Send Us a <span className="text-lightblue">Message</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">Have questions or want to get involved? We'd love to hear from you.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Left: Contact Form */}
            <div className="bg-white/90 shadow-2xl rounded-3xl p-10 border border-lightblue/20 h-full flex flex-col justify-center">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name</Label>
                      <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-lightblue" />
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                        className="pl-10 h-12 border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-lightblue/40 bg-bglightblue rounded-xl text-darkblue"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                      <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-lightblue" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                        className="pl-10 h-12 border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-lightblue/40 bg-bglightblue rounded-xl text-darkblue"
                        />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                      <div className="relative">
                      <Smartphone className="absolute left-3 top-3 h-5 w-5 text-lightblue" />
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                        className="pl-10 h-12 border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-lightblue/40 bg-bglightblue rounded-xl text-darkblue"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="date" className="text-gray-700 font-semibold">Preferred Date</Label>
                      <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-lightblue" />
                        <Input
                          id="date"
                          type="date"
                        className="pl-10 h-12 border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-lightblue/40 bg-bglightblue rounded-xl text-darkblue"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                    <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-lightblue" />
                      <Textarea
                        id="message"
                        placeholder="Write your message here..."
                      className="pl-10 min-h-[120px] border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-lightblue/40 bg-bglightblue rounded-xl text-darkblue resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-lightblue to-cyan-400 hover:from-cyan-400 hover:to-lightblue text-white px-10 py-4 shadow-xl rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2">
                    <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
            </div>
            {/* Right: Location/Map */}
            <div className="flex flex-col justify-center bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl border border-lightblue/30 p-0 overflow-hidden h-full">
              <div className="w-full h-64 md:h-80 relative">
                <iframe
                  title="Idara Al-Khair Head Office Location"
                  src="https://www.google.com/maps?q=Sector+5-J+New+Karachi+Town,+Karachi,+Pakistan&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1.5rem 1.5rem 0 0' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-lightblue" />
                  <span className="font-bold text-darkblue text-lg">Head Office</span>
                </div>
                <div className="text-gray-700 font-medium mb-2">Sector 5-J Sector 5 J New Karachi Town, Karachi</div>
                <div className="flex items-center gap-2 text-gray-700"><Phone className="w-5 h-5 text-lightblue" /> +92 300 211 2609</div>
                <div className="flex items-center gap-2 text-gray-700"><Mail className="w-5 h-5 text-lightblue" /> info@idaraalkhair.com</div>
                <div className="mt-4 text-xs text-gray-400">Find us on Google Maps for directions and more details.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-2">Frequently Asked <span className="text-lightblue">Questions</span></h2>
                <p className="text-xl text-gray max-w-3xl mx-auto">Find answers to common questions about our organization and how you can get involved.</p>
              </div>
              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {!showAllFaqs ? (
              <Accordion type="single" collapsible className="w-full rounded-2xl bg-white/90 shadow-2xl border border-lightblue/30 divide-y divide-gray-200">
                {[0, faqData.length - 1].map((faqIdx, arrIdx) => (
                  <AccordionItem value={`faq-${faqIdx}`} key={faqIdx}>
                    <AccordionTrigger className="text-lg text-darkblue font-bold px-6 py-4 focus:outline-none rounded-xl transition bg-white hover:bg-lightblue/10 data-[state=open]:bg-lightblue/20 data-[state=open]:text-lightblue">
                      {faqData[faqIdx].question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 px-7 pb-5 bg-lightblue/5 rounded-xl mb-2 mt-1 shadow-sm">
                      <div className="mt-4">
                        <label className="block text-sm font-semibold text-darkblue mb-1">Ask a related question:</label>
                        <textarea
                          ref={el => { faqInputRefs.current[faqIdx] = el; }}
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-lightblue focus:outline-none resize-none mb-2"
                          rows={2}
                          placeholder="Type your question..."
                          value={faqQuestions[faqIdx]?.question || ""}
                          onChange={e => setFaqQuestions(prev => prev.map((q, i) => i === faqIdx ? { ...q, question: e.target.value, reply: "" } : q))}
                        />
                        <button
                          className="px-4 py-1 bg-lightblue text-white rounded-full font-bold shadow hover:bg-cyan-500 transition"
                          onClick={e => { e.preventDefault(); handleFaqQuestionSubmit(faqIdx); }}
                          disabled={!faqQuestions[faqIdx]?.question.trim()}
                        >
                          Submit
                        </button>
                        {/* Conversation history */}
                        {faqQuestions[faqIdx]?.history.map((item, hIdx) => (
                          <div key={hIdx} className="mt-3 p-3 bg-white/80 rounded-lg border border-lightblue/30 text-sm text-gray-700 shadow-inner">
                            <div className="mb-1"><span className="font-semibold text-darkblue">You:</span> {item.question}</div>
                            <div className="flex items-start gap-2"><span className="font-bold text-lightblue">Agent:</span> <span>{item.answer}</span></div>
                          </div>
                        ))}
                        {/* Current reply (typing) */}
                        {faqQuestions[faqIdx]?.reply === 'Loading...' && (
                          <div className="mt-3 p-3 bg-white/80 rounded-lg border border-lightblue/30 text-sm text-gray-700 shadow-inner flex items-start gap-2">
                            <span className="font-bold text-lightblue">Agent:</span>
                            <span className="animate-pulse text-gray-400">Typing…</span>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                <div className="flex justify-center py-4">
                  <button
                    className="px-6 py-2 bg-gradient-to-r from-lightblue to-cyan-400 text-white rounded-full shadow-lg font-bold hover:scale-105 hover:from-cyan-400 hover:to-lightblue transition-all duration-200"
                    onClick={() => setShowAllFaqs(true)}
                  >
                    Show All Questions
                  </button>
                </div>
              </Accordion>
            ) : (
              <Accordion type="single" collapsible className="w-full rounded-2xl bg-white/90 shadow-2xl border border-lightblue/30 divide-y divide-gray-200">
            {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-lg text-darkblue font-bold px-6 py-4 focus:outline-none rounded-xl transition bg-white hover:bg-lightblue/10 data-[state=open]:bg-lightblue/20 data-[state=open]:text-lightblue">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 px-7 pb-5 bg-lightblue/5 rounded-xl mb-2 mt-1 shadow-sm">
                      <div className="mt-4">
                        <label className="block text-sm font-semibold text-darkblue mb-1">Ask a related question:</label>
                        <textarea
                          ref={el => { faqInputRefs.current[index] = el; }}
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-lightblue focus:outline-none resize-none mb-2"
                          rows={2}
                          placeholder="Type your question..."
                          value={faqQuestions[index]?.question || ""}
                          onChange={e => setFaqQuestions(prev => prev.map((q, i) => i === index ? { ...q, question: e.target.value, reply: "" } : q))}
                        />
                        <button
                          className="px-4 py-1 bg-lightblue text-white rounded-full font-bold shadow hover:bg-cyan-500 transition"
                          onClick={e => { e.preventDefault(); handleFaqQuestionSubmit(index); }}
                          disabled={!faqQuestions[index]?.question.trim()}
                        >
                          Submit
                        </button>
                        {/* Conversation history */}
                        {faqQuestions[index]?.history.map((item, hIdx) => (
                          <div key={hIdx} className="mt-3 p-3 bg-white/80 rounded-lg border border-lightblue/30 text-sm text-gray-700 shadow-inner">
                            <div className="mb-1"><span className="font-semibold text-darkblue">You:</span> {item.question}</div>
                            <div className="flex items-start gap-2"><span className="font-bold text-lightblue">Agent:</span> <span>{item.answer}</span></div>
                          </div>
                        ))}
                        {/* Current reply (typing) */}
                        {faqQuestions[index]?.reply === 'Loading...' && (
                          <div className="mt-3 p-3 bg-white/80 rounded-lg border border-lightblue/30 text-sm text-gray-700 shadow-inner flex items-start gap-2">
                            <span className="font-bold text-lightblue">Agent:</span>
                            <span className="animate-pulse text-gray-400">Typing…</span>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                <div className="flex justify-center py-4">
                  <button
                    className="px-6 py-2 bg-gradient-to-r from-lightblue to-cyan-400 text-white rounded-full shadow-lg font-bold hover:scale-105 hover:from-cyan-400 hover:to-lightblue transition-all duration-200"
                    onClick={() => setShowAllFaqs(false)}
                  >
                    Hide Questions
                  </button>
                </div>
              </Accordion>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  )
}
