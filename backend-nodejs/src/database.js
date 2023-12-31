"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
// Remplacez les valeurs ci-dessous par vos informations de connexion à la base de données
var databaseName = 'SquizGame';
var username = 'SquizGameUser';
var password = '1234';
// Créez une nouvelle instance Sequelize
var sequelize = new sequelize_1.Sequelize(databaseName, username, password, {
    host: 'localhost', // Ou l'adresse de votre serveur de base de données
    dialect: 'postgres', // Nous utilisons postgres comme dialecte
    logging: false, // Mettez à true si vous voulez voir les requêtes SQL dans les logs
    // Ajoutez d'autres options de configuration si nécessaire
});
exports.default = sequelize;
