
function one() {
    
$( ".class2, .class4, .class6" ).fadeOut(4000);
    
    
    let img = document.getElementsByClassName("id1");
    $(img).css('border', function(){ return '5px solid #f00';}); 
}
function two() {
    $(".class1").append("<input name='lily' value='' id = 'idNEW' type = 'text' />"); 
    $(".class3").append("<input name='lily' value='' id = 'idNEW' type = 'text'/>");
    $(".class5").append("<input name='lily' value='' id = 'idNEW' type = 'text'/>");  
    $(".class1 , .class3, .class5").each(function() {
        let text = $(this).html();
        $(this).html(text.replaceAll('LONDON', 'PARISE' ));
        
    });

    $( "#button1" ).fadeOut(4000);
}
