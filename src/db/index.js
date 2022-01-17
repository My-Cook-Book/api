const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/cook-book", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (e) {
    console.log("Ошибка, при подключении к базе данных", e);
    throw e;
  }
}
module.exports = {
  connect,
};
