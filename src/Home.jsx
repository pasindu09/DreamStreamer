import React from 'react';
import MusicPlayer from './components/Volumebar/MusicPlayer';
import SideBar from './components/Sidebar/SideBar';
import ProfileCard from './components/Profile/ProfileCard';
import MusicBody from './components/Body/MusicBody';
import ArtistProfile from './components/Artist/ArtistProfile';
import AlbumPage from './components/Album/AlbumPage';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[15%]">
          <SideBar />
        </div>

        {/* Main Body Content */}
        <div className="new flex-1 flex overflow-hidden">
        <Routes>
              {/* <Route path="genre" element={<AdminGenre />} /> */}
              <Route path="album" element={<AlbumPage />} />
              <Route path="artist" element={<ArtistProfile />} />
              <Route path="/" element={<MusicBody />}/>
            </Routes>

        </div>

        {/* Profile Card */}
        <div className="w-[22%]">
          <ProfileCard />
        </div>
      </div>

      {/* Music Player */}
      <div className="h-[12%]">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Home;
