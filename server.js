const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const { request } = require('http');

let urlencoded = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());
app.use(urlencoded);
app.use(express.static(__dirname + '/public'));

app.get('/',(request,response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/formData', (request, response) =>{
    console.log(request.body)
    response.json({
        message:'Data Recieved'
    })
})

app.listen(port, () => console.log('Server Running'));

