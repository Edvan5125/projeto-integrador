import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Estoque } from './estoque-comp/estoque';


const routes: Routes = [
   {path: '', component: Estoque}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
