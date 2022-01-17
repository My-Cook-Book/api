const User = require("../../db/models/User");
const bcrypt = require("bcryptjs");
const Role = require("../../db/models/Role");
// const AppError = require("../../handlers/AppError");

async function registration(body) {
  const {name, password, phone} = body;
  // const candidate = await User.findOne({name});
  // if (candidate) {
  //   throw new Error('some error')
  // }
  const hashPassword = bcrypt.hashSync(password, 7);
  const userRole = await Role.findOne({value: "USER"});

  // if (!userRole) {
  //   throw new AppError('Данная роль отсутствует')
  // }

  const user = new User({
    name,
    password: hashPassword,
    roles: [userRole.value],
    phone,
  });
  await user.save();

  return user;
}

module.exports = registration