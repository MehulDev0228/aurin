import { Footer } from "@/components/footer"
import { Calendar, MapPin, Users, Award, ArrowRight, Clock, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "evt_001",
      name: "Web3 Developer Summit 2025",
      organizer: "MIT Blockchain Club",
      date: "March 15, 2025",
      location: "Boston, MA",
      attendees: 500,
      badges: 3,
      image: "/3d-digital-badge-certificate-with-neon-green-glow-.jpg",
    },
    {
      id: "evt_002",
      name: "AI & Machine Learning Workshop",
      organizer: "Stanford AI Lab",
      date: "March 22, 2025",
      location: "Palo Alto, CA",
      attendees: 300,
      badges: 2,
      image: "/3d-shield-icon-with-lock-privacy-protection-minima.jpg",
    },
    {
      id: "evt_003",
      name: "Cybersecurity Bootcamp",
      organizer: "Harvard Tech Society",
      date: "April 5, 2025",
      location: "Cambridge, MA",
      attendees: 200,
      badges: 4,
      image: "/3d-blockchain-network-nodes-connections-transparen.jpg",
    },
  ]

  const pastEvents = [
    {
      id: "evt_004",
      name: "Blockchain Fundamentals Course",
      organizer: "Berkeley Blockchain",
      date: "February 10, 2025",
      location: "Berkeley, CA",
      attendees: 450,
      badges: 5,
    },
    {
      id: "evt_005",
      name: "Full Stack Development Bootcamp",
      organizer: "Yale Computer Science",
      date: "January 20, 2025",
      location: "New Haven, CT",
      attendees: 350,
      badges: 6,
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
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Live Events</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="font-[family-name:var(--font-playfair)] font-normal">Discover</span>
            <br />
            <span className="text-foreground">Events & Workshops</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Join verified events from top universities and organizations. Earn blockchain-verified badges for your
            participation.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Register now and earn verified badges</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <div className="card-clean rounded-2xl overflow-hidden hover-lift hover:border-primary/50 transition-all group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-background text-xs font-bold">
                      Upcoming
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {event.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        <span>{event.organizer}</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="font-semibold">{event.attendees}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="font-semibold">{event.badges} badges</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="relative py-20 px-6 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-2">Past Events</h2>
            <p className="text-muted-foreground">View badges from completed events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <div className="card-clean rounded-2xl p-6 hover-lift hover:border-primary/50 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {event.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Building2 className="w-4 h-4" />
                        <span>{event.organizer}</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold">
                      Completed
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="font-semibold">{event.attendees}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{event.badges} badges</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
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
            <span className="font-[family-name:var(--font-playfair)] font-normal">Hosting</span> an Event?
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Issue verified badges to your attendees and give them achievements they can showcase forever.
          </p>

          <Link href="/auth">
            <Button
              size="lg"
              className="text-xl px-14 h-16 rounded-2xl bg-primary text-background hover:bg-primary/90 font-bold glow-neon-strong transition-all duration-300"
            >
              Become an Organizer
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
