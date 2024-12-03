
const express = require('express');
const app = express()
const port = 3000;

app.use(express.static('public'));
const food = require('./data/food.js');


app.get('/', (req, res) => {
    res.send('Server del mio Blog!');
})

app.get('/bacheca', (req, res) => {
    res.json(food);

})

app.all('*', (req, res) => {
    res.status(404).send('PAGINA NON TROVATA');
})

app.listen(port,() =>{
    console.log('server is running');
})
