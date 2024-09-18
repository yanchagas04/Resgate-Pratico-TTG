var express = require('express');
var app = express();
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
app.get('/', function (req, res) {
    res.send('Hello World');
});
