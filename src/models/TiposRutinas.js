import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class TiposRutinas extends Model {}

TiposRutinas.init(
    {
        id_TipoRutina: {
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
        modelName: "TiposRutinas",
        tableName: "TIPOSRUTINAS",
        timestamps: false
    }
);

export default TiposRutinas;