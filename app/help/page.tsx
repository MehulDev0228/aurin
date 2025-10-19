import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is Aurin?",
    answer:
      "Aurin is a blockchain-verified digital badge platform that allows you to own, showcase, and verify your achievements forever. Unlike traditional certificates, Aurin badges are cryptographically secured and impossible to fake.",
  },
  {
    question: "How do I get a badge?",
    answer:
      "Badges are issued by verified organizations like universities, event organizers, and companies. When you complete a course, attend an event, or achieve something noteworthy, the organization can issue you a badge through Aurin.",
  },
  {
    question: "How does verification work?",
    answer:
      "Each badge is stored on the blockchain with a unique cryptographic hash. Anyone can verify a badge by scanning its QR code or entering the verification ID. The blockchain ensures the badge is authentic and hasn't been tampered with.",
  },
  {
    question: "Can I share my badges?",
    answer:
      "Yes! You can share your badges on LinkedIn, Twitter, Instagram, or any social platform. You can also embed badges on your personal website or include them in your resume. Each badge has a unique shareable link.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Your personal information is encrypted and stored securely. Badge data is stored on the blockchain, making it immutable and transparent. You control who can see your profile and badges through privacy settings.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Aurin is free for individuals to receive and showcase badges. Organizations pay a small fee to issue badges, which covers blockchain transaction costs and platform maintenance.",
  },
  {
    question: "Can badges expire?",
    answer:
      "Some badges may have expiration dates set by the issuing organization (like certifications that need renewal). However, the blockchain record of you earning the badge remains forever.",
  },
  {
    question: "How do I become an organizer?",
    answer:
      "Switch to 'Organizer' mode in your dashboard and complete the verification process. You'll need to provide organization details and go through our approval process to ensure badge quality and authenticity.",
  },
]

export default function HelpPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 flex items-center gap-4">
            <HelpCircle className="w-12 h-12 text-primary" />
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">Help Center</h1>
              <p className="text-lg text-muted-foreground">Find answers to common questions</p>
            </div>
          </div>

          <Card className="p-8 border-gradient backdrop-blur-xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="mt-8 p-8 border-gradient backdrop-blur-xl text-center">
            <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">Our support team is here to help</p>
            <a
              href="mailto:support@aurin.elyvra.com"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity font-medium"
            >
              Contact Support
            </a>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
