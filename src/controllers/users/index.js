const getAll = require("./getAll");
const getById = require("./getById");
const create = require("./create");
const update = require("./update");
const deleteOne = require("./deleteOne");
const partialRenewal = require("./partialRenewal");
const completeRenewal = require("./completeRenewal");
const auth = require("../authorization/auth");

module.exports = {
  getAll,
  create,
  getById,
  update,
  deleteOne,
  partialRenewal,
  completeRenewal,
  auth,
};
