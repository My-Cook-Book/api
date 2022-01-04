const getAll = require("./getAll");
const getById = require("./getById");
const create = require("./create");
const update = require("./update");
const deleteOne = require("./deleteOne");
const partialRenewal = require("./partialRenewal");
const completeRenewal = require("./completeRenewal");

module.exports = {
  getAll,
  create,
  update,
  getById,
  deleteOne,
  partialRenewal,
  completeRenewal,
};
