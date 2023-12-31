import { Sequelize } from 'sequelize';


const dbName = 'SquizGame';
const dbUser = 'SquizGameUser';
const dbHost = 'localhost';
const dbDriver = 'postgres';
const dbPassword = '1234';


const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));

export default sequelize;
