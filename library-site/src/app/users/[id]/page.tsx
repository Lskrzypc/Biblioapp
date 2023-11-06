'use client'

import { Header, UserCard } from "@/components";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useUsersProviders } from '@/hooks';


const UserDetailsPage: FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState<any>(null);

    const { useListUsers } = useUsersProviders();
    const { users } = useListUsers();

    useEffect(() => {
        const fetchUserDetails = async () => {
            const userDetails = users.find((user: any) => user.id === id);
            setUser(userDetails);
        };

        fetchUserDetails();
    }, [id, users]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <UserCard 
                photo={user.photoUrl} 
                firstname={user.firstName} 
                lastname={user.lastName} 
            />
        </>
    );
};

export default UserDetailsPage;