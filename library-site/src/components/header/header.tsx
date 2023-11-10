// Desc: Header qui sera présent sur toutes les pages
// Auteur: Louis SKRZYPCZAK

import { FC, useState } from 'react';

// Redirections vers les différentes pages
const handleLogOut = () => {
  window.location.href = '/';
};

const goToBooks = () => {
  window.location.href = '/books';
};

const goToAuthors = () => {
  window.location.href = '/authors';
};

const goToUsers = () => {
  window.location.href = '/users';
};

export const Header: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-16">
      <div className="flex items-center justify-center h-full relative">
        <button onClick={toggleMenu}>
          <svg
            className={`ml-6 ease-in duration-300 cursor-pointer ${
              isMenuOpen ? 'transform rotate-180' : ''
            }`}
            width="36px"
            height="36px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 12.32H22"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 18.32H22"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 6.32001H22"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-rose-project">
            <ul className="py-2 text-gray-project font-outfit font-semibold text-center text-white cursor-pointer">
              <li
                onClick={handleLogOut}
                className="px-4 py-2 hover:animate-bounce"
              >
                Accueil
              </li>
              <li
                onClick={goToBooks}
                className="px-4 py-2 hover:animate-bounce"
              >
                Les livres
              </li>
              <li
                onClick={goToAuthors}
                className="px-4 py-2 hover:animate-bounce"
              >
                Auteurs
              </li>
              <li
                onClick={goToUsers}
                className="px-4 py-2 hover:animate-bounce"
              >
                Utilisateurs
              </li>
            </ul>
          </div>
        )}

        <span className="font-outfit text-gray-project font-semibold text-3xl w-full">
          <p className="text-center">BiblioTech</p>
        </span>

        <button>
          <svg
            className="mr-6 hover:animate-bounce"
            onClick={handleLogOut}
            width="36px"
            height="36px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M19 5L5 19M5.00001 5L19 19"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};
