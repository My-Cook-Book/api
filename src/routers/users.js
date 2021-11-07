const express = require("express");
const UsersControllers = require("../controllers/users/index.js")

const router = express.Router();

router.get("/users", UsersControllers.getAll);
router.get("/users/:id", UsersControllers.getById);

module.exports = router
