const app = require('./server');

const BeerDistriBution = require('./service/BeerDistriBution');
BeerDistriBution.register(app);

const OrderConfirmation = require('./service/OrderConfirmation');
OrderConfirmation.register(app);

app.get('/', function (req, res) {
  res.send('Hello World!')
});


