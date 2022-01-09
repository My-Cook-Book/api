const getAll = require("./getAll");
const getById = require("./getById");
const create = require("./create");
const update = require("./update");
const deleteOne = require("./deleteOne");
const partialRenewal = require("./partialRenewal");
const completeRenewal = require("./completeRenewal");
const authController = require("./authController");

module.exports = {
  getAll,
  create,
  getById,
  update,
  deleteOne,
  partialRenewal,
  completeRenewal,
  authController,
};
