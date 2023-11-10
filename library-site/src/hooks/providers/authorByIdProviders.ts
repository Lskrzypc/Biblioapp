import axios from 'axios';
import { useState } from 'react';
import { PlainAuthorModel } from '@/models';

type UseAuthorByIdProvider = {
  author: PlainAuthorModel;
  load: (id: string) => void;
};

export const useAuthorById = (): UseAuthorByIdProvider => {
  const [author, setAuthor] = useState<PlainAuthorModel>(
    {} as PlainAuthorModel,
  );

  const fetchAuthor = (id: string): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/authors/${id}`)
      .then((data) => setAuthor(data.data))
      .catch((err) => console.error(err));
  };

  return { author, load: fetchAuthor };
};

type AuthorByIdProviders = {
  useAuthorById: () => UseAuthorByIdProvider;
};

export const useAuthorByIdProviders = (): AuthorByIdProviders => ({
  useAuthorById,
});
