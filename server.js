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
    //use inquirer package to prompt questions
    inquirer
        //what would the user like to do 
        .prompt({
            name: "answer",
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
        .then(function(answer){
            console.log(answer.option)
            //Use the switch statement to select one of many code blocks to be executed.
            switch (answer.option){
                case"Add Department":
                    departmentAdd();
                    break;
                case"Add Role":
                    roleAdd();
                    break;
                case "Add Employee":
                    employeeAdd();
                    break;
                case "View Departments":
                    departmentsView();
                    break;
                case "View Roles":
                    rolesView();
                    break;
                case "View Employees":
                    employeesView();
                    break; 
                case "Update Employee Roles":
                    employeeUpdate();
                    break;
            }

        });
}

//input functions to correlate with the users choice 
function departmentAdd(){
    // need to inquire for the name of the department 
    inquirer
        .prompt({
            name:"departmentName",
            type: "input",
            message: "What is the name of the department you'd like to add?"
        })
        //then input this into our department in schema as a new department 
        .then(function(answer){
            connection.query('SELECT * FROM department', (err, result) => {
                if (err) throw err;
                console.log("Inputting to department table");
                //insert data as a table
                console.table(result);
                //start question  sequence over again 
                questions();
        });
    });
}

function roleAdd(){
    //need to use inquirer to prompt for the role being added
    inquirer
        .prompt([
            {
            name:"title",
            type:"input",
            message:"What is the role you'd like to add?"
            },
            {
            name:"salary",
            type:"input",
            message:"What is the salary of this role?"
            },
            {
            name:"departmentId",
            type:"input",
            message:"What is the id of the added role?"
            }
    ])
    //then add this role into the schema employee_role table 
    .then(function(answer){
        connection.query('SELECT * FROM employee_role (title, salary, department_id) VALUES("","","")', [answer.title, answer.salary, answer.departmentId], (err, results) => {
            if (err) throw err;
            console.log("Inputting to employee_role table");
            //insert data as a table
            console.table(results);
            //start question  sequence over again 
            questions();
        });
    });
}

function employeeAdd(){
//need to use inquirer to prompt for the role being added
inquirer
    .prompt([
        {
        name:"firstName",
        type:"input",
        message:"What is the first name of the employee you'd like to add?"
        },
        {
        name:"lastName",
        type:"input",
        message:"What is the last name of the employee you'd like to add?"
        },
        {
        name:"roleId",
        type:"input",
        message:"What is the id of the added role?"
        },
        {
        name:"managerId",
        type:"input",
        message:"What is the id of the manager for the employee added ?"
        }
    ])
    .then(function(answer){
        connection.query('SELECT * FROM employee (firstName, lastName, role_id, manager_id) VALUES("","","","")', [answer.firstName, answer.lastName, answer.roleId, answer.managerId], (err, results) => {
            if (err) throw err;
            console.log("Inputting to employee table");
            //insert data as a table
            console.table(results);
            //start question  sequence over again 
            questions();
        });
    });
}