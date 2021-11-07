import express from "express";
import * as RecipesControllers from "../controllers/users/index.js";

const router = express.Router();

router.get("/recipes", RecipesControllers.getAllRecipes);

export default router;
