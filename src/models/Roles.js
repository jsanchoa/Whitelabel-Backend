import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Roles extends Model {}

Roles.init({
    roles_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
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
        modelName: "Roles",
        tableName: "ROLES",
        timestamps: false
    }
);

export default Roles;