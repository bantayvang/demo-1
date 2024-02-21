const menuButton = document.getElementById('menu');
const menu = document.getElementById('header__close');

function toggleMenu() {
  menu.classList.toggle('menu');
}

menuButton.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const boxes = document.querySelectorAll('.suggest__mobile-option');
let currentIndex = 0;

function showBox(index) {
    boxes.forEach((box, i) => {
      if (i === index) {
        box.style.display = 'flex';
      } else {
        box.style.display = 'none';
      }
    });
}

function showPreviousBox() {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    showBox(currentIndex);
}

function showNextBox() {
    currentIndex = (currentIndex + 1) % boxes.length;
    showBox(currentIndex);
}

leftArrow.addEventListener('click', showPreviousBox);
rightArrow.addEventListener('click', showNextBox);

showBox(currentIndex);

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const cards = document.querySelectorAll('.services__wrapper-mobile');
let nextContent = 0;

function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
}

function showPreviousCard() {
    nextContent = (nextContent - 1 + cards.length) % cards.length;
    showCard(nextContent);
}

function showNextCard() {
    nextContent = (nextContent + 1) % cards.length;
    showCard(nextContent);
}

leftBtn.addEventListener('click', showPreviousCard);
rightBtn.addEventListener('click', showNextCard);

showCard(nextContent);

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const logos = document.querySelectorAll('.logo-img');
let nextLogo = 0;

function showLogo(index) {
    logos.forEach((logo, i) => {
      if (i === index) {
        logo.style.display = 'flex';
      } else {
        logo.style.display = 'none';
      }
    });
}

function showPreviousLogo() {
    nextLogo = (nextLogo - 1 + logos.length) % logos.length;
    showLogo(nextLogo);
}

function showNextLogo() {
    nextLogo = (nextLogo + 1) % logos.length;
    showLogo(nextLogo);
}

leftButton.addEventListener('click', showPreviousLogo);
rightButton.addEventListener('click', showNextLogo);

showLogo(nextLogo);

const leftProcess = document.getElementById('left-process');
const rightProcess = document.getElementById('right-process');
const numbers = document.querySelectorAll('.process__content-mobile');
let nextNumber = 0;

function showNumber(index) {
    numbers.forEach((number, i) => {
      if (i === index) {
        number.style.display = 'flex';
      } else {
        number.style.display = 'none';
      }
    });
}

function showPreviousNumber() {
    nextNumber = (nextNumber - 1 + numbers.length) % numbers.length;
    showNumber(nextNumber);
}

function showNextNumber() {
    nextNumber = (nextNumber + 1) % numbers.length;
    showNumber(nextNumber);
}

leftProcess.addEventListener('click', showPreviousNumber);
rightProcess.addEventListener('click', showNextNumber);

showNumber(nextNumber);