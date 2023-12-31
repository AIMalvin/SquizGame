"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const websocket_1 = require("./websocket");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/user', user_routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const io = require('socket.io')(server);
(0, websocket_1.configureWebSocket)(io);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
