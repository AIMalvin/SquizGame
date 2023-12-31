import { Server, Socket } from 'socket.io';
import User from './User';


type UserData = {
    email: string;
    password: string;
};

export const configureWebSocket = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        console.log('Client connected');


        socket.on('signup', (userData: UserData) => {

            User.create(userData)
                .then((user: User) => {
                    socket.emit('signupResponse', { success: true, message: 'Inscription réussie' });
                })
                .catch((error: Error) => {
                    socket.emit('signupResponse', { success: false, message: 'Erreur lors de l\'inscription' });
                });
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};
