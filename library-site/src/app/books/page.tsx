'use client';

import { FC, ReactElement, useEffect } from 'react';
import { useBooksProviders } from '@/hooks';
import { Header, Title } from '@/components';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, load } = useListBooks();

  useEffect(() => load, []);

  return (
    <div className="flex flex-col gap-y-10">
      <Header />
      <span className="pl-6"><Title content="Les livres" /></span>
    </div>
  );
};

export default BooksPage;
