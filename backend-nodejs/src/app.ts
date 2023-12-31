import express from 'express';
import http from 'http';
import userRoutes from './routes/user.routes';
import { configureWebSocket } from './websocket';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(cors());

app.use(express.json());
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const io = require('socket.io')(server);
configureWebSocket(io);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
