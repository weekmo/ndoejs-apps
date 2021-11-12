const express = require('express');
const app = express();
const logger = require('./logger');
const autherize = require('./autherize');
//const path = require('path');

const PORT = process.env.PORT || 5000;

// Use this function in all routes
//app.use(logger);
//app.use('/api',logger);
app.use([logger,autherize]);
/*
app.get('/', logger, (reg, res) => {
    res.send('<h1>Home Page</h1><br/><a href="/api/products">Products</a>');
});

app.get('/', [logger,autherize], (reg, res) => {
    res.send('<h1>Home Page</h1><br/><a href="/api/products">Products</a>');
});
*/
app.get('/', (reg, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/api/items', (reg, res) => {
    res.send('<h1>Items Page</h1>');
});

app.get('/api/products', (reg, res) => {
    res.send('<h1>Products</h1>');
});



app.listen(PORT, () => console.log(`Server running on port ${PORT} ...`));