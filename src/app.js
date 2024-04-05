import express from "express";
import connection from "./connection.js";
import create_table from "./create_table.js";

const app = express();
const port = 3308;

connection.connect((err) => {
  if (err) return console.log(err.message);
});

connection.query(create_table, (err, results, fields) => {
  if (err) return console.log(err.message);
});

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
