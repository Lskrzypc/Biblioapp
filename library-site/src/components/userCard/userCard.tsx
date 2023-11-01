import { FC } from 'react';

type UserCardProps = {
    photo: string; 
    firstname: string;
    lastname: string;
    onClose?: () => void;
};

export const UserCard: FC<UserCardProps> = ({ photo, firstname, lastname, onClose }) => (
    <div className="flex items-center w-82 h-24 p-3 gap-28 rounded-md border-2 border-gray-400">
        <img
            src={photo}
            alt={`${firstname} ${lastname}`}
            className="w-12 h-12 rounded-full"
        />
        <div className="text-gray-project">
            {firstname} {lastname}
        </div>
        {onClose && (
            <div onClick={onClose} className="w-5 h-5 cursor-pointer bg-gradient-to-r from-gray-500 to-black bg-cover"></div>
        )}
    </div>
);
