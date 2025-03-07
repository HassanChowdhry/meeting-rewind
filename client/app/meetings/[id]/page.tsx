"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, FileText, MessageSquare } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export default function MeetingDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch meeting details based on the ID
  const meeting = {
    id: params.id,
    title: "Weekly Team Sync",
    date: "March 1, 2025",
    duration: "45 minutes",
    participants: ["John Doe", "Jane Smith", "Alex Johnson", "Sarah Williams"],
    platform: "Zoom",
    status: "completed",
    hasTranscript: true,
    hasNotes: true,
  }

  // Mock transcript data
  const transcript = [
    {
      time: "00:00:15",
      speaker: "John",
      text: "Let's get started with our weekly sync. First, I'd like to go over the progress on the new feature.",
    },
    {
      time: "00:00:32",
      speaker: "Jane",
      text: "I've completed the design work and sent it to the development team yesterday.",
    },
    {
      time: "00:00:45",
      speaker: "Alex",
      text: "We've started implementing the UI components based on Jane's designs.",
    },
    {
      time: "00:01:10",
      speaker: "Sarah",
      text: "I have a question about the user flow. Can we discuss that in more detail?",
    },
    { time: "00:01:25", speaker: "John", text: "Sure, let's go through the user flow now." },
    // More transcript entries would go here
  ]

  // Mock meeting notes
  const notes = {
    summary:
      "The team discussed progress on the new feature, reviewed design work, and clarified the user flow. Development has started on UI components, and QA testing will begin next week.",
    actionItems: [
      "Jane to finalize the last design screen by Wednesday",
      "Alex to complete the first version of UI implementation by Friday",
      "Sarah to prepare test cases for QA by Monday",
      "John to update the project timeline and share with stakeholders",
    ],
    decisions: [
      "Approved the current design direction",
      "Decided to postpone the analytics integration to the next sprint",
      "Agreed to hold a separate session for user testing next week",
    ],
    keyPoints: [
      "Design work is 90% complete",
      "Development is on track to meet the sprint goal",
      "User testing will be critical for the next phase",
      "The feature is expected to launch in three weeks",
    ],
  }

  return (
    <DashboardShell>
      <DashboardHeader heading={meeting.title} text={`${meeting.date} · ${meeting.duration}`}>
        <div className="flex space-x-2">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Meeting Details</CardTitle>
            <CardDescription>Information about this meeting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-sm font-medium">Date & Time</div>
                <div className="text-sm text-gray-500">{meeting.date}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Duration</div>
                <div className="text-sm text-gray-500">{meeting.duration}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Platform</div>
                <div className="text-sm text-gray-500">{meeting.platform}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Status</div>
                <div className="text-sm text-gray-500 capitalize">{meeting.status}</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-sm font-medium">Participants</div>
                <div className="text-sm text-gray-500">{meeting.participants.join(", ")}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="notes">
              <FileText className="mr-2 h-4 w-4" />
              Meeting Notes
            </TabsTrigger>
            <TabsTrigger value="transcript">
              <MessageSquare className="mr-2 h-4 w-4" />
              Full Transcript
            </TabsTrigger>
          </TabsList>
          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{notes.summary}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Action Items</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {notes.actionItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {notes.decisions.map((decision, index) => (
                    <li key={index}>{decision}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Points</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {notes.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="transcript">
            <Card>
              <CardHeader>
                <CardTitle>Full Transcript</CardTitle>
                <CardDescription>Complete record of the meeting conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transcript.map((entry, index) => (
                    <div key={index} className="flex">
                      <div className="w-20 flex-shrink-0 text-sm text-gray-500">{entry.time}</div>
                      <div className="flex-1">
                        <div className="font-medium">{entry.speaker}</div>
                        <div className="text-sm">{entry.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}

