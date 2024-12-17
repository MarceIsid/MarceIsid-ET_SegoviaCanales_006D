
export interface Users{
    id:string;
    username:string;
    email:string;
    image?: string;
    password:string;
    isactive: boolean;
}

export interface UserNuevo{
    username:string;
    email:string;
    image?: string;
    password:string;
    isactive: boolean;
}