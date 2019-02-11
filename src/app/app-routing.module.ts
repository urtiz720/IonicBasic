import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lugar', loadChildren: './lugar/lugar.module#LugarPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'tabs', component: TabsPage, children:[
      { path: 'home',  loadChildren: './home/home.module#HomePageModule' },
      { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
      { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  ]
  },   { path: 'tercera', loadChildren: './tercera/tercera.module#TerceraPageModule' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
