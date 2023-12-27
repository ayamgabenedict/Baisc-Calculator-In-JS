//CALCULATOR PROJECT
let num1 = 8;
let num2 = 2;
let result;


const addBtn = document.querySelector("#add-btn");
const subtractBtn = document.querySelector("#subtract-btn");
const divideBtn = document.querySelector("#divide-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const resultsEl =  document.querySelector('#results-el');

document.querySelector('#num1-el').textContent = num1;
document.querySelector('#num2-el').textContent = num2;


//Event Listeners
divideBtn.addEventListener("click",divide);
multiplyBtn.addEventListener("click",multiply);


let add = ()=>{
    result = num1 + num2;
    resultsEl.innerText = 'Summation= ' + result;
    console.log(result)
};
addBtn.addEventListener("click",add);


const subtract = (function(){
    return function subtract(){
        result = num1 - num2;
        resultsEl.textContent = 'Subtraction= ' + result;
    } 
})();
subtractBtn.addEventListener("click",subtract);


function divide(){
    result = num1 / num2;
    resultsEl.textContent = 'Division= ' + result;
}

function multiply(){
    result = num1 * num2;
    resultsEl.textContent = 'Product= ' + result;
}