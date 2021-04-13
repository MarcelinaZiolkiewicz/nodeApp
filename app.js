const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const express = require('express');
const port = process.env.PORT || 3000;
const app = express();


let data = {};

let rawData = fs.readFileSync('data.json');
data = JSON.parse(rawData);

console.log(data);
const saveJSON = JSON.stringify(data);

const saveToFile = () => {
    fs.writeFile('data.json', saveJSON, 'utf-8', (err) => {
        if (err){
            console.log(err);
        }
        console.log('Plik zapisany!');
    });
}

// saveToFile();

app.get('/', (req, res) => {
    console.log("Welcome to home site");
    res.send('Node.js app')
})

app.get('/dupa', (req, res) => {
    console.log("To wcale nie jest do dupy");

    fs.readFile('data.json', 'utf-8', function (err, data) {
        console.log( data );
        res.send( data );
    });
})

app.use(express.json());

app.post('/tools', (req, res) => {
    res.json(req.body)
})


app.get('/about', (req, res) => {
    res.send('About this app...')
})

app.listen(port);

