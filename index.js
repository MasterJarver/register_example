const express = require('express');
const bodyParser = require('body-parser'); // считывает url и разбивает его, данные будут доступны в req.body
const app = express();
const port = 3000;
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
    res.json(products); // отправка клиенту массива products в формате json
});
app.post('/products', (req, res) => {
    products.push(req.body); // добавляем json, который пришел из post
    console.log(products);
    res.json(req.body); // отправка измененного массива
});
app.put('/products/:id', (req, res) => {
    // p это объект в момент итерации по массиву
    // у объекта есть свойство id, ищем до тех пор, пока в массиве не будет найден объект с id запроса
    const product = products.find((p) => p.id.toString() === req.params.id); // поиск объекта
    const productIndex = products.indexOf(product); // поиск индекса конкретного объекта
    const newProduct = {...product, ...req.body}; // формируем новый элемент, каждое поле первого объекта меняется на каждое поле второго элемента
    products[productIndex] = newProduct; // запись объекта в массив по индексу
    res.json({success: true});
});
app.delete('/products/:id', (req, res) => {
    const product = products.find((p) => p.id.toString() === req.params.id); // поиск объекта
    const productIndex = products.indexOf(product); // поиск индекса конкретного объекта
    products.splice(productIndex, 1); // удаление одного элемента
    res.json({success: true});
});
app.listen(port, (err) => {
    if(err) throw err;
    // eslint-disable-next-line
    console.log('server start on 3000 port');
});