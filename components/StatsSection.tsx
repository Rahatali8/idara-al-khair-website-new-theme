import AnimatedCounter from "@/components/animated-counter"
import FadeInSection from "@/components/fade-in-section"
import GlassmorphismCard from "@/components/glassmorphism-card"
import Animated3DIcon from "@/components/animated-3d-icon"
import { Users,} from "lucide-react"

export default function StatsSection() {
  return (
    <div className="bg-light-gray">
      {/* Enhanced Statistics Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-light-gray">
        <div className="container mx-auto">
          <FadeInSection>
            <div className="relative mb-12 sm:mb-16">
              <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                {/* Left Line (desktop only) */}
                <div className="hidden lg:block flex-1 mr-8">
                  <div className="h-0.5 bg-gradient-to-l from-lightblue via-cyan-500 to-transparent"></div>
                </div>

                {/* Heading */}
                <div className="w-full lg:w-auto px-4 sm:px-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-darkblue">
                    Our Impact <span className="text-lightblue">in Numbers</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mx-auto">
                    Transforming lives across Pakistan since 1987
                  </p>
                </div>

                {/* Right Line (desktop only) */}
                <div className="hidden lg:block flex-1 ml-8">
                  <div className="h-0.5 bg-gradient-to-r from-lightblue via-cyan-500 to-transparent"></div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Stats Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
  <FadeInSection delay={0.1}>
    <GlassmorphismCard className="group relative   overflow-hidden p-5 sm:p-6 md:p-8 text-center bg-white/90 dark:bg-dark-gray/90 border border-cyan-800/20 shadow-xl rounded-2xl">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
  <div className="flex items-center justify-center mb-4">
    <Animated3DIcon Icon={Users} color="text-lightblue" delay={0.2} />
  </div>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mt-2 mb-1">
    <AnimatedCounter end={85750} />
  </h3>
  <p className="text-sm sm:text-base text-gray">People Served Since 1987</p>
</div>

    </GlassmorphismCard>
  </FadeInSection>

  <FadeInSection delay={0.2}>
    <GlassmorphismCard className="group relative overflow-hidden p-5 sm:p-6 md:p-8 text-center bg-white/90 dark:bg-dark-gray/90 border border-cyan-800/20 shadow-xl rounded-2xl">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
     <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
  <div className="flex items-center justify-center mb-4">
    <Animated3DIcon Icon={Users} color="text-lightblue" delay={0.2} />
  </div>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mt-2 mb-1">
    <AnimatedCounter end={2960} />
  </h3>
  <p className="text-sm sm:text-base text-gray">Innovation Projects Since 1987</p>
</div>

    </GlassmorphismCard>
  </FadeInSection>

  <FadeInSection delay={0.3}>
    <GlassmorphismCard className="group relative overflow-hidden p-5 sm:p-6 md:p-8 text-center bg-white/90 dark:bg-dark-gray/90 border border-cyan-800/20 shadow-xl rounded-2xl">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
  <div className="flex items-center justify-center mb-4">
    <Animated3DIcon Icon={Users} color="text-lightblue" delay={0.2} />
  </div>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mt-2 mb-1">
    <AnimatedCounter end={1506} />
  </h3>
  <p className="text-sm sm:text-base text-gray">Communities Served Since 1987</p>
</div>

    </GlassmorphismCard>
  </FadeInSection>

  <FadeInSection delay={0.4}>
    <GlassmorphismCard className="group relative overflow-hidden p-5 sm:p-6 md:p-8 text-center bg-white/90 dark:bg-dark-gray/90 border border-cyan-800/20 shadow-xl rounded-2xl">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-lightblue via-blue-400 to-lightblue opacity-20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
     <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
  <div className="flex items-center justify-center mb-4">
    <Animated3DIcon Icon={Users} color="text-lightblue" delay={0.2} />
  </div>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mt-2 mb-1">
    <AnimatedCounter end={50} />
  </h3>
  <p className="text-sm sm:text-base text-gray">Health Centers Served Since 1987</p>
</div>

    </GlassmorphismCard>
  </FadeInSection>
</div>

        </div>
      </section>
    </div>
  )
}
