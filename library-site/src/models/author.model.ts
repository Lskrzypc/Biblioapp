export type PlainAuthorModel = {
    id: string;
    firstName: string;
    lastName: string;
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

export type Author ={
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;

};