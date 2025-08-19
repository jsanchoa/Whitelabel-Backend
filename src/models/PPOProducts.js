import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class PPOProducts extends Model {}

PPOProducts.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provider_invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize: database,
    modelName: "PPO_Products",
    tableName: "PPO_Products",
    timestamps: false
});

export default PPOProducts;