import { Model, DataTypes } from "sequelize";
import database from "../database/DatabaseConnection.js";

class Usuarios extends Model {}

Usuarios.init(
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(30),
            allowNull: false

        }, 
        apellido: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING(50),
            allowNull: false
        }, 
        contrasenia: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        telefono: {
            type: DataTypes.STRING(8),
            allowNull: false
        }, 
        cedula: {
            type: DataTypes.STRING(9),
            allowNull: false
        },
        id_rol: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado: {
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
        modelName: "Usuarios",
        tableName: "USUARIOS",
        timestamps: false,
        
    }
);

export default Usuarios;