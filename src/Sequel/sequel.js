
var Sequelize = require('sequelize');
const sequelize = new Sequelize('adeel_test', 'postgres', 'modniPG', {
    dialect: 'postgres',
    host: "localhost",
    port: 5432,
  });

  sequelize.query("SELECT * FROM offers").then(myTableRows => {
    console.log(myTableRows)
    module.exports = myTableRows ; 
  })