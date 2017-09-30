var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

//source routes and use them
var index = require('./modules/routes/index');

app.use('/', index);

app.listen(port, function(){
    console.log('listening on port', port);
})