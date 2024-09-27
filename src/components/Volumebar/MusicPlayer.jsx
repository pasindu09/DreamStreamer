import React from "react";
import PlaybackControls from "./PlaybackControls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import { FiHeart, FiList, FiShuffle, FiRepeat } from "react-icons/fi"; // Additional icons

function MusicPlayer() {
  const songData = {
    title: "Play It Safe",
    artist: "Julia Wolf",
    currentTime: "2:39",
    totalTime: "4:22",
  };

  const isLiked = true; // Replace with actual state

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-6 py-4 w-full bg-neutral-900 h-[12%] transition-all duration-300">
      {/* Song Info Section */}
      <div className="flex items-center gap-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71642339f0e8127ddf1fed63d28422e3cf319df2b2635e03ca69d177afe3ed46?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e"
          alt=""
          className="object-contain shrink-0 w-12 h-12 rounded-lg"
        />
        <div className="flex flex-col text-left">
          <h1 className="text-lg text-white">{songData.title}</h1>
          <p className="text-base tracking-tight text-zinc-400">
            {songData.artist}
          </p>
        </div>
      </div>

      {/* Playback Controls and Progress Bar */}
      <div className="flex flex-col items-center w-full md:w-auto">
        <div className="flex items-center gap-6 justify-center mb-2">
          <FiShuffle size={24} className="text-white" />
          <PlaybackControls />
          <FiRepeat size={24} className="text-white" />
        </div>
        <div className="w-full md:w-auto">
          <ProgressBar
            currentTime={songData.currentTime}
            totalTime={songData.totalTime}
          />
        </div>
      </div>

      {/* Volume Control and Additional Icons */}
      <div className="flex items-center gap-4">
        <VolumeControl className="h-[12%]" />
        <FiList size={24} className="text-white" /> {/* Playlist or Queue icon */}
      </div>
    </footer>
  );
}

export default MusicPlayer;
