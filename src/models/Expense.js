import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Expense extends Model {}

Expense.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    invoice_date: {
        type: DataTypes.DATE,
    },
    name: {
        type: DataTypes.STRING(90),
    },
    total_amount: {
        type: DataTypes.DOUBLE,
    }
},
    {
        sequelize: database,
        modelName: "Expense",
        tableName: "V_Expense",
        timestamps: false
    }
);

export default Expense;