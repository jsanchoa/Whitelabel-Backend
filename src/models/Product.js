import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Product extends Model {}

Product.init({
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category_id: {
        type: DataTypes.INTEGER,
    },
    provider_id: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
    },
    stock: {
        type: DataTypes.INTEGER,
    },
    sku: {
        type: DataTypes.STRING(20),
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
        modelName: "Product",
        tableName: "Product",
        timestamps: false
    }
);

export default Roles;