import React, { useState } from 'react';

interface AddBookModalProps {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  onAddBook: (book: { title: string; author: string; genre: string; photoUrl: string }) => void;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, setIsModalOpen, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onAddBook({ title, author, genre, photoUrl });
    setIsModalOpen(false);
    setTitle('');
    setAuthor('');
    setGenre('');
    setPhotoUrl('');
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Auteur du livre"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Genre du livre"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
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

export default AddBookModal;