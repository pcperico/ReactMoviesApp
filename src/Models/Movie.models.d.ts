export interface Movie
{
    id:number;
    title:string;
    poster:string;
}

export interface landingPageDto
{
    cinemaListings?:Movie[],
    comingSoon?:Movie[]
}