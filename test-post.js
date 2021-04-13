const request = require('request');
const { v4: uuidv4 } = require('uuid');

let postData = {};
let postConfig = {};
let postSuccessHandler = null;


postData = {
    name: "Rafał",
    surname: "Mędryk",
    age: 32,
    id: uuidv4(),
    languages: [
        {
            name: "English",
            level: "C2"
        },
        {
            name: "Polish",
            level: "Native"
        }
    ]
};

postConfig = {
    url:'http://localhost:5000/form',
    form: postData
};

postSuccessHandler = function (err, res, body){
    console.log('JSON response from the server: ' + body);
}

request.post(postConfig, postSuccessHandler);
