
'use client';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useUsersProviders } from '@/hooks';
import { UserCard, Header, Title } from '@/components';

const UsersPage: FC = (): ReactElement => {
  const { useListUsers } = useUsersProviders();
  const { users, load } = useListUsers();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-y-10">
        <span className="pl-6">
          <Title content="Les utilisateurs" />
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
      </div>
    </div>
  );
};

export default UsersPage;
