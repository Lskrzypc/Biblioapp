'use client';

import { Header } from '@/components';
import { useParams } from 'next/navigation';
import { FC, useEffect } from 'react';
import { useBookByIdProviders, useDeleteBook } from '@/hooks';

const BooksDetailsPage: FC = () => {
  const { id } = useParams();

  const idBookToDelete: string = id.toString();

  const handleDeleteBook = () => {
    useDeleteBook(idBookToDelete);
  }

  const { useBookById } = useBookByIdProviders();
  const { book, load } = useBookById();

  useEffect(() => load(idBookToDelete), []);

  return (
    <>
      <Header />
      Books details &apos;
      {id}
      &apos; not implemented
      <button onClick={handleDeleteBook}>Delete</button>
    </>
  );
};

export default BooksDetailsPage;
