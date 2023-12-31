import { Sequelize } from 'sequelize';


const databaseName: string = 'SquizGame';
const username: string = 'SquizGameUser';
const password: string = '1234';


const sequelize: Sequelize = new Sequelize(databaseName, username, password, {
    host: 'localhost', //
    dialect: 'postgres', //
    logging: false, //

});

export default sequelize;
