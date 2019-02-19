const bodyParser = require('body-parser');
module.exports = (app) => {
    app.use(bodyParser.json()); // используем json как формат для передачи данных, функция use добавляет middleware
};