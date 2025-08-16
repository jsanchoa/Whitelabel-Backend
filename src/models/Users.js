import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Users extends Model {}

Users.init(
    {
        users_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false

        }, 
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        roles_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        password: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        username: {
            type: DataTypes.STRING(8),
            allowNull: false
        }, 
        status: {
            type: DataTypes.CHAR(1),
            allowNull: false,
            defaultValue: 'A',
            validate: {
                isIn: [['A', 'I']]
            }
        }
    },
    {
        sequelize: database,
        modelName: "Users",
        tableName: "Users",
        timestamps: false,
        
    }
);

export default Users;