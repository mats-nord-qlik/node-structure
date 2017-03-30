const model = require('../model/klarna_1');

module.exports = (request, response) => response.json(model.getAll());