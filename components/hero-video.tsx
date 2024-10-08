"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  RotateCw,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeroVideoProps {
  src?: string;
  poster?: string;
}

export default function HeroVideo({
  src = "/placeholder.mp4",
  poster = "/placeholder.svg?height=720&width=1280",
}: HeroVideoProps) {
  // State declarations
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const volumeSliderRef = useRef<HTMLDivElement>(null);
  const volumeSliderTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (!hasStarted) {
        setHasStarted(true);
        videoRef.current.currentTime = 0;
        setIsMuted(false);
      }
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Function to handle video progress
  const handleProgress = useCallback(() => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.currentTime >= 5 && !hasStarted) {
        videoRef.current.currentTime = 0;
      }
    }
  }, [hasStarted]);

  // Function to handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  // Function to toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Function to change playback speed
  const handlePlaybackSpeedChange = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackSpeed(speed);
    }
  };

  // Function to toggle fullscreen
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Function to format time display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Mouse event handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleVolumeMouseEnter = () => {
    setShowVolumeSlider(true);
    if (volumeSliderTimeoutRef.current) {
      clearTimeout(volumeSliderTimeoutRef.current);
      volumeSliderTimeoutRef.current = null;
    }
  };

  const handleVolumeMouseLeave = () => {
    volumeSliderTimeoutRef.current = setTimeout(() => {
      setShowVolumeSlider(false);
    }, 500);
  };

  // Functions to skip forward and backward
  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  };

  // Effect for setting up event listeners
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleProgress);
      videoElement.addEventListener("loadedmetadata", () => {
        setDuration(videoElement.duration);
      });
      videoElement.addEventListener("ended", () => {
        if (!hasStarted) {
          videoElement.currentTime = 0;
          videoElement.play();
        }
      });
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleProgress);
        videoElement.removeEventListener("loadedmetadata", () => {});
        videoElement.removeEventListener("ended", () => {});
      }
    };
  }, [hasStarted, handleProgress]);

  // Effect to start video muted on initial load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  // JSX for the video player component
  return (
    <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-xl">
      <div
        className="absolute inset-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video element */}
        <video
          ref={videoRef}
          className="absolute inset-0 size-full cursor-pointer object-cover"
          src={src}
          poster={poster}
          playsInline
          autoPlay={!hasStarted}
          muted={!hasStarted}
          onClick={togglePlay}
          loop={!hasStarted}
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
            isHovered && !hasStarted ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Play button overlay */}
        {!hasStarted && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={togglePlay}
          >
            <Button
              size="icon"
              className={`size-32 rounded-full bg-accent-foreground text-white transition-all duration-300 ${
                isHovered ? "scale-110 opacity-100" : "opacity-90"
              }`}
            >
              {isPlaying && hasStarted ? (
                <Pause className="size-8" />
              ) : (
                <Play className="size-8" />
              )}
            </Button>
          </div>
        )}

        {/* Control bar */}
        {hasStarted && (
          <div
            className={`absolute inset-x-0 bottom-0 bg-transparent transition-all duration-300 ${
              isHovered || !isPlaying ? "translate-y-0" : "translate-y-[80%]"
            }`}
          >
            {/* Progress bar in control area */}
            <div className="pt-2">
              <Slider
                className="w-full"
                value={[progress]}
                max={100}
                step={1}
                onValueChange={(value) => {
                  if (videoRef.current) {
                    videoRef.current.currentTime =
                      (value[0] / 100) * videoRef.current.duration;
                  }
                }}
              />
            </div>

            {/* Control buttons */}
            <div className="flex items-center justify-between space-x-2 rounded-b-md bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2 text-white transition-all duration-300">
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
                    <RotateCcw className="size-5" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                      5
                    </span>
                  </div>
                </Button>

                {/* Play/Pause button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="size-5" />
                  ) : (
                    <Play className="size-5" />
                  )}
                </Button>

                {/* Skip forward button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={skipForward}
                >
                  <div className="relative">
                    <RotateCw className="size-5" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold">
                      5
                    </span>
                  </div>
                </Button>

                {/* Volume control */}
                <div className="relative" onMouseLeave={handleVolumeMouseLeave}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={toggleMute}
                    onMouseEnter={handleVolumeMouseEnter}
                  >
                    {isMuted ? (
                      <VolumeX className="size-5" />
                    ) : (
                      <Volume2 className="size-5" />
                    )}
                  </Button>
                  {/* Volume Slider with Slide-in/Slide-out Animations */}
                  <div
                    ref={volumeSliderRef}
                    className={`absolute left-full top-1/2 ml-2 -translate-y-1/2 ${
                      showVolumeSlider
                        ? "animate-slide-in-left"
                        : "animate-slide-out-left pointer-events-none opacity-0"
                    }`}
                    onMouseEnter={handleVolumeMouseEnter}
                    onMouseLeave={handleVolumeMouseLeave}
                  >
                    <Slider
                      className="w-24"
                      value={[isMuted ? 0 : videoRef.current?.volume || 0]}
                      max={1}
                      step={0.01} // Smoother slider movement
                      onValueChange={handleVolumeChange}
                    />
                  </div>
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
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      {playbackSpeed}x
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {[0.5, 1, 1.5, 2].map((speed) => (
                      <DropdownMenuItem
                        key={speed}
                        onSelect={() => handlePlaybackSpeedChange(speed)}
                      >
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
                  <Maximize className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
