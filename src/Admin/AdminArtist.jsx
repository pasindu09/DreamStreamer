import React, { useState, useEffect } from 'react';
import AlbumForm from '../components/AdminAlbumForm';
import AdminArtistView from '../components/AdminArtistView';

const ArtistAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


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
    console.log('Editing album:', album);
  };

  const handleUpdateAlbum = (updatedAlbum) => {
    console.log('Data being sent for update:', updatedAlbum); // Debugging log
    
    // Ensure that updatedAlbum has the correct ArtistID
    const artistId = updatedAlbum.ArtistID; // or updatedAlbum.AlbumID if that's how it's structured
    
    if (!artistId) {
      console.error('ArtistID is undefined or missing');
      return; // Exit early to avoid making a bad request
    }
    
    fetch(`https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/artist/${artistId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAlbum),
    })
    .then(response => response.json())
    .then(() => {
      setAlbums(albums.map(album => (album.ArtistID === artistId ? updatedAlbum : album)));
      setIsEditing(false);
      setCurrentAlbum(null);
    })
    .catch(error => console.error('Error updating album:', error));
  };
  

  const handleDeleteAlbum = (id) => {
    // DELETE request to API to delete an album
    fetch(`https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/artist/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setAlbums(albums.filter(album => album.AlbumID !== id));
      })
      .catch(error => console.error('Error deleting album:', id));
  };

  return (
    <div className="container mx-auto p-4">
      {isEditing && (
        <AlbumForm
          onSubmit={handleUpdateAlbum}
          currentAlbum={currentAlbum}
          isEditing={isEditing}
          onCancel={() => {
            setIsEditing(false);
            setCurrentAlbum(null);
          }}
        />
      )}
      <AdminArtistView onEdit={handleEditAlbum} onDelete={handleDeleteAlbum} />
    </div>
  );
};

export default ArtistAlbum;
