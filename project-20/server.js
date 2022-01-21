const express = require("express");
const fs = require("fs");
const jsonFile = require("jsonfile");

const app = express();
const urlencodedParser = express.urlencoded({
    extended: false
});

app.set("view engine", "pug");

app.listen(3000, () => {
    console.log("Hello, I'm server");
});
app.use(express.static(__dirname + '/public'));


app.get("/", function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/page.html");
});

app.post("/", urlencodedParser, function (request, response) {
    let mas =[];
    if(typeof(request.body.technique)==="object") {
        for(let i = 0; i < request.body.technique.length; i++)
            mas[i] = request.body.technique[i];
    }
    else mas[0] = request.body.technique;
    let str = JSON.stringify(request.body);
    
    response.render("page", {
        brand_name: request.body.nameO,
        window_size: request.body.window,
        window_resolution: request.body.permission,
        matrix_type: request.body.matrix,
        RAM_capacity: request.body.RAM,
        pay: request.body.pay,
        two_core: request.body.CPU == "2 ядра" ? 'true' : 'false',
        selected: mas
    })
    
    jsonFile.writeFile("form.json", request.body, function (error) {
        if (error) throw error;
    });
    
    
});
