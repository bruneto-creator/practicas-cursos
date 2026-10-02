import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  imports: [CommonModule],
  templateUrl: './ciudades.html',
  styleUrl: './ciudades.css'
})
export class Ciudades {
  ciudades = [
    { pais: 'México', ciudad: 'Mérida', habitantes: 50000 },
    { pais: 'Colombia', ciudad: 'Valledupar', habitantes: 45000 },
    { pais: 'Canadá', ciudad: 'Toronto', habitantes: 60000 },
    { pais: 'México', ciudad: 'Ciudad de México', habitantes: 80000 },
    { pais: 'Brasil', ciudad: 'Brasilia', habitantes: 30000 },
    { pais: 'Estados Unidos', ciudad: 'Nueva York', habitantes: 20000 }
  ];
}
