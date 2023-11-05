import axios from 'axios';
import { useState } from 'react';
import { CreateAuthorModel, PlainAuthorModel, UpdateAuthorModel } from '@/models'; // Assurez-vous d'importer le modèle d'auteur approprié

type UseAuthorProvider = {
  authors: PlainAuthorModel[];
  createAuthor: (author: CreateAuthorModel) => void;
  updateAuthor: (authorId: string, author: UpdateAuthorModel) => void;
  deleteAuthor: (authorId: string) => void;
  loadAuthors: () => void;
};

export const useAuthorProvider = (): UseAuthorProvider => {
  const [authors, setAuthors] = useState<PlainAuthorModel[]>([]);

  const loadAuthors = (): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/authors`)
      .then((data) => setAuthors(data.data))
      .catch((err) => console.error(err));
  };

  const createAuthor = (author: CreateAuthorModel): void => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/authors`, author)
      .then(() => {
        // La création de l'auteur a réussi. Vous pouvez mettre à jour l'état ou afficher un message de confirmation ici.
      })
      .catch((err) => console.error(err));
  };

  const updateAuthor = (authorId: string, author: UpdateAuthorModel): void => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/authors/${authorId}`, author)
      .then(() => {
        // La mise à jour de l'auteur a réussi. Vous pouvez mettre à jour l'état ou afficher un message de confirmation ici.
      })
      .catch((err) => console.error(err));
  };

  const deleteAuthor = (authorId: string): void => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/authors/${authorId}`)
      .then(() => {
        window.location.href = "/authors";
        // La suppression de l'auteur a réussi. Vous pouvez mettre à jour l'état ou afficher un message de confirmation ici.
      })
      .catch((err) => console.error(err));
  };

  return { authors, createAuthor, updateAuthor, deleteAuthor, loadAuthors };
};

type AuthorProviders = {
  useAuthorProvider: () => UseAuthorProvider;
};

export const useAuthorProviders = (): AuthorProviders => ({
  useAuthorProvider,
});
