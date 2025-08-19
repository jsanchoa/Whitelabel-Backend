import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Provider extends Model {}

Provider.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    business_type: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    account_number: {
        type: DataTypes.STRING(34),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(200),
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
        modelName: "Provider",
        tableName: "Provider",
        timestamps: false
    }
);

export default Provider;