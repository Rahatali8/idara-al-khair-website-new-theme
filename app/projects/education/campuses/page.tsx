import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import Link from "next/link";

const campuses = [
  {
    name: "Idara Al Khair-Campus 1 (Head Campus)",
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
      "Serving the Gadap town community with quality education and modern facilities.",
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
      "Providing accessible education to underserved communities in Gul Muhammad Qalandrani Goth Gadap tpwn.",
    link: "https://www.google.com/maps/place/Idara+Al-Khair+Campus+4/@25.0420818,67.00908,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb343006a997a39:0xf1d2cbb353add084!8m2!3d25.042077!4d67.0116603!16s%2Fg%2F11w8s4clrw?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Idara Al-khair campus 5",
    location: "Sector 5-M, North Karachi Town",
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
      <section className="py-10 bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-12 bg-teal-100 text-teal-800 hover:bg-teal-200">
              Our Campuses
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-teal-600">Campuses</span> Across Karachi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Six strategically located campuses across Karachi, each thoughtfully designed to serve local communities with quality education and modern facilities. Our campuses offer easy access for students in all areas of the city, featuring state-of-the-art classrooms, well-equipped labs, libraries, and dedicated spaces for extracurricular activities.
              We aim to create a supportive, inclusive environment where every student can thrive and achieve their full potential close to home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <GraduationCap className="mr-2 h-5 w-5" />
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Campuses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six strategically located campuses across Karachi, each designed
              to serve local communities with quality education and modern
              facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {campuses.map((campus, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={campus.image || "/placeholder.svg"}
                    alt={campus.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-600 text-white">
                      Est. {campus.established}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {campus.name}
                  </CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {campus.location}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 px-8">
                  <p className="text-gray-600 text-sm">{campus.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">
                        Students:
                      </span>
                      <p className="text-teal-600 font-bold">
                        {campus.students}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Grades:
                      </span>
                      <p className="text-gray-600">{campus.grades}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-900 text-sm">
                      Facilities:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {campus.facilities.map((facility, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-1" />
                      {campus.contact}
                    </div>
                    <a
                      href={campus.link}
                      target="_blank"
                    >
                      <Button size="sm" variant="outline">
                        Visit Campus
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to nurture young minds
              and prepare them for future success.
            </p>
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
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-teal-600">
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-8">
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
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join Our Educational Mission
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Help us provide quality education to more children. Your support can
            transform lives and build a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Donate to Education
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/contact">Become a Volunteer Teacher</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
