import { Sequelize } from "sequelize";

const database = new Sequelize
({
  dialect: 'oracle',
  //username: 'C##WHITELABEL',
   username: 'WHITELABEL',
  password: 'proyecto',
  host: 'localhost',
  //port: 1521,
   port: 11521,
  dialectOptions: {
    //connectString: 'localhost:1521/XE'
     connectString: 'localhost:11521/XEPDB1'
  },
  quoteIdentifiers: false
});

export default database;