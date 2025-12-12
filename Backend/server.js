const express = require("express");
const path = require("path");
const app = express();

// servir todos os arquivos da pasta frontend
app.use(express.static(path.join(__dirname, "../Frontend")));

// rota da home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

app.get('/cadastro', (req, res) =>{
  res.sendFile(path.join(_dirname, "../Frontend/cadastro.html"));
});

app.get('/inicio', (req, res) =>{
  res.sendFile(path.join(_dirname, "../Frontend/paginaInicial.html"));
});

app.get('/galeria', (req, res) =>{
  res.sendFile(path.join(_dirname, "../Frontend/galeria.html"));
});
app.get('/login', (req, res) =>{
  res.sendFile(path.join(_dirname, "../Frontend/login.html"));
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
