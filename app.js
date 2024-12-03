
const express = require('express');
const app = express()
const port = 3000;

app.use(express.static('public'));
const food = require('./data/food.js');


app.get('/', (req, res) => {
    res.send('Server del mio Blog!');
})

app.get('/bacheca', (req, res) => {

    let response = {
        totalCount: food.length,
        data: [...food]
    }
    

    let name = req.query.name;
    if(name){
        let filteredFood = food.filter((item) => {
            return item.name.toLowerCase().includes(name.toLowerCase());
        })
        let filteredResponse = {
            totalCount: filteredFood.length,
            data: [...filteredFood]
        }
        res.json(filteredResponse);
    }else{
        res.json(response);
    }

})

app.all('*', (req, res) => {
    res.status(404).send('PAGINA NON TROVATA');
})

app.listen(port,() =>{
    console.log('server is running');
})
