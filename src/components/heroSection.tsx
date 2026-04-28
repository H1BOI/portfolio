import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-32 px-6"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-purple-400 text-xs font-medium tracking-[0.2em] uppercase mb-8">
          Computer Science @ Georgia Tech · Graduating May 2028
        </p>

        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
          <AnimatedGradientText
            colorFrom="#a855f7"
            colorTo="#e879f9"
            speed={0.7}
          >
            Chun Lin
          </AnimatedGradientText>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          ML enthusiast &amp; full-stack developer building intelligent,
          scalable systems from end to end.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium transition-colors"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-purple-500/30 hover:border-purple-400 text-muted-foreground hover:text-foreground rounded-lg text-sm font-medium transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
