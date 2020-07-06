import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HouseComponent } from './colaborator/house/house.component';
import { ArticleComponent } from './colaborator/article/article.component';
import { OpinionComponent } from './colaborator/opinion/opinion.component';
import { MusicListComponent } from './colaborator/music-list/music-list.component';
import { PersonalComponent } from './colaborator/personal/personal.component';


const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "colaborator/house", component: HouseComponent },
  { path: "colaborator/personal", component: PersonalComponent},
  { path: "colaborator/article", component: ArticleComponent},
  { path: "colaborator/musicList", component: MusicListComponent},
  { path: "colaborator/opinion", component: OpinionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
