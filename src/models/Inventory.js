import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Inventory extends Model {}

Inventory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    provider_invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
        sequelize: database,
        modelName: "Inventory",
        tableName: "Inventory",
        timestamps: false
    }
);

export default Inventory;