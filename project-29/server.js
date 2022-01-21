const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
var bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.text());
app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/html/index.html"));
});

app.post("/old", function(request, response) {
    console.log(request.body)
    fs.writeFileSync("old.txt", request.body);
});

app.post("/fix", function(request, response) {
    fs.writeFileSync("fix.txt", request.body);
});

app.post("/getOld", function(request, response) {
    response.sendFile(__dirname + "/old.txt");
});

app.post("/getFix", function(request, response) {
    response.sendFile(__dirname + "/fix.txt");
});

app.use("/", router);

app.use('/css', express.static(__dirname + '/css'));
app.use('/html',express.static(__dirname+"/html"));
app.use('/script',express.static(__dirname+ "/script"));

app.listen(8080, () => {
    console.log("App is starting at port ", 8080);
});