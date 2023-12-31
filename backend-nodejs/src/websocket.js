const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Un client est connecté');

    socket.on('disconnect', () => {
        console.log('Un client s’est déconnecté');
    });

    // Autres gestionnaires d'événements...
});

server.listen(3000, () => {
    console.log('Serveur WebSocket écoutant sur le port 3000');
});
