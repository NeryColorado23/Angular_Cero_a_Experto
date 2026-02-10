const skills: string[] = ['Bash','Counter','Healing'];

//la interface sirve para declarar que propiedades tiene y de que tipo de dato son
interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string; // ? indica que es opcional
}


const strider: Character ={
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter'],
};

//para hacer referencia de strider puedo usar punto para acceder a sus propiedades
strider.homeTown = 'Riverdale'; 

//imprimir en consola en tabla 
console.table(strider);


export{};
