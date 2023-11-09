import React from 'react';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  authorName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  authorName,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal bg-white rounded-lg p-6 max-w-md mx-auto">
        <p className="mb-4">Êtes-vous sûr de vouloir supprimer l'auteur {authorName} ?</p>
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