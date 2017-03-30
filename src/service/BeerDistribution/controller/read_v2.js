
const model = require('../model/brewery_2');

module.exports = (request, response) => response.json(model.getAll());