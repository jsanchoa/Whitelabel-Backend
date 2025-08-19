import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class ClientPurchaseOrder extends Model {}

ClientPurchaseOrder.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    po_product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},
{
    sequelize: database,
    modelName: "Client_Purchase_Order",
    tableName: "Client_Purchase_Order",
    timestamps: false
});

export default ClientPurchaseOrder;