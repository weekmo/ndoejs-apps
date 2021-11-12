const express = require('express');
const app = express();
//const path = require('path');

const PORT = process.env.PORT || 5000;

const products = [
    { id: 1, name: 'Ali', age: 20, address: '13178' },
    { id: 3, name: 'Mohammed', age: 120, address: '13178' },
    { id: 2, name: 'Hassan', age: 35, address: '13178' },
];


app.get('/', (reg, res) => {
    res.send('<h1>Home Page</h1><br/><a href="/api/products">Products</a>');
});

app.get('/api/products', (reg, res) => {

    const mappedProd = products.map(product => {
        const { name, age } = product;
        return { name, age };
    });

    res.json(mappedProd);
});

app.get('/api/products/:productID', (req, res) => {
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find(product => product.id === Number(productID));
    if (!singleProduct) {
        res.status(404).send('<h2>Product is not found</h2>');
    }
    res.json(singleProduct);
});

app.get('/api/v1', (reg, res) => {
    const {serch,limit} = req.query;
    let sortedProducts = [...products];
    res.send('Hello world');
    console.log(sortedProducts);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT} ...`));