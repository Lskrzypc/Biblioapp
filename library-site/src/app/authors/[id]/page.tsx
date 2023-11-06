'use client';

import React, {useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Header, Title } from '@/components';
import { useDeleteAuthor, useAuthorByIdProviders } from '@/hooks';



const AuthorDetailsPage: React.FC = () => {
  const { id } = useParams();
  
  const idAuthorToDelete: string = id.toString();

  const { useAuthorById } = useAuthorByIdProviders();
  const { author, load } = useAuthorById();
  
  useEffect(() => load(idAuthorToDelete), []);


  useEffect(() => {
    console.log("Authors page loaded");
 }, []);

  const handleDeleteAuthor = () => {
    useDeleteAuthor(idAuthorToDelete);
  }

  return (
    <>
      {author ? (
        <div className='flex flex-col gap-y-8'>

          <div className='flex flex-col gap-y-10'>
         
            <Header />

            <div className='w-full flex items-center justify-center'>
              <img src={author.photoUrl} alt='' className='w-82 h-96 rounded-full object-cover'></img>
            </div>

          </div>

          <span className="text-center"><Title content={author.firstName + ' ' + author.lastName} /></span>

          <button onClick={handleDeleteAuthor}>SUPPRIMER</button>
        
          
        </div>




      ) : (
        <Title content="Chargement..." />
      )}
    </>
  );
};
export default AuthorDetailsPage;