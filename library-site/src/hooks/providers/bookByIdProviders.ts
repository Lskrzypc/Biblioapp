import axios from 'axios';
import { useState } from 'react';
import { PlainBookModel } from '@/models';

type UseBookByIdProvider = {
  book: PlainBookModel;
  load: (id: string) => void;
};

export const useBookById = (): UseBookByIdProvider => {
  const [book, setBook] = useState<PlainBookModel>({} as PlainBookModel);

  const fetchBook = (id: string): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`)
      .then((data) => setBook(data.data))
      .catch((err) => console.error(err));
  };

  return { book, load: fetchBook };
};

type BookByIdProviders = {
  useBookById: () => UseBookByIdProvider;
};

export const useBookByIdProviders = (): BookByIdProviders => ({
  useBookById,
});
