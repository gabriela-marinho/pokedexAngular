import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //dessa forma sei q sempre vamos precisar carregar as paginas desse modulo abaixo
    loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
