const Sequelize = require('sequelize');
const env = require('dotenv');


function initDb(){
    env.config();

    const sequelize = new Sequelize(process.env.DATABASE_URL);
        
    return sequelize;
} 

module.exports = initDb();