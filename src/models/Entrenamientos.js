import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Entrenamientos extends Model{}

Entrenamientos.init(
    {
        id_entrenamiento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_TipoRutina: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        capacidadClase: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fechaInicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaFin: {
            type: DataTypes.DATE,
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
        modelName: "Entrenamientos",
        tableName: "ENTRENAMIENTOS",
        timestamps: false
    }
);

export default Entrenamientos;