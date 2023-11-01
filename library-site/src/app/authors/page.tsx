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
      {authors.map(author => (
        <div key={author.id}>
          {author.firstName} {author.lastName}
        </div>
      ))}
    </div>
  );
};

export default AuthorsPage;
