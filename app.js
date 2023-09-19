const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send(`<h1>首頁<h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About<h1>`);
});

app.get("/portfolio", (req, res) => {
  res.send(`<h1>Portfolio<h1>`);
});

app.get("/contact", (req, res) => {
  res.send(`<h1>Contact<h1>`);
});

app.listen(port);
