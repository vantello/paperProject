import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './colaborator/menu/menu.component';
import { HouseComponent } from './colaborator/house/house.component';
import { ArticleComponent } from './colaborator/article/article.component';
import { PersonalComponent } from './colaborator/personal/personal.component';
import { MusicListComponent } from './colaborator/music-list/music-list.component';
import { OpinionComponent } from './colaborator/opinion/opinion.component';
import { InterviewComponent } from './colaborator/interview/interview.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HouseComponent,
    ArticleComponent,
    PersonalComponent,
    MusicListComponent,
    OpinionComponent,
    InterviewComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
