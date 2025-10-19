import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge as BadgeUI } from "@/components/ui/badge"
import {
  Award,
  ExternalLink,
  MapPin,
  Calendar,
  Share2,
  QrCode,
  Download,
  Linkedin,
  Twitter,
  Copy,
  TrendingUp,
  Eye,
} from "lucide-react"
import Link from "next/link"

// Mock data - in real app, fetch based on username
const mockProfile = {
  name: "John Doe",
  username: "johndoe",
  email: "john@example.com",
  location: "San Francisco, CA",
  joinedDate: "2024-01-15",
  bio: "Full-stack developer passionate about web3 and blockchain technology. Building the future of verified credentials.",
  badges: [
    {
      id: 1,
      title: "Web Development Bootcamp",
      issuer: "Tech University",
      date: "2024-12-15",
      verified: true,
    },
    {
      id: 2,
      title: "AI Conference Speaker",
      issuer: "Global AI Summit",
      date: "2024-11-20",
      verified: true,
    },
    {
      id: 3,
      title: "Blockchain Certification",
      issuer: "Crypto Academy",
      date: "2024-10-05",
      verified: true,
    },
    {
      id: 4,
      title: "Hackathon Winner",
      issuer: "DevFest 2024",
      date: "2024-09-12",
      verified: true,
    },
  ],
}

export default async function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params

  return (
    <div className="relative min-h-screen">
      <Navigation />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Profile Header */}
          <Card className="p-8 lg:p-12 border-gradient backdrop-blur-xl mb-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-50" />
                <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-6xl font-bold text-background">{mockProfile.name.charAt(0)}</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-2">{mockProfile.name}</h1>
                    <p className="text-lg text-muted-foreground">@{mockProfile.username}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" className="border-primary/30 bg-transparent">
                      <QrCode className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-6">{mockProfile.bio}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {mockProfile.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Joined{" "}
                    {new Date(mockProfile.joinedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {mockProfile.badges.length} Verified Badges
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="border-primary/30 bg-transparent">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Add to LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 bg-transparent">
                    <Twitter className="w-4 h-4 mr-2" />
                    Share on X
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 bg-transparent">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Link
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border-gradient backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Profile Views</span>
                <Eye className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">1,247</p>
              <p className="text-xs text-muted-foreground mt-1">+23% this month</p>
            </Card>

            <Card className="p-6 border-gradient backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Verifications</span>
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
              <p className="text-3xl font-bold text-accent">342</p>
              <p className="text-xs text-muted-foreground mt-1">+15% this month</p>
            </Card>

            <Card className="p-6 border-gradient backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Credibility Score</span>
                <Award className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">98/100</p>
              <p className="text-xs text-muted-foreground mt-1">Top 5% globally</p>
            </Card>
          </div>

          {/* Badges Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Verified Achievements</h2>
            <p className="text-lg text-muted-foreground mb-8">
              All badges are cryptographically verified and permanently recorded on the blockchain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProfile.badges.map((badge) => (
              <Card
                key={badge.id}
                className="p-6 border-gradient backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 flex items-center justify-center mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Award className="relative w-20 h-20 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{badge.issuer}</p>
                <p className="text-xs text-muted-foreground mb-5">
                  {new Date(badge.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <Link href={`/verify/${badge.id}`} className="block mb-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/10 hover:bg-white/5 bg-transparent"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Verify Badge
                  </Button>
                </Link>
                {badge.verified && (
                  <BadgeUI variant="secondary" className="w-full justify-center text-xs">
                    ✓ Blockchain Verified
                  </BadgeUI>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
