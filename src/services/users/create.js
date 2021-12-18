const fs = require("fs");
const path = require("path");
const User = require("../../db/models/User.js");

async function create(body) {
  const user = await User.create(body);
  return user;
}
module.exports = create;
