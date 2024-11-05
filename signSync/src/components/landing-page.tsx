'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accessibility, ArrowRight, MessageSquare, Mic, Video } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="ml-2 text-2xl font-bold text-primary">SignSync</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/joinmeet">
            Join Meeting
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Breaking Barriers in Communication
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  SignSync uses AI to seamlessly translate between sign language and speech, making video calls accessible for everyone.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/joinmeet" >
                  <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary text-primary-foreground px-20 py-6 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Join Meet
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Video className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Real-time Sign Language Translation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  AI-powered translation of sign language to text and speech during video calls.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Mic className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Voice to Sign Language Conversion</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Instantly convert spoken words to sign language animations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MessageSquare className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Multi-language Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Support for multiple sign languages and spoken languages.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="p-2 bg-primary text-primary-foreground rounded-full">1</div>
                <h3 className="text-xl font-bold">Join a Video Call</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Start or join a video call using our intuitive platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="p-2 bg-primary text-primary-foreground rounded-full">2</div>
                <h3 className="text-xl font-bold">Enable AI Translation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Turn on the AI-powered translation feature with a single click.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="p-2 bg-primary text-primary-foreground rounded-full">3</div>
                <h3 className="text-xl font-bold">Communicate Freely</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Enjoy seamless communication between sign language and speech.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}