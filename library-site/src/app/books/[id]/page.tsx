'use client';

import { Header } from '@/components';
import { useParams } from 'next/navigation';
import { FC } from 'react';

const BooksDetailsPage: FC = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      Books details &apos;
      {id}
      &apos; not implemented
    </>
  );
};

export default BooksDetailsPage;
