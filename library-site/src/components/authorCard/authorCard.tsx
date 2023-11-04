// import { FC } from 'react';

// type Author = {
//     id: string;
//     firstName: string;
//     lastName: string;
//     photoUrl: string;
// };

// type AuthorCardProps = {
//     auteur: Author;
// };

// export const UserCard: FC<AuthorCardProps> = ({ photoUrl, firstName, lastName, id }) => (
//     <div className="flex items-center w-82 h-24 p-3 gap-28 rounded-md border-2 border-gray-400">
//         <img
//             src={photo}
//             alt={`${firstName} ${lastName}`}
//             className="w-12 h-12 rounded-full"
//         />
//         <div className="text-gray-project">
//             {firstName} {lastName}
//         </div>
//         {onClose && (
//             <div onClick={onClose} className="w-5 h-5 cursor-pointer bg-gradient-to-r from-gray-500 to-black bg-cover"></div>
//         )}
//     </div>
// );