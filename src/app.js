import express from "express";

const app = express();
const port = 3306;

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 

