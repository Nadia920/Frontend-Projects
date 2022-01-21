let count = 0;
let all_data = new Array();

const add = (data) => all_data.push({id: all_data.length,  name: data, deleted: false})


void function init() {

    let initmass = [
        'Над пропостью во ржи',
        'В тихом омуте',
        'Война и мир'
    ]

    initmass.forEach(item => {

        let div = document.createElement('option');
        div.innerText=item;
        document.getElementById("txt_name").appendChild(div);
        add(item)
    })

}()

function del(){

    var select=document.getElementById('txt_name');

    for (i=0;i<select.length;  i++) {
        if (select.options[i].selected) {

            let ind = all_data.findIndex(ind => ind.name === select.options[i].innerText)

            all_data[ind].deleted = true;


            select.remove(i);

        }
    }
}

function myFunction() {
    let person = prompt("Введите название книги:");
    if (person) {
        let div = document.createElement('option');
        div.innerText=person;
        document.getElementById("txt_name").insertAdjacentElement('beforebegin', div);
        add(person)
    }else{
        alert('Введите название книги');
    }
}



function see(){
    let output = '';
    let mOut = [];

    for (let i = 0; i < all_data.length; i++) {
        const element = all_data[i];
        if (element.deleted) {
            mOut.push(`${element.id+1}) ${element.name} -- Удален`)
        }else{
            mOut.push(`${element.id+1}) ${element.name}`)
        }
    }

    if (!all_data.length) {
        output = "Нету Книг :("
    }else{
        output = mOut.join('\n')
    }

    alert(output)
}