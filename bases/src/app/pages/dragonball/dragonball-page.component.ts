import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

//crear interface para los personajes de dragonball
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  //imports: [NgClass]
})
export class DragonballPageComponent {
  //crear un signal para almacenar los personajes de dragonball usando <character>
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 100 },
    { id: 2, name: 'Vegeta', power: 90 },
    { id: 3, name: 'Gohan', power: 80 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  });
}
