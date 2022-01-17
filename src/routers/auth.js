const Router = require("express");
const router = new Router();
const controller = require("../controllers/auth/auth");
const authController = require("../controllers/auth");
const { check } = require("express-validator");
const checkValidationErrors = require('../midlewares/checkValidationErrors')

router.post("/registration", [
  check("name", "Имя пользователя не может быть пустым").notEmpty(),
  check("password", "Пароль должен быть длинней 4 символов и короче 10").isLength({min:4, max:10})  ],
  checkValidationErrors("ошибка при регистрации"),
  authController.registration
);
router.post("/login", controller.login);

module.exports = router;
