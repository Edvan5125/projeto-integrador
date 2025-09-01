import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})

export class Estoque {
  produtos = [
    { nome: 'Notebook', preco: 2500, estoque: 5 },
    { nome: 'Mouse', preco: 80, estoque: 0 },
    { nome: 'Teclado', preco: 150, estoque: 10 },
    { nome: 'Monitor', preco: 1200, estoque: 2 },
    { nome: 'Cadeira Gamer', preco: 3000, estoque: 0 }
  ];

  aumentarPrecos() {
    this.produtos = this.produtos.map(p => ({ ...p, preco: +(p.preco * 1.1).toFixed(2) }));
  }

  diminuirPrecos() {
    this.produtos = this.produtos.map(p => ({ ...p, preco: +(p.preco * 0.9).toFixed(2) }));
  }
}
