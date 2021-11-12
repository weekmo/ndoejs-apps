const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('../methods-public'));

const people = [
    { id: 1, name: 'Ali', age: 20, address: '13178' },
    { id: 3, name: 'Mohammed', age: 120, address: '13178' },
    { id: 2, name: 'Hassan', age: 35, address: '13178' },
];

app.get('/', (reg, res) => {
    res.send('<h1>Home Page</h1><br/><a href="/api/products">Products</a>');
});

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data:people});
});

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: 'Please provide name!'});
    }
    res.status(201).json({success:true, person:name});
});

app.post('/login', (req, res) => {
    res.send('Post');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT} ...`));
