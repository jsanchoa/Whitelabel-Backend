import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Invoice extends Model {}

Invoice.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchase_order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bill_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tax: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
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
    modelName: "Invoice",
    tableName: "Invoice",
    timestamps: false
});

export default Invoice;