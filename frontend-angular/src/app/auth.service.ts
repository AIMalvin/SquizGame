import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:3000'; // Remplacez par l'URL de votre backend

    async signUp(user: any): Promise<any> {
        const response = await fetch(`${this.apiUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            // Gestion des erreurs HTTP (par exemple, réponse 4xx/5xx)
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erreur lors de l\'inscription');
        }

        return response.json();
    }
}
