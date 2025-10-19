import { AuthGuard } from "@/components/auth-guard"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Download, Share2, ExternalLink, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function MyBadgesPage() {
  return (
    <AuthGuard>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Badges</h1>
            <p className="text-muted-foreground">Your collection of achievements and credentials</p>
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 border-gradient">
            <div className="text-3xl font-bold text-primary mb-1">12</div>
            <div className="text-sm text-muted-foreground">Total Badges</div>
          </Card>
          <Card className="p-6 border-gradient">
            <div className="text-3xl font-bold text-primary mb-1">8</div>
            <div className="text-sm text-muted-foreground">Verified</div>
          </Card>
          <Card className="p-6 border-gradient">
            <div className="text-3xl font-bold text-primary mb-1">245</div>
            <div className="text-sm text-muted-foreground">Profile Views</div>
          </Card>
          <Card className="p-6 border-gradient">
            <div className="text-3xl font-bold text-primary mb-1">89</div>
            <div className="text-sm text-muted-foreground">Verifications</div>
          </Card>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="p-6 border-gradient hover:glow-cyan transition-all group">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">Verified</Badge>
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                <Image
                  src="/3d-digital-badge-certificate-with-neon-green-glow-.jpg"
                  alt="Badge"
                  width={200}
                  height={200}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-bold mb-1">Web Development Bootcamp</h3>
              <p className="text-sm text-muted-foreground mb-4">Issued by Tech University • Dec 2024</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Share2 className="w-3 h-3" />
                  Share
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Download className="w-3 h-3" />
                  Download
                </Button>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AuthGuard>
  )
}
