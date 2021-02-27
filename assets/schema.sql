ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yes';

DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db; 

USE tracker_db; 

CREATE TABLE employee(
	id INT AUTO_INCREMENT NOT NULL,
	first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE employee_role(
	id INT AUTO_INCREMENT NOT NULL,
	title VARCHAR(30) NOT NULL,
    salary DECIMAL(10.3),
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE department(
	id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL
);

