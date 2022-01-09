const express = require("express");
const users = require("./routers/users.js");
const recipes = require("./routers/recipes.js");
const { connect } = require("./db/index.js");
const authRouter = require("./routers/authRouter.js");
const controller = require("./controllers/users/authController.js");

// import recipes from "./routers/recipes.js";

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(users);
app.use(recipes);
app.use("/auth", authRouter);

async function startApp() {
  try {
    await connect();
    app.listen(PORT, () => console.log("server started on port " + PORT));
  } catch (e) {
    console.log(e);
  }
}
startApp();
