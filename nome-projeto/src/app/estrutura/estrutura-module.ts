import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstruturaRoutingModule } from './estrutura-routing-module';
import { Diretiva } from './diretiva-comp/diretiva';
// Importe a Diretiva do arquivo correto, por exemplo:



@NgModule({
  declarations: [
    Diretiva
  ],
  imports: [
    CommonModule,
    EstruturaRoutingModule
  ]
})
export class EstruturaModule { }
