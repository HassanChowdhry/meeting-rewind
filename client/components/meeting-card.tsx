import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, MessageSquare } from "lucide-react"

interface Meeting {
  id: string
  title: string
  date: string
  platform: string
  status: string
  hasTranscript?: boolean
  hasNotes?: boolean
}

interface MeetingCardProps {
  meeting: Meeting
}

export function MeetingCard({ meeting }: MeetingCardProps) {
  const formattedDate = new Date(meeting.date).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{meeting.title}</CardTitle>
          <Badge variant={meeting.status === "completed" ? "secondary" : "default"}>{meeting.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Platform:</span>
            <span>{meeting.platform}</span>
          </div>
          {meeting.status === "completed" && (
            <div className="flex gap-2 mt-1">
              {meeting.hasTranscript && (
                <Badge variant="outline" className="flex gap-1 items-center">
                  <MessageSquare className="h-3 w-3" />
                  Transcript
                </Badge>
              )}
              {meeting.hasNotes && (
                <Badge variant="outline" className="flex gap-1 items-center">
                  <FileText className="h-3 w-3" />
                  Notes
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {meeting.status === "completed" ? (
          <Link href={`/meetings/${meeting.id}`} className="w-full">
            <Button variant="secondary" className="w-full">
              View Details
            </Button>
          </Link>
        ) : (
          <Button className="w-full">Join Meeting</Button>
        )}
      </CardFooter>
    </Card>
  )
}

