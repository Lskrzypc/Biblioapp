'use client'
import React, { FC, ReactElement, useEffect } from 'react';
import { useUsersProviders } from '@/hooks';
import { UserCard } from '@/components';

const UsersPage: FC = (): ReactElement => {
  const { useListUsers } = useUsersProviders();
  const { users, load } = useListUsers();

  useEffect(() => {
    load();
  }, []); // Assurez-vous que `load` soit appelé lorsque le composant est monté.

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
