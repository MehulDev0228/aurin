import { AuthGuard } from "@/components/auth-guard"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Heart, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CommunityPage() {
  return (
    <AuthGuard>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Community</h1>
          <p className="text-muted-foreground">Connect with other achievers</p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-gradient">
            <Users className="w-8 h-8 text-primary mb-3" />
            <div className="text-3xl font-bold mb-1">12.5K</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </Card>
          <Card className="p-6 border-gradient">
            <MessageSquare className="w-8 h-8 text-primary mb-3" />
            <div className="text-3xl font-bold mb-1">3.2K</div>
            <div className="text-sm text-muted-foreground">Discussions</div>
          </Card>
          <Card className="p-6 border-gradient">
            <Heart className="w-8 h-8 text-primary mb-3" />
            <div className="text-3xl font-bold mb-1">45K</div>
            <div className="text-sm text-muted-foreground">Reactions</div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6 border-gradient hover:glow-cyan transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-cyber flex items-center justify-center glow-cyan">
                    <span className="text-lg font-bold text-background">J</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold">John Doe</span>
                      <span className="text-muted-foreground text-sm">earned a new badge</span>
                      <Badge className="bg-primary/20 text-primary border-primary/30">2h ago</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Just completed the Web Development Bootcamp! Excited to share my journey with the community.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="w-4 h-4" />
                        24
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageSquare className="w-4 h-4" />8
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
