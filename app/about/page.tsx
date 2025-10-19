"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Sparkles, Shield, Zap, Globe, Heart, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />

      <div className="pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-32 space-y-8"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-3xl opacity-60 animate-glow-pulse" />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-background" />
                </div>
              </div>
            </motion.div>

            <h1 className="text-6xl lg:text-8xl font-black text-balance leading-tight tracking-tight">
              The future of{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-glow">
                verified achievements
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty font-light">
              Building a world where credibility is owned, not given. Where your achievements are permanent, verifiable,
              and truly yours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <Card className="p-12 lg:p-16 glass-strong border-glow">
              <div className="flex items-center gap-4 mb-8">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-black">Why We Built This</h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In 2023, our founder lost a job opportunity because the hiring manager couldn't verify a critical
                  certification. The issuing institution had shut down, and there was no way to prove the credential was
                  real.
                </p>
                <p>
                  That moment sparked a question: Why should your achievements depend on someone else's database? Why
                  can't you truly own what you've earned?
                </p>
                <p className="text-foreground font-semibold">
                  Aurin was born from that frustration. We're building a world where your achievements are yours
                  forever—verifiable, portable, and impossible to lose.
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-12 lg:p-16 glass-strong border-glow group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col lg:flex-row items-start gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-destructive/10 border border-destructive/30 flex items-center justify-center">
                      <AlertCircle className="w-10 h-10 text-destructive" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-black">The Problem</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      In today's digital world, fake certificates and unverified credentials flood the market. Employers
                      can't trust what they see, and genuine achievers struggle to prove their worth.
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Traditional paper certificates are easily forged, lost, or damaged. There's no universal system to
                      verify authenticity, leaving both issuers and recipients vulnerable to fraud and doubt.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-12 lg:p-16 glass-strong border-glow group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col lg:flex-row items-start gap-10">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-60" />
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-background" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-black">The Solution</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Aurin leverages blockchain technology to create verifiable digital badges that can't be faked,
                      lost, or tampered with. Every badge is cryptographically signed and permanently recorded on an
                      immutable ledger.
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Universities, event organizers, and institutions can issue badges with confidence. Recipients can
                      showcase them anywhere with a simple verification link that proves authenticity instantly—no
                      emails, no waiting, no doubt.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-12 lg:p-16 glass-strong border-glow group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col lg:flex-row items-start gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <Rocket className="w-10 h-10 text-accent" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-black">The Vision</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      We envision a world where every achievement, big or small, can be verified and owned by the
                      individual who earned it. A world where credibility is transparent, portable, and permanent.
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Aurin is building the infrastructure for the future of credentials—where your achievements follow
                      you everywhere, from job applications to social profiles, backed by unbreakable proof of
                      authenticity. Your legacy, secured forever.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-32"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-center mb-16">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Blockchain Secured",
                  description:
                    "Every badge is cryptographically signed and stored on the blockchain, making it impossible to forge or tamper with.",
                },
                {
                  icon: Zap,
                  title: "Instant Verification",
                  description:
                    "Anyone can verify a badge in seconds with a simple link. No databases to check, no emails to send.",
                },
                {
                  icon: Globe,
                  title: "Globally Accessible",
                  description:
                    "Share your badges anywhere in the world. They work on LinkedIn, resumes, portfolios, and anywhere else you need proof.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="p-10 glass-strong border-glow h-full group hover:scale-[1.03] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative space-y-6">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <item.icon className="w-8 h-8 text-background" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32"
          >
            {[
              { value: "15K+", label: "Badges Issued" },
              { value: "500+", label: "Organizations" },
              { value: "99.9%", label: "Verification Rate" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-10 glass-strong border-glow text-center group hover:scale-[1.05] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </div>
                  <div className="text-lg text-muted-foreground font-semibold">{stat.label}</div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
