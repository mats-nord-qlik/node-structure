const model = require('../model/klarna_2');

module.exports = (request, response) => response.json(model.getAll());