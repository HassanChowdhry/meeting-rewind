import { FileText, Headphones, MessageSquare } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Provide Meeting Link",
    description: "Simply paste your meeting URL into our dashboard",
  },
  {
    icon: Headphones,
    title: "Bot Joins Meeting",
    description: "Our AI assistant joins and records the meeting audio",
  },
  {
    icon: FileText,
    title: "Get Transcripts & Notes",
    description: "Access detailed transcripts and AI-generated meeting notes",
  },
]

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform makes it easy to get comprehensive meeting documentation with minimal effort.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  )
}

