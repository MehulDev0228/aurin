import { AuthGuard } from "@/components/auth-guard"
import { Card } from "@/components/ui/card"
import { TrendingUp, Eye, Award, Users } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <AuthGuard>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground">Track your achievements and engagement</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border-gradient">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-primary" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1">2,456</div>
            <div className="text-sm text-muted-foreground">Profile Views</div>
            <div className="text-xs text-green-500 mt-2">+12% from last month</div>
          </Card>

          <Card className="p-6 border-gradient">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-primary" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1">342</div>
            <div className="text-sm text-muted-foreground">Badge Verifications</div>
            <div className="text-xs text-green-500 mt-2">+8% from last month</div>
          </Card>

          <Card className="p-6 border-gradient">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-primary" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1">89</div>
            <div className="text-sm text-muted-foreground">Profile Shares</div>
            <div className="text-xs text-green-500 mt-2">+15% from last month</div>
          </Card>

          <Card className="p-6 border-gradient">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-primary" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold mb-1">12</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
            <div className="text-xs text-green-500 mt-2">+2 this month</div>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 border-gradient">
            <h3 className="text-xl font-bold mb-4">Profile Views Over Time</h3>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Chart visualization coming soon</p>
            </div>
          </Card>

          <Card className="p-6 border-gradient">
            <h3 className="text-xl font-bold mb-4">Badge Verifications</h3>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Chart visualization coming soon</p>
            </div>
          </Card>
        </div>
      </div>
    </AuthGuard>
  )
}
