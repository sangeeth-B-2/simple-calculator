
let firstInput = null;
const add =  (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
let screenDefauult= `calc is short for calculator chat! I'm just using a slang`;
let InputScreen = document.querySelector('.userVisual')
let clearThis= document.querySelector('#deleteOneDigit');


clearThis.addEventListener('click', () =>{
    InputScreen.textContent= screenDefauult;
    InputScreen.style.opacity=0.8;});

document.querySelectorAll(".numbers").forEach(number=> {
    number.addEventListener('click', (event) =>{ 
        firstInput= event.target;
        InputScreen.textContent +=firstInput.textContent;
    });   
});
