-- JUST FYI, THE SCHEMA IS
-- vending_machine (id INTEGER PRIMARY KEY, name VARCHAR, amount INTEGER, type CHAR, cost FLOAT)

-- Show all of the rows of data
 SELECT * FROM vending_machine;
-- Show only rows that have a type of “candy”
SELECT * FROM vending_machine
WHERE type='candy';
-- Show all rows in descending order by name
SELECT * FROM vending_machine
ORDER BY name DESC;
-- Show only rows that have a type of “liquid” AND have an amount under 5
SELECT * FROM vending_machine
WHERE amount<5 AND type="liquid";
-- Show only rows that have a type of “snack” in ascending order by cost
SELECT * FROM vending_machine
WHERE type="snack"
ORDER BY cost ASC;
-- BONUS: Create a new table named “snacks” with the result of the last command!
CREATE TABLE snacks (id INTEGER PRIMARY KEY, name VARCHAR, amount INTEGER, cost FLOAT);
INSERT INTO Snacks(name, amount,type,grade,cost) VALUES ("popcorn", 17, 1.25);
INSERT INTO Snacks(name, amount,type,grade,cost) VALUES ("chips", 9, 1.3);
INSERT INTO Snacks(name, amount,type,grade,cost) VALUES ("pop tarts", 7, 2.45);
INSERT INTO Snacks(name, amount,type,grade,cost) VALUES ("trail mix", 5, 5.0);
