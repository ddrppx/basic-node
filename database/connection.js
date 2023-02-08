const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sqlite.db'
})

try{
    sequelize.authenticate();
    console.log('Connection Success');
} catch (error){
    console.log('Error: ', error);
}

module.exports = sequelize;

