import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-light mb-6">Contact</h1>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Thank you for your interest. Feel free to reach out to us at:
              </p>
              <p className="text-xl">contact@portada.com</p>
              <div className="h-px bg-border my-6" />
              <p className="text-sm text-muted-foreground">We typically respond within 24-48 hours.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

