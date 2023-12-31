"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureWebSocket = void 0;
const User_1 = __importDefault(require("./User"));
const configureWebSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('Client connected');
        socket.on('signup', (userData) => {
            User_1.default.create(userData)
                .then((user) => {
                socket.emit('signupResponse', { success: true, message: 'Inscription réussie' });
            })
                .catch((error) => {
                socket.emit('signupResponse', { success: false, message: 'Erreur lors de l\'inscription' });
            });
        });
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};
exports.configureWebSocket = configureWebSocket;
