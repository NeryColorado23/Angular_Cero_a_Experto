import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',

  //usare pipes para mostrar el nombre en mayusculas
  imports: [UpperCasePipe]
})

export class HeroPageComponent {
//usar señales
name = signal('Ironman');
age = signal(45);

//señal computada para unir las señales de nombre y edad
heroDescription = computed(() => {
 const description = `${ this.name() } - ${ this.age() } años`;
 return description;
});

//señal computada para convertir el nombre a mayusculas
capitalizedName = computed(() => this.name().toUpperCase());


//metodo para unir nombres de senales
//getHeroDescription() {
//return `${ this.name() } - ${ this.age() } años`;
//}


//metodo para cambiar el nombre del heroe
changeHero() {
this.name.set('Spiderman');
this.age.set(30);
}

resetForm() {
this.name.set('Ironman');
this.age.set(45);
}

//metodo para cambiar la edad del heroe
changeAge() {
this.age.set(50);
}

}
