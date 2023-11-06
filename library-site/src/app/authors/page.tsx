'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Title, AddAuthorModal } from '@/components';

interface AuthorModel {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
}

const AuthorsPage: React.FC = () => {
  const [authors, setAuthors] = useState<AuthorModel[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAuthorClick = (id: string) => {
    window.location.href = `/authors/${id}`;
  }

  const handleAddAuthor = (newAuthor: AuthorModel) => {
    setAuthors((currentAuthors) => [...currentAuthors, newAuthor]);
  };

  const handleAddAuthorClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/authors`)
      .then(response => setAuthors(response.data))
      .catch(error => console.error("Erreur lors de la récupération de la liste des auteurs:", error));
  }, []);

  return (
    <div className="flex flex-col gap-y-10">
      <Header />
      <span className="pl-6"><Title content="Les Auteurs :" /></span>

      <div className="mx-6 mt-4 flex items-center bg-black-project rounded-full p-2 w-60 h-8">
        <span className="inline-block mr-2">
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

      <div className="flex flex-wrap gap-x-10 gap-y-10 pl-6 pr-6">
        {authors.map(author => (
          <div className="w-80 h-20 flex items-center border-2 border-gray-project rounded-lg" key={author.id}>
            <div className='pl-3 h-16 w-20 '><img className='object-cover h-full w-full rounded-lg' src={author.photoUrl} alt=''></img></div>
            <p className='font-outfit font-semibold text-gray-project pl-3 w-full text-left'>{author.firstName} {author.lastName}</p>
            <button aria-label="View author" className='pr-5' onClick={() => handleAuthorClick(author.id)}>
              <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z" fill="#5B8C5A"></path>
                  <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" fill="#5B8C5A"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="#5B8C5A"></path>
                </g>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <span className='flex text-xs font-regular text-white items-center justify-center'><button onClick={handleAddAuthorClick} aria-label="Add author" className='px-8 h-10 bg-green-project rounded-xl'>Ajouter un auteur</button></span>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-10">
        </div>
      )}
      <AddAuthorModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onAddAuthor={handleAddAuthor} />
      </div>
  );
};

export default AuthorsPage;