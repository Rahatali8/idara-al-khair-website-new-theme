"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {GraduationCap,Users,BookOpen,Award,MapPin,Phone,Star,} from "lucide-react";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { motion } from "framer-motion"

const campuses = [
  {
    name: "Idara Al Khair (Head Campus)",
    location: "Sector 5-J, New Karachi Town, Karachi ",
    established: "1995",
    students: "1,200+",
    grades: "Pre-K to Grade 12",
    image: "/al-khair.png",
    facilities: [
      "Science Labs",
      "Computer Lab",
      "Library",
      "Sports Ground",
      "Cafeteria",
    ],
    contact: "+92 300 2112609",
    description:
      "Our flagship campus offering comprehensive education from early childhood to matriculation.",
    link: "https://www.google.com/maps/place/Idara+Al+Khair+Campus+1/@25.000129,67.0760504,17z/data=!4m14!1m7!3m6!1s0x3eb34123801a71e9:0xe5bac7442b1e8f41!2sIdara+Al+Khair+Campus+1!8m2!3d25.000129!4d67.0760504!16s%2Fg%2F11g7y4_v4l!3m5!1s0x3eb34123801a71e9:0xe5bac7442b1e8f41!8m2!3d25.000129!4d67.0760504!16s%2Fg%2F11g7y4_v4l?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Idara Al Khair-Campus 2",
    location: "22HG+MWC, Gadap Town, Karachi",
    established: "2003",
    students: "800+",
    grades: "Pre-K to Grade 10",
    image: "/al-khair c-2.png",
    facilities: [
      "Modern Classrooms",
      "Science Lab",
      "Computer Center",
      "Playground",
    ],
    contact: "+92 300 2112609",
    description:
      "Serving the Gadap town community with quality education and modern facilities and education.",
    link: "https://www.google.com/maps/place/Idara+Al+Khair+Campus+2/@25.0292492,67.0272397,18z/data=!4m14!1m7!3m6!1s0x3eb34220bd3302db:0xbe0b7e820bf9a39b!2sIdara+Al+Khair+Campus+2!8m2!3d25.0291836!4d67.0272585!16s%2Fg%2F11dylxjzm4!3m5!1s0x3eb34220bd3302db:0xbe0b7e820bf9a39b!8m2!3d25.0291836!4d67.0272585!16s%2Fg%2F11dylxjzm4?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Idara Al Khair-Campus 3",
    location: "22GP+68P, Gadap Town, Karachi",
    established: "2007",
    students: "950+",
    grades: "Pre-K to Grade 12",
    image: "/al khair c-3.png",
    facilities: [
      "Digital Classrooms",
      "Science Labs",
      "Library",
      "Art Studio",
      "Sports Complex",
    ],
    contact: "+92 300 2112609",
    description:
      "Modern educational facility with emphasis on technology integration and creative learning.",
    link: "https://www.google.com/maps/place/Idara+Al+Khair+Campus+3/@25.0256462,67.0358494,21z/data=!4m14!1m7!3m6!1s0x3eb34186158255f3:0x71a88b6080a89dfd!2sIdara+Al+Khair+Campus+3!8m2!3d25.025593!4d67.035837!16s%2Fg%2F11g7y91qk8!3m5!1s0x3eb34186158255f3:0x71a88b6080a89dfd!8m2!3d25.025593!4d67.035837!16s%2Fg%2F11g7y91qk8?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Idara Al-Khair-Campus 4",
    location: "22R6+RM, Gul Mohammad Qalandrani Goth Gadap Town, Karachi",
    established: "2010",
    students: "700+",
    grades: "Pre-K to Grade 8",
    image: "/campus 4.png",
    facilities: [
      "Smart Classrooms",
      "Computer Lab",
      "Library",
      "Health Center",
    ],
    contact: "+92 300 2112609",
    description:
      "Providing accessible education to underserved communities.",
    link: "https://www.google.com/maps/place/Idara+Al-Khair+Campus+4/@25.0420818,67.00908,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb343006a997a39:0xf1d2cbb353add084!8m2!3d25.042077!4d67.0116603!16s%2Fg%2F11w8s4clrw?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Idara Al-khair campus 5",
    location: "Sector 5-M, North Karachi B-5/5M Backside of Kifayah",
    established: "2012",
    students: "600+",
    grades: "Pre-K to Grade 10",
    image: "/al-khair c-5.jpeg",
    facilities: ["Modern Labs", "IT Center", "Multipurpose Hall", "Playground"],
    contact: "+92 300 2112609",
    description:
      "Serving the industrial area with focus on technical and vocational preparation.",
    link: "https://www.google.com/maps/place/Al+Khair+College+,B-5%2F5M,+North+Karachi.Libii+Ka+Cllg/@24.9957681,67.0665245,21z/data=!4m10!1m2!2m1!1sIdara+Al+Khair+Campus+Sector+5-M,+North+Karachi+Town!3m6!1s0x3eb341192dcd8747:0xc1e63060dfca51c2!8m2!3d24.9958088!4d67.0667746!15sCjRJZGFyYSBBbCBLaGFpciBDYW1wdXMgU2VjdG9yIDUtTSwgTm9ydGggS2FyYWNoaSBUb3duWjUiM2lkYXJhIGFsIGtoYWlyIGNhbXB1cyBzZWN0b3IgNSBtIG5vcnRoIGthcmFjaGkgdG93bpIBB2NvbGxlZ2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTkpka2w2VlRWblJSQUKqAZUBEAEqNyIzaWRhcmEgYWwga2hhaXIgY2FtcHVzIHNlY3RvciA1IG0gbm9ydGgga2FyYWNoaSB0b3duKAAyHxABIhuIQcIbj7iDSuLdRvyLQEktmm5WSj5KLMHwYJ8yNxACIjNpZGFyYSBhbCBraGFpciBjYW1wdXMgc2VjdG9yIDUgbSBub3J0aCBrYXJhY2hpIHRvd27gAQD6AQQIABA_!16s%2Fg%2F11c1tqwvfv?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Idara Al-khair campus 6",
    location: "235Q+RPM Yaroo goth, Sector 3 Surjani Town, Karachi",
    established: "2015",
    students: "500+",
    grades: "Pre-K to Grade 12",
    image: "/al khair c-6.png",
    facilities: [
      "Science Labs",
      "Computer Center",
      "Library",
      "Sports Facilities",
    ],
    contact: "+92 300 2112609",
    description:
      "Our newest campus bringing quality education to the Surjani Town.",
    link: "https://www.google.com/maps/place/Idara+Al-khair+campus+6/@25.0097018,67.0885555,19z/data=!4m6!3m5!1s0x3eb3410638a0a241:0x25fbfa02a3c7dff3!8m2!3d25.0095912!4d67.0893079!16s%2Fg%2F11spqtt2p9?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

const achievements = [
  {
    icon: Award,
    title: "95% Pass Rate",
    description: "Consistently high academic performance across all campuses",
  },
  {
    icon: Users,
    title: "6000+ Students",
    description: "Currently enrolled across all our educational institutes",
  },
  {
    icon: GraduationCap,
    title: "15,000+ Graduates",
    description: "Alumni making positive impact in their communities",
  },
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description:
      "Updated syllabus with focus on practical skills and critical thinking",
  },
];

export default function CampusesPage() {
  return (
    <main className="/">
      {/* Hero Section */}
   <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/campus-page-back.png"
      alt="campus-page-background"
      fill
      className="object-cover blur-sm"
      priority
    />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {(() => {
        const headingWords = ["Campuses", "Across", "Karachi"];
        const subtext =
          "Six strategically located campuses across Karachi, each thoughtfully designed to serve local communities with quality education and modern facilities. Our campuses offer easy access for students in all areas of the city, featuring state-of-the-art classrooms, well-equipped labs, libraries, and dedicated spaces for extracurricular activities.";
        return (
          <>
            {/* Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-wrap justify-center text-darkblue"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.18 } },
                hidden: {},
              }}
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  className={word === "Karachi" ? "text-lightblue mx-1 sm:mx-2" : "mx-1 sm:mx-2"}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.7 } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 flex flex-wrap justify-center"
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
                  className="inline-block mr-1 sm:mr-2"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, type: "spring", bounce: 0.3 } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* Button */}
            <a href="#campuses" className="inline-block mt-4">
              <button className="relative px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-full border-2 border-lightblue text-lightblue overflow-hidden group transition-colors duration-300 bg-white">
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-full" />
                <span className="relative z-10">Learn More</span>
              </button>
            </a>
          </>
        );
      })()}
    </div>
  </div>
</section>
{/* Achievements */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="mb-12">
      <div className="flex items-center justify-center mb-4 flex-wrap">
        <div className="hidden lg:block flex-1 mr-4 lg:mr-8">
          <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
        </div>

        <div className="text-center px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-darkblue">
            Our <span className="text-lightblue">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-full sm:max-w-xl lg:max-w-2xl mx-auto mt-2">
            Celebrating our milestones and impact in education.
          </p>
        </div>

        <div className="hidden lg:block flex-1 ml-4 lg:ml-8">
          <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
        </div>
      </div>
    </div>

    {/* Achievements Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="group text-center bg-white/90 border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-8 flex flex-col items-center relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-lightblue"
        >
          {/* Animated gradient overlay */}
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />

          {/* Icon */}
          <div className="relative z-10 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 flex items-center justify-center shadow-lg p-1 transition-transform duration-700 group-hover:rotate-[360deg]">
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                <achievement.icon className="w-8 h-8 text-lightblue" />
              </div>
            </div>
          </div>

          {/* Text */}
          <h3 className="relative z-10 text-2xl font-bold text-darkblue mb-2">
            {achievement.title}
          </h3>
          <p className="relative z-10 text-gray-600">{achievement.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Campus Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
              <div className="text-center px-4 sm:px-8 lg:px-0">
  <h2 id="campuses" className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-darkblue mb-4">
    Our <span className="text-lightblue">Campuses</span>
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-gray max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto">
    Six strategically located campuses across Karachi, each designed to serve local communities with quality education and modern facilities.
  </p>
</div>

              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {campuses.map((campus, index) => (
              <Card
                key={index}
    className="bg-white/90 border border-gray-200 shadow-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-lightblue flex flex-col min-h-[520px]"
              >
    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src={campus.image || "/placeholder.svg"}
                    alt={campus.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
        <Badge className="bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 text-white font-semibold shadow px-4 py-1 rounded-full text-xs">
                      Est. {campus.established}
                    </Badge>
                  </div>
                </div>
    <div className="flex-1 flex flex-col justify-between">
      <CardHeader className="pb-0">
        <CardTitle className="text-xl text-darkblue mb-1 text-left">
                    {campus.name}
                  </CardTitle>
        <CardDescription className="flex items-center text-gray-600 mb-3 text-left">
                    <MapPin className="w-4 h-4 mr-1" />
                    {campus.location}
                  </CardDescription>
                </CardHeader>
      <CardContent className="px-8 flex-1 flex flex-col gap-2 text-left">
        <p className="text-gray-700 text-sm mb-2">{campus.description}</p>
        <div className="flex flex-col gap-1 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Students:</span>
            <span className="text-lightblue font-bold">{campus.students}</span>
                    </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Grades:</span>
            <span className="text-gray-600">{campus.grades}</span>
                    </div>
                  </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-900 text-sm">Facilities:</span>
          <div className="flex flex-wrap gap-1 mt-1">
                      {campus.facilities.map((facility, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                className="text-xs bg-lightblue/10 text-lightblue border border-lightblue/20"
                        >
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
        <div className="border-t border-lightblue/10 mt-4 pt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-1" />
                      {campus.contact}
                    </div>
          <a href={campus.link} target="_blank">
            <Button size="sm" variant="outline" className="border-lightblue text-lightblue font-semibold">
                        Visit Campus
                      </Button>
                    </a>
                  </div>
                </CardContent>
    </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden lg:block flex-1 mr-8">
                <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
              </div>
<div className="text-center px-4 sm:px-8 lg:px-0">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkblue mb-4">
    Academic <span className="text-lightblue">Programs</span>
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-gray max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto">
    Comprehensive educational programs designed to nurture young minds and prepare them for future success.
  </p>
</div>

              <div className="hidden lg:block flex-1 ml-8">
                <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
              {
                title: "Early Childhood Education",
                description:
                  "Pre-K to Grade 2 with focus on foundational skills, creativity, and social development.",
                features: [
                  "Play-based Learning",
                  "Montessori Method",
                  "Art & Craft",
                  "Basic Literacy & Numeracy",
                ],
              },
              {
                title: "Primary Education",
                description:
                  "Grade 3 to Grade 5 building strong academic foundation with modern teaching methods.",
                features: [
                  "Core Subjects",
                  "Science Experiments",
                  "Computer Basics",
                  "Sports & Recreation",
                ],
              },
              {
                title: "Middle School",
                description:
                  "Grade 6 to Grade 8 preparing students for higher education with comprehensive curriculum.",
                features: [
                  "Advanced Sciences",
                  "Mathematics",
                  "Languages",
                  "Social Studies",
                  "Life Skills",
                ],
              },
              {
                title: "Secondary Education",
                description:
                  "Grade 9 to Grade 10 with focus on board exam preparation and career guidance.",
                features: [
                  "Board Exam Prep",
                  "Career Counseling",
                  "Practical Labs",
                  "Extra-curricular Activities",
                ],
              },
              {
                title: "Higher Secondary",
                description:
                  "Grade 11 to Grade 12 with specialization tracks for university preparation.",
                features: [
                  "Science Track",
                  "Commerce Track",
                  "Arts Track",
                  "University Prep",
                  "Scholarship Guidance",
                ],
              },
              {
                title: "Special Programs",
                description:
                  "Additional support programs for students with diverse learning needs.",
                features: [
                  "Remedial Classes",
                  "Gifted Student Program",
                  "Special Needs Support",
                  "Scholarship Program",
                ],
              },
            ].map((program, index) => {
    // Choose an icon for each card (cycle through a set)
    const icons = [GraduationCap, BookOpen, Users, Award, Star];
    const Icon = icons[index % icons.length];
    return (
      <Card
        key={index}
        className="group bg-white/90 border border-gray-200 shadow-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-lightblue flex flex-col min-h-[420px] relative overflow-hidden"
      >
        {/* Animated gradient overlay on hover */}
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 rounded-2xl" />
        <div className="flex flex-col items-center pt-8 pb-2">
          {/* Glassy gradient ring icon */}
          <div className="mb-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lightblue via-blue-400 to-cyan-400 flex items-center justify-center shadow-lg p-1 transition-transform duration-700 group-hover:rotate-[360deg]">
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                <Icon className="w-8 h-8 text-lightblue" />
              </div>
            </div>
          </div>
        </div>
                <CardHeader>
          <CardTitle className="text-xl text-darkblue mb-1 text-center">
                    {program.title}
                  </CardTitle>
          <CardDescription className="text-gray-600 text-center mb-2">
            {program.description}
          </CardDescription>
                </CardHeader>
        <CardContent className="px-8 pb-6">
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
    );
  })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
