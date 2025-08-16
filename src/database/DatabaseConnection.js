import { Sequelize } from "sequelize";

const database = new Sequelize
({
  dialect: 'oracle',
  username: 'C##WHITELABEL',
  password: 'proyecto',
  host: 'localhost',
  port: 1521,
  dialectOptions: {
    connectString: 'localhost:1521/XE'
  },
  quoteIdentifiers: false
});

export default database;