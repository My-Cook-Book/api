const express = require("express");
const UsersControllers = require("../controllers/users/index.js");

const router = express.Router();

router.get("/users", UsersControllers.getAll);
router.get("/users/:id", UsersControllers.getById);
router.post("/users", UsersControllers.create);
router.put("/users/:id", UsersControllers.completeRenewal);
router.patch("/users/:id", UsersControllers.partialRenewal);
router.delete("/users/:id", UsersControllers.deleteOne);

module.exports = router;
