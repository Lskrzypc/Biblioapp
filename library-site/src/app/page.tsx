// Desc: Home page of the application
// Ce code sera le seul à être en "dur" dans le projet, les autres pages seront générées avec des composants
// Il n'était pas nécessaire de faire autrement pour cette page

// Auteur: Louis SKRZYPCZAK

'use client';

import { FC, ReactElement } from 'react';
const handleLogin = () => {
  window.location.href = '/books';
};

const Home: FC = (): ReactElement => (
  <div className="flex flex-col w-full h-full py-56 items-center gap-7">
    <span className="font-outfit text-5xl text-gray-project font-semibold">
      BiblioTech
    </span>
    <span className="font-outfit text-base text-gray-project">
      Welcome back, Reader!
    </span>

    <div className="flex flex-col gap-7">
      <form className="w-96 h-11">
        <input
          className="text-xs font-outfit font-semibold pl-4 w-96 h-11 bg-rose-project bg-opacity-70 rounded-xl text-gray-project placeholder-gray-project"
          placeholder="Firstname"
          type="text"
          id="search"
        />
      </form>
      <form className="w-96 h-11">
        <input
          className="text-xs font-outfit font-semibold pl-4 w-96 h-11 bg-rose-project bg-opacity-70 rounded-xl text-gray-project placeholder-gray-project"
          placeholder="Lastname"
          type="text"
          id="search"
        />
      </form>
    </div>

    <button
      onClick={handleLogin}
      className="font-outfit text-white bg-black-project py-3 px-12 rounded-full shadow-md"
    >
      Login
    </button>
      <svg
      className="fixed bottom-0 left-0 z-0"
      width="1512"
      height="111"
      viewBox="0 0 1512 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0L62.6062 4.17052C126.394 8.34104 251.606 16.6821 378 30.7977C504.394 45.2341 629.606 65.7659 756 69.9364C882.394 74.1069 1007.61 61.5954 1134 57.7457C1260.39 53.5751 1385.61 57.7457 1449.39 59.6705L1512 61.5954V111H1449.39C1385.61 111 1260.39 111 1134 111C1007.61 111 882.394 111 756 111C629.606 111 504.394 111 378 111C251.606 111 126.394 111 62.6062 111H0V0Z"
        fill="#CE796B"
        fill-opacity="0.46"
      />
    </svg>
    <svg
      className="fixed bottom-0 left-0 z-0"
      width="1512"
      height="111"
      viewBox="0 0 1512 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 44.4L50.4 53.28C100.8 62.16 201.6 79.92 302.4 75.48C403.2 71.04 504 44.4 604.8 26.64C705.6 8.88 806.4 0 907.2 0C1008 0 1108.8 8.88 1209.6 24.42C1310.4 39.96 1411.2 62.16 1461.6 73.26L1512 84.36V111H1461.6C1411.2 111 1310.4 111 1209.6 111C1108.8 111 1008 111 907.2 111C806.4 111 705.6 111 604.8 111C504 111 403.2 111 302.4 111C201.6 111 100.8 111 50.4 111H0V44.4Z"
        fill="#CE796B"
        fill-opacity="0.77"
      />
    </svg>
  </div>
);

export default Home;
