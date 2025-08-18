import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(50),
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
        modelName: "Category",
        tableName: "Category",
        timestamps: false
    }
);

export default Category;