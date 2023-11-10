'use client';

import { useParams } from 'next/navigation';
import { FC } from 'react';
import { Header } from '@/components';

const UsersDetailsPage: FC = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      Users details &apos;
      {id}
      &apos; not implemented
    </>
  );
};

export default UsersDetailsPage;
