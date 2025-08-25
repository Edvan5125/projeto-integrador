import { Component } from '@angular/core';

@Component({
  selector: 'app-somacomp',
  standalone: false,
  templateUrl: './somacomp.html',
  styleUrl: './somacomp.css'
})
export class Somacomp {
  valor: number = 0;
  incrementar() {
    this.valor++;
  }
}
