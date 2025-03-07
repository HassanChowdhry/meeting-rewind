import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left lg:w-1/2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Never Miss a Meeting Detail Again
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our AI assistant joins your meetings, records, transcribes, and creates detailed notes so you can focus
                on the conversation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
              {/* <Link href="/about"> */}
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end invisible lg:visible">
            <div className="relative w-full max-w-[500px] aspect-video rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 p-1">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <FileText className="h-16 w-16 mb-4 opacity-90" />
                <h3 className="text-xl font-bold">Automated Meeting Notes</h3>
                <p className="mt-2 text-sm opacity-90">
                  AI-generated summaries, action items, and key points from your meetings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}