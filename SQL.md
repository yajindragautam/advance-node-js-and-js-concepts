# SQL Basic Interview Questions

"SQL Basic Interview Questions" covers fundamental concepts that are essential for anyone preparing for a SQL interview. Explore these essential questions to build a strong understanding and boost our confidence in SQL basics.

## 1. What is SQL?
SQL (Structured Query Language) is a standard programming language used to communicate with relational databases. It allows users to create, read, update, and delete data, and provides commands to define database schema and manage database security.

## 2. What is a database?
A database is an organized collection of data stored electronically, typically structured in tables with rows and columns. It is managed by a database management system (DBMS), which allows for efficient storage, retrieval, and manipulation of data.

## 3. What are the main types of SQL commands?
SQL commands are broadly classified into:

- **DDL (Data Definition Language)**: CREATE, ALTER, DROP, TRUNCATE
- **DML (Data Manipulation Language)**: SELECT, INSERT, UPDATE, DELETE
- **DCL (Data Control Language)**: GRANT, REVOKE
- **TCL (Transaction Control Language)**: COMMIT, ROLLBACK, SAVEPOINT

## 4. What is the difference between CHAR and VARCHAR2 data types?
- **CHAR**: Fixed-length storage. If the defined length is not fully used, it is padded with spaces.
- **VARCHAR2**: Variable-length storage. Only the actual data is stored, saving space when the full length is not needed.

## 5. What is a primary key?
A primary key is a unique identifier for each record in a table. It ensures that no two rows have the same value in the primary key column(s), and it does not allow NULL values.

## 6. What is a foreign key?
A foreign key is a column (or set of columns) in one table that refers to the primary key in another table. It establishes and enforces a relationship between the two tables, ensuring data integrity.

## 7. What is the purpose of the DEFAULT constraint?
The DEFAULT constraint assigns a default value to a column when no value is provided during an INSERT operation. This helps maintain consistent data and simplifies data entry.

## 8. What is normalization in databases?
Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. This involves dividing large tables into smaller, related tables and defining relationships between them to ensure consistency and avoid anomalies.

## 9. What is denormalization, and when is it used?
Denormalization is the process of combining normalized tables into larger tables for performance reasons. It is used when complex queries and joins slow down data retrieval, and the performance benefits outweigh the drawbacks of redundancy.

## 10. What is a query in SQL?
A query is a SQL statement used to retrieve, update, or manipulate data in a database. The most common type of query is a SELECT statement, which fetches data from one or more tables based on specified conditions.

## 11. What are the different operators available in SQL?
- **Arithmetic Operators**: +, -, *, /, %
- **Comparison Operators**: =, !=, <>, >, <, >=, <=
- **Logical Operators**: AND, OR, NOT
- **Set Operators**: UNION, INTERSECT, EXCEPT
- **Special Operators**: BETWEEN, IN, LIKE, IS NULL

## 12. What is a view in SQL?
A view is a virtual table created by a SELECT query. It does not store data itself, but presents data from one or more tables in a structured way. Views simplify complex queries, improve readability, and enhance security by restricting access to specific rows or columns.

## 13. What is the purpose of the UNIQUE constraint?
The UNIQUE constraint ensures that all values in a column (or combination of columns) are distinct. This prevents duplicate values and helps maintain data integrity.

## 14. What are the different types of joins in SQL?
- **INNER JOIN**: Returns rows that have matching values in both tables
- **LEFT JOIN (LEFT OUTER JOIN)**: Returns all rows from the left table, and matching rows from the right table
- **RIGHT JOIN (RIGHT OUTER JOIN)**: Returns all rows from the right table, and matching rows from the left table
- **FULL JOIN (FULL OUTER JOIN)**: Returns all rows when there is a match in either table
- **CROSS JOIN**: Produces the Cartesian product of two tables

## 15. What is the difference between INNER JOIN and OUTER JOIN?
- **INNER JOIN**: Returns only rows where there is a match in both tables
- **OUTER JOIN**: Returns all rows from one table (LEFT, RIGHT, or FULL), and the matching rows from the other table. If there is no match, NULL values are returned for the non-matching side

## 16. What is the purpose of the GROUP BY clause?
The GROUP BY clause is used to arrange identical data into groups. It is typically used with aggregate functions (such as COUNT, SUM, AVG) to perform calculations on each group rather than on the entire dataset.

## 17. What are aggregate functions in SQL?
Aggregate functions perform calculations on a set of values and return a single value. Common aggregate functions include:

- COUNT(): Returns the number of rows
- SUM(): Returns the total sum of values
- AVG(): Returns the average of values
- MIN(): Returns the smallest value
- MAX(): Returns the largest value

## 18. What is a subquery?
A subquery is a query nested within another query. It is often used in the WHERE clause to filter data based on the results of another query, making it easier to handle complex conditions.

## 19. What is the difference between the WHERE and HAVING clauses?
- **WHERE**: Filters rows before any grouping takes place
- **HAVING**: Filters grouped data after the GROUP BY clause has been applied

In short, WHERE applies to individual rows, while HAVING applies to groups.

## 20. What are indexes, and why are they used?
Indexes are database objects that improve query performance by allowing faster retrieval of rows. They function like a book's index, making it quicker to find specific data without scanning the entire table. However, indexes require additional storage and can slightly slow down data modification operations.

## 21. What is the difference between DELETE and TRUNCATE commands?
- **DELETE**: 
  - Removes rows one at a time and records each deletion in the transaction log, allowing rollback
  - Can have a WHERE clause
- **TRUNCATE**:
  - Removes all rows at once without logging individual row deletions
  - Cannot have a WHERE clause and is faster than DELETE for large data sets

## 22. What is the purpose of the SQL ORDER BY clause?
The ORDER BY clause sorts the result set of a query in either ascending (default) or descending order, based on one or more columns. This helps present the data in a more meaningful or readable sequence.

## 23. What are the differences between SQL and NoSQL databases?
**SQL Databases**:
- Use structured tables with rows and columns
- Rely on a fixed schema
- Offer ACID properties

**NoSQL Databases**:
- Use flexible, schema-less structures (e.g., key-value pairs, document stores)
- Are designed for horizontal scaling
- Often focus on performance and scalability over strict consistency

## 24. What is a table in SQL?
A table is a structured collection of related data organized into rows and columns. Columns define the type of data stored, while rows contain individual records.

## 25. What are the types of constraints in SQL?
Common constraints include:

- NOT NULL: Ensures a column cannot have NULL values
- UNIQUE: Ensures all values in a column are distinct
- PRIMARY KEY: Uniquely identifies each row in a table
- FOREIGN KEY: Ensures referential integrity by linking to a primary key in another table
- CHECK: Ensures that all values in a column satisfy a specific condition
- DEFAULT: Sets a default value for a column when no value is specified

## 26. What is a cursor in SQL?
A cursor is a database object used to retrieve, manipulate, and traverse through rows in a result set one row at a time. Cursors are helpful when performing operations that must be processed sequentially rather than in a set-based manner.

## 27. What is a trigger in SQL?
A trigger is a set of SQL statements that automatically execute in response to certain events on a table, such as INSERT, UPDATE, or DELETE. Triggers help maintain data consistency, enforce business rules, and implement complex integrity constraints.

## 28. What is the purpose of the SQL SELECT statement?
The SELECT statement retrieves data from one or more tables. It is the most commonly used command in SQL, allowing users to filter, sort, and display data based on specific criteria.

## 29. What are NULL values in SQL?
NULL represents a missing or unknown value. It is different from zero or an empty string. NULL values indicate that the data is not available or applicable.

## 30. What is a stored procedure?
A stored procedure is a precompiled set of SQL statements stored in the database. It can take input parameters, perform logic and queries, and return output values or result sets. Stored procedures improve performance and maintainability by centralizing business logic.

# SQL Intermediate Interview Questions

This section covers moderately complex SQL topics like advanced queries, multi-table joins, subqueries, and basic optimization techniques. These questions help enhance skills for both database developers and administrators, preparing us for more technical SQL challenges in the field.

## 31. What is the difference between DDL and DML commands?
1. **DDL (Data Definition Language)**:
   - These commands are used to define and modify the structure of database objects such as tables, indexes, and views
   - Example: CREATE, ALTER, DROP
   - Primarily focus on the schema or structure of the database

2. **DML (Data Manipulation Language)**:
   - These commands deal with the actual data stored within database objects
   - Example: INSERT, UPDATE, DELETE
   - Allow you to query and manipulate the data itself rather than the structure

## 32. What is the purpose of the ALTER command in SQL?
The ALTER command is used to modify the structure of an existing database object. This command is essential for adapting our database schema as requirements evolve.

Common uses:
- Add or drop a column in a table
- Change a column's data type
- Add or remove constraints
- Rename columns or tables
- Adjust indexing or storage settings

## 33. What is a composite primary key?
A composite primary key is a primary key made up of two or more columns. Together, these columns must form a unique combination for each row in the table. It's used when a single column isn't sufficient to uniquely identify a record.

Example:
```sql
CREATE TABLE OrderDetails (
    OrderID INT,
    ProductID INT,
    Quantity INT,
    PRIMARY KEY (OrderID, ProductID)
);
```

## 34. How is data integrity maintained in SQL databases?
Data integrity refers to the accuracy, consistency, and reliability of the data stored in the database. SQL databases maintain data integrity through several mechanisms:

- **Constraints**: Ensuring that certain conditions are always met

- **Transactions**: Ensuring that a series of operations either all succeed or all fail

- **Triggers:** Automatically enforcing rules or validations

- **Normalization:** Organizing data into multiple related tables to minimize redundancy

## 35. What are the advantages of using stored procedures?
- **Improved Performance:** Stored procedures are precompiled and cached in the database, making their execution faster than sending multiple individual queries. <br>

- **Reduced Network Traffic:** By executing complex logic on the server, fewer round trips between the application and database are needed. <br>

- *Enhanced Security:* Stored procedures can restrict direct access to underlying tables, allowing users to execute only authorized operations. <br>

- **Reusability and Maintenance:** Once a procedure is written, it can be reused across multiple applications. If business logic changes, you only need to update the stored procedure, not every application that uses it.

## 36. What is a UNION operation, and how is it used?
The **UNION** operator combines the result sets of two or more SELECT queries into a single result set, removing duplicate rows. The result sets must have the same number of columns and compatible data types for corresponding columns.

**Example:**
```sql
SELECT Name FROM Customers  
UNION  
SELECT Name FROM Employees;
``` 