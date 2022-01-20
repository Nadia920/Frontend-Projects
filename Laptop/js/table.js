var table = document.getElementById('table');
var table1 = document.getElementById('table1');
try {
    var voices = JSON.parse(localStorage.getItem('voices')) || [];
  } catch (error) {
    var voices = [];
  }

  try {
    var voices1 = JSON.parse(localStorage.getItem('voices1')) || [];
  } catch (error) {
    var voices1 = [];
  }
// console.log(voices);
for(var i = 0 ; i<voices.length; i++) {
    var tr = document.createElement('tr');
    tr.innerHTML = "<td>" + voices[i].username +"</td>" + 
    "<td>" + voices[i].os + "</td>" +  
    "<td>" + voices[i].model + "</td>" + 
    "<td>" + voices[i].kinds +"</td>" +
    "<td>" + voices[i].hard_disk +"</td>" +  
    "<td>" + voices[i].video_card +"</td>" +  
    "<td>" + voices[i].cost +"</td>" +  
    "<td>" + voices[i].email +"</td>" +  
    "<td>" + voices[i].screen_size +"</td>" +  
    "<td>" + voices[i].screen_resolution +"</td>" +  
    "<td>" + voices[i].matrix_type +"</td>" +  
    "<td>" + voices[i].CPU +"</td>" +  
    "<td>" + voices[i].RAM_size +"</td>" +  
    "<td>" + voices[i].password +"</td>" +  
    "<td>" + voices[i].mood +"</td>";
    table.append(tr);/*обновление*/ 
}

for(var i = 0 ; i<voices1.length; i++) {
    var tr = document.createElement('tr');
    tr.innerHTML = "<td>" + (i+1) + " " + voices1[i].username +"</td>"; 
    table1.append(tr);
}

function FontSizef() {
    var table = document.getElementById("table").getElementsByTagName("td");
      for(var i=0; i<table.length; i++) {
          var td = table[i];
          td.style.fontSize = "15px";  
      }
  }
  
  function Borderf() {
    var table = document.getElementById("table").getElementsByTagName("td");
      for(var i=0; i<table.length; i++) {
          var td = table[i];
          td.style.border = "6px solid red";
          
      }
      
  }
  
  function TableColorf() {
    table.style.color = "red";
    table.style.backgroundColor = "#A1ECFB";
  }  


let btn1 = document.getElementById("Size");
btn1.addEventListener("click", FontSizef);

let btn2 = document.getElementById("Border");
btn2.addEventListener("click", Borderf);

let btn3 = document.getElementById("TableColor");
btn3.addEventListener("click", TableColorf);