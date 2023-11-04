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
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom" required />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" required />
        <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} placeholder="URL de la photo" />
        <button type="submit">Ajouter</button>
        <button type="button" onClick={() => setIsModalOpen(false)}>Annuler</button>
      </form>
    </div>
  );
};

export default AddAuthorModal;
