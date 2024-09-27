import React from "react";

function TrackList({ tracks }) {
  return (
    <ul className="space-y-3">
      {tracks.map((track, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition duration-200"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl text-white">{index + 1}</span>
            <span className="text-lg text-white">{track.title}</span>
          </div>
          <span className="text-sm text-zinc-400">{track.playCount} plays</span>
        </li>
      ))}
    </ul>
  );
}

export default TrackList;
