import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  password: "mysecretpw",
  port: 3306,
  user: "root",
  database: "usersdb",
});

export default connection;
