"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked() {
    const inputInterest = document.getElementById("inputInterest");
    const inputLoan = document.getElementById("inputLoan");
    const inputPrincipal = document.getElementById("inputPrincipal")
    const answerField1 = document.getElementById("answerField1");
    const answerField2 = document.getElementById("answerField2");

    let interest = Number(inputInterest.value);
    let loanLegnth = Number(inputLoan.value);
    let principal = Number(inputPrincipal.value) ;


    // calculation, formula - M=P*i/1-(1=i)^-l

    let outputAnswerField1 = principal * ((interest) / 1 - (1 + interest) ** -loanLegnth);


    let outputAnswerField2 = (answerField1 * loanLegnth) - principal;

    answerField1.innerHTML = outputAnswerField1;
    answerField2.innerHTML = outputAnswerField2;

}