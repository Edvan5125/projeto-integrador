import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Somacomp } from './soma-comp/somacomp';

const routes: Routes = [
  {path: '', component: Somacomp}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomaRoutingModule { }
