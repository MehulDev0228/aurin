import { Footer } from "@/components/footer"
import { UserPlus, Award, Share2, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create Your Profile",
      description:
        "Sign up in 60 seconds with just your email. Choose whether you're an attendee or organizer. Complete your profile with your name, institution, and photo.",
      color: "from-primary/20 to-primary/5",
    },
    {
      number: "02",
      icon: Award,
      title: "Earn Verified Badges",
      description:
        "Attend events, complete courses, or receive recognition from organizers. Each badge is verified on the blockchain and permanently linked to your profile.",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      number: "03",
      icon: Share2,
      title: "Share Your Achievements",
      description:
        "Get a beautiful public profile with all your verified badges. Share it on LinkedIn, add it to your resume, or embed badges on your personal website.",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Stand Out",
      description:
        "Employers and peers can instantly verify your achievements. No more fake certificates or unverifiable claims. Your skills are proven, not just stated.",
      color: "from-green-500/20 to-green-500/5",
    },
  ]

  const organizerSteps = [
    {
      title: "Create an Event",
      description: "Set up your event with details, dates, and badge templates.",
    },
    {
      title: "Collect Attendees",
      description: "Gather email addresses or wallet addresses from participants.",
    },
    {
      title: "Issue Badges",
      description: "Upload a CSV file or manually issue badges to attendees.",
    },
    {
      title: "Track Engagement",
      description: "See who claimed their badges and monitor verification activity.",
    },
  ]

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Simple Process</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="font-[family-name:var(--font-playfair)] font-normal">How</span>
            <br />
            <span className="text-foreground">Aurin Works</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From signup to showcase, here's how Aurin helps you own your achievements in four simple steps.
          </p>
        </div>
      </section>

      {/* Steps for Attendees */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">For Attendees & Students</h2>
            <p className="text-muted-foreground">Build your verified achievement portfolio</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="card-clean rounded-2xl p-8 hover-lift hover:border-primary/50 transition-all">
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-mono text-primary mb-2">{step.number}</div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps for Organizers */}
      <section className="relative py-20 px-6 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">For Event Organizers</h2>
            <p className="text-muted-foreground">Issue verified badges to your attendees</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizerSteps.map((step, index) => (
                <div
                  key={index}
                  className="card-clean rounded-2xl p-6 hover-lift hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            <span className="font-[family-name:var(--font-playfair)] font-normal">Ready to</span> Get Started?
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands building their verified achievement portfolios on Aurin.
          </p>

          <Link href="/auth">
            <Button
              size="lg"
              className="text-xl px-14 h-16 rounded-2xl bg-primary text-background hover:bg-primary/90 font-bold glow-neon-strong transition-all duration-300"
            >
              Create Your Profile
            </Button>
          </Link>

          <p className="text-sm text-muted-foreground font-mono mt-6">
            No credit card • 60 second setup • First badge free
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
