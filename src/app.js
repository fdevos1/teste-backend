import express from "express";

import db from "./db.js";
import create_user_table from "./models/users_table.js";

import { CreateNewUserController } from "./controllers/create_new_user_controller.js";

const app = express();
const port = 3308;

const createUserController = new CreateNewUserController();

db.connect((err) => {
  if (err) return console.log(err.message);
});

db.query(create_user_table, (err, results, fields) => {
  if (err) return console.log(err.message);
});

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.post("/create-user", createUserController.new_user);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
