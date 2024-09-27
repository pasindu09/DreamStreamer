import React from 'react';

const AdminAlbumView = ({ albums, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Album List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 relative">
            <h3 className="text-2xl font-semibold mb-2">{album.AlbumName}</h3>
            <p className="text-gray-600">Artist ID: {album.ArtistID}</p>
            <p className="text-gray-600">Release Date: {new Date(album.ReleaseDate).toLocaleDateString()}</p>
            <p className="text-gray-600">Label: {album.Label || 'N/A'}</p>
            <div className="absolute top-4 right-4 space-x-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                onClick={() => onEdit(album)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                onClick={() => onDelete(album.AlbumID)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAlbumView;
