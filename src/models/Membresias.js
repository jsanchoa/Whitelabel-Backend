import { DataTypes, Model } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Membresias extends Model {}

Membresias.init({
    id_membresia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_estadoMembresia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipoMembresia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
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
        modelName: "Membresias",
        tableName: "MEMBRESIAS",
        timestamps: false
    }
);

export default Membresias;