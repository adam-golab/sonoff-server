const {
  REGISTER,
} = require('./actionTypes');

module.exports = {
  [REGISTER]: ({ connection }) => connection.send(JSON.stringify({ errors: 0 })),
};
