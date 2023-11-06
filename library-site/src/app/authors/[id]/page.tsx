'use client';

import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { Header, Title } from '@/components';


interface AuthorModel {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
}

const AuthorDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState<AuthorModel | null>(null);

  const DeleteAuthor = () => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/authors/${id}`)
    .then(response => {
    console.log(response);
    window.location.href = "/authors"}
    )
    .catch(error => console.error("Erreur lors de la suppression de l'auteur:", error));
  }

  useEffect(() => {
    console.log("Authors page loaded");
 }, []);
 

  useEffect(() => {
   
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/authors/${id}`)
      .then(response => setAuthor(response.data))
      .catch(error => console.error("Erreur lors de la récupération de l'auteur:", error));
  }, [id]);

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
          <span className='flex font-regular items-center justify-center'><button onClick={DeleteAuthor} className="bg-red-400 text-white px-2 py-2 rounded-md" style={{ width: 'auto !important' }}>Supprimer cet auteur</button></span>


        </div>

      ) : (
        <Title content="Chargement..." />
      )}
    </>
  );
};

export default AuthorDetailsPage;
