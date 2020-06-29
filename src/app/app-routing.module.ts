import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './colaborator/menu/menu.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: "menu-component", component: MenuComponent },
  { path: "header-component", component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
