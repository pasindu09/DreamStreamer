import React from "react";
import { FiSkipBack, FiSkipForward, FiPlay, FiPause } from "react-icons/fi"; // New icons

function PlaybackControls() {
  const isPlaying = true; // Replace with actual state

  return (
    <div className="flex items-center justify-center gap-4">
      <button>
        <FiSkipBack size={24} className="text-white" />
      </button>
      <button>
        {isPlaying ? (
          <FiPause size={28} className="text-white" />
        ) : (
          <FiPlay size={28} className="text-white" />
        )}
      </button>
      <button>
        <FiSkipForward size={24} className="text-white" />
      </button>
    </div>
  );
}

export default PlaybackControls;
