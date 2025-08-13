import { DataTypes, Model } from "sequelize";
import database from "../database/DatabaseConnection.js";

class EntrenamientosXCitas extends Model {}

EntrenamientosXCitas.init({
    id_entrenamiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id_cita: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
    {
        sequelize: database,
        modelName: "EntrenamientosXCitas",
        tableName: "ENTRENAMIENTOSXCITAS",
        timestamps: false
    }
);

export default EntrenamientosXCitas;