'use client';

import { useParams } from 'next/navigation';
import { FC } from 'react';
import { Header } from '@/components';

const AuthorDetailsPage: FC = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      Author details &apos;
      {id}
      &apos; not implemented
    </>
  );
};

export default AuthorDetailsPage;
