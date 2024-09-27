import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [genreName, setGenreName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!isOpen) return null;

    const handleButtonClick = async (event) => {
        event.preventDefault; // Prevent the default button behavior
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://rden88m8ii.execute-api.ap-southeast-1.amazonaws.com/dreamstreamerStage/genre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    GenreName: genreName,
                    Description: description,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create genre');
            }

            const data = await response.json();

            onSubmit(data);
            onClose();

        } catch (err) {
            setError(err.message || 'Failed to fetch');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-xl p-6 w-1/3">
                <div className="flex justify-between items-center pb-4">
                    <h2 className="text-xl font-semibold">Create Genre</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
                </div>
                <form>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-600" htmlFor="genreName">Genre Name</label>
                        <input
                            className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                            id="genreName"
                            name="genreName"
                            type="text"
                            value={genreName}
                            onChange={(e) => setGenreName(e.target.value)}
                            required
                            placeholder="Enter Genre Name"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-600" htmlFor="genreDescription">Description</label>
                        <input
                            className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                            id="genreDescription"
                            name="Description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            placeholder="Enter Genre Description"
                            aria-label="Description"
                        />
                    </div>
                    {error && <p className="mt-4 text-red-600">{error}</p>}
                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mb-2 flex items-center rounded-md bg-gray-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-gray-400 focus:shadow-none active:bg-gray-400 hover:bg-gray-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="button" // Set type to "button" to prevent default form submission
                            onClick={handleButtonClick} // Attach the handleButtonClick function here
                            className="mb-2 flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            disabled={loading}
                        >
                            {loading ? 'Creating...' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
