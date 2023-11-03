'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Title } from '@/components';

interface AuthorModel {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
}

const handleAuthorClick = (id: string) => {
  window.location.href = `/authors/${id}`;
}


const AuthorsPage: React.FC = () => {
  const [authors, setAuthors] = useState<AuthorModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/authors`)
      .then(response => setAuthors(response.data))
      .catch(error => console.error("Erreur lors de la récupération de la liste des auteurs:", error));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-y-10">
        <span className="pl-6">
          <Title content="Les Auteurs :" />
        </span>

        <div className="mx-6 mt-4 flex items-center bg-black-project rounded-full p-2 w-60 h-8">
        <span className="inline-block mr-2"> {/* Icône de loupe */}
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.5" cy="10.5" r="6" />
              <line x1="15.5" y1="15.5" x2="20" y2="20" />
            </svg>

          </span>
          <input
            className="flex-grow text-white bg-transparent outline-none px-4 rounded-full"
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <div className="flex text-xs font-regular text-white items-center justify-center">
          <button className="px-8 h-10 bg-green-project rounded-xl">Ajouter</button>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-10 pl-6 pr-6">
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default AuthorsPage;
