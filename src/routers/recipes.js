const express = require("express");
const RecipesControllers = require("../controllers/recipes/index.js");

const router = express.Router();

router.get("/recipes", RecipesControllers.getAll);
router.get("/recipes/:id", RecipesControllers.getById);
router.post("/recipes", RecipesControllers.create);
router.put("/recipes/:id", RecipesControllers.completeRenewal);
router.patch("/recipes/:id", RecipesControllers.partialRenewal);
router.delete("/recipes/:id", RecipesControllers.deleteOne);

module.exports = router;
