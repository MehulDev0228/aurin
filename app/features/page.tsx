import { Footer } from "@/components/footer"
import {
  Shield,
  Share2,
  QrCode,
  TrendingUp,
  Zap,
  Lock,
  Globe,
  Award,
  Users,
  FileCheck,
  Download,
  Link2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Verification",
      description: "Every badge is secured on the blockchain with an immutable record that can't be faked or forged.",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Share2,
      title: "One-Click Sharing",
      description:
        "Share your achievements instantly with a single link. Perfect for LinkedIn, resumes, and portfolios.",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: QrCode,
      title: "QR Code Generation",
      description: "Print QR codes on resumes and business cards. Employers can scan and verify instantly.",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: TrendingUp,
      title: "Profile Analytics",
      description: "Track who views your profile, verifies your badges, and engages with your achievements.",
      color: "from-green-500/20 to-green-500/5",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data stays yours. We don't track, sell, or share your personal information.",
      color: "from-red-500/20 to-red-500/5",
    },
    {
      icon: Globe,
      title: "Public Profiles",
      description: "Beautiful, shareable profiles that showcase your verified achievements to the world.",
      color: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      icon: Award,
      title: "Badge Templates",
      description: "Organizers can create custom badge templates for events, courses, and certifications.",
      color: "from-yellow-500/20 to-yellow-500/5",
    },
    {
      icon: Users,
      title: "Bulk Issuance",
      description: "Issue badges to hundreds of recipients at once with CSV upload. Perfect for large events.",
      color: "from-pink-500/20 to-pink-500/5",
    },
    {
      icon: FileCheck,
      title: "Instant Verification",
      description: "Anyone can verify a badge in seconds without creating an account. Just scan or click.",
      color: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      icon: Download,
      title: "Export & Download",
      description: "Download badges as images, PDFs, or certificates. Export to LinkedIn with one click.",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: Link2,
      title: "Embeddable Widgets",
      description: "Embed your badges on personal websites, portfolios, and blogs with simple code snippets.",
      color: "from-teal-500/20 to-teal-500/5",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed. Verify badges, load profiles, and share achievements in milliseconds.",
      color: "from-primary/20 to-primary/5",
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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Powerful Features</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="font-[family-name:var(--font-playfair)] font-normal">Everything You Need</span>
            <br />
            <span className="text-foreground">To Own Your Achievements</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            From blockchain verification to instant sharing, Aurin gives you all the tools to showcase your skills and
            stand out.
          </p>

          <Link href="/auth">
            <Button
              size="lg"
              className="text-lg px-10 h-14 rounded-2xl bg-primary text-background hover:bg-primary/90 font-bold glow-neon transition-all duration-300"
            >
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-clean rounded-2xl p-8 hover-lift hover:border-primary/50 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
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
            Join thousands of students and professionals showcasing their verified achievements.
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
