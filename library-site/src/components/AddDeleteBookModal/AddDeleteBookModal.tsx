import React from 'react';

interface ConfirmDeleteBookModalProps {
  isOpen: boolean;
  bookName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteBookModal: React.FC<ConfirmDeleteBookModalProps> = ({ isOpen, bookName, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="modal bg-white rounded-lg p-6 max-w-lg mx-auto">
        <p>{`Êtes-vous sûr de vouloir supprimer le livre "${bookName}" ?`}</p>
        <div className="flex justify-end">
          <button type="button" onClick={onConfirm} className="text-red-500 px-4 py-2 border border-red-500 inline-block">
            SUPPRIMER
          </button>
          <button type="button" onClick={onCancel} className="text-red-500 px-4 py-2 rounded-md">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};