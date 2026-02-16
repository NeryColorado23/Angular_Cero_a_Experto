import { Component } from '@angular/core';


@Component({
  template:`
    <h1>Hola Mundo {{counter}}</h1>
    <button (click)="increaseBy(1)">+1</button>
    <h2>Counter component page</h2>
    `
})

//para crear componente se usa @component

export class CounterPageComponent {
 counter = 10;
 increaseBy(value: number){
  //use this para acceder a las propiedades de la clase counterpage de esta clase
  this.counter += value;
 }
};
