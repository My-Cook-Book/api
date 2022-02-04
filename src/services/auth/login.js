const User = require("../../db/models/User");
const Role = require("../../db/models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config");
const AppError = require("../../handlers/AppError");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

async function login({ name, password }) {
    const user = await User.findOne({ name });
    if (!user) {
      throw new AppError(`Пользовательль ${name}  не найден`, 404)
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      throw new AppError('Не валидные данные', 400)
    }

    const token = generateAccessToken(user._id, user.roles);
    return { token }
}

module.exports = login;
