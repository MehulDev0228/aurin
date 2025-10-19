import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle, Calendar, User, Building, Hash } from "lucide-react"
import Link from "next/link"

export default function VerifyPage({ params }: { params: { id: string } }) {
  // Mock badge data
  const badge = {
    id: params.id,
    title: "Web Development Bootcamp",
    issuer: "Tech University",
    recipient: "John Doe",
    date: "2024-12-15",
    hash: "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385",
    verified: true,
  }

  return (
    <div className="relative min-h-screen">
      <Navigation />

      <div className="pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="secondary" className="mb-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Verified Badge
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold">Badge Verification</h1>
            <p className="text-xl text-muted-foreground">
              This badge has been cryptographically verified on the blockchain
            </p>
          </div>

          <Card className="p-10 lg:p-12 border-gradient backdrop-blur-xl mb-8">
            <div className="flex flex-col items-center text-center mb-10">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="w-16 h-16 text-background" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-3">{badge.title}</h2>
              <p className="text-lg text-muted-foreground">Issued by {badge.issuer}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5">
                <User className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Recipient</p>
                  <p className="font-semibold">{badge.recipient}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5">
                <Building className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Issuing Organization</p>
                  <p className="font-semibold">{badge.issuer}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5">
                <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
                  <p className="font-semibold">
                    {new Date(badge.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5">
                <Hash className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Blockchain Hash</p>
                  <p className="font-mono text-xs break-all text-muted-foreground">{badge.hash}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Authenticity Verified</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This badge has been verified on the blockchain and is cryptographically authentic. The information
                displayed here matches the permanent record.
              </p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/10 hover:bg-white/5 bg-transparent"
              >
                View Dashboard
              </Button>
            </Link>
            <Link href="/auth">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Get Your Own Badge
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
