import { Component } from '@angular/core';
import { WebSocketService } from '../web-socket.service'; // Import WebSocket service
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin', // Updated selector for signin
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = { email: '', password: '' };
  errorMessage = '';

  constructor(private webSocketService: WebSocketService, private router: Router) {}

  async onSubmit() {
    try {
      // Send signin data via WebSocket
      this.webSocketService.emit('signin', this.user);

      // Wait for the backend response via WebSocket
      this.webSocketService.listen('signinResponse').subscribe((response: any) => {
        if (response.success) {
          console.log('Signin successful', response);
          this.router.navigate(['/dashboard']); // Replace with your desired path
        } else {
          // Handle signin errors
          this.errorMessage = response.message;
          console.error('Error during signin', response);
        }
      });
    } catch (error) {
      // Handle WebSocket send errors
      this.errorMessage = 'An unknown error occurred';
      console.error('Error during signin', error);
    }
  }
}
