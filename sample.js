const express = require('express');

const sampleInfo = express.Router();

sampleInfo.get('/', function(request, response){
    response.send("hello there! I'm a server");
});

module.exports = sampleInfo;