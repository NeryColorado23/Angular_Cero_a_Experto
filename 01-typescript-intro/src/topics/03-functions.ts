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
const result: number = addNumbers(5,10);
const resultArrow: string = addNumberArrow(5,10);   
console.log({result});//se imprime en llaves para que imprima como objeto
console.log({resultArrow});//se imprime en llaves para que imprima como objeto  
export{};