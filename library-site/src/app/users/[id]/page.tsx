'use client'

import { Header } from "@/components";
import { useParams } from "next/navigation"
import { FC } from "react"

const UsersDetailsPage: FC = () => {
    const { id } = useParams()
    
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