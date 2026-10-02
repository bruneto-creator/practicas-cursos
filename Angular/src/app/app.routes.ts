import { Routes } from '@angular/router';
import { Ciudades } from './practicas/ciudades/ciudades';
import { Suma } from './practicas/suma/suma';
import { Cards } from './practicas/cards/cards';
import { Categorias } from './practicas/categorias/categorias';

export const routes: Routes = [
  { path: 'ciudades', component: Ciudades },
  { path: 'suma/:primerNumero/:segundoNumero', component: Suma },
  { path: 'cards', component: Cards },
  { path: 'categorias', component: Categorias },
  { path: '', redirectTo: 'ciudades', pathMatch: 'full' },
  { path: '**', redirectTo: 'ciudades' }
];
