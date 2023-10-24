"use strict";
console.log("start mortage.js");

window.onload = init;

function init(){
    console.log("start init")
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = calculateBtnClicked;
}


    function calculateBtnClicked (){
        console.log("btn clicked");
        const inputInterest = document.getElementById("inputInterest");
        const inputLoan = document.getElementById("inputLoan");
        const inputPrincipal = document.getElementById("inputPrincipal");
let interest = Number(inputInterest);
let loanLength = Number(inputLoan);
let principal = Number(inputPrincipal);

// calculation, formula - M=P*i/1-(1=i)^-l

let monthlyDueValue = principal * ((interest) / 1 - (1 + interest) ** -loanLength);
const monthlyDue = document.getElementById("monthlyDue");
monthlyDue.value = monthlyDueValue;
let totalValue = (monthlyDue * loanLength) - principal;
const total = document.getElementById("total");
total.value = totalValue;
console.log(total.value + monthlyDue.value);
}