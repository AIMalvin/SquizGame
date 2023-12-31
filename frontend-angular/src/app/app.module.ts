import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PlaygameComponent } from './play/play.component';
import { StatsComponent } from './stats/stats.component';
import { DuoComponent } from './duo/duo.component';
import { ThemeComponent } from './theme/theme.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomePageComponent} from "./home-page/home-page.component";
import { EndGameComponent } from './endgame/endgame.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    PlaygameComponent,
    StatsComponent,
    DuoComponent,
    HomePageComponent,
    ThemeComponent,
    PlaygameComponent,
    DashboardComponent,
    EndGameComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
