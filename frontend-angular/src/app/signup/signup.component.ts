import { Component } from '@angular/core';
import { WebSocketService } from '../web-socket.service'; // Importez le service WebSocket
import { Router } from '@angular/router';
import io from 'socket.io-client'; // Importez la bibliothèque WebSocket

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    user = { email: '', password: '' };
    errorMessage = '';

    constructor(private webSocketService: WebSocketService, private router: Router) {}

    async onSubmit() {
        try {
            // Envoyez les données de signup via WebSocket
            this.webSocketService.emit('signup', this.user);

            // Attendre la réponse du backend via WebSocket
            this.webSocketService.listen('signupResponse').subscribe((response: any) => {
                if (response.success) {
                    console.log('Inscription réussie', response);
                    this.router.navigate(['/signin']); // Remplacer par le chemin de votre choix
                } else {
                    // Gérer les erreurs de signup
                    this.errorMessage = response.message;
                    console.error('Erreur lors de l\'inscription', response);
                }
            });
        } catch (error) {
            // Gérer les erreurs d'envoi WebSocket
            this.errorMessage = 'Une erreur inconnue est survenue';
            console.error('Erreur lors de l\'inscription', error);
        }
    }
}
