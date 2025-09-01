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
//cria um array chamado produtos com objetos representando cada produto, contendo nome, preço e quantidade em estoque
  aumentarPrecos() {
    this.produtos = this.produtos.map(p => ({ ...p, preco: +(p.preco * 1.1).toFixed(2) }));
  }
//função que aumenta o preço de todos os produtos em 10%, usa map para criar um novo array, copiando cada produto e multiplicando o preço por 1.1, o toFixed(2) garante duas casas decimais, e o + converte para número
  diminuirPrecos() {
    this.produtos = this.produtos.map(p => ({ ...p, preco: +(p.preco * 0.9).toFixed(2) }));
  }
//função que diminui o preço de todos os produtos em 10%, usa map para criar um novo array, copiando cada produto e multiplicando o preço por 0.9 e o toFixed(2) garante duas casas decimais, e o + converte para número
}
