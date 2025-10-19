import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <Card className="p-8 border-gradient backdrop-blur-xl prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using Aurin, you accept and agree to be bound by these Terms of Service. If you do not
                agree, please do not use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You must provide accurate and complete information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Badge Authenticity</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Organizations issuing badges are responsible for verifying the authenticity of achievements. Aurin
                provides the platform but does not verify the accuracy of badge claims.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may not use Aurin to issue fraudulent badges, impersonate others, or engage in any illegal
                activities. We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain ownership of your content. By using Aurin, you grant us a license to display and distribute
                your badges and profile information as necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, contact us at legal@aurin.elyvra.com
              </p>
            </section>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
