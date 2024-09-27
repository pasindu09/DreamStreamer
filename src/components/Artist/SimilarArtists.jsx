import React from "react";

function SimilarArtists({ artists }) {
  return (
    <div className="flex gap-6 overflow-x-auto hide-scrollbar">
      {artists.map((artist, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={artist.image}
            alt={artist.name}
            className="object-cover w-24 h-24 rounded-full"
          />
          <span className="mt-2 text-lg text-white">{artist.name}</span>
        </div>
      ))}
    </div>
  );
}

export default SimilarArtists;
