require('./models/product');
const express = require('express');
const config = require('./config/app');
const bodyParser = require('body-parser');
const app = express();
require('./config/express')(app);
const mongoose = require('mongoose');
const contollerProducts = require('./controllers/controller.products');
mongoose.connect(config.mongoUri);
app.get('/products', contollerProducts.getAll);
app.post('/products', contollerProducts.create);
app.put('/products/:id', contollerProducts.update);
app.delete('/products/:id', contollerProducts.deleteOne);
app.listen(config.appPort, (err) => {
    if(err) throw err;
    // eslint-disable-next-line
    console.log('server start on 3000 port');
});