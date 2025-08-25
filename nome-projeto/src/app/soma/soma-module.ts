import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomaRoutingModule } from './soma-routing-module';
import { Somacomp } from './somacomp/somacomp';


@NgModule({
  declarations: [
    Somacomp
  ],
  imports: [
    CommonModule,
    SomaRoutingModule
  ]
})
export class SomaModule { 
}
