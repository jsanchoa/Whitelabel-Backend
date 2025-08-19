import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Income extends Model {}

Income.init({
    ppo_product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bill_date: {
        type: DataTypes.DATE,
    },
    client_name: {
        type: DataTypes.STRING(90),
    },
    subtotal: {
        type: DataTypes.DOUBLE,
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
        modelName: "Income",
        tableName: "V_Income",
        timestamps: false
    }
);

export default Income;