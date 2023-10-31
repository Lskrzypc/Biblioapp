'use client';
import { FC, ReactElement, useEffect } from 'react';
import { useUsersProviders } from '@/hooks';
import {UserCard, Header} from '@/components';

const UsersPage: FC = (): ReactElement => {
    const { useListUsers } = useUsersProviders();
    const { users, load } = useListUsers();
    
    useEffect(() => load, []);
    
    return (
        <>
        <Header />
        <h1>Users</h1>
        {users.map((user) => (
            <div key={user.id}>{user.firstname}{user.lastname}</div>
        ))}
        </>
    );
};
export default UsersPage;
