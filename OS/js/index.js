var OSs;

$(document)
    .ajaxStart(function() {
        alert("Начало запроса");
    })
    .ajaxSend(function(event, jqxhr, settings) {
        alert("Запрос отправлен по адресу: "+settings.url);
    })
    .ajaxStop(function() {
        alert("Запросы завершены");
    })
    .ajaxError(function(event, jqxhr, settings) {
        alert("Ошибка");
    })
    .ajaxComplete(function(event, jqxhr, settings) {
        alert("Запрос завершен");
    })
    .ajaxSuccess(function(event, jqxhr, settings) {
        alert("С сервера получены данные: "+jqxhr.responseText);
    });


$(document).ready(function () {
    function loadFile(filename) {
        if (document.getElementsByClassName("info")[0] != null)
            $(".info").remove();

        let divElement = document.createElement("div");
        divElement.className = "info";

        $(divElement).load(filename, function (responseText, statusTxt) {
            if (statusTxt == "success") {
                OSs = responseText.split('\n');
                divElement.innerHTML = createList(OSs);
                $(".bs").after(divElement);
            }
            if (statusTxt == "error")
                alert("Загрузка не удалась");
        });
    }

    $("#iPhone").click(function () {
        loadFile("resource/iPhoneOS.txt");
    });

    $("#Android").click(function () {
        loadFile("resource/AndroidOS.txt");
    });

    $("#Bada").click(function () {
        loadFile("resource/BadaOS.txt");
    });

    $("#Symbian").click(function () {
        loadFile("resource/SymbianOS.txt");
    });
});

$(document).on("click", "button#full_information", function () {
    let divElement = document.createElement("div");
    let fileName = getFileName(OSs[0]);
    
    $.getJSON(fileName, function (responseText, status, xhr) {
        let Info = "";
        if (status == "error")
            alert("Не получилось считать");

        $.each(xhr.responseJSON, function (i, field) {
            Info += "Дата выхода: " + field.date + "</br>" +
            "Разработчики: " + field.developers+ "</br>" +
                "Семейство ОС: " + field.familyOs;
        });
        document.getElementsByClassName('OS_body')[0].innerHTML = Info;
    });
});

function createList(OS) {
    let htmlText = "<div class='OS_title'> " + OS[0] + "</div>";

    htmlText += "<div class='OS_body'>";
    for (let i = 1; i < OS.length; i++)
        htmlText +=  OS[i] + "<br/>";

    htmlText += "</div><button id='full_information'>Статистика</button>";

    return htmlText;
}

function getFileName(OSId) {
    let fileName = "";

    switch (OSId.trim()) {
        case "iPhone OS":
            fileName = "resource/iPhoneOS.json";
            break;
        case "Android OS":
            fileName = "resource/AndroidOS.json";
            break;
        case "Bada OS":
            fileName = "resource/BadaOS.json";
            break;
        case "Symbian OS":
            fileName = "resource/SymbianOS.json";
            break;
    }
    return fileName;
}
