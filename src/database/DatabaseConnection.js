import { Sequelize } from "sequelize";

const database = new Sequelize
({
  dialect: 'oracle',
  username: 'C##GIMNASIO',
  password: 'proyectoLBD',
  host: 'localhost',
  port: 1521,
  dialectOptions: {
    connectString: 'localhost:1521/XE'
  }
});

export default database;