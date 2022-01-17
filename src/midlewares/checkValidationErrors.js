const {validationResult} = require("express-validator");

const checkValidationErrors = (errorMessage) => (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
    .status(400)
    .json({ message: errorMessage, errors });
  }

  next()
}

module.exports = checkValidationErrors