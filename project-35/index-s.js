let all_data = new Array();
let count = 0;


function createPage() {
    var data = new Array();
    data["name"] = document.getElementsByName("name")[0].value;
    data["email"] = document.getElementsByName("email")[0].value;
    data["range"] =  getCheckedByName("range");
    data["grade"] = document.getElementsByName("grade")[0].value;


    if (document.getElementById('radio1').checked) {
        data["radio"] = "Доволен(а)";
    } else {
        data["radio"] = "Недоволен(а)";
    }
    ;

    data["comment"] = document.getElementsByName("comment")[0].value;
    data["favcolor"] = document.getElementsByName("favcolor")[0].value;

    all_data[count] = data;
    count++;
    clear();

    var html = '<html>';
    html+='<head><title>Результат опроса</title><link rel="stylesheet" href="s1.css"></head><body>';
    html+="<header><p class ='hd'Информация об ответах></p></header><body><div class='content'>";
    html+="<nav><ul class='menu'><li class='forli'><a href='index.html'>Вернуться к анкете</a></li></ul></nav>";
    html+="<article><table>";
    html+='<caption><h1>Результаты опроса</h1></caption>';
    html+="<tr><td>№</td><td>Имя</td><td>email</td><td>Производители</td><td>Оценка</td><td>Удовлетворенность</td>" +
        "<td>Цвет</td>" +
        "<td>Предложения</td></tr>";

    for (var i=0; i < count; i++) {
        var j = i + 1;
       html += "<tr><td>" + j + "</td><td>" + all_data[i].name + "</td><td>" + all_data[i].email +
            "</td><td>" + all_data[i].range + "</td><td>" + all_data[i].grade + "</td>" +
            "<td>" + all_data[i].radio + "</td> <td>" + all_data[i].favcolor + "</td><td>" + all_data[i].comment + "</td></tr>";
    }

    html += "</table><h1>Список зарегистрировавшихся<br></h1><ol>";
    for (var i = 0; i < count; i++) {
        html += "<li>" + all_data[i].name + "</li>";
    }
    html+="</ol>";
    html+="<button type='button' class='b1' onclick='window.close()'>Закрыть</button>";
    html+="</article><aside class='aside'><div class='sale'></div></aside></body></html>";

    var opened = window.open("");
    opened.document.write(html);

}

function getCheckedByName(name) {
    var checkboxes = document.getElementsByName(name);
    var results = [];
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked ? results.push(checkboxes[i].value) : "";
    }
    return results;
}

function clear() {
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName("radio")[0].checked = false;
    document.getElementsByName("grade")[0].value = "";
    uncheckAllCheckboxes("range");
    document.getElementsByName("favcolor")[0].value = "";
    document.getElementsByName("comment")[0].value = "";
}

function uncheckAllCheckboxes(name) {
    var checkboxes = document.getElementsByName(name);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxes[i].checked = false;
        }
    }
}

function close() {
    window.close();
}