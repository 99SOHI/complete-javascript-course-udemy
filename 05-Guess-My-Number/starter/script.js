'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
    let guessValue = Number(document.querySelector('.guess').value);



    if (!guessValue) {
        document.querySelector('.message').textContent = "Isi yang bener kocak"
    } else if (guessValue > 20) {
        document.querySelector('.message').textContent = "Cuma nyampe 20 kocak, kalo lebih kesusahan lunyaa"
    } else if (guessValue < 1) {
        document.querySelector('.message').textContent = "Mau ngapain lu ngisi angka negatif, hdehhh sok asik"
    } else if (guessValue === secretNumber) {
        document.querySelector('.message').textContent = "Anjay Bener luhh"
        document.querySelector(".score").textContent = score;
    } else if (guessValue > secretNumber) {
        document.querySelector('.message').textContent = "Ketinggian";
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guessValue < secretNumber) {
        document.querySelector('.message').textContent = "Kekecilan";
        score--;
        document.querySelector(".score").textContent = score;
    }
})