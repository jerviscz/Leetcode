# Write your MySQL query statement below
SELECT C.Name AS Customers
FROM customers C
WHERE NOT EXISTS(SELECT * 
                 FROM Orders O
                 WHERE O.CustomerId = C.Id);