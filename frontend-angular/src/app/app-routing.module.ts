// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component'; // Chemin correct
import { SigninComponent } from './signin/signin.component'; // Chemin correct
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaygameComponent } from './play/play.component';
import { StatsComponent } from './stats/stats.component';
import { EndGameComponent } from './endgame/endgame.component';
import { ThemeComponent } from './theme/theme.component';



// Importez les composants Signin et Signup si disponibles

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'play', component: PlaygameComponent },
  { path: 'endgame', component: EndGameComponent },
  { path: 'themes', component: ThemeComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'signin', component: SigninComponent },// Décommentez après avoir créé le composant// Décommentez après avoir créé le composant

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
