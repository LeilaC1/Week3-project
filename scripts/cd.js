"use strict";

window.onload = init;

function init() {
    const calculateBtn2 = document.getElementById("calculateBtn2");
    calculateBtn2.onclick = onCalculateBtn2Clicked;
}

function onCalculateBtn2Clicked() {
    const inputDeposit = document.getElementById("inputDeposit");
    const inputTerm = document.getElementById("inputTerm");
    const inputInterest2 = document.getElementById("inputInterest2")
    const answerField3 = document.getElementById("answerField3");
    const answerField4 = document.getElementById("answerField4");

    let deposit = Number(inputDeposit.value);
    let term = Number(inputTerm.value);
    let interest2 = Number(inputInterest2.value) ;


    // calculation, formula - A=P(1+R/N)**(n*t)

    let outputAnswerField3 = deposit * (interest2/100) * term;

    let outputAnswerField4 = deposit * (1 + (interest2/100)/365) **(365 *term);

    answerField3.value = outputAnswerField3.toFixed(2);
    answerField4.value = outputAnswerField4.toFixed(2);

}