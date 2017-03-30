const model = require('../model/brewery_1');

module.exports = (request, response) => response.json(model.getAll());