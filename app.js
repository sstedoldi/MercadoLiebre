const express = require("express");
const app = express();
const path = require("path");

//bajar imagenes

app.use(express.static("public"));

const port = 3000;
app.listen(process.env.PORT || port, () =>
  console.log("Servidor corriendo en puerto " + port)
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

//Para completar ver fin de la clase 15
app.post("/crear", (req, res) => {
  res.send("Recibí un formulario");
});
