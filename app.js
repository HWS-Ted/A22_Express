const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:page", (req, res) => {
  res.render("page", { pageH1: req.params.page });
});

app.listen(port);
