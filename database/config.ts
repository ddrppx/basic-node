import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/sqlite.db',
    logging: false
})

export default sequelize;

