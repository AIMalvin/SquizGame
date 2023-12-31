"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var dotenv = require("dotenv");
// Charge les variables d'environnement du fichier .env
dotenv.config();
// Récupère les variables d'environnement pour la configuration de la base de données
var dbName = process.env.DB_NAME;
var dbUser = process.env.DB_USER;
var dbHost = process.env.DB_HOST;
var dbDriver = process.env.DB_DRIVER;
var dbPassword = process.env.DB_PASSWORD;
// Crée une nouvelle instance Sequelize
var sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver, // 'postgres', 'mysql', etc.
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
// Test de la connexion à la base de données
sequelize.authenticate()
    .then(function () { return console.log('Connection has been established successfully.'); })
    .catch(function (error) { return console.error('Unable to connect to the database:', error); });
exports.default = sequelize;
