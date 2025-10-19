import { AuthGuard } from "@/components/auth-guard"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function DiscoverPage() {
  return (
    <AuthGuard>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Discover</h1>
          <p className="text-muted-foreground">Explore badges, events, and top achievers</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search badges, events, or people..."
            className="pl-12 h-14 text-lg bg-card/50 border-border/50"
          />
        </div>

        {/* Trending Badges */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Trending Badges</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 border-gradient hover:glow-cyan transition-all">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/3d-digital-badge-certificate-with-neon-green-glow-.jpg"
                    alt="Badge"
                    width={200}
                    height={200}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="font-bold mb-1">AI Conference 2024</h3>
                <p className="text-sm text-muted-foreground mb-3">Tech University</p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/20 text-primary border-primary/30">1.2K earned</Badge>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Achievers */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Top Achievers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-4 border-gradient hover:glow-cyan transition-all flex items-center gap-4">
                <div className="w-16 h-16 rounded-full gradient-cyber flex items-center justify-center glow-cyan">
                  <span className="text-2xl font-bold text-background">J</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">24 badges • 1.2K verifications</p>
                </div>
                <Button size="sm" variant="outline">
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
