import React from "react";
import { FiUserPlus } from "react-icons/fi"; // Follow icon
import TrackList from "./TrackList"; // Component for rendering a list of tracks
import AlbumList from "./AlbumList"; // Component for rendering a list of albums
import SimilarArtists from "./SimilarArtists"; // Component for rendering similar artists
import MusicSection from "../Body/MusicSection"; // Component for rendering a music section

function ArtistProfile() {
  const artistData = {
    name: "Julia Wolf",
    profileImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ef0d6a8d0b7b9f916ea83dc9c1784238f53819d1d43e342e108173d2cef6fe32?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e",
    bio: "Julia Wolf is an indie pop artist known for her catchy melodies and introspective lyrics. Her unique sound has captivated audiences worldwide.",
    popularTracks: [
      { title: "Play It Safe", playCount: "12M" },
      { title: "Hot Killer", playCount: "9M" },
      { title: "Ghosts", playCount: "7M" },
      { title: "New York", playCount: "6M" },
      { title: "Dangerous Love", playCount: "5M" },
    ],
    albums: [
         {
            title: "City Lights EP",
            artists: "Julia Wolf",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3a879a2e195c0ff53317aab5a5a8c002e6304d69bc9a84920a1598b963bdf?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e",
          },
          {
            title: "Dreamcatcher",
            artists: "Julia Wolf",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5eabdad0818aa4e8f9c80a813f63b9b79e1cbba4d4b557095293d5952a1722d0?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e",
          },
          {
            title: "City Lights EP",
            artists: "Julia Wolf",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3a879a2e195c0ff53317aab5a5a8c002e6304d69bc9a84920a1598b963bdf?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e",
          },
          {
            title: "Dreamcatcher",
            artists: "Julia Wolf",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5eabdad0818aa4e8f9c80a813f63b9b79e1cbba4d4b557095293d5952a1722d0?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e",
          },
    
    ],
    similarArtists: [
      { name: "Khalid", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef0d6a8d0b7b9f916ea83dc9c1784238f53819d1d43e342e108173d2cef6fe32?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e" },
      { name: "Lorde", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef0d6a8d0b7b9f916ea83dc9c1784238f53819d1d43e342e108173d2cef6fe32?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e" },
      { name: "Billie Eilish", image: "url_to_image" },
    ],
  };

  return (
    <div className="flex flex-col overflow-hidden h-full w-full bg-black bg-opacity-95">
      <div className="flex-grow overflow-y-auto px-6 pt-8 pb-24 hide-scrollbar">
        {/* Artist Profile Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src={artistData.profileImage}
              alt={artistData.name}
              className="object-cover w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-semibold text-white">
                {artistData.name}
              </h1>
              <p className="text-base text-zinc-400">{artistData.bio}</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-500 transition duration-200">
            <FiUserPlus size={20} />
            Follow
          </button>
        </div>

        {/* Popular Tracks */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Popular Tracks
          </h2>
          <TrackList tracks={artistData.popularTracks} />
        </div>

        {/* Albums Section */}
        <div className="mb-8">
          <MusicSection title="Albums" mixes={artistData.albums} darkBackground />
        </div>

        {/* Similar Artists */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Similar Artists
          </h2>
          <SimilarArtists artists={artistData.similarArtists} />
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
