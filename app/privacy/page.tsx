import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <Card className="p-8 border-gradient backdrop-blur-xl prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, including your name, email address, username, and
                profile information. We also collect information about the badges you earn and your activity on the
                platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your information to provide, maintain, and improve our services, to communicate with you, to
                verify your identity, and to ensure the security and integrity of our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Blockchain Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Badge verification data is stored on the blockchain and is publicly accessible. This ensures
                transparency and immutability but means that badge records cannot be deleted once created.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information. You can manage your privacy
                settings in your account dashboard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@aurin.elyvra.com
              </p>
            </section>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
