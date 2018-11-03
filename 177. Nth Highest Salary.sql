CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
DECLARE M INT;
SET M = N -1;
  RETURN (
      # Write your MySQL query statement below.
      SELECT DISTINCT e.Salary
      FROM Employee e
      ORDER BY e.Salary DESC
      LIMIT M,1
  );
END