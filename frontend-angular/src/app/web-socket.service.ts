// web-socket.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: Socket;

  constructor() {
    // Replace with your WebSocket backend URL
    this.socket = io('http://localhost:3000');
  }

  // Method to emit a WebSocket event
  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  // Method to listen for a WebSocket event
  listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => {
        subscriber.next(data);
      });

      // Handle cleanup and disconnection
      return () => {
        this.socket.off(event);
      };
    });
  }
}
