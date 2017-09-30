var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

//source routes and use them
var index = require('./modules/routes/index');
var listing = require('./modules/routes/listing');

app.use('/', index);
app.use('/listing', listing);

app.listen(port, function(){
    console.log('listening on port', port);
})