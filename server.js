const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const request = require('request');
const url = "https://freegeoip.app/json/";
app.use('/geoData', (req, res) => {
    request(url + req.body.ip, (error, response, body) => {
        res.json(body)
    });
});

app.listen(port, function () { });
