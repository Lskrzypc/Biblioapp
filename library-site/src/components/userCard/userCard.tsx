import {FC} from 'react';

type UserCardProps = {
    photo: string; // URL de la photo
    firstname: string;
    lastname: string;
    onClose?: () => void; // Optionnel, une fonction de rappel pour gérer la fermeture de la carte
};

export const UserCard: FC<UserCardProps> = ({photo, firstname, lastname, onClose}) => (
    <div style={{
        display: 'flex',
        width: '328px',
        height: '90px',
        padding: '12px 15px',
        alignItems: 'center',
        gap: '113px',
        borderRadius: '9px',
        border: '1.8px solid rgba(83, 77, 86, 0.7)' // Utilisation de la couleur fournie
    }}>
        <img 
            src={photo} 
            alt={`${firstname} ${lastname}`} 
            style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%',
            }} 
        />
        <div style={{
            color: '#333333' // Utilisation de la couleur fournie
        }}>
            {firstname} {lastname}
        </div>
        {onClose && (
            <div onClick={onClose} style={{
                width: '20px',
                height: '20px',
                cursor: 'pointer',
                background: 'url(path_to_cross-square_icon)', // Remplacez "path_to_cross-square_icon" par le chemin de votre icône
                backgroundSize: 'cover'
            }}></div>
        )}
    </div>
);
