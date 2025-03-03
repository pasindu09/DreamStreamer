// import React, { useState } from 'react';

// const ArtistModal = ({ isOpen, onClose, onSubmit }) => {
//     const [artistName, setArtistName] = useState('');
//     const [country, setCountry] = useState('');
//     const [genre, setGenre] = useState('');
//     const [yearStarted, setYearStarted] = useState('');
//     const [description, setDescription] = useState('');
//     const [imageURL, setImageURL] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState({ type: '', text: '' });

//     if (!isOpen) return null;

//     const handleSubmit = async () => {
//         // Simple validation checks
//         if (!artistName || !country || !genre || !yearStarted || !description || !imageURL) {
//             setMessage({ type: 'error', text: 'All fields are required.' });
//             return;
//         }
    
//         setLoading(true);
//         setMessage({}); // Clear previous messages
    
//         try {
//             const payload = {
//                 ArtistName: artistName,
//                 Country: country,
//                 GenreID: genre,
//                 YearStarted: yearStarted,
//                 Description: description,
//                 ImageURL: imageURL,
//             };
    
//             const response = await fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/genre', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(payload),
//             });
    
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.error || 'Failed to create artist');
//             }
    
//             setMessage({ type: 'success', text: 'Creating artist...' });
    
//             // Pass data to parent component
//             onSubmit(payload);
    
//             // Show "Creating..." message for 2 seconds, then close the form
//             setTimeout(() => {
//                 setTimeout(onClose, 2000); // Close modal after a brief delay
//             }, 2000);
    
//         } catch (err) {
//             setMessage({ type: 'error', text: err.message || 'Failed to create artist' });
//             setLoading(false); // Stop loading in case of error
//         }
//     };
    
//     const handleImageUpload = async (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             try {
//                 const reader = new FileReader();
//                 reader.readAsDataURL(file);
//                 reader.onloadend = async () => {
//                     const base64Data = reader.result.split(',')[1];

//                     const payload = { image: base64Data };

//                     const uploadResponse = await fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/upload/artist-image', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify(payload),
//                     });

//                     if (!uploadResponse.ok) {
//                         throw new Error('Failed to upload image');
//                     }

//                     const uploadData = await uploadResponse.json();
//                     setImageURL(uploadData.imageUrl);
//                 };
//             } catch (err) {
//                 setMessage({ type: 'error', text: err.message || 'Failed to upload image' });
//             }
//         }
//     };
    
//     return (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
//             <div className="bg-white rounded-lg shadow-xl p-6 w-1/3">
//                 <div className="flex justify-between items-center pb-4">
//                     <h2 className="text-xl font-semibold">Create Artist</h2>
//                     <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
//                 </div>
//                 <div>
//                     <div className="mt-4 flex justify-center items-center">
//                         <div className="relative">
//                             {!imageURL && (
//                                 <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-gray-400 transition-opacity duration-300">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-gray-500">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v4m0 0H8m4 0h4M16 8a4 4 0 11-8 0 4 4 0 018 0z" />
//                                     </svg>
//                                     <input type="file" className="hidden" onChange={handleImageUpload} />
//                                 </label>
//                             )}
//                             {imageURL && (
//                                 <img src={imageURL} alt="Uploaded" className="w-24 h-24 rounded-full object-cover" />
//                             )}
//                         </div>
//                     </div>

//                     <div className="mt-4">
//                         <label className="block text-sm text-gray-600" htmlFor="artistName">Artist Name</label>
//                         <input
//                             className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
//                             id="artistName"
//                             name="artistName"
//                             type="text"
//                             value={artistName}
//                             onChange={(e) => setArtistName(e.target.value)}
//                             required
//                             placeholder="Enter Artist Name"
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <label className="block text-sm text-gray-600" htmlFor="country">Country</label>
//                         <input
//                             className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
//                             id="country"
//                             name="country"
//                             type="text"
//                             value={country}
//                             onChange={(e) => setCountry(e.target.value)}
//                             required
//                             placeholder="Enter Country"
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <label className="block text-sm text-gray-600" htmlFor="genre">Genre</label>
//                         <input
//                             className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
//                             id="genre"
//                             name="genre"
//                             type="text"
//                             value={genre}
//                             onChange={(e) => setGenre(e.target.value)}
//                             required
//                             placeholder="Enter Genre"
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <label className="block text-sm text-gray-600" htmlFor="yearStarted">Year Started</label>
//                         <input
//                             className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
//                             id="yearStarted"
//                             name="yearStarted"
//                             type="number"
//                             value={yearStarted}
//                             onChange={(e) => setYearStarted(e.target.value)}
//                             required
//                             placeholder="Enter Year Started"
//                         />
//                     </div>
//                     <div className="mt-4">
//                         <label className="block text-sm text-gray-600" htmlFor="description">Description</label>
//                         <input
//                             className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
//                             id="description"
//                             name="description"
//                             type="text"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             required
//                             placeholder="Enter Description"
//                         />
//                     </div>

//                     {message.text && (
//                         <p className={`mt-4 text-${message.type === 'error' ? 'red' : 'green'}-600`}>{message.text}</p>
//                     )}

//                     <div className="mt-6 flex justify-end">
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="mb-2 flex items-center rounded-md bg-gray-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-gray-400 focus:shadow-none active:bg-gray-400 hover:bg-gray-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="button"
//                             onClick={() => handleSubmit()}
//                             className="mb-2 flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                             disabled={loading}
//                         >
//                             {loading ? 'Creating...' : 'Create'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ArtistModal;



import React, { useState, useEffect } from 'react';

const ArtistModal = ({ isOpen, onClose, onSubmit }) => {
    const [artistName, setArtistName] = useState('');
    const [country, setCountry] = useState('');
    const [genre, setGenre] = useState('');
    const [yearStarted, setYearStarted] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [genres, setGenres] = useState([]);  // State to hold the list of genres

    useEffect(() => {
        if (isOpen) {
            // Fetch the list of genres when the modal is opened
            fetchGenres();
        }
    }, [isOpen]);

    const fetchGenres = async () => {
        try {
            const response = await fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/genre');
            const data = await response.json();
            if (response.ok) {
                setGenres(data.body);  // Assuming the response contains a 'body' field with the genres list
            } else {
                throw new Error('Failed to fetch genres');
            }
        } catch (err) {
            setMessage({ type: 'error', text: err.message });
        }
    };

    if (!isOpen) return null;

    const handleSubmit = async () => {
        // Simple validation checks
        if (!artistName || !country || !genre || !yearStarted || !description || !imageURL) {
            setMessage({ type: 'error', text: 'All fields are required.' });
            return;
        }

        setLoading(true);
        setMessage({}); // Clear previous messages

        try {
            const payload = {
                ArtistName: artistName,
                Country: country,
                GenreID: genre,  // Use the selected GenreID
                YearStarted: yearStarted,
                Description: description,
                ImageURL: imageURL,
            };

            const response = await fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/genre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create artist');
            }

            setMessage({ type: 'success', text: 'Creating artist...' });

            // Pass data to parent component
            onSubmit(payload);

            // Show "Creating..." message for 2 seconds, then close the form
            setTimeout(() => {
                setTimeout(onClose, 2000); // Close modal after a brief delay
            }, 2000);


            setArtistName('');
            setCountry('');
            setGenre('');
            setYearStarted('');
            setDescription('');
            setImageURL('');
            setMessage({ type: '', text: '' });

           
           
        } catch (err) {
            setMessage({ type: 'error', text: err.message || 'Failed to create artist' });
            setLoading(false); // Stop loading in case of error
        }
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = async () => {
                    const base64Data = reader.result.split(',')[1];

                    const payload = { image: base64Data };

                    const uploadResponse = await fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/upload/artist-image', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload),
                    });

                    if (!uploadResponse.ok) {
                        throw new Error('Failed to upload image');
                    }

                    const uploadData = await uploadResponse.json();
                    setImageURL(uploadData.imageUrl);
                };
            } catch (err) {
                setMessage({ type: 'error', text: err.message || 'Failed to upload image' });
            }
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-xl p-6 w-1/3">
                <div className="flex justify-between items-center pb-4">
                    <h2 className="text-xl font-semibold">Create Artist</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
                </div>
                <div>
                <div className="mt-4 flex justify-center items-center">
  <div className="relative">
    <label className="cursor-pointer">
      {imageURL ? (
        <img src={imageURL} alt="Uploaded" className="w-24 h-24 rounded-full object-cover" />
      ) : (
        <div className="w-24 h-24 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-gray-400 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v4m0 0H8m4 0h4M16 8a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      )}
      <input type="file" className="hidden" onChange={handleImageUpload} />
    </label>
  </div>
</div>


                    <div className="mt-4">
                        <label className="block text-sm text-gray-600" htmlFor="artistName">Artist Name</label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="artistName"
                            name="artistName"
                            type="text"
                            value={artistName}
                            onChange={(e) => setArtistName(e.target.value)}
                            required
                            placeholder="Enter Artist Name"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-600" htmlFor="country">Country</label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="country"
                            name="country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            placeholder="Enter Country"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-600" htmlFor="genre">Genre</label>
                        <select
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="genre"
                            name="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select a genre</option>
                            {genres.map((g) => (
                                <option key={g.GenreID} value={g.GenreID}>
                                    {g.GenreName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-600" htmlFor="yearStarted">Year Started</label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="yearStarted"
                            name="yearStarted"
                            type="number"
                            value={yearStarted}
                            onChange={(e) => setYearStarted(e.target.value)}
                            required
                            placeholder="Enter Year Started"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-600" htmlFor="description">Description</label>
                        <input
                            className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                            id="description"
                            name="description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            placeholder="Enter Description"
                        />
                    </div>

                    {message.text && (
                        <p className={`mt-4 text-${message.type === 'error' ? 'red' : 'green'}-600`}>{message.text}</p>
                    )}

                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mb-2 flex items-center rounded-md bg-gray-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-gray-400 focus:shadow-none active:bg-gray-400 hover:bg-gray-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSubmit()}
                            className="mb-2 flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            disabled={loading}
                        >
                            {loading ? 'Creating...' : 'Create'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistModal;
