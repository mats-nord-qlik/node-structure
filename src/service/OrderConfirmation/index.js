const api = require('./routes');

module.exports.register = app => {
	api(app);
}