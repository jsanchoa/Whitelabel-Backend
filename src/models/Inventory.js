import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Category extends Model {}

Category.init({
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
        modelName: "Category",
        tableName: "Category",
        timestamps: false
    }
);

export default Category;