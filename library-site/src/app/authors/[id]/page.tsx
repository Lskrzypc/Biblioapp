'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Header, Title, Breadcrumb, ConfirmDeleteModal } from '@/components';
import { useDeleteAuthor, useAuthorByIdProviders } from '@/hooks';

const AuthorDetailsPage: React.FC = () => {
  const { id } = useParams();

  const idAuthorToDelete: string = id.toString();

  const { useAuthorById } = useAuthorByIdProviders();
  const { author, load } = useAuthorById();

  const breadcrumbItems = [
    { text: 'Accueil', href: '/' },
    { text: 'Auteurs', href: '/authors' },
    {
      text: `${author.firstName} ${author.lastName}`,
      href: `/authors/${author.id}`,
    },
  ];
  useEffect(() => load(idAuthorToDelete), []);
  useEffect(() => {
    console.log('Authors page loaded');
  }, []);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteAuthor = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAuthor = () => {
    useDeleteAuthor(idAuthorToDelete);
  };

  const cancelDeleteAuthor = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      {author ? (
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-10">
            <Header />
            <Breadcrumb items={breadcrumbItems} />

            <div className="w-full flex items-center justify-center">
              <img
                src={author.photoUrl}
                alt=""
                className="w-82 h-96 rounded-full object-cover"
              />
            </div>
          </div>

          <span className="text-center">
            <Title content={`${author.firstName} ${author.lastName}`} />
          </span>
          <div className="text-center">
            <div className="mb-5">
              <div className="border border-red-500 inline-block">
                <button
                  onClick={handleDeleteAuthor}
                  className="text-red-500 px-4 py-2 rounded-md"
                >
                  SUPPRIMER
                </button>
              </div>
            </div>
          </div>
          <ConfirmDeleteModal
            isOpen={isDeleteModalOpen}
            authorName={`${author.firstName} ${author.lastName}`}
            onConfirm={confirmDeleteAuthor}
            onCancel={cancelDeleteAuthor}
          />
        </div>
      ) : (
        <Title content="Chargement..." />
      )}
    </>
  );
};
export default AuthorDetailsPage;
