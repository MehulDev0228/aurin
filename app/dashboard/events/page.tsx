import { AuthGuard } from "@/components/auth-guard"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  return (
    <AuthGuard>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Events</h1>
            <p className="text-muted-foreground">Discover and manage events</p>
          </div>
          <Button className="gradient-cyber text-background font-bold">Create Event</Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border/50">
          <Button variant="ghost" className="border-b-2 border-primary rounded-none">
            Upcoming
          </Button>
          <Button variant="ghost" className="rounded-none">
            Past
          </Button>
          <Button variant="ghost" className="rounded-none">
            My Events
          </Button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="p-6 border-gradient hover:glow-cyan transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">Upcoming</Badge>
                    <Badge variant="outline">Tech</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Web3 Developer Summit 2025</h3>
                  <p className="text-muted-foreground mb-4">
                    Join us for a day of learning about blockchain, smart contracts, and decentralized applications.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Jan 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>500 attendees</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AuthGuard>
  )
}
