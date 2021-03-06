const products = require('./../controllers/controller.products');
module.exports = (app) => {
    app.get('/products', products.getAll);
    app.post('/products', products.create);
    app.put('/products/:id', products.update);
    app.delete('/products/:id', products.deleteOne);
};