import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalSoundsPage } from './animal-sounds.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalSoundsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalSoundsPageRoutingModule {}
