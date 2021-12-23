const path = require("path");
const fs = require("fs");
const User = require("../../db/models/User.js");
const ObjectId = require("../../db/models/User.js");

async function getById(id) {
  const users = await User.findById({ _id: id });
  return users;
}

module.exports = getById;
