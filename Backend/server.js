const express = require("express");
const exphbs = require('express-handlebars'); 
const path = require("path");
const app = express();
const Usuario = require('./models/usuarioTable');


const sequelize = require('./config/BD');
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
}).catch((err) => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

app.engine('handlebars', exphbs.engine({
  // layoutsDir: path.join(__dirname, 'view'), // Define o diretório de layouts
  layoutsDir: 'view/layouts', 
  partialsDir: path.join(__dirname, 'view/parte') // Opcional: define o diretório para partials (componentes reutilizáveis)
}));
app.set('view engine', 'handlebars'); // Define Handlebars como o motor de visualização
app.set('views', path.join(__dirname, 'view')); // Define o diretório onde os arquivos .handlebars estão localizados

// servir todos os arquivos da pasta frontend
app.use(express.static(path.join(__dirname, "../Frontend")));

// rota da home
app.get("/", (req, res) => {
  res.render("index", { layout: 'layoutEstilo2'});
});

app.get('/cadastro', (req, res) =>{
  res.render("cadastro");
});

app.get('/inicio', (req, res) =>{
  res.render("inicio");
});

app.get('/galeria', (req, res) =>{
  res.render("galeria");
});
app.get('/login', (req, res) =>{
  res.render("login");
});
app.get('/aprendizado', (req, res) =>{
  res.render("aprendizado"); 
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
