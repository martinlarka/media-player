import { useRef, useState } from "react";

import { usePlayerState } from "../Context/PlayerContext";
import { ControlButton } from "./ControlButton";
import { usePlaylistState } from "../Context/PlaylistContext";

import previous from "../assets/previous.svg";
import backward from "../assets/backward.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import forward from "../assets/forward.svg";
import next from "../assets/next.svg";

export const MediaPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerState, setPlayerState] = usePlayerState();
  const [playlistState] = usePlaylistState();

  const setCurrentTime = (delta: number) => () => {
    if (videoRef.current?.currentTime) {
      videoRef.current.currentTime += delta;
    }
  };

  const stepToMedia = (delta: number) => () => {
    const currentIndex = playlistState.indexOf(playerState.playingUrl) + delta;
    const [newMediaUrl] = playlistState.slice(
      currentIndex % playlistState.length
    );
    setPlayerState({
      playingUrl: newMediaUrl,
    });
  };

  return (
    <div className="h-96 aspect-video">
      <video
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        ref={videoRef}
        src={playerState.playingUrl}
        className="h-full bg-slate-900"
      />
      <div className="flex justify-center gap-x-2 py-2">
        <ControlButton icon={previous} onClick={stepToMedia(-1)} />
        <ControlButton icon={backward} onClick={setCurrentTime(-10)} />

        {isPlaying ? (
          <ControlButton
            icon={pause}
            onClick={() => videoRef.current?.pause()}
          />
        ) : (
          <ControlButton icon={play} onClick={() => videoRef.current?.play()} />
        )}

        <ControlButton icon={forward} onClick={setCurrentTime(10)} />
        <ControlButton icon={next} onClick={stepToMedia(1)} />
      </div>
    </div>
  );
};
