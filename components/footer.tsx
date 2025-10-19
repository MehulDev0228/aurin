import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/20 backdrop-blur-2xl mt-32">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Tagline */}
          <Link href="/" className="flex items-center">
            <Image src="/aurin-logo.png" alt="Aurin by Elyvra" width={160} height={50} className="h-9 w-auto" />
          </Link>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <p className="text-sm text-muted-foreground">© 2025 Aurin</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
