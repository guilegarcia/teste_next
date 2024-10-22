import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageCircle, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to TherapyChat
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your digital wellness companion powered by advanced AI technology.
            Experience supportive conversations in a safe, confidential environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <Brain className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>AI-Powered Therapy</CardTitle>
              <CardDescription>
                Advanced cognitive behavioral therapy techniques delivered through AI
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <MessageCircle className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>24/7 Availability</CardTitle>
              <CardDescription>
                Access therapeutic support whenever you need it, day or night
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <ShieldCheck className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Complete Privacy</CardTitle>
              <CardDescription>
                Your conversations are private and secure, always
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}