
const api = express.Router();
const  getController_v1 = require('../controller/get_v1');
const  createController_v1 = require('../controller/get_v1');

api.get('/cloudDistriButionSetting', getController_v1);

api.post('/cloudDistriButionSetting', createController_v1) 

modules.export = api;