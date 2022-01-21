const express = require("express");
const app = express();
const path = require("path");

const router = express.Router();

app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/html/index.html"));
});

app.use("/", router);

app.use('/css', express.static(__dirname + '/css'));
app.use('/html',express.static(__dirname+"/html"));
app.use('/script',express.static(__dirname+ "/script"));

app.listen(8080, () => {
    console.log("App is starting at port ", 8080);
});