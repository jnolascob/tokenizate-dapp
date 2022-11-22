// const { handleError } = require('../utils/helpers/expressHelper');

function createToken(req, res) {
  try {
    return res.send({ 'message': 'Token created'});
  } catch (error) {
    return res.json(error);
  }
}

module.exports = {
    createToken,
};
