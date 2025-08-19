import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Accounting extends Model {}

Accounting.init(
    {
         Accounting_Date: {
            type: DataTypes.STRING(30),
            allowNull: false

        }, 
        Total_Incomes: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }, 
        Total_Expenses: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }, 
    },
    {
        sequelize: database,
        modelName: "Accounting",
        tableName: "V_Accounting",
        timestamps: false,
        
    }
);

export default Accounting;