import React, { useState } from 'react';
import { useCreateAuthor } from '@/hooks/creaters/authorCreaters';

interface AddAuthorModalProps {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const AddAuthorModal: React.FC<AddAuthorModalProps> = ({ isOpen, setIsModalOpen}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  // This is the object that will be sent to the API
  const authorToCreate = {
    firstName,
    lastName,
    photoUrl
  };

  // This function will be called when the form is submitted
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    useCreateAuthor(authorToCreate);
  };

  if (!isOpen) return null;

  // Component code here
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
            <button type="submit" className="bg-green-project text-white px-4 py-2 rounded-md mr-2">Ajouter</button>
            <button type="button" onClick={() => setIsModalOpen(false)} className="text-red-500 px-4 py-2 rounded-md">Annuler</button>
        </div>
        </form>
    </div>
    </div>
  );
};

