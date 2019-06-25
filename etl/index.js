const mySQL = require("mysql");
const csvDataMap = require('./dataMap')
//MySQL connection
const connection = mySQL.createConnection({
  host: "localhost",
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: "customers"
});

const query = csvDataMap({
  dataDirectory: './data/data1',
  mapDirectory: './data/map1',
  tableName: 'customers'
}, function(response){

})