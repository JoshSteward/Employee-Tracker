//Dependencies found here
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const db = require(".");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "ee_info_db"
});