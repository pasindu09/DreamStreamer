import React, { useState } from 'react';

const GenreTable = () => {
  // Initial genres state
  const [genres, setGenres] = useState([
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Jazz' },
    { id: 3, name: 'Hip Hop' },
  ]);

  const [newGenre, setNewGenre] = useState('');
  const [editGenreId, setEditGenreId] = useState(null);
  const [editGenreName, setEditGenreName] = useState('');

  // Handle adding a new genre
  const handleAddGenre = () => {
    if (newGenre.trim()) {
      setGenres([...genres, { id: genres.length + 1, name: newGenre }]);
      setNewGenre('');
    }
  };

  // Handle editing a genre
  const handleEditGenre = (id) => {
    const genreToEdit = genres.find((genre) => genre.id === id);
    setEditGenreId(id);
    setEditGenreName(genreToEdit.name);
  };

  // Handle saving the edited genre
  const handleSaveEdit = () => {
    setGenres(
      genres.map((genre) =>
        genre.id === editGenreId ? { ...genre, name: editGenreName } : genre
      )
    );
    setEditGenreId(null);
    setEditGenreName('');
  };

  // Handle deleting a genre
  const handleDeleteGenre = (id) => {
    setGenres(genres.filter((genre) => genre.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-black pb-6">Manage Genres</h1>
      <div className="bg-white overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/2 text-left py-3 px-4 uppercase font-semibold text-sm">Genre</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {genres.map((genre) => (
              <tr key={genre.id} className={genre.id % 2 === 0 ? 'bg-gray-200' : ''}>
                <td className="w-1/2 text-left py-3 px-4">
                  {editGenreId === genre.id ? (
                    <input
                      type="text"
                      value={editGenreName}
                      onChange={(e) => setEditGenreName(e.target.value)}
                      className="border border-gray-400 p-2 w-full"
                    />
                  ) : (
                    genre.name
                  )}
                </td>
                <td className="text-left py-3 px-4">
                  {editGenreId === genre.id ? (
                    <button
                      onClick={handleSaveEdit}
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditGenre(genre.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGenre(genre.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <input
          type="text"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
          placeholder="New Genre"
          className="border border-gray-400 p-2 w-1/2"
        />
        <button
          onClick={handleAddGenre}
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        >
          Add Genre
        </button>
      </div>
    </div>
  );
};

export default GenreTable;
