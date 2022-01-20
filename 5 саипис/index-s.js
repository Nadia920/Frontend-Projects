db = {}
db = window.openDatabase("Instrument", "1.0", "list of instruments", 5*1024*1024);

db.transaction(function (tx){
    tx.executeSql("CREATE TABLE IF NOT EXISTS instrument (ID INTEGER PRIMARY KEY ASC, instrument_name TEXT, inferiority_instrument TEXT, instrument_price DOUBLE, instrument_weight INTEGER)");
});

class Instrument {
    constructor(id, instrument_name, inferiority_instrument, instrument_price, instrument_weight) {
        this.id = id;
        this.instrument_name = instrument_name;
        this.inferiority_instrument = inferiority_instrument;
        this.instrument_price = instrument_price;
        this.instrument_weight = instrument_weight;
    }
}

var set = new Set();

function createObject(){
    var id = document.getElementById("id").value;
    var instrumentName = document.getElementById("instrument-name").value;
    var inferiorityInstrument = document.getElementById("inferiority-instrument").value;
    var instrumentPrice = document.getElementById("instrument-price").value;
    var instrumentWeight = document.getElementById("instrument-weight").value;

    var instrument = new Instrument(id, instrumentName, inferiorityInstrument, instrumentPrice, instrumentWeight);

    db.transaction(function(tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS instrument (ID INTEGER PRIMARY KEY ASC, instrument_name TEXT, inferiority_instrument TEXT, instrument_price DOUBLE, instrument_weight INTEGER)");
        tx.executeSql("INSERT INTO instrument (instrument_name, inferiority_instrument, instrument_price, instrument_weight) VALUES (?,?,?,?)", [instrument.instrument_name, instrument.inferiority_instrument, instrument.instrument_price, instrument.instrument_weight]);
    });
}

function showAll(){
    clearinst();
    var Table = document.createElement("table");
    var select = document.getElementById("instrument-list");
    Table.id = "newTable";
    Table.innerHTML += "<tr><th>ID</th><th>Инструмент</th><th>Назначение</th><th>Цена</th><th>Вес</th></tr>";
    db.transaction(function (tx){
        tx.executeSql("SELECT * FROM instrument", [], function(tx, result){
            for (var i = 0; i < result.rows.length; i++){
                var instrument = new Instrument(result.rows.item(i)['ID'], result.rows.item(i)['instrument_name'], result.rows.item(i)['inferiority_instrument'], result.rows.item(i)['instrument_price'], result.rows.item(i)['instrument_weight']);
             //   console.log(instrument.brand);
                console.info('Инструмент', 'Назначение', 'Цена', 'Вес', 'Бренд');
                console.log(instrument);
                //console.log(instrument.inferiority_instrument);
               // console.log(instrument.instrument_price);
               // console.log(instrument.instrument_weight);
                set.add(instrument);
                Table.innerHTML += "<tr><td>" + instrument.id + "</td><td>" + instrument.instrument_name + "</td><td>" + instrument.inferiority_instrument + "</td><td>" + instrument.instrument_price + "</td><td>" + instrument.instrument_weight + "</td></tr>";
                var newSelect = document.createElement("option");
                newSelect.text = instrument.id;
                newSelect.value = instrument.id;
                newSelect.className = "newSelect";
                select.add(newSelect);
                if (instrument.brand != null){
                    Table.innerHTML += "Бренд: " + instrument.brand;
                }
            }
        })
        document.getElementById("table").appendChild(Table);
    });
}

function clearinst(){
    var oldTable = document.getElementById("newTable");
    var oldSelect = document.getElementsByClassName("newSelect");
    if (oldTable != null){
        oldTable.parentNode.removeChild(oldTable);
    }
    if(oldSelect != null){
        for (var i=oldSelect.length - 1; i>=0; i--){
            oldSelect[i].parentNode.removeChild(oldSelect[i]);
        }
    }
}

function dele(){
    var id = document.getElementById("instrument-list").value;
    db.transaction(function (tx){
        tx.executeSql("DELETE FROM instrument WHERE ID=?", [id]);
    });
    clearinst();
    showAll();
    for (var item of set){
        if (id = item.id){
            var del = new Instrument(item.id, item.instrument_name, item.inferiority_instrument, item.instrument_price, item.instrument_weight);
            set.delete(del);
        }
    }
}

function MinMax(){
    if (set.size > 0){
        var id = set.values().next().value.id;
        var instrumentName = set.values().next().value.instrument_name;
        var inferiorityInstrument = set.values().next().value.inferiority_instrument;
        var instrumentPrice = set.values().next().value.instrument_price;
        var instrumentWeight = set.values().next().value.instrument_weight;
        var brand = set.values().next().value.brand;


        var maxw = new Instrument(id, instrumentName, inferiorityInstrument, instrumentPrice, instrumentWeight);
        maxw.brand = brand;
        var minw = new Instrument(id, instrumentName, inferiorityInstrument, instrumentPrice, instrumentWeight);
        for(var item of set){
            if (item.instrument_weight > maxw.instrument_weight){
                maxw.id = item.id;
                maxw.instrument_name = item.instrument_name;
                maxw.inferiority_instrument = item.inferiority_instrument;
                maxw.instrument_price = item.instrument_price;
                maxw.instrument_weight = item.instrument_weight;
                maxw.brand = item.brand;
            }
            if (item.instrument_weight < minw.instrument_weight){
                minw.id = item.id;
                minw.instrument_name = item.instrument_name;
                minw.inferiority_instrument = item.inferiority_instrument;
                minw.instrument_price = item.instrument_price;
                minw.instrument_weight = item.instrument_weight;
            }
        }
        var table = document.createElement("table");
        table.id = "newTable";
        table.innerHTML += "<tr><th>Минимальный вес</th><th>Инструменты</th><th>Назначени</th><th>Цена</th><th>Вес</th></tr>";
        table.innerHTML += "<tr><td>" + minw.id + "</td><td>" + minw.instrument_name + "</td><td>" + minw.inferiority_instrument + "</td><td>" + minw.instrument_price + "</td><td>" + minw.instrument_weight + "</td></tr>";
        table.innerHTML += "<tr><th>Максимальный вес</th><th>Инструменты</th><th>Назначение</th><th>Цена</th><th>Вес</th></tr>";
        table.innerHTML += "<tr><td>" + maxw.id + "</td><td>" + maxw.instrument_name + "</td><td>" + maxw.inferiority_instrument + "</td><td>" + maxw.instrument_price + "</td><td>" + maxw.instrument_weight + "</td></tr>";
        table.innerHTML += maxw.brand;
        document.getElementById("table").appendChild(table);
    }
    else{
        alert("ничего нет :(");
    }
}

function addNewProperty(){
    var brand = document.getElementById("add-property").value;
    Instrument.prototype.brand = brand;
    setbrand(brand);
    console.log(Instrument.prototype.brand);
    db.transaction(function(tx){
        tx.executeSql("ALTER TABLE instrument ADD COLUMN brand TEXT");
    })
    db.transaction(function(tx){
        tx.executeSql("UPDATE instrument SET brand = ?", [brand]);
    })
}

function setbrand(brand){
    for(var item of set){
        item.brand = brand;
    }
}

function delNewProperty(){
    Instrument.prototype.brand = null;
    db.transaction(function(tx){
        tx.executeSql("UPDATE instrument SET brand = NULL");
    })
}