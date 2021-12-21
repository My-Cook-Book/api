const fs = require("fs");
const path = require("path");
const Users = require("../../db/models/User");

async function getAll() {
  const user = await Users.find();
  return user;
}

module.exports = getAll;
