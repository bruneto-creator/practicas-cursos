import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.html',
  styleUrl: './suma.css'
})
export class Suma {
  private ruta = inject(ActivatedRoute);
  primerNumero = Number(this.ruta.snapshot.paramMap.get('primerNumero'));
  segundoNumero = Number(this.ruta.snapshot.paramMap.get('segundoNumero'));
  resultado = this.primerNumero + this.segundoNumero;
}
