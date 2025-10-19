"use client"

import { useState, useEffect } from "react"
import { IntroTrailer } from "@/components/intro-trailer"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Share2 } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { Particles } from "@/components/ui/particles"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { NoiseTexture } from "@/components/ui/noise-texture"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { ParallaxSection } from "@/components/ui/parallax-section"

export default function HomePage() {
  const [showTrailer, setShowTrailer] = useState(false)
  const [trailerComplete, setTrailerComplete] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const hasSeenTrailer = localStorage.getItem("aurin_trailer_seen")
    if (!hasSeenTrailer) {
      setShowTrailer(true)
    } else {
      setTrailerComplete(true)
    }

    // Hide default cursor
    document.body.style.cursor = "none"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [])

  const handleTrailerComplete = () => {
    localStorage.setItem("aurin_trailer_seen", "true")
    setShowTrailer(false)
    setTrailerComplete(true)
  }

  if (showTrailer) {
    return <IntroTrailer onComplete={handleTrailerComplete} />
  }

  if (!trailerComplete) {
    return null
  }

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <CustomCursor />
      <Particles />
      <NoiseTexture />
      <ScrollProgress />

      {/* Hero Section with Parallax */}
      <motion.section style={{ opacity, scale }} className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="absolute inset-0 grid-overlay opacity-10 will-change-transform" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[180px]"
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] mb-12"
            >
              <span className="inline-block">Your achievements</span>
              <br />
              <span className="inline-block font-[family-name:var(--font-playfair)] italic font-normal text-primary">
                deserve better
              </span>
              <br />
              <span className="inline-block">than a PDF.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl mb-16"
            >
              Permanent. Verifiable. Shareable.
              <br />
              Your brilliance, on the blockchain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton>
                <Link href="/auth">
                  <Button
                    size="lg"
                    className="text-lg px-12 h-16 rounded-full bg-primary text-background hover:bg-primary/90 font-bold glow-neon-strong transition-all duration-500 hover:scale-105 group"
                  >
                    Start your legacy
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Problem Section - White with Parallax */}
      <ParallaxSection speed={-0.2}>
        <section className="relative py-40 px-6 bg-white transition-colors duration-700">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-3 space-y-8 text-black"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                  Certificates fade.
                  <br />
                  PDFs get lost.
                  <br />
                  <span className="font-[family-name:var(--font-playfair)] italic font-normal text-gray-400">
                    LinkedIn is just another profile.
                  </span>
                </h2>

                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-xl">
                  You worked hard for that hackathon win. That conference talk. That course completion. But where is it
                  now?
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-2"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="aspect-square rounded-[3rem] bg-gradient-to-br from-gray-100 to-gray-50 shadow-2xl overflow-hidden"
                >
                  <img
                    src="/3d-shield-icon-with-lock-privacy-protection-minima.jpg"
                    alt="Lost achievements"
                    className="w-full h-full object-cover opacity-40"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Solution Section - Black with Parallax */}
      <ParallaxSection speed={0.2}>
        <section className="relative py-40 px-6 transition-colors duration-700">
          <div className="absolute inset-0 grid-overlay opacity-10 will-change-transform" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-2 order-2 lg:order-1"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-primary/10 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                  <img
                    src="/3d-digital-badge-certificate-with-neon-green-glow-.jpg"
                    alt="Aurin Badge"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-3 space-y-8 order-1 lg:order-2"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                  What if your achievements
                  <br />
                  <span className="font-[family-name:var(--font-playfair)] italic font-normal text-primary">
                    lived forever?
                  </span>
                </h2>

                <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                  Aurin turns your achievements into permanent, blockchain-verified badges. Impossible to fake. Always
                  yours. Ready to share.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { icon: Shield, text: "Verified on blockchain" },
                    { icon: Share2, text: "Share with one link" },
                    { icon: Sparkles, text: "Prove your skills instantly" },
                  ].map((feature, i) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-lg font-semibold">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Use Case Section - White */}
      <section className="relative py-40 px-6 bg-white">
        <div className="container mx-auto max-w-5xl text-black">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12 mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
              Show the world
              <br />
              <span className="font-[family-name:var(--font-playfair)] italic font-normal text-gray-400">
                what you've built.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "In interviews",
                desc: "Pull up your profile. Instant proof of every skill, project, and achievement.",
              },
              {
                title: "On your resume",
                desc: "One QR code. Employers scan and see your verified credentials in seconds.",
              },
              {
                title: "On social media",
                desc: "Share your wins. Let your network see what you're capable of.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-8 rounded-3xl bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-black text-black">{item.title}</h3>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Black */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-12"
          >
            Students from these universities are already on Aurin
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-30">
            {["MIT", "Stanford", "Harvard", "Berkeley"].map((uni, i) => (
              <motion.div
                key={uni}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.3, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-3xl font-black tracking-tight"
              >
                {uni}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Black */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 grid-overlay opacity-10 will-change-transform" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[250px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto max-w-4xl text-center relative z-10 space-y-12"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            This is where
            <br />
            <span className="font-[family-name:var(--font-playfair)] italic font-normal text-primary">your story</span>
            <br />
            lives.
          </h2>

          <p className="text-2xl sm:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Join the students who are building their legacy on Aurin.
          </p>

          <div className="pt-8">
            <MagneticButton>
              <Link href="/auth">
                <Button
                  size="lg"
                  className="text-xl px-16 h-20 rounded-full bg-primary text-background hover:bg-primary/90 font-bold glow-neon-strong transition-all duration-500 hover:scale-105 group"
                >
                  Get started free
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </MagneticButton>
            <p className="text-sm text-muted-foreground mt-6 font-mono">Takes 60 seconds • No credit card required</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
