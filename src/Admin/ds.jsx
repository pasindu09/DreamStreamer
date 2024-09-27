import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import GenreTable from './GenreTable';
import AdminAlbum from './AdminAlbum';  // Make sure you have this component ready

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <Link to="/admin-dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            Admin
          </Link>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-plus mr-3"></i> New Report
          </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <Link to="/admin-dashboard" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
          </Link>

          <div className="relative">
            <button
              className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item w-full"
            >
              <i className="fas fa-database mr-3"></i> Crud
              <i className="fas fa-chevron-down ml-auto mr-4"></i>
            </button>
            <div className="ml-10 mt-2">
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
          </div>

          <Link to="/admin-dashboard/users" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-users mr-3"></i> Users
          </Link>
          <Link to="/admin-dashboard/settings" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-cog mr-3"></i> Settings
          </Link>
        </nav>
      </aside>

      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        {/* Desktop Header */}
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 flex justify-end">
            <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
              <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt="Profile" />
            </button>
          </div>
        </header>

        {/* Mobile Header & Nav */}
        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
          <div className="flex items-center justify-between">
            <Link to="/admin-dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
              Admin
            </Link>
            <button className="text-white text-3xl focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </header>

        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <Routes>
              <Route path="genre" element={<GenreTable />} />
              <Route path="album" element={<AdminAlbum />} />
              <Route path="/" element={<h1 className="text-3xl text-black pb-6">Dashboard</h1>} />
              {/* Add more routes as needed */}
            </Routes>
          </main>

          <footer className="w-full bg-white text-right p-4">
            Built by <a target="_blank" href="https://davidgrzyb.com" className="underline">David Grzyb</a>.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
