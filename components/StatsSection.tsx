
import AnimatedCounter from "@/components/animated-counter"
import FadeInSection from "@/components/fade-in-section"
import GlassmorphismCard from "@/components/glassmorphism-card"
import Animated3DIcon from "@/components/animated-3d-icon"
import { Users, GraduationCap,Heart, Building} from "lucide-react"

export default function StatsSection() {
  return (
      <div className="bg-light-gray">
      {/* Enhanced Statistics Section */}
      <section className="ml-7 mr-7 py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="relative mb-16">
              <div className="flex items-center justify-center">
                <div className="hidden lg:block flex-1 mr-8">
                  <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
                </div>
                <div className="text-center px-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-darkblue">
                    Our Impact <span className="text-lightblue">in Numbers</span>
                  </h2>
                  <p className="text-xl text-gray max-w-3xl mx-auto">Transforming lives across Pakistan since 1987</p>
                </div>
                <div className="hidden lg:block flex-1 ml-8">
                  <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FadeInSection delay={0.1}>
              <GlassmorphismCard className="group relative overflow-hidden p-8 text-center bg-white/90 dark:bg-dark-gray/90 border border-cyan-800/20 shadow-xl">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="relative z-10">
                  <Animated3DIcon Icon={Users} color="text-lightblue" delay={0.2} />
                  <h3 className="text-4xl font-bold text-darkblue dark:text-darkblue mt-6 mb-2">
                    <AnimatedCounter end={850750} />
                  </h3>
                  <p className="text-gray text-md">People Served Since 1987</p>
                </div>
              </GlassmorphismCard>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <GlassmorphismCard className="group relative overflow-hidden p-8 text-center bg-white/90 dark:bg-dark-gray/90 border border-cyan-800/20 shadow-xl">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="relative z-10">
                  <Animated3DIcon Icon={GraduationCap} color="text-lightblue" delay={0.3} />
                  <h3 className="text-4xl font-bold text-darkblue dark:text-darkblue mt-6 mb-2">
                    <AnimatedCounter end={6000} />
                  </h3>
                  <p className="text-gray text-md">Students in Our Institutes</p>
                </div>
              </GlassmorphismCard>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <GlassmorphismCard className="group relative overflow-hidden p-8 text-center bg-white/90 dark:bg-dark-gray/90 border border-cyan-800/20 shadow-xl">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="relative z-10">
                  <Animated3DIcon Icon={Heart} color="text-lightblue" delay={0.4} />
                  <h3 className="text-4xl font-bold text-darkblue dark:text-darkblue mt-6 mb-2">
                    <AnimatedCounter end={1575} />
                  </h3>
                  <p className="text-gray text-md">Medical Patients Treated</p>
                </div>
              </GlassmorphismCard>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <GlassmorphismCard className="group relative overflow-hidden p-8 text-center bg-white/90 dark:bg-dark-gray/90 border border-cyan-800/20 shadow-xl">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="relative z-10">
                  <Animated3DIcon Icon={Building} color="text-lightblue" delay={0.5} />
                  <h3 className="text-4xl font-bold text-darkblue dark:text-darkblue mt-6 mb-2">
                    <AnimatedCounter end={25} />
                  </h3>
                  <p className="text-gray text-md">Centers in Pakistan</p>
                </div>
              </GlassmorphismCard>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}
