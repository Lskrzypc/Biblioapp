'use client';

import { Title, Header, Breadcrumb, ConfirmDeleteBookModal } from '@/components';
import { useParams } from 'next/navigation';
import React, { useEffect, useState  } from 'react';
import { useBookByIdProviders, useDeleteBook } from '@/hooks';


const BooksDetailsPage: React.FC = () => {
  const { id } = useParams();

  const idBookToDelete: string = id.toString();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteBook = () => {
    setIsDeleteModalOpen(true);
  }

  const confirmDeleteBook = () => {
    useDeleteBook(idBookToDelete);
  };

  const cancelDeleteBook = () => {
    setIsDeleteModalOpen(false);
  };

  const { useBookById } = useBookByIdProviders();
  const { book, load } = useBookById();

  const breadcrumbItems = [
    { text: "Accueil", href: "/" },
    { text: "Livres", href: "/books" },
    {text: `${book.name}`, href: `/books/${book.id}`}
  ];


  useEffect(() => {
    console.log("Books page loaded")
  }, []);;

  useEffect(() => load(idBookToDelete), []);


  return (
    <>
    {book ? (
      <div className='flex flex-col gap-y-8'>

        <div className='flex flex-col gap-y-10'>
          <Header />
          <Breadcrumb items={breadcrumbItems} />
          <div className='w-full flex items-center justify-center'>
            <img src={book?.author?.photoUrl} alt='' className='w-82 h-96 rounded-full object-cover' />
          </div>

        </div>

        <span className="text-center"><Title content={`${book.name || ''}`} /></span>      
        <p className='font-outfit font-semibold text-gray-project text-center'> {`${book?.author?.firstName || ''} ${book?.author?.lastName || ''}`}</p>
        <p className='font-outfit font-semibold text-gray-project text-center'> {`${book?.genres || ''}`}</p>


        <div className="text-center">
            <div className="mb-5">
              <div className="border border-red-500 inline-block">
                <button onClick={handleDeleteBook} className="text-red-500 px-4 py-2 rounded-md">SUPPRIMER</button>
              </div>
            </div>
            <ConfirmDeleteBookModal
            isOpen={isDeleteModalOpen}
            bookName={book.name || ''}
            onConfirm={confirmDeleteBook}
            onCancel={cancelDeleteBook}
          />
        </div>

      </div>
      ) : (
      <Title content="Chargement..." />
    )}
    </>
  );
};

export default BooksDetailsPage;