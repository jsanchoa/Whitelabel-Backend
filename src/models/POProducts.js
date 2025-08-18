import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class POProducts extends Model {}

POProducts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        purchase_order_id: {
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
        modelName: "PO_Products",
        tableName: "PO_Products",
        timestamps: false,
        
    }
);

export default POProducts;