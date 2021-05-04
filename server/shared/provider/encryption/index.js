const bcrypt = require('bcrypt');

const hash = data => bcrypt.hashSync(data, 10);

const compare = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = {
  hash,
  compare,
};
