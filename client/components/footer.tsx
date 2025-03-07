import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} MeetingRewind. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/terms" className="text-sm text-gray-500 hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-gray-500 hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}

