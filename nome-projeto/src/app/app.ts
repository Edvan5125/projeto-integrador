import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-integrador');
  //Metodo construtor objeto router no template, isso é feito injetando o Router no componente e tornando-o público, assim o template pode acessar router.url
  constructor(public router: Router) {}
}

