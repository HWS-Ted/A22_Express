const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send(`<h1>首頁<h1>`);
});

app.listen(port);
