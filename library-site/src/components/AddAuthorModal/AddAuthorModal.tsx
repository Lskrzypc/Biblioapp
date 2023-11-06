import React, { useState } from 'react';

interface AddAuthorModalProps {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  onAddAuthor: (author: { id: string; firstName: string; lastName: string; photoUrl: string }) => void;
}

const AddAuthorModal: React.FC<AddAuthorModalProps> = ({ isOpen, setIsModalOpen, onAddAuthor }) => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onAddAuthor({ id, firstName, lastName, photoUrl });
    setIsModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
    <div className="modal bg-white rounded-lg p-6 max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>

        <div className="mb-4">
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom" required className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="mb-4">
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" required className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="mb-4">
            <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} placeholder="URL de la photo" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="flex justify-end">
            <button type="submit" className="bg-green-project text-white px-4 py-2 rounded-md mr-10">Ajouter</button>
            <button type="button" onClick={() => setIsModalOpen(false)} className="text-red-500 px-4 py-2 rounded-md">Annuler</button>
        </div>
        </form>
    </div>
    </div>
  );
};

export default AddAuthorModal;
