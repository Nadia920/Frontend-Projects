db = window.openDatabase("Instrument", "1.0", "list of instruments", 5 * 1024 * 1024);
let param = 0;
db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS instrument (ID INTEGER PRIMARY KEY ASC, instrument_name TEXT, inferiority_instrument TEXT, instrument_price DOUBLE, instrument_weight INTEGER, brand TEXT)");
});

class Instrument {
    constructor(id, instrument_name, inferiority_instrument, instrument_price, instrument_weight, brand) {
        this.id = id;
        this.instrument_name = instrument_name;
        this.inferiority_instrument = inferiority_instrument;
        this.instrument_price = instrument_price;
        this.instrument_weight = instrument_weight;
        this.brand = brand;
    }
    show() {
        alert("Все товары cклада");
    }
}

var set = new Set();
console.log(document.querySelector('#myform #buttonnew'));
document.querySelector('#myform #buttonnew').addEventListener('click', (event) => {
    event.preventDefault();
    if (param == 0) {
        let instrument = new Instrument(0, myform.name.value, myform.point.value, myform.price.value, myform.weight.value, 0);
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO instrument (instrument_name, inferiority_instrument, instrument_price, instrument_weight, brand) VALUES (?,?,?,?,?)", [instrument.instrument_name, instrument.inferiority_instrument, instrument.instrument_price, instrument.instrument_weight, instrument.brand]);
        });
        
    }
    else {
        let instrument = new Instrument(0, myform.name.value, myform.point.value, myform.price.value, myform.weight.value, myform.brand.value);
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO instrument (instrument_name, inferiority_instrument, instrument_price, instrument_weight, brand) VALUES (?,?,?,?,?)", [instrument.instrument_name, instrument.inferiority_instrument, instrument.instrument_price, instrument.instrument_weight, instrument.brand]);
        });
       
    }
    showAll()
})

function showAll() {
    let instrument = new Instrument();
    instrument.show();
    clearinst();
    var Table = document.createElement("table");
    var select = document.getElementById("instrument-list");
    Table.id = "newTable";
    if (param == 0) {
        Table.innerHTML += `<tr><th>ID</th><th>Инструмент</th><th>Назначение</th><th>Цена</th><th>Вес</th></tr>`;
    }
    else {
        Table.innerHTML += `<tr><th>ID</th><th>Инструмент</th><th>Назначение</th><th>Цена</th><th>Вес</th> + <th id="brand" >Бренд</th></tr>`;
    }

    db.transaction(function (tx) {

        tx.executeSql("SELECT * FROM instrument", [], function (tx, result) {
            for (var i = 0; i < result.rows.length; i++) {

                if (param == 1) {
                    var instrument = new Instrument(result.rows.item(i)['ID'], result.rows.item(i)['instrument_name'], result.rows.item(i)['inferiority_instrument'], result.rows.item(i)['instrument_price'], result.rows.item(i)['instrument_weight'], result.rows.item(i)['brand']);
                    
                    console.log(instrument);

                }
                else {

                    var instrument = new Instrument(result.rows.item(i)['ID'], result.rows.item(i)['instrument_name'], result.rows.item(i)['inferiority_instrument'], result.rows.item(i)['instrument_price'], result.rows.item(i)['instrument_weight'], 0);
                    
                    console.log(instrument);
                }
                set.add(instrument);
              
                if (param == 1) {
                    Table.innerHTML += "<tr><td>" + instrument.id + "</td><td>" + instrument.instrument_name + "</td><td>" + instrument.inferiority_instrument + "</td><td>" + instrument.instrument_price + "</td><td>" + instrument.instrument_weight + "</td><td>" + instrument.brand + "</td></tr>";
                }
                else {
                    Table.innerHTML += "<tr><td>" + instrument.id + "</td><td>" + instrument.instrument_name + "</td><td>" + instrument.inferiority_instrument + "</td><td>" + instrument.instrument_price + "</td><td>" + instrument.instrument_weight + "</td></tr>";
                }
                var newSelect = document.createElement("option");
                newSelect.text = instrument.id;
                newSelect.value = instrument.id;
                newSelect.className = "newSelect";
                select.add(newSelect);

            }
        })
        document.getElementById("table").appendChild(Table);
    });
}

function clearinst() {
    var oldTable = document.getElementById("newTable");
    var oldSelect = document.getElementsByClassName("newSelect");
    if (oldTable != null) {
        oldTable.parentNode.removeChild(oldTable);
    }
    if (oldSelect != null) {
        for (var i = oldSelect.length - 1; i >= 0; i--) {
            oldSelect[i].parentNode.removeChild(oldSelect[i]);
        }

    }
}

function dele() {
    var id = document.getElementById("instrument-list").value;
    db.transaction(function (tx) {
        tx.executeSql("DELETE FROM instrument WHERE ID=?", [id]);
    });
    clearinst();
    showAll();
    for (var item of set) {
        if (id == item.id) {
            if (param == 0) {
                var del = new Instrument(item.id, item.instrument_name, item.inferiority_instrument, item.instrument_price, item.instrument_weight);
                set.delete(del);
            }
            else {
                var del = new Instrument(item.id, item.instrument_name, item.inferiority_instrument, item.instrument_price, item.instrument_weight, item.brand);
                set.delete(del);
            }
        }
    }
}

function MinMax() {
    //showAll();

    if (set.size > 0) {
        if (param == 1) {
            var id = set.values().next().value.id;
            var instrumentName = set.values().next().value.instrument_name;
            var inferiorityInstrument = set.values().next().value.inferiority_instrument;
            var instrumentPrice = set.values().next().value.instrument_price;
            var instrumentWeight = set.values().next().value.instrument_weight;
            var brand = set.values().next().value.brand;
            var maxw = new Instrument(id, instrumentName, inferiorityInstrument, instrumentPrice, instrumentWeight, brand);
            var minw = new Instrument(id, instrumentName, inferiorityInstrument, instrumentPrice, instrumentWeight, brand);
            for (var item of set) {
                if (item.instrument_weight > maxw.instrument_weight) {
                    maxw.id = item.id;
                    maxw.instrument_name = item.instrument_name;
                    maxw.inferiority_instrument = item.inferiority_instrument;
                    maxw.instrument_price = item.instrument_price;
                    maxw.instrument_weight = item.instrument_weight;
                    maxw.brand = item.brand;
                }
                if (item.instrument_weight < minw.instrument_weight) {
                    minw.id = item.id;
                    minw.instrument_name = item.instrument_name;
                    minw.inferiority_instrument = item.inferiority_instrument;
                    minw.instrument_price = item.instrument_price;
                    minw.instrument_weight = item.instrument_weight;
                    minw.brand = item.brand;
                }
            }
            var table = document.createElement("table");
            table.id = "newTable";
            table.innerHTML += "<tr><th>Минимальный вес</th><th>Инструменты</th><th>Назначени</th><th>Цена</th><th>Вес</th><th>Бренд</th></tr>";
            table.innerHTML += "<tr><td>" + minw.id + "</td><td>" + minw.instrument_name + "</td><td>" + minw.inferiority_instrument + "</td><td>" + minw.instrument_price + "</td><td>" + minw.instrument_weight + "</td><td>" + minw.brand + "</td></tr>";
            table.innerHTML += "<tr><th>Максимальный вес</th><th>Инструменты</th><th>Назначение</th><th>Цена</th><th>Вес</th><th>Бренд</th></tr>";
            table.innerHTML += "<tr><td>" + maxw.id + "</td><td>" + maxw.instrument_name + "</td><td>" + maxw.inferiority_instrument + "</td><td>" + maxw.instrument_price + "</td><td>" + maxw.instrument_weight + "</td><td>" + maxw.brand + "</td></tr>";
            document.getElementById("table").appendChild(table);
        }
        else {
            var id = set.values().next().value.id;
            var instrumentName = set.values().next().value.instrument_name;
            var inferiorityInstrument = set.values().next().value.inferiority_instrument;
            var instrumentPrice = set.values().next().value.instrument_price;
            var instrumentWeight = set.values().next().value.instrument_weight;
            var maxw = new Instrument(id, instrumentName, inferiorityInstrument, instrumentPrice, instrumentWeight);
            var minw = new Instrument(id, instrumentName, inferiorityInstrument, instrumentPrice, instrumentWeight);
            for (var item of set) {
                if (item.instrument_weight > maxw.instrument_weight) {
                    maxw.id = item.id;
                    maxw.instrument_name = item.instrument_name;
                    maxw.inferiority_instrument = item.inferiority_instrument;
                    maxw.instrument_price = item.instrument_price;
                    maxw.instrument_weight = item.instrument_weight;
                }
                if (item.instrument_weight < minw.instrument_weight) {
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
            document.getElementById("table").appendChild(table);
        }
    }
    else {
        alert("ничего нет ");
    }
}

function addNewProperty() {
   
    param = 1;
    
    alert("Новое свойство добавлено");
    let new1 = document.getElementById("new");
    new1.style.display = 'block';
    showAll();
    

}


function delNewProperty() {
   
    param = 0;
    let new1 = document.getElementById("new");
    new1.style.display = 'none';
    showAll();
    
}
extra = document.getElementById("extra");
let elem = document.createElement('p');
  elem.append(extra.content.cloneNode(true));
  elem.innerHTML = "Новый пользователь";
  document.body.append(elem);