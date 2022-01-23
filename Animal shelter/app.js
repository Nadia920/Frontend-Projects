var express = require('express');
var app = express(),
    bodyParser = require('body-parser');;
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var server = require('http').Server(app);
var port = 63343;

server.listen(port, 'localhost', function () {
    var addr = server.address();
    console.log('listening on ' + addr.address + ':' + addr.port);
    app.use(express.static("public"));
});


app.post('/', urlencodedParser, function (req, res) {
    console.log("post");
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    var str = JSON.stringify(req.body);
    var fs = require('fs');
    fs.writeFileSync('public/data.json', str);
    str = "";
    for (var key in req.body){
        str += req.body[key] + "\n";
      }
    fs.writeFileSync('public/text.txt', str);
    res.sendStatus(200);
});


//http://localhost:63343
