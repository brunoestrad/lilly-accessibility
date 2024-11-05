'use client'

import { Button } from "@/components/ui/button"
import { PhoneOff, Mic, Video, Settings } from 'lucide-react'

export function BasicOnlineMeetingComponent() {
  return (
    <div className="relative h-screen bg-gray-900 text-white overflow-hidden">
      {/* Main video area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <span className="text-4xl">Main Video Feed</span>
        </div>
      </div>

      {/* User preview */}
      <div className="absolute top-4 left-4 w-48 h-36 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
        <div className="w-full h-full flex items-center justify-center">
          <span>User Preview</span>
        </div>
      </div>

      {/* Sign language avatar preview */}
      <div className="absolute bottom-24 right-4 w-64 h-48 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
        <div className="w-full h-full flex items-center justify-center">
          <span>Sign Language Avatar</span>
        </div>
      </div>

      {/* Control menu */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full px-4 py-2 shadow-lg">
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Mic className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Video className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-red-600 hover:bg-red-700"
          >
            <PhoneOff className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}