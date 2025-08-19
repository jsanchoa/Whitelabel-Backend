import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class ProviderInvoice extends Model {}

ProviderInvoice.init({
    ppo_product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provider_id: {
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATE,
    },
    tax: {
        type: DataTypes.DOUBLE,
    },
    total: {
        type: DataTypes.DOUBLE,
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
        modelName: "ProviderInvoice",
        tableName: "ProviderInvoice",
        timestamps: false
    }
);

export default ProviderInvoice;