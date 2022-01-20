const form = document.getElementById('myForm');
var username = document.getElementById('name');
var os = document.getElementsByName('os');
var model = document.getElementsByName('model');
var kind = document.getElementsByName('kind');
var hard_disk = document.getElementById('hard_disk');
var video_card = document.getElementById('video_card');
var cost = document.getElementById('cost');
var email = document.getElementById('email');
var password = document.getElementById('password');
var screen_size = document.getElementById('screen_size');
var screen_resolution = document.getElementById('screen_resolution');
var matrix_type = document.getElementById('matrix_type');
var CPU = document.getElementById('CPU');
var RAM_size = document.getElementById('RAM_size');
var mood = document.getElementById('mood');

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

form.addEventListener("submit", function (event) {
    var checkedOS;
    for (var i = 0; i < os.length; i++) {
        if (os[i].checked) {
            checkedOS = os[i].value;
            break;
        }
    }

    var checkedMODEL;
    for (var i = 0; i < model.length; i++) {
        if (model[i].checked) {
            checkedMODEL = model[i].value;
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

    var screen_resolutions = [];
    for (var i = 0; i < screen_resolution.options.length; i++) {
        if (screen_resolution.options[i].selected) {
            screen_resolutions.push(screen_resolution.options[i].value);
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

    console.log(username.value, checkedOS, checkedMODEL, kinds, hard_disk.value, video_card.value,  cost.value, email.value,  password.value, screen_size.value,  screen_resolution.value, matrix_type.value,  CPU.value, RAM_size.value);
    voices.push({
        username: username.value,
        os: checkedOS,
        model: checkedMODEL,
        kinds: kinds,
        screen_size: screen_sizes,
        screen_resolution: screen_resolutions,
        matrix_type: matrix_types,
        CPU: CPUs,
        RAM_size: RAM_sizes,
        hard_disk: hard_disk.value,
        video_card: video_card.value,
        cost: cost.value,
        email: email.value,
        password: password.value,
        mood: mood.value
    });
    console.log(voices)
    localStorage.setItem('voices', JSON.stringify(voices));/*Метод JSON.stringify() преобразует значение JavaScript в строку JSON*/ 

    console.log(username.value);
    voices1.push({
        username: username.value,
    });
    console.log(voices1)
    localStorage.setItem('voices1', JSON.stringify(voices1));
})

