'use client';

import { FC, ReactElement, useEffect } from 'react';
import { useUsersProviders } from '@/hooks';
import { Header, Title } from '@/components';

const UsersPage: FC = (): ReactElement => {
  const { useListUsers } = useUsersProviders();
  const { users, load } = useListUsers();

  useEffect(() => load, []);

  return (
    <div className="flex flex-col gap-y-10">
      <Header />
      <span className="pl-6">
        <Title content="Les utilisateurs" />
      </span>

      <span className="pl-6">
        Cher lecteurs, cette page est en construction, merci de revenir plus
        tard !
      </span>
    </div>
  );
};
export default UsersPage;
