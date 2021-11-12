const express = require('express');
const app = express();
//const app = require('express')();
const path = require('path');

const PORT = process.env.PORT || 5000;

// Static assits
app.use(express.static('../public'));

/*
app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname,'../navbar-app/index.html'));
    //res.send('Home page');
});
*/

app.get('/about', (req, res) => {
    res.send('About page');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>404 resource not found</h1>');
});

app.listen(PORT, () => console.log(`Server running in port ${PORT} ...`));