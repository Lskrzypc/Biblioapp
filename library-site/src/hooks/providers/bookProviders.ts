import axios from 'axios';
import { useState } from 'react';
import { CreateBookModel, PlainBookModel, UpdateBookModel } from '@/models';

type UseListBooksProvider = {
  books: PlainBookModel[];
  createBook: (book: CreateBookModel) => void;
  updateBook: (bookId: string, book: UpdateBookModel) => void;
  deleteBook: (bookId: string) => void;
  load: () => void;
};

export const useListBooks = (): UseListBooksProvider => {
  const [books, setBooks] = useState<PlainBookModel[]>([]);

  const fetchBooks = (): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/books`)
      .then((data) => setBooks(data.data))
      .catch((err) => console.error(err));
  };

  const createBook = (book: CreateBookModel): void => {
    axios 
      .post(`${process.env.NEXT_PUBLIC_API_URL}/books`, book)
      .then(() => {
        // La création du livre a réussi. Vous pouvez mettre à jour l'état ou afficher un message de confirmation ici.
      })
      .catch((err) => console.error(err));
  };

  const updateBook = (bookId: string, book: UpdateBookModel): void => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}`, book)
      .then(() => {
        // La mise à jour du livre a réussi. Vous pouvez mettre à jour l'état ou afficher un message de confirmation ici.
      })
      .catch((err) => console.error(err));
  };

  const deleteBook = (bookId: string): void => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}`)
      .then(() => {
        window.location.href = "/books";
        // La suppression du livre a réussi. Vous pouvez mettre à jour l'état ou afficher un message de confirmation ici.
      })
      .catch((err) => console.error(err));
  };

  return { books, load: fetchBooks, createBook, updateBook, deleteBook };
};

type BookProviders = {
  useListBooks: () => UseListBooksProvider;
};

export const useBooksProviders = (): BookProviders => ({
  useListBooks,
});
