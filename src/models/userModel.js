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

        const resultCreate = await userModel.create({
            firstName: firstName,
            lastName: lastName,
            birthday: birthday
        });

        return "Success";
    }

    async read(){
        const users = await userModel.findAll();
        
        return this.formatData(users);
    }

    async readOne(user_id){
        const user = await userModel.findByPk(user_id);
        return user;
    }

    async update(user_id, new_first_name, new_last_name){
        const user = await userModel.findByPk(user_id);

        user.firstName = new_first_name;
        user.lastName = new_last_name;

        const result = await user.save();

        return result;
    }

    async delete(user_id){
        const user = await userModel.findByPk(user_id);
        user.destroy();

        return true;
    }


    formatData(users_return){
        
        let users_formatted = [];

        users_return.forEach(user => {
            users_formatted.push({
                firstName: user.firstName,
                lastName: user.lastName,
                birthday: user.birthday // FORMAT TO Y-m-d
            });
        });

        return users_formatted;
    }
}

module.exports = User;
