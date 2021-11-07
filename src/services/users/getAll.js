const fs = require('fs');
const path = require('path');

async function getAll() {
  const __dirname = path.resolve() + '/src';
  const users = fs.readFileSync(__dirname + '/services/users' + '/users.json', { encoding: 'utf8' })
  const parsedUsers = JSON.parse(users)
  return parsedUsers
}

module.exports = getAll
