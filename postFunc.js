const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let data = {}

let rawData = fs.readFileSync('data.json');
data = JSON.parse(rawData);

const saveToFile = (file) => {
    fs.writeFile('data.json', file, 'utf-8', (err) => {
        if (err){
            console.log(err);
        }
        console.log('Plik zapisany!');
    });
}

app.post('/form', function (req, res) {
    let requestAsJson = JSON.stringify(req.body);
    res.setHeader('Content-Type', 'application/json');
    console.log("Post data received: " + requestAsJson);

    let newObject = JSON.parse(requestAsJson);
    data.data.push(newObject);
    let readyJSON = JSON.stringify(data);

    saveToFile(readyJSON);

    res.send(requestAsJson);
});

app.get('/getData', function(req, res) {
    fs.readFile('data.json', 'utf-8', function (err, data) {
        let readyToRead = JSON.parse(data);
        res.send( readyToRead );
    });
})

app.listen(5000, function () {
    console.log('POST test server is running on port 5000');
})



