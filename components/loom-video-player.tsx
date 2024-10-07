"use client"

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, ChevronsRight } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LoomVideoPlayerProps {
  src?: string;
  poster?: string;
}

export function LoomVideoPlayer({ 
  src = "/placeholder.mp4", 
  poster = "/placeholder.svg?height=720&width=1280" 
}: LoomVideoPlayerProps) {
  // State declarations
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)

  // Function to toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (!hasStarted) {
        setHasStarted(true)
        videoRef.current.currentTime = 0
        setIsMuted(false)
      }
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Function to handle video progress
  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
      setCurrentTime(videoRef.current.currentTime)
      if (videoRef.current.currentTime >= 5 && !hasStarted) {
        videoRef.current.currentTime = 0
      }
    }
  }

  // Function to handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    setIsMuted(newVolume === 0)
  }

  // Function to toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Function to change playback speed
  const handlePlaybackSpeedChange = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed
      setPlaybackSpeed(speed)
    }
  }

  // Function to toggle fullscreen
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  // Function to format time display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Mouse event handlers
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleVolumeMouseEnter = () => {
    setShowVolumeSlider(true)
  }

  const handleVolumeMouseLeave = () => {
    setShowVolumeSlider(false)
  }

  // Functions to skip forward and backward
  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5
    }
  }

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5
    }
  }

  // Effect for setting up event listeners
  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleProgress)
      videoElement.addEventListener('loadedmetadata', () => {
        setDuration(videoElement.duration)
      })
      videoElement.addEventListener('ended', () => {
        if (!hasStarted) {
          videoElement.currentTime = 0
          videoElement.play()
        }
      })
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', handleProgress)
        videoElement.removeEventListener('loadedmetadata', () => {})
        videoElement.removeEventListener('ended', () => {})
      }
    }
  }, [hasStarted])

  // Effect to start video muted on initial load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play()
    }
  }, [])

  // JSX for the video player component
  return (
    <div 
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full cursor-pointer"
        src={src}
        poster={poster}
        playsInline
        autoPlay={!hasStarted}
        muted={!hasStarted}
        onClick={togglePlay}
        loop={!hasStarted}
      />

      {/* Progress bar */}
      {(isHovered || !isPlaying) && (
        <div className="absolute top-0 left-0 right-0 p-4">
          <Slider
            className="w-full"
            value={[progress]}
            max={100}
            step={0.1}
            onValueChange={(value) => {
              if (videoRef.current) {
                videoRef.current.currentTime = (value[0] / 100) * videoRef.current.duration
              }
            }}
          />
        </div>
      )}

      {/* Gradient overlay */}
      <div 
        className={`absolute inset-0 bg-black/10 to-transparent transition-opacity duration-300 ${
          isHovered && !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Play/Pause button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          variant="outline"
          size="icon"
          className={`w-16 h-16 text-white bg-[#da56dd] rounded-full transition-all duration-300 ${
            isHovered ? 'scale-110 opacity-100' : 'opacity-80'
          }`}
          onClick={togglePlay}
        >
          {isPlaying && hasStarted ? (
            <Pause className="h-8 w-8" />
          ) : (
            <Play className="h-8 w-8" />
          )}
        </Button>
      </div>

      {/* Control bar */}
      <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
        (isHovered || !isPlaying) && hasStarted ? 'translate-y-0' : 'translate-y-[calc(100%-2rem)]'
      }`}>
        {/* Progress bar in control area */}
        <div className="px-4 pt-2 bg-black/50">
          <Slider
            className="w-full"
            value={[progress]}
            max={100}
            step={0.1}
            onValueChange={(value) => {
              if (videoRef.current) {
                videoRef.current.currentTime = (value[0] / 100) * videoRef.current.duration
              }
            }}
          />
        </div>

        {/* Control buttons */}
        <div className={`flex items-center justify-between space-x-2 bg-black/50 p-2 rounded-b-md text-white transition-all duration-300 ${
          (isHovered || !isPlaying) && hasStarted ? 'translate-y-0' : 'translate-y-full'
        }`}>
          {/* Left side controls */}
          <div className="flex items-center space-x-2">
            {/* Skip backward button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={skipBackward}
            >
              <div className="relative">
                <RotateCcw className="h-5 w-5" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">5</span>
              </div>
            </Button>

            {/* Play/Pause button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>

            {/* Skip forward button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={skipForward}
            >
              <div className="relative">
                <ChevronsRight className="h-5 w-5" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">5</span>
              </div>
            </Button>

            {/* Volume control */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={toggleMute}
                onMouseEnter={handleVolumeMouseEnter}
                onMouseLeave={handleVolumeMouseLeave}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
              {showVolumeSlider && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                  <Slider
                    className="w-24"
                    value={[isMuted ? 0 : videoRef.current?.volume || 0]}
                    max={1}
                    step={0.01}
                    onValueChange={handleVolumeChange}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Time display */}
          <div className="text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            {/* Playback speed control */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  {playbackSpeed}x
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {[0.5, 1, 1.5, 2].map((speed) => (
                  <DropdownMenuItem key={speed} onSelect={() => handlePlaybackSpeedChange(speed)}>
                    {speed}x
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Fullscreen button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handleFullscreen}
            >
              <Maximize className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}