import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';

export const routes: Routes = [
  //para crear rutas se usa entre llaves {}

  {
    path:'',
    component: CounterPageComponent
  }
];
