import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomaRoutingModule } from './soma-routing-module';
import { Somacomp } from './soma-comp/somacomp';


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
