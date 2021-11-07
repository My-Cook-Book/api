const path = require('path');
const fs = require('fs');

async function getById(id) {
  const __dirname = path.resolve() + '/src';
  const users = fs.readFileSync(__dirname + '/services/users' + '/users.json', { encoding: 'utf8' })
  const parsedUsers = JSON.parse(users)

  const user = parsedUsers.find((elem) => elem.id === Number(id))

  return user
}

module.exports = getById
