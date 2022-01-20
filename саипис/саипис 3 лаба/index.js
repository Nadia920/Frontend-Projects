const form = document.getElementById('form');
var nickname = document.getElementById('nickname');
var password = document.getElementById('password');
var screen_size = document.getElementById('screen_size');
var screen_resolution = document.getElementById('screen_resolution');
var matrix_type = document.getElementById('matrix_type');
var CPU = document.getElementById('CPU');
var RAM_size = document.getElementById('RAM_size');
var hard_disk = document.getElementById('hard_disk');
var video_card = document.getElementById('video_card');
var cost = document.getElementById('cost');
var kind = document.getElementsByName('kind');
var os = document.getElementsByName('os');
var model = document.getElementsByName('model');
var email = document.getElementById('email');

try {
  var voices = JSON.parse(localStorage.getItem('voices')) || [];
} catch (error) {
  var voices = [];
}

//document.getElementById("img").style.opacity=0.5;
/*function validateForm() {
    var modal = $modal();
}*/
/*var modal = $modal();
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal.show();
  });*/
  /*(function () {
    var modal = $modal();
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal.show();
  });
    });
    // при клике на документ
    document.addEventListener('click', function (e) {
      // если мы кликнули на измобржение расположенное в .img__items, то...
      if (e.target.matches('.img__items img')) {
        elemTarget = e.target;
        // устанавливаем модальному окну title
        modal.setContent('<div style="flex: 1 0 60%;"><img src="' + e.target.src + '" alt="' + e.target.alt + '" style="display: block; height: auto; max-width: 100%; margin: 0 auto;"></div><div style="flex: 1 0 40%;"><div style="font-size: 18px; font-weight:bold;">' + e.target.dataset.name + '</div>Цена:<br><b>' + e.target.dataset.price + '$</b></div>');
        modal.show();
      } else if (e.target.dataset.handler === 'modalHandlerCancel') {
        modal.hide();
      } else if (e.target.dataset.handler === 'modalHandlerDelete') {
        elemTarget.parentElement.removeChild(elemTarget);
        modal.hide();
      }
    });
  })();*/
  /*var modal = $modal();
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal').addEventListener('click', function(e) {
    // отобразим модальное окно
    modal.show();
});*/
/*var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
/*var list = [],
  $ins = $('screen_size, screen_resolution, matrix_type, CPU, RAM_size, hard_disk, video_card, cost, kind, os, model, email, name  '),
  counter = {
    screen_size: {},
    screen_resolution: {},
    matrix_type: {},
    CPU: {},
    RAM_size: {},
    hard_disk: {},
    video_card: {},
    cost: {},
    kind: {},
    os: {},
    model: {},
    email: {},
    name: {}
  };
$('#show-modal').click(function() {
  var obj = {},
    valid = true;
  $ins.each(function() {
    var val = this.value.trim();
    if (val) {
      obj[this.id] = val;
    } else {
      var name = this.previousSibling.nodeValue.trim();
      alert(name.substring(0, name.length - 1) + ' cannot be blank');
      this.focus();
      valid = false;
      return false;
    }
  });
  if (valid) {
    list.push(obj);
    $ins.val('');

    $.each(obj, function(key, value) {
      var count = counter[key][value] || 0;
      counter[key][value] = count + 1;
    });

  }
});

$('#print').click(function() {
  $('pre').text(JSON.stringify(list) + '\n\n');
  $('pre').append(document.createTextNode(JSON.stringify(counter)));
})
document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });*/

  /*function valid (form) {
     
     /*var email = form.email.value;
     var fail = "false";
     var name = form.name.value;
     var state = form.state.value
     if (name == "" || name == " ")
     fail = "Вы не ввели свой никнейм";
     if (contact == "")
     fail = "Укажите данные о технике";
     if (fail) 
       alert(fail);
     else
      window.location = "http://google.com";
      for(let i=1; i<=3; i++) {
        
      }
      var modal = document.getElementById("myModal");
      var btn = document.getElementById("show");
      var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      /*span.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      /*alert("Имя1212");
      alert(form.name.value);
      alert("Имя" + form.name.value);
      alert("Пароль" + form.password.value);
      alert("Размер экрана" + form.screen_size.value);
      alert("Расширение экрана" + form.screen_resolution.value);
      alert("Тип матрицы " + form.matrix_type.value);
      alert("Процессор " + form.CPU.value);
      alert("Объем оперативной памяти " + form.RAM_size.value);
      alert("Объем и тип жесткого диска " + form.hard_disk.value);
      alert("Видеокарта " + form.video_card.value);
      alert("Стоимость " + form.cost.value);
      alert("Вид техники " + form.kind.value);
      alert("ОС " + form.os.value);
      alert("Марка " + form.model.value);
      alert("Email " + form.email.value);
    }*/
    /*var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    function clear (form) {
  
    }
    function show (form) {
       
    }*/
/*document.querySelector('buttom').onclick = send;
function send(){
console.log(document.querySelector('#form').value);
document.querySelector('buttom').style.backgroundColor = document.querySelector('#form').value;
}*/

/*var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/
let elements = [100000000]; 
let index;
let elem;
function valid() {
  let modal = document.getElementById("myModal");
  modal.classList.add("active");
  //let elemform = document.querySelector("form");

  let tableform = document.querySelector("table");

  
  var checkedos;
    for (var i = 0; i < os.length; i++) {
        if (os[i].checked) {
          checkedos = os[i].value;
            break;
        }
    }

    var checkedmodel;
    for (var i = 0; i < model.length; i++) {
        if (model[i].checked) {
          checkedmodel = model[i].value;
            break;
        }
    }

    var kinds = [];
    for (var i = 0; i < kind.length; i++) {
        if (kind[i].checked) {
          kinds.push(kind[i].value);
        }
    }

    var screen_sizes = [];
    for (var i = 0; i < screen_size.options.length; i++) {
        if (screen_size.options[i].selected) {
          screen_sizes.push(screen_size.options[i].value);
        }
    }

    var screen_resolutionss = [];
    for (var i = 0; i < screen_resolution.options.length; i++) {
        if (screen_resolution.options[i].selected) {
          screen_resolutionss.push(screen_resolution.options[i].value);
        }
    }

    var matrix_types = [];
    for (var i = 0; i < matrix_type.options.length; i++) {
        if (matrix_type.options[i].selected) {
          matrix_types.push(matrix_type.options[i].value);
        }
    }

    var CPUs = [];
    for (var i = 0; i < CPU.options.length; i++) {
        if (CPU.options[i].selected) {
          CPUs.push(CPU.options[i].value);
        }
    }

    var RAM_sizes = [];
    for (var i = 0; i < RAM_size.options.length; i++) {
        if (RAM_size.options[i].selected) {
          RAM_sizes.push(RAM_size.options[i].value);
        }
    }
    /*console.log(password.value);*/
    console.log(nickname.value, password.value, screen_size.value, screen_resolution.value, matrix_type.value, CPU.value, RAM_size.value, hard_disk.value, video_card.value, cost.value, kinds, checkedos, checkedmodel, email.value  );
    voices.push({
        nickname: nickname.value,
        password: password.value,
        screen_size: screen_size.value,
        screen_resolution: screen_resolution.value,
        matrix_type: matrix_type.value,
        CPU: CPU.value,
        RAM_size: RAM_size.value,
        hard_disk: hard_disk.value,
        video_card: video_card.value,
        cost: cost.value,
        kinds: kinds,
        os: checkedos,
        model: checkedmodel,
        email: email.value
    });
    console.log(voices)
    localStorage.setItem('voices', JSON.stringify(voices));

    var table = document.getElementById('table');
try {
    var voices = JSON.parse(localStorage.getItem('voices')) || [];
  } catch (error) {
    var voices = [];
  }
// console.log(voices);
for(var i = 0 ; i<voices.length; i++) {
    var tr = document.createElement('tr');
    tr.innerHTML = "<td>" + voices[i].nickname +"</td>" + 
    "<td>" + voices[i].password + "</td>" +  
    "<td>" + voices[i].screen_size +"</td>" +  
    "<td>" + voices[i].screen_resolution +"</td>" +  
    "<td>" + voices[i].matrix_type +"</td>" +  
    "<td>" + voices[i].CPU +"</td>" +
    "<td>" + voices[i].RAM_size +"</td>" +  
    "<td>" + voices[i].hard_disk +"</td>" +  
    "<td>" + voices[i].video_card +"</td>" +  
    "<td>" + voices[i].cost +"</td>" +  
    "<td>" + voices[i].kind +"</td>" +  
    "<td>" + voices[i].os +"</td>" +  
    "<td>" + voices[i].model +"</td>" +  
    "<td>" + voices[i].email +"</td>";
    table.append(tr);
}



  /*document.getElementById("nameT").innerHTML = elemform.name.value;
  console.log( elemform.name.value);


  document.getElementById("passwordT").innerHTML = elemform.password.value;
  console.log( elemform.password.value);
 
  document.getElementById("screen_sizeT").innerHTML = elemform.screen_size.value;
  console.log( elemform.screen_size.value);

  document.getElementById("screen_resolutionT").innerHTML = elemform.screen_resolution.value;
  console.log( elemform.screen_resolution.value);

  document.getElementById("matrix_typeT").innerHTML = elemform.matrix_type.value;
  console.log( elemform.matrix_type.value);

  document.getElementById("CPUT").innerHTML = elemform.CPU.value;
  console.log( elemform.CPU.value);

  document.getElementById("RAM_sizeT").innerHTML = elemform.RAM_size.value;
  console.log( elemform.RAM_size.value);

  document.getElementById("hard_diskT").innerHTML = elemform.hard_disk.value;
  console.log( elemform.hard_disk.value);

  document.getElementById("video_cardT").innerHTML = elemform.video_card.value;
  console.log( elemform.video_card.value);

  document.getElementById("costT").innerHTML = elemform.cost.value;
  console.log( elemform.cost.value); */


    /*let checkboxes = document.querySelectorAll('[type="checkbox"]');
    let checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
    for (let index = 0; index < checkboxes.length; index++) {
       if (checkboxes[index].checked) {
          checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
          //alert(checkboxes[index].value); // делайте что нужно - это для наглядности
       }
    }*/

   // document.getElementById("kindT").innerHTML =  checkboxesChecked; 

 /* document.getElementById("kindT").innerHTML = elemform.kind.value;
  console.log( elemform.kind.value); 
  
  document.getElementById("osT").innerHTML = elemform.os.value;
  console.log( elemform.os.value); 
  
  document.getElementById("modelT").innerHTML = elemform.model.value;
  console.log( elemform.model.value); 
  
  document.getElementById("emailT").innerHTML = elemform.email.value;
  console.log( elemform.email.value); 

  document.getElementById("nameT1").innerHTML = elemform.name.value;
  console.log( elemform.email.value); */
  
  //let newElem 

  //let tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
  /*localStorage.setItem("Iname", nickname);
  localStorage.setItem("Ipassword", password);
  localStorage.setItem("Iscreen_size", screen_size);
  localStorage.setItem("Iscreen_resolution", screen_resolution);
  localStorage.setItem("Imatrix_type", matrix_type);
  localStorage.setItem("ICPU", CPU);
  localStorage.setItem("IRAM_size", RAM_size);
  localStorage.setItem("Ihard_disk", hard_disk);
  localStorage.setItem("Ivideo_card", video_card);
  localStorage.setItem("Icost", cost);
  localStorage.setItem("Ikind", kind);
  localStorage.setItem("Ios", os);
  localStorage.setItem("Imodel", model);
  localStorage.setItem("Iemail", email);

    newRow = tableform.insertRow();
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);
    newCell = newRow.insertCell(0);*/

    /*newCell.innerText = elemform.name.value;
    newCell.innerText = elemform.password.value;
    newCell.innerText = elemform.screen_size.value;
    newCell.innerText = elemform.screen_resolution.value;
    newCell.innerText = elemform.matrix_type.value;
    newCell.innerText = elemform.CPU.value;
    newCell.innerText = elemform.RAM_size.value;
    newCell.innerText = elemform.hard_disk.value;
    newCell.innerText = elemform.video_card.value;
    newCell.innerText = elemform.cost.value;
    newCell.innerText = elemform.kind.value;
    newCell.innerText = elemform.os.value;
    newCell.innerText = elemform.model.value;
    newCell.innerText = elemform.email.value;*/


  /*tableform.row = document.createElement("TR")
  tableform.td1 = createElement("TD")
  td1.appendChild(document.createTextNode("elemform.name.value"))
  tableform.td2 = document.createElement("TD")
  td2.appendChild (document.createTextNode("elemform.password.value"))
  let td3 = document.createElement("TD")
  td3.appendChild (document.createTextNode("elemform.password.value"))
  let td4 = document.createElement("TD")
  td4.appendChild (document.createTextNode("elemform.password.value"))
  let td5 = document.createElement("TD")
  td5.appendChild (document.createTextNode("elemform.password.value"))
  let td6 = document.createElement("TD")
  td6.appendChild (document.createTextNode("elemform.password.value"))
  let td7 = document.createElement("TD")
  td7.appendChild (document.createTextNode("elemform.password.value"))
  let td8 = document.createElement("TD")
  td8.appendChild (document.createTextNode("elemform.password.value"))
  let td9 = document.createElement("TD")
  td9.appendChild (document.createTextNode("elemform.password.value"))
  let td10 = document.createElement("TD")
  td10.appendChild (document.createTextNode("elemform.password.value"))
  let td11 = document.createElement("TD")
  td11.appendChild (document.createTextNode("elemform.password.value"))
  let td12 = document.createElement("TD")
  td12.appendChild (document.createTextNode("elemform.password.value"))
  let td13 = document.createElement("TD")
  td13.appendChild (document.createTextNode("elemform.password.value"))
  let td14 = document.createElement("TD")
  td14.appendChild (document.createTextNode("elemform.password.value"))
  row.appendChild(td1);
  row.appendChild(td2);
  tbody.appendChild(row);*/

  /*for (elem=0; elem<100000000; elem++){
    if (elements[elem] == undefined)
    {
       elements[elem] = elemform.name.value;
       console.log(elements[elem]);
       elements[elem+1] = elemform.password.value;
       console.log(elements[elem+1]);
       elements[elem+2] = elemform.screen_size.value;
       console.log(elements[elem+2]);
       elements[elem+3] = elemform.screen_resolution.value;
       elements[elem+4] = elemform.matrix_type.value;
       elements[elem+5] = elemform.CPU.value;
       elements[elem+6] = elemform.RAM_size.value;
       elements[elem+7] = elemform.hard_disk.value;
       elements[elem+8] = elemform.video_card.value;
       elements[elem+9] = elemform.cost.value;
       elements[elem+10] = checkboxesChecked;
       elements[elem+11] = elemform.os.value;
       elements[elem+12] = elemform.model.value;
       elements[elem+13] = elemform.email.value;
       break;
    }
  }*/

  let span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
}

function clearf() {
}

function showf() {
  let modal1 = document.getElementById("myModal");
  modal1.classList.add("active");
  let elemform1 = document.querySelector("form");

  let tableform1 = document.querySelector("table");

  let span = document.getElementsByClassName("close")[0];
 
  btn6.onclick = function() {
    modal1.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal1.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  /*window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }*/
  
}

function FontSizef() {
  document.getElementById("myModal").style.fontSize = value;
}

function Borderf() {
  var table = document.getElementById("table").getElementsByTagName("td");
    for(var i=0; i<table.length; i++) {
        var td = table[i];
        td.style.borderColor = "red";
    }
    table.style.border = 15;
}

function TableColorf() {
  var table = document.getElementById("table");
  table.style.color = "blue";
  table.style.textcolor = "red";

}






// Get the button that opens the modal
let btn = document.getElementById("myBtn");
btn.addEventListener("click", valid);

let btn5 = document.getElementById("clearall");
btn5.addEventListener("click", clearf);

let btn6 = document.getElementById("see");
btn6.addEventListener("click", showf);


let btn1 = document.getElementById("FontSize");
btn1.addEventListener("click", FontSizef);

let btn2 = document.getElementById("Border");
btn2.addEventListener("click", Borderf);

let btn3 = document.getElementById("TableColor");
btn3.addEventListener("click", TableColorf);

let btn4 = document.getElementById("WindowSize");
btn4.addEventListener("click", WindowSizef);



// When the user clicks the button, open the modal 






// Get the <span> element that closes the modal
