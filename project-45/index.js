let count = 0;
let all_data = new Array();

const add = (data) => all_data.push({name: data, deleted: false});

const add_new = (data) => {
    let obj = { name: data, deleted: false};
    let oldObj = { name: all_data[2].name, deleted: all_data[2].deleted};
    all_data[2] = obj;
    all_data.push(oldObj); 

}


void function init() {

    let initmass = [
        'Мег: Монстр глубины',
        'Чемпионы: Быстрее – Выше – Сильнее',
        'Гнев человеческий',
        'Лига справедливости Зака Снайдера',
        'Майор Гром: Чумной Доктор',
        'Круэлла'
    ]

    initmass.forEach(item => {

        let div = document.createElement('option');
        div.innerText=item;
        document.getElementById("txt_name").appendChild(div);
        add(item)
    })

}()

function del(){

    let select=document.getElementById('txt_name');
    for (i=0;i<select.length;  i++) {
        if (select.options[i].selected) {

            let ind = all_data.findIndex(ind => ind.name === select.options[i].innerText)

            all_data[ind].deleted = true;

            let option = document.createElement('option');
            option.innerText=select.options[i].value;
            document.getElementById("del_name").appendChild(option);
            select.remove(i);

        }
    }

}

function myFunction() {
   
    let person = document.getElementById("name").value;
    let secondElem = document.querySelector("#txt_name option:nth-child(2)");
let a = document.getElementById("as");
   a.replaceWith( "я тут");
    if (person) {
        let option = document.createElement('option');
        option.innerHTML = person;
        option.value = person;
        if (secondElem === null)
    {
        document.querySelector ("#txt_name").appendChild(option);
    }
    else {
        secondElem.after(option);
        add_new(person);
    }
    }else{
        alert('Введите название фильма');
    }
    document.getElementById('name').value = "";
    

}



function see(){
    let output = '';
    let mOut = [];

    for (let i = 0; i < all_data.length; i++) {
        const element = all_data[i];
        if (element.deleted) {
            mOut.push(`${i+1}) ${element.name} -- Удален`)
        }else{
            mOut.push(`${i+1}) ${element.name}`)
        }
    }

    if (all_data.length === 0) {
        output = "Нет Фильмов"
    }else{
        output = mOut.join('\n')/*Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку. */
    }

    alert(output)
}