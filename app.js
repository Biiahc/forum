const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuração do Body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do EJS
app.set('view engine', 'ejs');

// Dados simulados (substitua por um banco de dados em um ambiente real)
const posts = [];

// Rotas
app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.post('/add-post', (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect('/', {posts: posts});
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
