"use strict";
console.log("start mortage.js");

window.onload = init;

function init(){
    console.log("start init")
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = onCalculateBtnClicked;
}


    function onCalculateBtnClicked(){
        console.log("btn clicked");
        const inputInterest = document.getElementById("inputInterest");
        const inputLoan = document.getElementById("inputLoan");
        const inputPrincipal = document.getElementById("inputPrincipal");
        const monthlyDue = document.getElementById("monthlyDue");
        const total = document.getElementById("total");


let yearlyInterest = Number(inputInterest.value);
let yearlyLoanLength = Number(inputLoan.value);
let principal = Number(inputPrincipal.value);
let monthlyInterest = yearlyInterest / 100 / 12;
let monthlyLoanLegnth = yearlyLoanLength * 12;

// calculation, formula - M=P*i/1-(1=i)^-l

let monthlyDueValue = principal * (monthlyInterest) / (1 - (1 + monthlyInterest) ** -monthlyLoanLegnth);

let totalValue = (monthlyDueValue * monthlyLoanLegnth) - principal; 

total.value = totalValue.toFixed(2);
monthlyDue.value = monthlyDueValue.toFixed(2);
}