interface AuditoPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
//interface Details especifica 
interface Details{
    author: string;
    year: number;
}



export {};
