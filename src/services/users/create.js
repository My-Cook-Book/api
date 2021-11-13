const fs = require("fs");
const path = require("path");

async function create(body) {
  const __dirname = path.resolve() + "/src";
  const users = fs.readFileSync(__dirname + "/services/users" + "/users.json", {
    encoding: "utf8",
  });
  const parsedUsers = JSON.parse(users);
  parsedUsers.push(body);
  fs.writeFileSync(
    __dirname + "/services/users" + "//users.json",
    JSON.stringify(parsedUsers)
  );
  console.log(body);

  return parsedUsers;
}

module.exports = create;
