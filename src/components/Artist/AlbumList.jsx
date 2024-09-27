import React from "react";

function AlbumList({ albums }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.map((album, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={album.cover}
            alt={album.title}
            className="object-cover w-32 h-32 rounded-lg"
          />
          <span className="mt-2 text-lg text-white">{album.title}</span>
        </div>
      ))}
    </div>
  );
}

export default AlbumList;
