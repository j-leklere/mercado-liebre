const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
  console.log("Te registraste correctamente");
  res.redirect("/");
});

app.get("/login", (req, res) => {
  console.log("Te logeaste correctamente");
  res.redirect("/");
});

app.listen(process.env.PORT || 3030, function () {
  console.log("Puerto funcionando en el 3030!");
});
