require('./models/product');
const express = require('express');
const config = require('./config/app');
const bodyParser = require('body-parser');
const app = express();
require('./config/express')(app);
require('./config/routes')(app);
const mongoose = require('mongoose');
const contollerProducts = require('./controllers/controller.products');
mongoose.connect(config.mongoUri)
    .then(() => console.log('server start on 3000 port'))
    .catch((err) => console.error(`Error connecting to mongo: ${config.mongoUri}, ${err}`));
app.listen(config.appPort);