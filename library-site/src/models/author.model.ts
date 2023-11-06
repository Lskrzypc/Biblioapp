export type PlainAuthorModel = {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
};

export type CreateAuthorModel = {
    firstName: string;
    lastName: string;
    photoUrl?: string;
};

export type UpdateAuthorModel = {
    firstName?: string;
    lastName?: string;
    photoUrl?: string;
};

export type AuthorModel = {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
}