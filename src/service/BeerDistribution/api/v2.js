const express = require('express');

const api = express.Router();
const  readController = require('../controller/read_v2');
const  createController= require('../controller/create_v2');

// The routes have to be set only once and passed in, option or parameter

api.get('/BeerDistribution', readController);

api.post('/BeerDistribution', createController) 

module.exports = api;