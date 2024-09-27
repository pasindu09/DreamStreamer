import React, { useState, useEffect } from 'react';
import ArtistModal from './ArtistModal';  // Assuming the Modal component is in the same directory

const AdminArtistView = ({ onEdit, onDelete }) => {
  const [artists, setArtists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/artist'); // Replace with your actual API endpoint
        const data = await response.json();

        if (data && Array.isArray(data.body)) {
          setArtists(data.body); // Set artists from the body array
        } else {
          console.error('API response does not contain an array:', data);
          setArtists([]); // Set to empty array if the response is not as expected
        }
      } catch (error) {
        console.error('Failed to fetch artists:', error);
        setArtists([]);
      }
    };

    fetchArtists();
  }, []);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (newArtist) => {
    setArtists((prevArtists) => [...prevArtists, newArtist]);

    // Notify the user of success
    setNotification({ type: 'success', message: 'Artist created successfully!' });

    // Close modal after submission
    setIsModalOpen(false);

    // Clear the notification after 3 seconds
    setTimeout(() => {
      setNotification({ type: '', message: '' });
    }, 3000);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-black pb-6">Manage Artists</h1>
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

      {/* Notification message */}
      {notification.message && (
        <div
          className={`mb-4 p-4 rounded ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
          role="alert"
        >
          {notification.message}
        </div>
      )}

      <div className="bg-white overflow-auto">
        <table className="min-w-full bg-white leading-normal">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Image</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Artist Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Country</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Year Started</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {artists.map((artist, index) => (
              <tr key={index} className='bg-gray-200'>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img className="w-full h-full rounded-full" src={artist.ImageURL} alt={artist.ArtistName} />
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {artist.ArtistName}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {artist.Country}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {artist.YearStarted}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    onClick={() => onEdit(artist)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(artist.ArtistID)}
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

      {/* Modal for Creating a New Artist */}
      <ArtistModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default AdminArtistView;
