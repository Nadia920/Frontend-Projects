var is_clicked = true;
var is_disabled = false;
$(document).ready(function() {
    $(document).ajaxSend(function() {
        $('#p-text').text("ajaxSend");
    });
    $("#first-button").click(function(){
        if ($('#radio1').is(':checked')) {
            $.ajax({
                url: "../script/first.xml",
                success : function(data){
                    console.log("Соединились с XML :)")
                    $('#text1').val($(data).find('Name').html());
                    $('#text2').val($(data).find('Sex').html());
                    $('#text3').val($(data).find('Age').html());
                    $('#text4').val($(data).find('Faculty').html());
                },
                error : function (xhr, ajaxOptions, thrownError){  
                    console.log(xhr.status);          
                    console.log(thrownError);
                    alert("Не соединились с XML :(")
                    location.reload(true);
                    error();
                } 
            });
        } else if ($('#radio2').is(':checked')) {
            $.ajax({
                url: "../script/second.xml",
                success : function(data){
                    console.log("Соединились с XML :)")
                    $('#text1').val($(data).find('Name').html());
                    $('#text2').val($(data).find('Sex').html());
                    $('#text3').val($(data).find('Age').html());
                    $('#text4').val($(data).find('Faculty').html());
                },
                error : function (xhr, ajaxOptions, thrownError){  
                    console.log(xhr.status);          
                    console.log(thrownError);
                    alert("Не соединились с XML :(")
                    location.reload(true);
                    error();
                } 
            });
        } else if ($('#radio3').is(':checked')) {
            $.ajax({
                url: "../script/third.xml",
                success : function(data){
                    console.log("Соединились с XML :)")
                    $('#text1').val($(data).find('Name').html());
                    $('#text2').val($(data).find('Sex').html());
                    $('#text3').val($(data).find('Age').html());
                    $('#text4').val($(data).find('Faculty').html());
                },
                error : function (xhr, ajaxOptions, thrownError){  
                    console.log(xhr.status);          
                    console.log(thrownError);
                    alert("Не соединились с XML :(")
                    location.reload(true);
                    error();
                } 
            });
        }
    });  
    
    $("#second-button").click(function(){
        if (is_clicked == true){
        var url = 'http://127.0.0.1:8080/script/add.js';
            $.getScript(url, function( data, textStatus, jqxhr ) {
                console.log( data ); // Data returned
                console.log( textStatus ); // Success
                console.log( jqxhr.status ); // 200
                console.log( "Load was performed." )
                is_clicked = false;
            });
        }
    })
    $("#third-button").click(function(){
        if (is_disabled == false){
        $('#first-button').attr('disabled', '');
        $('#second-button').attr('disabled', '');
        is_disabled = true;
        } else{
            $('#first-button').removeAttr('disabled');
            $('#second-button').removeAttr('disabled');
            is_disabled = false;
        }
    });
});