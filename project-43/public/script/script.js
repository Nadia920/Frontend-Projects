var is_old = false;
var is_fixed = false;
$(document).ready(function() {
    $('#send').click(function(){
        var text=document.getElementById('text').value;
        text = text.replace(/\s+/g, " ");
        console.log(text);
        SendOldText(text);
        var arrayOfMistakes = text.split(" ")
        let newArr = []
        for (let i = 0; i < arrayOfMistakes.length; i++){
            if (arrayOfMistakes[i][0] != arrayOfMistakes[i][0].toUpperCase()){
                newArr[i] = arrayOfMistakes[i].charAt(0).toUpperCase() + arrayOfMistakes[i].substr(1, arrayOfMistakes[i].length); 
            }
            else {
                newArr[i] = arrayOfMistakes[i];
            }
        }
        var newString = "";
        for (let i = 0; i < newArr.length; i++){
            newString = newString + newArr[i] + " ";
        }
        SendFixedText(newString);
    });
    $('#show1').click(function(){
        GetOld();
    });
    $('#show2').click(function(){
        GetFixed();
    });
});

function SendOldText(text){
    $.ajax({
        type: "POST", // метод передачи данных
        url: "old.txt", // путь к xml файлу
        contentType:"text/plain; charset=utf-8",
        data:text
        
    });
}

function SendFixedText(text){
    $.ajax({
        type: "POST", // метод передачи данных
        url: "fix.txt", // путь к xml файлу
        contentType:"text/plain; charset=utf-8",
        data:text
        
    });
}

function GetOld(){
    $.ajax({
        type: "POST", // метод передачи данных
        contentType:"text/txt; charset=UTF-8 ",
        url: "old.txt", // путь к xml файлу

        // если получили данные из файла
        success: function(data) {
            var arrayOfMistakes = data.split(" ")
            if (!is_old){
                $('#left').append("<ul id='append1'></ul>")
                for (let i = 0; i < arrayOfMistakes.length; i++){
                    $("#append1").append("<li>" + arrayOfMistakes[i] + "</li>")
                }
                is_old = true;
            }
        },
        // если произошла ошибка при получении файла
        error: function(){
            alert('ERROR');
        }
    });
}

function GetFixed(){
    $.ajax({
        type: "POST", // метод передачи данных
        contentType:"text/plain; charset=UTF-8 ",
        url: "fix.txt", // путь к xml файлу
                
        // если получили данные из файла
        success: function(data) {
            var arrayOfFixed = data.split(" ")
            arrayOfFixed.pop()
            if(!is_fixed){
                $('#right').append("<ul id='append2'></ul>")
                for (let i = 0; i < arrayOfFixed.length; i++){
                    $("#append2").append("<li>" + arrayOfFixed[i] + "</li>")
                }
                is_fixed = true;
            }
        },
        // если произошла ошибка при получении файла
        error: function(){
            alert('ERROR');
        }
    });
}