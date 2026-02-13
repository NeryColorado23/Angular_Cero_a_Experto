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

const audioPlayer: AuditoPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Vince Staples',
        year: 2018,
    }
}

//desestructuración de objetos
const song = 'New Song';
const { song:anothersong, songDuration:duration, details  } = audioPlayer;
console.log('Song', anothersong);
console.log('Duration', duration);

const {author:autor, year:year} = details;
console.log('Author', autor);
console.log('Year', year);

/////////
//desestructuración de arrays
const [, , trunks = 'not found'] = ['Goku', 'Vegeta',];
console.error('Personaje 3', trunks);



export {};
