"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseName = 'SquizGame';
const username = 'SquizGameUser';
const password = '1234';
const sequelize = new sequelize_1.Sequelize(databaseName, username, password, {
    host: 'localhost', //
    dialect: 'postgres', //
    logging: false, //
});
exports.default = sequelize;
