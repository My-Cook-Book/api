require('express-async-errors');
const express = require("express");
const users = require("./routers/users.js");
const recipes = require("./routers/recipes.js");
const { connect } = require("./db/index.js");
const auth = require("./routers/auth.js");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(users);
app.use(recipes);
app.use("/auth", auth);

app.use(function (err, req, res, next) {
  return res.status(err.status).send(err.message);
});

async function startApp() {
  await connect();
  app.listen(PORT, () => console.log("server started on port " + PORT));
}

startApp();

