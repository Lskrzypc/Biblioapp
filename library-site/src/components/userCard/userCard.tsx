import {FC} from 'react';

type UserCardProps = {
    firstname: string;
    lastname: string;
};

export const UserCard: FC<UserCardProps> = ({firstname, lastname}) => (
    <div>
        {firstname} {lastname}
    </div>
);

