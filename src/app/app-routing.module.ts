import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Configurando rotas dos botões
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dadospessoais',
    loadChildren: () => import('./pages/dadospessoais/dadospessoais.module').then( m => m.DadospessoaisPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./pages/financeiro/financeiro.module').then( m => m.FinanceiroPageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./pages/sair/sair.module').then( m => m.SairPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
