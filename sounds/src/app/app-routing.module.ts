import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'animal-sounds',
    pathMatch: 'full'
  },
  {
    path: 'animal-sounds',
    loadChildren: () => import('./pages/animal-sounds/animal-sounds.module').then( m => m.AnimalSoundsPageModule)
  },
  {
    path: 'animal-guess',
    loadChildren: () => import('./pages/animal-guess/animal-guess.module').then( m => m.AnimalGuessPageModule)
  },
  {
    path: 'credits',
    loadChildren: () => import('./pages/credits/credits.module').then( m => m.CreditsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
