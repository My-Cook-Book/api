const express = require("express");
const mongoose = require("mongoose");
const users = require("./routers/users.js");
const recipes = require("./routers/recipes.js");
// import recipes from "./routers/recipes.js";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:user@cluster0.klzjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
app.use(express.json());
app.use(users);
app.use(recipes);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("server started on port " + PORT));
  } catch (e) {
    console.log(e);
  }
}
startApp();
