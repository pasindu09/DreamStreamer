import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import GenreTable from '../components/GenreView';
import AdminAlbum from './AdminAlbum';
import AdminGenre from './AdminGenre';
import AdminArtist from './AdminArtist';
import { FiUser, FiMusic, FiDisc } from 'react-icons/fi';
import { Routes, Route, Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chartOneRef = useRef(null);
  const chartTwoRef = useRef(null);
  const [isCrudOpen, setIsCrudOpen] = useState(false);

  const toggleCrudDropdown = () => {
    setIsCrudOpen(!isCrudOpen);
  };

    const topArtists = [
    { name: 'Julia Wolf', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef0d6a8d0b7b9f916ea83dc9c1784238f53819d1d43e342e108173d2cef6fe32?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { name: 'Khalid', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3fe0d2eadbf3013db06d0463910c514b61548c5624ead48cc45d3eba2e968b12?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { name: 'Lorde', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3a879a2e195c0ff53317aab5a5a8c002e6304d69bc9a84920a1598b963bdf?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { name: 'Billie Eilish', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c505b991928d46d4f0e73a0fe2987047393ed43c2248928f05f87868836ca24?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { name: 'The Weeknd', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5eabdad0818aa4e8f9c80a813f63b9b79e1cbba4d4b557095293d5952a1722d0?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
  ];

  const topTracks = [
    { title: 'Play It Safe', artist: 'Julia Wolf', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/71642339f0e8127ddf1fed63d28422e3cf319df2b2635e03ca69d177afe3ed46?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { title: 'Talk', artist: 'Khalid', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3fe0d2eadbf3013db06d0463910c514b61548c5624ead48cc45d3eba2e968b12?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { title: 'Royals', artist: 'Lorde', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3a879a2e195c0ff53317aab5a5a8c002e6304d69bc9a84920a1598b963bdf?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { title: 'Bad Guy', artist: 'Billie Eilish', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c505b991928d46d4f0e73a0fe2987047393ed43c2248928f05f87868836ca24?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { title: 'Blinding Lights', artist: 'The Weeknd', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5eabdad0818aa4e8f9c80a813f63b9b79e1cbba4d4b557095293d5952a1722d0?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
  ];

  const topAlbums = [
    { title: 'Dreamcatcher', artist: 'Julia Wolf', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5eabdad0818aa4e8f9c80a813f63b9b79e1cbba4d4b557095293d5952a1722d0?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { title: 'Free Spirit', artist: 'Khalid', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3fe0d2eadbf3013db06d0463910c514b61548c5624ead48cc45d3eba2e968b12?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { title: 'Melodrama', artist: 'Lorde', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3a879a2e195c0ff53317aab5a5a8c002e6304d69bc9a84920a1598b963bdf?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { title: 'When We All Fall Asleep', artist: 'Billie Eilish', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c505b991928d46d4f0e73a0fe2987047393ed43c2248928f05f87868836ca24?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
    { title: 'After Hours', artist: 'The Weeknd', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5eabdad0818aa4e8f9c80a813f63b9b79e1cbba4d4b557095293d5952a1722d0?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e' },
  ];
    


  return (
    <div className="bg-gray-100 font-family-karla flex">
      <aside className="relative bg-black h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <Link to="/admin-dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            Admin
          </Link>
          {/* <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-plus mr-3"></i> New Report
          </button> */}
        </div>
        <nav className="text-white text-base font-semibold pt-3">
        <a href="/admin-dashboard" className="flex items-center text-white py-4 pl-6 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
          </a>

          <div className="relative">
            <button
              onClick={toggleCrudDropdown}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item w-full"
            >
              <i className="fas fa-database mr-3"></i> Crud
              <i className={`fas fa-chevron-down ml-auto mr-4 transform ${isCrudOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {/* Dropdown menu */}
            {isCrudOpen && (
              <div className="ml-10 mt-2 transition-all duration-300 ease-in-out">
                <Link to="/admin-dashboard/genre" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-6 nav-item">
                  <i className="fas fa-music mr-3"></i> Genre
                </Link>
                <Link to="/admin-dashboard/album" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-6 nav-item">
                  <i className="fas fa-compact-disc mr-3"></i> Album
                </Link>
                <Link to="/admin-dashboard/artist" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-6 nav-item">
                  <i className="fas fa-user mr-3"></i> Artist
                </Link>
                <Link to="/admin-dashboard/track" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-6 nav-item">
                  <i className="fas fa-headphones-alt mr-3"></i> Track
                </Link>
              </div>
            )}
          </div>

          <Link to="/admin-dashboard/users" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-users mr-3"></i> Users
          </Link>
          <Link to="/admin-dashboard/settings" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-cog mr-3"></i> Settings
          </Link>
        </nav>
        {/* <Link to="/admin-dashboard/"
          href=""
          className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
        >
        </Link> */}
      </aside>

      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        {/* Desktop Header */}
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="realtive z-10 w-12 h-12 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none"
            >
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3a879a2e195c0ff53317aab5a5a8c002e6304d69bc9a84920a1598b963bdf?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e" alt="Profile" />
            </button>
            {isOpen && (
              <>
                <button onClick={() => setIsOpen(false)} className="h-full w-full fixed inset-0 cursor-default"></button>
                <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                  <a href="#" className="block px-4 py-2 account-link hover:text-white">
                    Account
                  </a>
                  <a href="#" className="block px-4 py-2 account-link hover:text-white">
                    Support
                  </a>
                  <a href="#" className="block px-4 py-2 account-link hover:text-white">
                    Sign Out
                  </a>
                </div>
              </>
            )}
          </div>
        </header>

        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <Routes>
              <Route path="genre" element={<AdminGenre />} />
              <Route path="album" element={<AdminAlbum />} />
              <Route path="artist" element={<AdminArtist />} />
              <Route path="/" element={
                <div>
                  <h1 className="text-3xl text-black pb-6">Dashboard</h1>

                  <div className="flex flex-wrap justify-between mt-6">
              {/* Top 5 Artists */}
              <div className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-black mb-4 flex items-center">
                  <FiUser className="mr-2" /> Top 5 Artists
                </h2>
                <ul className="space-y-4">
                  {topArtists.map((artist, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="object-cover w-12 h-12 rounded-full"
                      />
                      <span className="text-lg text-black">{artist.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top 5 Tracks */}
              <div className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-lg mt-6 lg:mt-0">
                <h2 className="text-2xl font-semibold text-black mb-4 flex items-center">
                  <FiMusic className="mr-2" /> Top 5 Tracks
                </h2>
                <ul className="space-y-4">
                  {topTracks.map((track, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="object-cover w-12 h-12 rounded-full"
                      />
                      <div>
                        <span className="text-lg text-black">{track.title}</span>
                        <p className="text-sm text-gray-500">{track.artist}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top 5 Albums */}
              <div className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-lg mt-6 lg:mt-0">
                <h2 className="text-2xl font-semibold text-black mb-4 flex items-center">
                  <FiDisc className="mr-2" /> Top 5 Albums
                </h2>
                <ul className="space-y-4">
                  {topAlbums.map((album, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <img
                        src={album.image}
                        alt={album.title}
                        className="object-cover w-12 h-12 rounded-full"
                      />
                      <div>
                        <span className="text-lg text-black">{album.title}</span>
                        <p className="text-sm text-gray-500">{album.artist}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

                 
                </div>} />
            </Routes>
          </main>

          {/* <footer className="w-full bg-white text-right p-4">
            Built by <a target="_blank" href="https://davidgrzyb.com" className="underline">David Grzyb</a>.
          </footer> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;





