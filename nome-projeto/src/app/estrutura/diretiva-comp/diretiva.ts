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
  // cria um array chamado cursos com três objetos, cada um representando um curso com nome e se está ativo

  fonte = 16;

  aumentarFonte() {
    this.fonte += 2;
  }
  //função que aumenta o valor de fonte em 2, ou seja, aumenta o tamanho da fonte
  diminuirFonte() {
    if (this.fonte > 8) {
      this.fonte -= 2;
    }
  }
  //função que diminui o valor de fonte em 2, mas só se o valor for maior que 8 (para evitar fonte muito pequena)
}
