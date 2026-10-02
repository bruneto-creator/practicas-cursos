import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({ providedIn: 'root' })
export class CategoriasService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/api/categorias';

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }
}
