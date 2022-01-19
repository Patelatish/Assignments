CREATE DATABASE EMPLOYEE_DATA;
USE EMPLOYEE_DATA;
CREATE TABLE Employee(emp_id int PRIMARY KEY, emp_name varchar(20), age int DEFAULT 18, salary float);
ALTER TABLE Employee ADD Email varchar(30);
INSERT INTO Employee(emp_id,emp_name,age,salary,Email) VALUES (101,'Atish Patel',24,25000.00,'atish@gmail.com');
INSERT INTO Employee(emp_id,emp_name,age,salary,Email) VALUES (102,'Rutvik Patel',24,25500.00,'rutvik@gmail.com');
INSERT INTO Employee(emp_id,emp_name,age,salary,Email) VALUES (103,'Ajit Barot',22,23000.00,'ajit@yahoo.com');
INSERT INTO Employee(emp_id,emp_name,age,salary,Email) VALUES (104,'Hrutvik Barot',22,28000.00,'hrutvik@gmail.com');
INSERT INTO Employee(emp_id,emp_name,age,salary,Email) VALUES (105,'Vinod Suthar',25,24000.00,'vinod@yahoo.com');
SELECT * FROM Employee;
SELECT * FROM Employee WHERE age=24;
SELECT * FROM Employee WHERE age=22 OR age=24;
SELECT * FROM Employee ORDER BY age;
SELECT * FROM Employee ORDER BY age DESC;
SELECT * FROM Employee WHERE emp_name like 'A%';
SELECT DISTINCT salary from Employee;
SELECT COUNT(emp_id) FROM Employee;