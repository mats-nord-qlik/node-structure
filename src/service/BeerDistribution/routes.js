const apiVersion1 = require( "./api/v1.js" );
const apiVersion2 = require( "./api/v2.js" );

module.exports = app => {
	app.use( "/v1", apiVersion1 );
	app.use( "/v2", apiVersion2 );
}