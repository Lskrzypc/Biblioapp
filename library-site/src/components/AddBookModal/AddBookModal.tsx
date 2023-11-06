import React, { useState } from 'react';

interface AddBookModalProps {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  onAddBook: (book: {
    title: string;
    authorId: string;
    authorFirstName: string;
    authorLastName: string;
    genres: string[];
    photoUrl: string;
  }) => void;
}

export const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, setIsModalOpen, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authorFirstName, setAuthorFirstName] = useState('');
  const [authorLastName, setAuthorLastName] = useState('');
  const [genres, setGenres] = useState<string[]>([]);
  const [photoUrl, setPhotoUrl] = useState('');
  const [newGenre, setNewGenre] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();


    onAddBook({
      title,
      authorId,
      authorFirstName,
      authorLastName,
      genres,
      photoUrl,
    });


    setTitle('');
    setAuthorId('');
    setAuthorFirstName('');
    setAuthorLastName('');
    setGenres([]);
    setPhotoUrl('');
    setNewGenre('');
  };

  const handleAddGenre = () => {
    if (newGenre && !genres.includes(newGenre)) {
      setGenres(prevGenres => [...prevGenres, newGenre]);
      setNewGenre('');
    }
  };

  const handleRemoveGenre = (genreToRemove: string) => {
    setGenres(genres.filter(genre => genre !== genreToRemove));
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="modal bg-white rounded-lg p-6 max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>


          <div className="mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre du livre"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>


          <div className="mb-4">
            <input
              type="text"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              placeholder="ID de l'auteur"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={authorFirstName}
              onChange={(e) => setAuthorFirstName(e.target.value)}
              placeholder="Prénom de l'auteur"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={authorLastName}
              onChange={(e) => setAuthorLastName(e.target.value)}
              placeholder="Nom de l'auteur"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>


          <div className="mb-4 flex">
            <input
              type="text"
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
              placeholder="Ajouter un genre"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={handleAddGenre}
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
            >
              Ajouter
            </button>
          </div>
          <div className="mb-4">
            {genres.map((genre, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{genre}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveGenre(genre)}
                  className="text-red-500"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="URL de la couverture du livre"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-green-project text-white px-4 py-2 rounded-md mr-2">Ajouter</button>
            <button type="button" onClick={() => setIsModalOpen(false)} className="text-red-500 px-4 py-2 rounded-md">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
};