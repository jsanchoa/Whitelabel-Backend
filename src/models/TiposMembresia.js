import { DataTypes, Model } from "sequelize";
import database from "../database/DatabaseConnection.js";

class TiposMembresia extends Model{}

TiposMembresia.init({
    id_tipoMembresia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    cantidadDias: {
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
        modelName: "TiposMembresia",
        tableName: "TIPOSMEMBRESIA",
        timestamps: false
    });

export default TiposMembresia;