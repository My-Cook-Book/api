import express from "express";
import * as UsersControllers from "../controllers/users/index.js";
const router = express.Router();
router.get("/recipes", UsersControllers.getAllRecipes);
export default router;
