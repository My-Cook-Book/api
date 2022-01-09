const Router = require("express");
const router = new Router();
const controller = require("../controllers/users/authController");
const { check } = require("express-validator");
const authMidleware = require('../middleware/authMidleware')
const roleMidleware = require('../middleware/roleMidleware')



router.post("/registration", [
    check("name", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть длинней 4 символов и короче 10").isLength({min:4, max:10})  ], controller.registration);
router.post("/login", controller.login);
router.get("/users", roleMidleware( ['USER']), controller.getUsers);

module.exports = router;
