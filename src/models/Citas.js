import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Citas extends Model {}

Citas.init(
    {
        id_cita: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            
        },
        estado: {
            type: DataTypes.CHAR(1),
            allowNull: false,
            defaultValue: 'P',
            validate: {
                isIn: [['P', 'R', 'C']]
            }
        }
    },
    {
        sequelize: database,
        modelName: "Citas",
        tableName: "CITAS",
        timestamps: false
    }
);

export default Citas;