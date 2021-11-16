const path = require("path");
const fs = require("fs");

async function update(id, body) {
  const __dirname = path.resolve() + "/src";
  const users = fs.readFileSync(__dirname + "/services/users" + "/users.json", {
    encoding: "utf8",
  });
  const parsedUsers = JSON.parse(users);

  const indexUser = parsedUsers.findIndex(
    (elem) => Number(elem.id) === Number(id)
  );
  parsedUsers[indexUser] = { ...parsedUsers[indexUser], ...body };
  fs.writeFileSync(
    __dirname + "/services/users" + "/users.json",
    JSON.stringify(parsedUsers)
  );
  return parsedUsers[indexUser];
}

module.exports = update;
