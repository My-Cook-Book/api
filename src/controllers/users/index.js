const getAll = require('./getAll');
const create = require('./create');
const update = require('./update');
const getById = require('./getById');
const deleteOne = require('./deleteOne');
const partialRenewal = require('./partialRenewal');
const completeRenewal = require('./completeRenewal');

module.exports = {
  getAll,
  create,
  update,
  getById,
  deleteOne,
  partialRenewal,
  completeRenewal
};
