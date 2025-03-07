import Link from "next/link"
import { Headphones } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-semibold">
          <Headphones className="h-6 w-6" />
          <span>MeetingRewind</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/signin" className="text-sm font-medium hover:underline">
            Sign In
          </Link>
          <Link href="/signup" className="text-sm font-medium hover:underline">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  )
}

