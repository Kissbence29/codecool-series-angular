import {Episode} from "src/app/Models/Episode";
export interface Season
{
    id?:number;
    seasonNumber?:number;
    title?:string;
    overview?:string;
    showId?:number;
    episodes?:Episode[];

}