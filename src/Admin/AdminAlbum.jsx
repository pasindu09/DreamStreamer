import React, { useState, useEffect } from 'react';
import AlbumForm from '../components/AdminAlbumForm';
import AlbumView from '../components/AdminAlbumView';

const AdminAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch the albums from an API endpoint
    fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/album')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data && Array.isArray(data.body)) {
          setAlbums(data.body);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  const handleAddAlbum = (album) => {
    // POST request to API to add a new album
    fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/album', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(album),
    })
      .then(response => response.json())
      .then(newAlbum => setAlbums([...albums, newAlbum]))
      .catch(error => console.error('Error adding album:', error));
  };

  const handleEditAlbum = (album) => {
    setCurrentAlbum(album);
    setIsEditing(true);
  };

  const handleUpdateAlbum = (updatedAlbum) => {
    // PUT request to API to update an existing album
    fetch(`https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/album/${updatedAlbum.AlbumID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAlbum),
    })
      .then(response => response.json())
      .then(() => {
        setAlbums(albums.map(album => (album.AlbumID === updatedAlbum.AlbumID ? updatedAlbum : album)));
        setIsEditing(false);
        setCurrentAlbum(null);
      })
      .catch(error => console.error('Error updating album:', error));
  };

  const handleDeleteAlbum = (id) => {
    // DELETE request to API to delete an album
    fetch(`https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/album/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setAlbums(albums.filter(album => album.AlbumID !== id));
      })
      .catch(error => console.error('Error deleting album:', error));
  };

  return (
    <div className="container mx-auto p-4">
      {isEditing && (
        <AlbumForm
          onSubmit={handleUpdateAlbum}
          currentAlbum={currentAlbum}
          isEditing={isEditing}
        />
      )}
      <AlbumView albums={albums} onEdit={handleEditAlbum} onDelete={handleDeleteAlbum} />
    </div>
  );
};

export default AdminAlbum;
