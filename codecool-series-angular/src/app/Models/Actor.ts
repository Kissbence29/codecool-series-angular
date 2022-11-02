import { ShowCharacters } from "./ShowCharacters";

export interface Actor{
    id?:number;
    name?:string;
    birthday?:Date;
    death?:Date;
    biography?:string;
    showCharacters?:ShowCharacters[];
}