const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('work');
});
app.listen(port, (err) => {
    if(err) throw err;
    console.log('server start on 3000 port');
});