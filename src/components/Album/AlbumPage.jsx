import React from "react";
import { FiHeart } from "react-icons/fi"; // Like icon
import TrackList from "./TrackList"; // Component for rendering a list of tracks
import SimilarAlbums from "./SimilarAlbums"; // Component for rendering similar albums

function AlbumPage() {
  const albumData = {
    name: "Dreamcatcher",
    coverImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5eabdad0818aa4e8f9c80a813f63b9b79e1cbba4d4b557095293d5952a1722d0?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e",
    artist: "Julia Wolf",
    releaseDate: "2024-08-15",
    description:
      "Dreamcatcher is an album by Julia Wolf that explores themes of love, loss, and self-discovery through a unique blend of indie pop and introspective lyrics.",
    tracks: [
      { title: "Dream On", duration: "3:45" },
      { title: "Nightmare", duration: "4:12" },
      { title: "Catch Me", duration: "2:58" },
      { title: "Illusions", duration: "3:31" },
      { title: "Reality", duration: "4:05" },
    ],
    similarAlbums: [
      {
        name: "City Lights EP",
        artist: "Julia Wolf",
        cover:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3a879a2e195c0ff53317aab5a5a8c002e6304d69bc9a84920a1598b963bdf?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e",
      },
      {
        name: "After Hours",
        artist: "The Weeknd",
        cover:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/3fe0d2eadbf3013db06d0463910c514b61548c5624ead48cc45d3eba2e968b12?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e",
      },
    ],
  };

  return (
    <div className="flex flex-col overflow-hidden h-full w-full bg-black bg-opacity-95">
      <div className="flex-grow overflow-y-auto px-6 pt-8 pb-24 hide-scrollbar">
        {/* Album Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src={albumData.coverImage}
              alt={albumData.name}
              className="object-cover w-32 h-32 rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-semibold text-white">
                {albumData.name}
              </h1>
              <p className="text-lg text-zinc-400">{albumData.artist}</p>
              <p className="text-sm text-zinc-400">
                Released: {albumData.releaseDate}
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-500 transition duration-200">
            <FiHeart size={20} />
            Like
          </button>
        </div>

        {/* Tracklist Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Tracklist</h2>
          <TrackList tracks={albumData.tracks} />
        </div>

        {/* About the Album */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
          <p className="text-base text-zinc-400">{albumData.description}</p>
        </div>

        {/* Similar Albums */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Similar Albums
          </h2>
          <SimilarAlbums albums={albumData.similarAlbums} />
        </div>
      </div>
    </div>
  );
}

export default AlbumPage;
