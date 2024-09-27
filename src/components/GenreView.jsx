import React, { useState } from 'react';
import Modal from './Modal';  // Assuming the Modal component is in the same directory

const GenreView = ({ albums, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGenre = event.target.genreName.value;
    // Logic to add the new genre
    console.log("New Genre:", newGenre);
    // Close modal after submission
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-black pb-6">Manage Genres</h1>
      <button
        onClick={handleCreateClick}
        className="mb-2 flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5">
          <path fillRule="evenodd" d="M12 5a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 0 1.5h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5h-5.5a.75.75 0 0 1 0-1.5h5.5v-5.5A.75.75 0 0 1 12 5Z" clipRule="evenodd" />
        </svg>
        Create
      </button>

      <div className="bg-white overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/2 text-left py-3 px-4 uppercase font-semibold text-sm">Genre</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {albums.map((album, index) => (
              <tr key={album.GenreID} className={album.GenreID % 2 === 0 ? 'bg-gray-200' : ''}>
                <td className="w-1/2 text-left py-3 px-4">
                  {album.GenreName}
                </td>
                <td className="text-left py-3 px-4">
                  <button
                    onClick={() => onEdit(album)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(album.GenreID)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Creating a New Genre */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default GenreView;
