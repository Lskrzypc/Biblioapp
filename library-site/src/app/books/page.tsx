'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Title, AddBookModal } from '@/components';


interface Author {
  id: string;
  firstName: string;
  lastName: string;
}

interface BookModel {
  id: string;
  title: string;
  author: Author;
  genres: string[];
  photoUrl: string;
}

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (id: string) => {
    window.location.href = `/books/${id}`;
  }

  const handleAddBook = (bookData: { title: string; authorId: string; authorFirstName: string; authorLastName: string; genres: string[]; photoUrl: string }) => {

    const newBook = {
      title: bookData.title,
      author: {
        id: bookData.authorId,
        firstName: bookData.authorFirstName,
        lastName: bookData.authorLastName,
      },
      genres: bookData.genres,
      photoUrl: bookData.photoUrl,
    };

 
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/books`, newBook)
      .then(response => {
        setBooks(currentBooks => [...currentBooks, response.data]);
      })
      .catch(error => console.error("Erreur lors de l'ajout du livre:", error));
  };

  const handleAddBookClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/books`)
      .then(response => setBooks(response.data))
      .catch(error => console.error("Erreur lors de la récupération de la liste des livres:", error));
  }, []);

  return (
    <div className="flex flex-col gap-y-10">
      <Header />
      <span className='pl-6'><Title content="Les livres :" /></span>
      

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
        {books.map(book => (
          <div className="w-80 h-20 flex items-center border-2 border-gray-project rounded-lg" key={book.id}>
            <div className='pl-3 h-16 w-20 '>
              <img className='object-cover h-full w-full rounded-lg' src={book.photoUrl} alt={book.title} />
            </div>
            <div className='flex flex-col justify-center pl-3'>
              <p className='font-outfit font-semibold text-gray-project'>{book.title}</p>
              <p className='font-outfit text-gray-project'>{`${book.author.firstName} ${book.author.lastName}`}</p>
              <div className='flex'>
                {book.genres.map((genre, index) => (
                  <span key={index} className='text-xs font-light text-gray-project mr-2'>{genre}</span>
                ))}
              </div>
            </div>
            <button aria-label="View book" className='ml-auto pr-5' onClick={() => handleBookClick(book.id)}>

            </button>
          </div>
        ))}
      </div>


      <span className='flex text-xs font-regular text-white items-center justify-center'>
        <button onClick={handleAddBookClick} aria-label="Add book" className='px-8 h-10 bg-green-project rounded-xl'>
          Ajouter un livre
        </button>
      </span>

      <AddBookModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onAddBook={handleAddBook} />
    </div>
  );
};

export default BooksPage;