import { DataTypes, Model } from "sequelize";
import database from "../database/DatabaseConnection.js";

class EstadosMembresia extends Model{}

EstadosMembresia.init({
    id_estadoMembresia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(15),
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
        modelName: "EstadosMembresia",
        tableName: "ESTADOSMEMBRESIA",
        timestamps: false
    }
);

export default EstadosMembresia;