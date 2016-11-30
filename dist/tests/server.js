'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();


app.use('/public', express.static('src/tests/public'));

app.get('/', function (req, res) {
    _fs2.default.readFile('src/tests/views/index.html', function (err, data) {
        if (err) {
            throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});