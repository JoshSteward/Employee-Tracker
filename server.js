//Dependencies found here
const { listenerCount } = require("events");
const inquirer = require("inquirer");
const mysql = require("mysql");
//const cTable = require("console.table");
const assets = require("./assets");

const connection = mysql.createConnection({
  host: "localhost",

  // port
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yes",
  database: "tracker_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    questions();
}); 

function questions() {

    inquirer
        .prompt({
            name: "choices ",
            type:"list",
            message:"What would you like to do?",
            choices:[
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Roles"
            ]
        })
        .then(function())
}



