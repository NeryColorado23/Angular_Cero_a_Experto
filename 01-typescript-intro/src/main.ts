import './style.css';

//importar 01-typescript-intro/src/main.ts
//import './topics/01-basic-types';

//import './topics/02-objects-interfaces';
import'./topics/03-functions';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `Hola Mundo`;
console.log("Hola Mundo desde TypeScript");
