import {Sequelize} from 'sequelize-typescript';

// import config from "../config/dbConfig";
// const env = process.env.NODE_ENV || 'development';
 
// TODO: Get db config by NODE_ENV

const sequelize =  new Sequelize({
        database: 'bullyngless',
        dialect: 'postgres',
        username: 'root',
        password: 'root',
        host: '127.0.0.1',
        models: [__dirname + '/models'], // or [Player, Team],
});