
var express = require('express');
var port = process.env.PORT || 8777;
var app = express();

app
.use(express.static(__dirname + '/app'))
.listen(port, function() {console.log('listening on', port)});
