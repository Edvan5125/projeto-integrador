import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  cursos = [
    { nome: 'Angular', ativo: true},
    { nome: 'React', ativo: true},
    { nome: 'Vue',  ativo: true}
  ];


  fonte = 16;

  aumentarFonte() {
    this.fonte += 2;
  }

  diminuirFonte() {
    if (this.fonte > 8) {
      this.fonte -= 2;
    }
  }
}
