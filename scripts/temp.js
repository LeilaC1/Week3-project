"use strict";
window.onload = init;

function init() {
    const covertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = onConvertBtnClicked;
}

function onConvertBtnClicked() {
    const inputCelsius = document.getElementById("inputCelsius");
    const inputFahrenheit = document.getElementById("inputFahrenheit");
    const answerField5 = document.getElementById("answerField5");
    

    let fahrenheit = Number(inputFahrenheit.value);
    let celsius = Number(inputCelsius.value);



   

    let outputAnswerField5 = (fahrenheit - 32) * 5 / 9;
    let outputAnswerField6 =  (celsius * 9 / 5) + 32;
    answerField5.innerHTML = outputAnswerField5;
    answerField6.innerHTML = outputAnswerField6;

}






