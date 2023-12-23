import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalGuessPage } from './animal-guess.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalGuessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalGuessPageRoutingModule {}
