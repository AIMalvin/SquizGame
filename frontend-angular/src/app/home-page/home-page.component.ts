// src/app/home-page/home-page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigateToSignin() {
    this.router.navigate(['/signin']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
