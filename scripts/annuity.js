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
        const inputLength = document.getElementById("inputLength");
        const inputPayout = document.getElementById("inputPayout");
        const present = document.getElementById("present");
    


let yearlyInterest = Number(inputInterest.value);
let yearlyLength = Number(inputLength.value);
let Payout = Number(inputPayout.value);

let monthlyInterest = yearlyInterest / 100 / 12;
let monthlyLegnth = yearlyLength * 12;

// calculation, formula - P=(1-(1+r)**-n)/r

let presentValue = Payout * (1 - (1 + monthlyInterest) ** -monthlyLegnth)/monthlyInterest;

present.value = presentValue.toFixed(2);
}