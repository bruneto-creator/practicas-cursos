import { Component, inject, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {
  private servicio = inject(CategoriasService);
  categorias: Categoria[] = [];
  cargando = true;
  error = '';

  ngOnInit(): void {
    this.servicio.obtenerCategorias().subscribe({
      next: datos => {
        this.categorias = datos;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudieron obtener las categorías';
        this.cargando = false;
      }
    });
  }
}
