import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Roles extends Model {}

Roles.init({
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    estado: {
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