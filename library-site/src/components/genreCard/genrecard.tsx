import { FC } from 'react';

type Genre = {
    name: string;
};

type GenreCardProps = {
    genre: Genre;
};

export const GenreCard: FC<GenreCardProps> = ({ genre }) => (
    <div className="flex justify-center items-center w-64 h-40 p-9 bg-rose-project bg-opacity-70 rounded-lg gap-2.5 flex-shrink-0">
        <div className="text-gray-project">{genre.name}</div>
    </div>
);
