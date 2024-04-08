import express from "express";

import db from "./db.js";
import create_user_table from "./models/users_table.js";

import { CreateNewUserController } from "./controllers/create_new_user_controller.js";
import { GetUserController } from "./controllers/get_users_controller.js";
import { GetUserByCpfController } from "./controllers/get_user_by_cpf_controller.js";
import { DeleteUserController } from "./controllers/delete_user_controller.js";
import { UpdateUserController } from "./controllers/update_user_controllers.js";

const app = express();
const port = 3308;

const createUserController = new CreateNewUserController();
const getUsersController = new GetUserController();
const getUserByCpfController = new GetUserByCpfController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

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

app.get("/users", getUsersController.get_all_users);

app.get("/user/:cpf", getUserByCpfController.get_user_by_cpf);

app.post("/create-user", createUserController.new_user);

app.delete("/delete-user", deleteUserController.delete_user);

app.put("/update-user", updateUserController.update_user);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
