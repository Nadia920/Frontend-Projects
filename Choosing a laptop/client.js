function getChecked() {
    let selected = document.querySelectorAll('[name=technique]:checked');
    let mas = [];
    for (let i = 0; i < selected.length; i++) mas.push(selected[i].value);
    return mas;
    }
   
$.post("/", {
    nameO: form.name.value,
    window: form.surname.value,
    permission: form.phone.value,
    matrix: form.email.value,
    RAM: form.tour.value,
    pay: form.num_people.value,
    CPU: form.CPU.checked = true ? form.CPU.value : 0,
    technique: getChecked()
    }, function(data) {
    //вывод данных на другую форму
    })
    let payN = document.getElementById("selectN");
    payN = data.pay;
    let CPUn = document.getElementByName("CPUn");
    console.log(CPUn);
    for (int i:CPUn){
        if (CPUn[i].value == data.CPU.value)
        CPUn[i].checked;
        break;
    }
    let techniqueN = document.getElementByName("techniqueN");
    for (int i:techniqueN){
        for (k, mas){
            if (techniqueN[i].value == mas[k].value)
            techniqueN[i].checked;
        }    
    }
    

