use Demo_Ecom;

BEGIN TRANSACTION InsertUser
INSERT INTO Users (user_id,FirstName,LastName,username,address,email,mobile) values (107,'Raj','Patel','raj','Rajkot','raj@email.com','+919988660054')
commit ;

SELECT * FROM Users;

BEGIN TRANSACTION DeleteUser
DELETE FROM Users WHERE FirstName = 'Krishna'
commit;

BEGIN TRANSACTION DeleteTable
DELETE FROM Users WHERE user_id=101;
rollback;

BEGIN TRANSACTION UpdateRecord
UPDATE Users 
SET LastName = 'Chauhan'
Where FirstName='Ajit'
save transaction savetransction;

select count(user_id) ,address
from Users group by address

USE EMPLOYEE_DATA
select * from Employee

SELECT COUNT(emp_id)No_of_Employee FROM Employee

SELECT SUM(salary)Total_Salary_of_all_Employee from Employee

SELECT AVG(salary)Average_Salary_of_all_Employee from Employee

SELECT * FROM Employee WHERE age=(select max(age) from Employee);

SELECT * FROM Employee WHERE age=(select min(age) from Employee);

SELECT * FROM Employee WHERE salary=(select max(salary) from Employee);

SELECT * FROM Employee WHERE salary=(select min(salary) from Employee);