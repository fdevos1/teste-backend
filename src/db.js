import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  password: "mysecretpw",
  port: 3306,
  user: "root",
  database: "usersdb",
});

export default db;
