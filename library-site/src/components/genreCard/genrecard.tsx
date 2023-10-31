import { FC } from 'react';

type Genre = {
    name: string;
  };

type GenreCardProps = {
    genre: Genre;
};

export const GenreCard: FC<GenreCardProps> = ({ genre }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '258.4px',
        height: '166px',
        padding: '36px 57px',
        borderRadius: '10px',
        backgroundColor: 'rgba(206, 121, 107, 0.70)',
        gap: '10px',
        flexShrink: 0
    }}>
        <div style={{ color: '#333333' }}>{genre.name}</div>
    </div>
);
