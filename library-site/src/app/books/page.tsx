'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import { useBooksProviders } from '@/hooks';
import { Header, Title } from '@/components';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, load } = useListBooks();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const genres = ["Roman", "Science-Fiction", "Poésie", "Biographie", "Histoire"]; // Ajoutez d'autres genres si nécessaire

  const handleGenreClick = (genre: string) => {
    console.log(`Vous avez sélectionné le genre: ${genre}`);
    // Ici, ajoutez toute autre logique nécessaire, comme filtrer les livres par genre
  };

  useEffect(() => load, []);

  return (
    <div className="flex flex-col gap-y-10">
      <Header />

      <span className="pl-6">
        <Title content="Les livres" />
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
          onChange={e => setSearchTerm(e.target.value)} 
        />
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>


      <div className="flex flex-wrap gap-2 mx-6 mt-4">
        {genres.map((genre, index) => (
          <div 
            key={index}
            className="flex items-center justify-center px-6 py-2 bg-opacity-70 bg-[#CE796B] rounded-full cursor-pointer hover:bg-opacity-80"
            onClick={() => handleGenreClick(genre)}
          >
            <p className="text-white">{genre}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BooksPage;
