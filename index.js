const express = require('express');
const bodyParser = require('body-parser'); // считывает url и разбивает его, данные будут доступны в req.body
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/online-store');
const Product = mongoose.model('Product', {
    id: Number,
    name: String,
    price: mongoose.Schema.Types.Decimal128
});
app.use(bodyParser.json()); // используем json как формат для передачи данных, функция use добавляет middleware
const products = [
    {
        id: 1,
        name: 'phone',
        price: 300
    },
    {
        id: 2,
        name: 'tablet',
        price: 700
    }
];
app.get('/products', (req, res) => {
    Product.find()
        .exec()
        .then(products => res.json(products));
});
app.post('/products', (req, res) => {
    Product.create(req.body)
        .then(createdProduct => res.json(createdProduct));
});
app.put('/products/:id', (req, res) => {
    Product.findOneAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(product => req.json(product))
});
app.delete('/products/:id', (req, res) => {
    Product.deleteOne({id: req.params.id})
        .exec()
        .then(() => res.json({success: true}));
});
app.listen(port, (err) => {
    if(err) throw err;
    // eslint-disable-next-line
    console.log('server start on 3000 port');
});