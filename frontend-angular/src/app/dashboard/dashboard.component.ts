import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  navigateToPlay() {
    this.router.navigate(['/play']); // Update with your actual play route
  }

  navigateToStatistics() {
    this.router.navigate(['/stats']); // Update with your actual statistics route
  }

}
