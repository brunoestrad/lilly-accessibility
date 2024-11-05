'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Mic, MicOff, Video, VideoOff, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from 'react'

export function JoinMeetingComponent() {
  const [name, setName] = useState('')
  const [meetingCode, setMeetingCode] = useState('')
  const [hearingAidMode, setHearingAidMode] = useState(false)
  const [cameraOn, setCameraOn] = useState(true)
  const [micOn, setMicOn] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    startCamera()
    return () => {
      stopCamera()
    }
  }, [])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      streamRef.current = stream
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
    }
  }

  const toggleCamera = () => {
    if (streamRef.current) {
      const videoTrack = streamRef.current.getVideoTracks()[0]
      videoTrack.enabled = !videoTrack.enabled
      setCameraOn(videoTrack.enabled)
    }
  }

  const toggleMic = () => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0]
      audioTrack.enabled = !audioTrack.enabled
      setMicOn(audioTrack.enabled)
    }
  }

  const handleJoinMeeting = () => {
    // Implement join meeting logic here
    console.log("Joining meeting with:", { name, meetingCode, hearingAidMode })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Join Meeting</h1>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="meetingCode">Meeting Code</Label>
            <Input
              id="meetingCode"
              placeholder="Enter meeting code"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="hearingAidMode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Hearing Aid Mode
            </Label>
            <Switch
              id="hearingAidMode"
              checked={hearingAidMode}
              onCheckedChange={setHearingAidMode}
            />
          </div>
        </div>

        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Button
              size="icon"
              variant={micOn ? "default" : "destructive"}
              onClick={toggleMic}
            >
              {micOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
            </Button>
            <Button
              size="icon"
              variant={cameraOn ? "default" : "destructive"}
              onClick={toggleCamera}
            >
              {cameraOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
            </Button>
          </div>

        </div>

        <Link href={hearingAidMode ? "/meet" : "/meet?hearingaid=0"}>
          <Button className="w-full" onClick={handleJoinMeeting}>
            Join Meeting
          </Button>
        </Link>
      </div>
    </div>
  )
}