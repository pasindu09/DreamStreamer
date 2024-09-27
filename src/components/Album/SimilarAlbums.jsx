import React from "react";

function SimilarAlbums({ albums }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.map((album, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={album.cover}
            alt={album.name}
            className="object-cover w-32 h-32 rounded-lg"
          />
          <div className="mt-2 text-center">
            <span className="text-lg text-white">{album.name}</span>
            <p className="text-sm text-zinc-400">{album.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SimilarAlbums;
