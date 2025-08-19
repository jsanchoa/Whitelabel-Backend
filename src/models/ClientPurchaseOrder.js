import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class ClientPurchaseOrder extends Model {}

ClientPurchaseOrder.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client_id: {
        type: DataTypes.INTEGER,
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
    modelName: "Client_Purchase_Order",
    tableName: "Client_Purchase_Order",
    timestamps: false
});

export default ClientPurchaseOrder;