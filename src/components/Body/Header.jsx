import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-center w-full px-8 py-3 bg-black bg-opacity-90 shadow-sm rounded-b-lg">
      {/* Search Bar */}
      <div className="relative flex-grow max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-12 text-white bg-neutral-800 rounded-full focus:outline-none focus:ring-1 focus:ring-white"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.6-10.6 7.5 7.5 0 0 0 10.6 10.6z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
