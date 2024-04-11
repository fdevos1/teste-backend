import express from "express";

import db from "./db.js";
import { create_user_table, create_admin } from "./models/users_table.js";

import { routes } from "./routes/userRoutes.js";

import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = 3308;

db.connect((err) => {
  if (err) return console.log(err.message);
});

db.query(create_user_table, (err, results, fields) => {
  if (err) return console.log(err.message);
});

db.query(create_admin, (err, results, fields) => {
  if (err) return console.log(err.message);
});

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
