import express, { json } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());


const data_users = {
    usuario: "Lucas",
    contato: "lucas@email.com",
}

app.get("/", (req, res) => {
  res.json({ message: "server funcionando" });
});

app.get("/usuarios", (req, res) => {
  res.json({ message:data_users });
});

app.listen(PORT, () => {
  console.log(`Server rodando em: ${PORT}`);
});
