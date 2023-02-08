const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/sqlite.db'
})

try{
    sequelize.authenticate();
    console.log('Connection Success');
} catch (error){
    console.log('Error: ', error);
}

module.exports = sequelize;

