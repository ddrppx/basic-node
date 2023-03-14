import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../database/config';

interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public birthday!: string;
    // readonly
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true
})


export interface UserInput extends Optional<UserAttributes, 'id'>{}
export interface UserOutput extends Required<UserAttributes>{}

export default User;
