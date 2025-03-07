"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { MeetingCard } from "@/components/meeting-card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AddMeetingDialog } from "@/components/add-meeting-dialog"

export default function DashboardPage() {
  const [showAddMeeting, setShowAddMeeting] = useState(false)

  // Mock data for meetings
  const upcomingMeetings = [
    {
      id: "1",
      title: "Weekly Team Sync",
      date: "2025-03-02T10:00:00",
      platform: "Zoom",
      status: "scheduled",
    },
    {
      id: "2",
      title: "Product Planning",
      date: "2025-03-03T14:30:00",
      platform: "Google Meet",
      status: "scheduled",
    },
  ]

  const pastMeetings = [
    {
      id: "3",
      title: "Client Presentation",
      date: "2025-02-28T11:00:00",
      platform: "Microsoft Teams",
      status: "completed",
      hasTranscript: true,
      hasNotes: true,
    },
    {
      id: "4",
      title: "Engineering Standup",
      date: "2025-02-27T09:30:00",
      platform: "Zoom",
      status: "completed",
      hasTranscript: true,
      hasNotes: true,
    },
    {
      id: "5",
      title: "Quarterly Review",
      date: "2025-02-25T15:00:00",
      platform: "Google Meet",
      status: "completed",
      hasTranscript: true,
      hasNotes: true,
    },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Manage your meetings and view transcripts">
        <Button onClick={() => setShowAddMeeting(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Meeting
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 md:gap-8">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-auto">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Meetings</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingMeetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} />
              ))}
              <Card className="flex h-[180px] flex-col items-center justify-center border-dashed">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Plus className="h-5 w-5 text-primary" />
                  </div>
                  <Button variant="outline" onClick={() => setShowAddMeeting(true)}>
                    Add Meeting
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pastMeetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <AddMeetingDialog open={showAddMeeting} onOpenChange={setShowAddMeeting} />
    </DashboardShell>
  )
}

