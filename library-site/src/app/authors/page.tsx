'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Title } from '@/components';

interface AuthorModel {
  id: string;
  firstName: string;
  lastName: string;
  // Ajoutez d'autres champs ici en fonction de votre modèle d'auteur
}

const AuthorsPage: React.FC = () => {
  const [authors, setAuthors] = useState<AuthorModel[]>([]);
  

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/authors`)
      .then(response => setAuthors(response.data))
      .catch(error => console.error("Erreur lors de la récupération de la liste des auteurs:", error));
  }, []);

  return (
    <div className="flex flex-col gap-y-10">

      <Header />

      <span className="pl-6"><Title content="Les Auteurs" /></span>

      <div className="flex flex-wrap gap-x-10 gap-y-10 pl-6 pr-6">

      {authors.map(author => (
        <div className="w-80 h-20 flex items-center border-2 border-gray-project rounded-lg" key={author.id}>
          <p className='font-outfit font-semibold text-gray-project pl-6 w-full text-left'>{author.firstName} {author.lastName}</p>
        </div>
      ))}


      </div>

    </div>
  );
};

export default AuthorsPage;
