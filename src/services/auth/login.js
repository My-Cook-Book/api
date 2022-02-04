const User = require("../../db/models/User");
const Role = require("../../db/models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

async function login({ name, password }) {
  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res
        .status(400)
        .json({ message: `Пользовательль ${name}  не найден` });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: `Введен не верный пароль` });
    }
    const token = generateAccessToken(user._id, user.roles);
    return res.json({ token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Login error" });
  }
}

module.exports = login;
