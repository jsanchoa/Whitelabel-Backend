import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Provider_Invoice extends Model {}

Provider_Invoice.init({
    provider_id: {
        type: DataTypes.INTEGER,
    },
    invoice_date: {
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
        modelName: "Provider_Invoice",
        tableName: "Provider_Invoice",
        timestamps: false
    }
);

export default Provider_Invoice;