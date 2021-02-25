let square = document.querySelector('#square');

// Colors
let white = document.querySelector('.white');
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let colorPicker = document.querySelector('.colorPicker');

white.addEventListener('click', () => {
    square.style.backgroundColor = 'white';
})

red.addEventListener('click', () => {
    square.style.backgroundColor = 'red';
})

green.addEventListener('click', () => {
    square.style.backgroundColor = 'green';
})

blue.addEventListener('click', () => {
    square.style.backgroundColor = 'blue';
})

colorPicker.addEventListener('change', () => {
    square.style.backgroundColor = colorPicker.value;
})

// Borders buttons
let solid = document.querySelector('.border1');
let dotted = document.querySelector('.border2');
let thin = document.querySelector('.border3');

solid.addEventListener('click', () => {
    square.style.border = 'solid 10px white';
})

dotted.addEventListener('click', () => {
    square.style.border = 'dotted 10px white';
})

thin.addEventListener('click', () => {
    square.style.border = 'solid 3px white';
})

// Tops
let thinTop = document.querySelector('.top1');
let normalTop = document.querySelector('.top2');
let bigTop = document.querySelector('.top3');

thinTop.addEventListener('click', () => {
    square.style.borderTop = 'red solid 1px';
})

normalTop.addEventListener('click', () => {
    square.style.borderTop = 'red solid 20px';
})

bigTop.addEventListener('click', () => {
    square.style.borderTop = 'red solid 40px';
})

// Borders Numbers
let borderNumber = document.querySelector('.number1');
let borderNumber2 = document.querySelector('.number2');
let borderNumber3 = document.querySelector('.number3');
let borderNumber4 = document.querySelector('.number4');
let borderNumber5 = document.querySelector('.number5');

borderNumber.addEventListener('change', () => {
    square.style.border = `solid white ${borderNumber.value}px`;
})

borderNumber2.addEventListener('change', () => {
    square.style.borderTop = `solid white ${borderNumber2.value}px`;
})

borderNumber3.addEventListener('change', () => {
    square.style.borderRight = `solid white ${borderNumber3.value}px`;
})

borderNumber4.addEventListener('change', () => {
    square.style.borderBottom = `solid white ${borderNumber4.value}px`;
})

borderNumber5.addEventListener('change', () => {
    square.style.borderLeft = `solid white ${borderNumber5.value}px`;
})

// Borders Radius
let borderRadius = document.querySelector('.number6');
let borderRadius2 = document.querySelector('.number7');
let borderRadius3 = document.querySelector('.number8');
let borderRadius4 = document.querySelector('.number9');
let borderRadius5 = document.querySelector('.number10');

borderRadius.addEventListener('change', () => {
    square.style.borderRadius = `${borderRadius.value}px`;
})

borderRadius2.addEventListener('change', () => {
    square.style.borderTopLeftRadius = `${borderRadius2.value}px`;
})

borderRadius3.addEventListener('change', () => {
    square.style.borderTopRightRadius = `${borderRadius3.value}px`;
})

borderRadius4.addEventListener('change', () => {
    square.style.borderBottomRightRadius = `${borderRadius4.value}px`;
})

borderRadius5.addEventListener('change', () => {
    square.style.borderBottomLeftRadius = `${borderRadius5.value}px`;
})