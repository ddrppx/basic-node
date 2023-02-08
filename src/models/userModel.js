const Sequelize = require('sequelize');
const database = require('../../database/connection');

const userModel = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

class User{
    async create(firstName, lastName, birthday){


        try { 
            const result = await database.sync();
            const resultCreate = await userModel.create({
                firstName: firstName,
                lastName: lastName,
                birthday: birthday
            });

            return "Success";

        } catch (err){
            console.log(err);
        }
    }

    async read(){
        const users = await userModel.findAll();
        return users;
    }

    async readOne(user_id){
        const user = await userModel.findOne({
            where: {
                id: user_id
            }
        });
        return user;
    }

    update(){}

    delete(){}


}

module.exports = User;
