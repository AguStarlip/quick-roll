'use strict'

const dices = $('#dices');
const tryDices = $('#try_dices');

const randDices = (id, num) => {

    switch (num) {

        case 1:
            document.getElementById(id).innerHTML = '<div class="animate__animated animate__fadeIn animate__delay-1s"><i class="fas fa-dice-one fa-5x"></i></div>';
            break;
        case 2:
            document.getElementById(id).innerHTML = '<div class="animate__animated animate__fadeIn animate__delay-1s"><i class="fas fa-dice-two fa-5x"></i></div>';
            break;
        case 3:
            document.getElementById(id).innerHTML = '<div class="animate__animated animate__fadeIn animate__delay-1s"><i class="fas fa-dice-three fa-5x"></i></div>';
            break;
        case 4:
            document.getElementById(id).innerHTML = '<div class="animate__animated animate__fadeIn animate__delay-1s"><i class="fas fa-dice-four fa-5x"></i></div>';
            break;
        case 5:
            document.getElementById(id).innerHTML = '<div class="animate__animated animate__fadeIn animate__delay-1s"><i class="fas fa-dice-five fa-5x"></i></div>';
            break;
        case 6:
            document.getElementById(id).innerHTML = '<div class="animate__animated animate__fadeIn animate__delay-1s"><i class="fas fa-dice-six fa-5x"></i></div>';
            break;

        default:
            break;

    }

}

const numeroAleatorio = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const action = () => {
    tryDices.show();

    let dices = [];
    
    for (let i = 0; i < 6; i++) {
        dices[i] = numeroAleatorio(1, 6);
    }

    randDices('diceOne', dices[0]);
    randDices('diceTwo', dices[1]);
}

$(document).ready(() => {

    tryDices.hide();

    $('#dices').click((e) => {
        e.preventDefault();
        dices.hide()
        action();
    });

    $('#try_dices').click((e) => {
        e.preventDefault();
        dices.hide()
        action();
    });

});