//funciones
function addNumbers(a: number, b: number){
    return a + b;
};

//funcion de flecha
const addNumberArrow = (a: number, b: number) => {
    return `${a * b}`;
}

//enviar datos a una función
//addNumbers(5,10);

//imprimir
//const result: number = addNumbers(5,10);
//const resultArrow: string = addNumberArrow(5,10);   
//console.log({result});//se imprime en llaves para que imprima como objeto
//console.log({resultArrow});//se imprime en llaves para que imprima como objeto  

interface character {
    name: string;
    hp: number;
    showHp: () => void; //agrego dos puntos, porque eso se retorna
}

const healCharacter = (character: character, amount: number) => {
    character.hp += amount;
}
const strider: character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`); //this hace referencia a la propiedad hp del objeto strider
    }
}

//mostrar hp antes de curar
strider.showHp();
//curar al personaje
healCharacter(strider, 20);
//mostrar hp después de curar
strider.showHp();

export{};