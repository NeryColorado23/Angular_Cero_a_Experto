import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


@Component({
  //importo componente html de counter
  templateUrl: './counter-page.component.html',
  styles: `
  button{
    padding: 5px;
    margin: 5px 10px;
    width: 75px;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})

//para crear componente se usa @component

export class CounterPageComponent {
 counter = 10;

 //señales o signals para comunicar componentes, se pueden usar para emitir eventos o datos entre componentes
 counterSignal = signal(10);

 constructor() {
  setInterval(() => {
    console.log('tick');
  },2000);
 }

 increaseBy(value: number){
  //use this para acceder a las propiedades de la clase counterpage de esta clase
  this.counter += value;
  this.counterSignal.update( (current) => current + value);
 }
  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
};
