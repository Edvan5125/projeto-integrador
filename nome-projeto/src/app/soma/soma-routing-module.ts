import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from '../app';

const routes: Routes = [
  {path: 'soma', component: App}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomaRoutingModule { }
