'use client';

import { FC, ReactElement, useEffect } from 'react';
import { useBooksProviders } from '@/hooks';
import { Header } from '@/components';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, load } = useListBooks();

  useEffect(() => load, []);

  return (
    <>
      <Header />
      <h1>Books page</h1>
      {books.map((book) => (
        <div key={book.id}>{book.name}</div>
      ))}
    </>
  );
};

export default BooksPage;
