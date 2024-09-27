import React from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi"; // New icons for volume control

function VolumeControl() {
  const isMuted = false; // Replace with actual state

  return (
    <div className="flex items-center">
      <button>
        {isMuted ? (
          <FiVolumeX size={24} className="text-white" />
        ) : (
          <FiVolume2 size={24} className="text-white" />
        )}
      </button>
      {/* Add volume slider or other controls as needed */}
    </div>
  );
}

export default VolumeControl;
