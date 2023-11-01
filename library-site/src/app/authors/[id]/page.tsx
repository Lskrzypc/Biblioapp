'use client';

import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { Header } from '@/components';

interface AuthorModel {
  id: string;
  firstName: string;
  lastName: string;
}

const AuthorDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState<AuthorModel | null>(null);

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
      <Header />
      {author ? (
        <div>
          Nom : {author.firstName} {author.lastName}
        </div>
      ) : (
        <p>Chargement des détails de l'auteur...</p>
      )}
    </>
  );
};

export default AuthorDetailsPage;
