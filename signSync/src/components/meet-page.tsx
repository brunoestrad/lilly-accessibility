'use client'

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { MessageSquare, Mic, MicOff, Phone, Video, VideoOff, Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from 'react'

export function MeetPageComponent({ hearingAid }: {
  hearingAid: string;
}) {
  const [cameraOn, setCameraOn] = useState(true)
  const [micOn, setMicOn] = useState(true)
  const [captionsOn, setCaptionsOn] = useState(false)
  const [aiSpeechOn, setAiSpeechOn] = useState(true)
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    startLocalCamera()
    // In a real application, you would set up WebRTC connection here
    simulateRemoteVideo()

    console.log(hearingAid);
    return () => {
      stopLocalCamera()
    }
  }, [])

  const startLocalCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const stopLocalCamera = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const tracks = (localVideoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
    }
  }

  const simulateRemoteVideo = () => {
    // This is a placeholder. In a real app, this would be the remote peer's video stream
    if (remoteVideoRef.current) {
      remoteVideoRef.current.src = "/placeholder.svg?height=720&width=1280"
      remoteVideoRef.current.loop = true
      remoteVideoRef.current.play()
    }
  }

  const toggleCamera = () => {
    setCameraOn(!cameraOn)
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const videoTrack = (localVideoRef.current.srcObject as MediaStream).getVideoTracks()[0]
      videoTrack.enabled = !videoTrack.enabled
    }
  }

  const toggleMic = () => {
    setMicOn(!micOn)
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const audioTrack = (localVideoRef.current.srcObject as MediaStream).getAudioTracks()[0]
      audioTrack.enabled = !audioTrack.enabled
    }
  }

  const endCall = () => {
    // Implement call end logic here
    console.log("Ending call")
  }

  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
      {/* Main remote video */}
      <video
        ref={remoteVideoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
      />

      {/* Local video preview */}
      <div className="absolute top-4 left-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <video
          ref={localVideoRef}
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 px-6 py-3 bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-full shadow-lg">
        <Button
          size="icon"
          variant={micOn ? "default" : "destructive"}
          onClick={toggleMic}
          className="rounded-full"
        >
          {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
        </Button>
        <Button
          size="icon"
          variant={cameraOn ? "default" : "destructive"}
          onClick={toggleCamera}
          className="rounded-full"
        >
          {cameraOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
        </Button>
        <Button
          size="icon"
          variant="destructive"
          onClick={endCall}
          className="rounded-full"
        >
          <Phone className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5 text-gray-300" />
          <Switch
            checked={captionsOn}
            onCheckedChange={setCaptionsOn}
            aria-label="Toggle captions"
          />
        </div>
        <div className="flex items-center space-x-2">
          {aiSpeechOn ? <Volume2 className="h-5 w-5 text-gray-300" /> : <VolumeX className="h-5 w-5 text-gray-300" />}
          <Switch
            checked={aiSpeechOn}
            onCheckedChange={setAiSpeechOn}
            aria-label="Toggle AI speech"
          />
        </div>
      </div>

      {/* Avatar for sign language */}
      <div className={`${hearingAid == "0" ? "hidden" : ""}`}>

        <div className="absolute bottom-4 right-4 w-64 h-48 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          <div className="text-white text-center">
            <p>Sign Language</p>
            <p>Avatar</p>
          </div>
        </div>
      </div>

      {/* Captions */}
      {captionsOn && (
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-3/4 bg-black bg-opacity-60 text-white p-2 rounded text-center">
          This is where real-time captions would appear during the call.
        </div>
      )}
    </div>
  )
}