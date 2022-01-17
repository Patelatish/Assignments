CREATE DATABASE Demo_Ecom;
USE Demo_Ecom;
CREATE TABLE Users(user_id int PRIMARY KEY, FirstName varchar(20),LastName varchar(20),username varchar(10),address varchar(30));

ALTER TABLE Users ADD email varchar(30);
ALTER TABLE Users ADD mobile varchar(13);
INSERT INTO Users (user_id, FirstName,LastName,username,address,email,mobile) values (101,'Aatish','Patel','aatish','Ahmedabad','aatish@gmail.com','+918300000000');
INSERT INTO Users (user_id, FirstName,LastName,username,address,email,mobile) values (102,'Ajit','Barot','ajit','Rajkot','ajit@gmail.com','+918100000000');
INSERT INTO Users (user_id, FirstName,LastName,username,address,email,mobile) values (103,'Rutvik','Patel','rutvik','Viramgam','rutvik@yahoo.com','+919500000000');
INSERT INTO Users (user_id, FirstName,LastName,username,address,email,mobile) values (104,'Krishna','Patel','krishna','Ahmedabad','krishna@gmail.com','+918321000000');
INSERT INTO Users (user_id, FirstName,LastName,username,address,email,mobile) values (105,'Hrutvik','Barot','hrutvik','Pune','hrutvik@yahoo.com','+918200000000');
SELECT * FROM Users;

CREATE TABLE Product(product_id int PRIMARY KEY,product_name varchar(30),price float);
SELECT * FROM Product;
INSERT INTO Product(product_id,product_name,price) values (201,'Bag',800.00);
INSERT INTO Product(product_id,product_name,price) values (202,'Shoes',1000.00);
INSERT INTO Product(product_id,product_name,price) values (203,'Shirt',1200.00);
INSERT INTO Product(product_id,product_name,price) values (204,'Jeans',1250.00);
INSERT INTO Product(product_id,product_name,price) values (205,'T-Shirt',550.00);
SELECT * FROM Product;

CREATE TABLE Order_details(order_id int PRIMARY KEY,u_id int,p_id int);
ALTER TABLE Order_details
   ADD CONSTRAINT FK_User FOREIGN KEY (u_id)
      REFERENCES Users (user_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
;
ALTER TABLE Order_details
   ADD CONSTRAINT FK_Product FOREIGN KEY (p_id)
      REFERENCES Product (product_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
;

INSERT INTO Order_details (order_id,u_id,p_id) values (301,101,201);
INSERT INTO Order_details (order_id,u_id,p_id) values (302,102,202);
INSERT INTO Order_details (order_id,u_id,p_id) values (303,103,203);
INSERT INTO Order_details (order_id,u_id,p_id) values (304,104,204);
INSERT INTO Order_details (order_id,u_id,p_id) values (305,105,205);
INSERT INTO Order_details (order_id,u_id,p_id) values (306,105,201);
INSERT INTO Order_details (order_id,u_id,p_id) values (307,104,202);
INSERT INTO Order_details (order_id,u_id,p_id) values (308,103,203);
INSERT INTO Order_details (order_id,u_id,p_id) values (309,102,204);
INSERT INTO Order_details (order_id,u_id,p_id) values (310,101,205);

SELECT * FROM Product;
SELECT * FROM Users;
SELECT * FROM Order_details;

SELECT c.FirstName,c.email,b.product_name,b.price from Order_details a 
Inner join Users c on c.user_id=a.u_id 
Inner join Product b on a.p_id=b.product_id;

SELECT c.FirstName,c.mobile,b.product_name,b.price from Order_details a
LEFT JOIN Users c ON c.user_id=a.u_id
LEFT JOIN Product b on b.product_id=a.p_id;

SELECT c.FirstName,c.mobile,b.product_name,b.price from Order_details a
right JOIN Users c ON c.user_id=a.u_id
right JOIN Product b on b.product_id=a.p_id;

SELECT b.FirstName,b.email,c.product_name,c.price from Order_details a
Right JOIN Users b on b.user_id=a.u_id
LEFT JOIN Product c on c.product_id=p_id 

INSERT INTO Users (user_id, FirstName,LastName,username,address,email,mobile) values (106,'Shrey','Shah','shrey','Pune','shrey@yahoo.com','+918800000000');

SELECT c.FirstName,a.order_id from Order_details a
RIGHT JOIN Users c on c.user_id=a.u_id 

SELECT c.FirstName,a.order_id from Order_details a
LEFT JOIN Users c on c.user_id=a.u_id 

SELECT Users.FirstName, Order_details.order_id
FROM Users
FULL OUTER JOIN Order_details ON Users.user_id=Order_details.u_id
ORDER BY Users.FirstName;

CREATE PROCEDURE SelectAllUsers
AS
SELECT * FROM Users
GO;

EXEC SelectAllUsers

CREATE PROCEDURE SelectAllProduct
AS
SELECT * FROM Product
GO;

EXEC SelectAllProduct

CREATE PROCEDURE SelectedPrice(
    @min_price AS DECIMAL
)
AS
BEGIN
    SELECT product_name,price FROM Product
    WHERE price >= @min_price
    ORDER BY price;
END;

EXEC SelectedPrice
    @min_price = 900

Alter PROCEDURE SelectedPrice(
    @min_price AS DECIMAL,
	@max_price AS DECIMAL
)
AS
BEGIN
    SELECT product_name,price FROM Product
    WHERE price >= @min_price AND price <= @max_price
    ORDER BY price;
END;

EXEC SelectedPrice
    @min_price = 900,
	@max_price = 1200

CREATE VIEW ViewUsers
AS
Select FirstName,LastName,email,mobile FROM Users


SELECT * FROM ViewUsers
