"use strict";
window.onload = init;

function init() {
    const covertFBtn = document.getElementById("convertFBtn");
    convertFBtn.onclick = onConvertFBtnClicked;
    const covertCBtn = document.getElementById("convertCBtn");
    convertCBtn.onclick = onConvertCBtnClicked;

}

function onConvertFBtnClicked() {
    const inputFahrenheit = document.getElementById("inputFahrenheit");
    const answerField5 = document.getElementById("answerField5");
    

    let fahrenheit = Number(inputFahrenheit.value);

    let outputAnswerField5 = (fahrenheit - 32) * 5 / 9;
    answerField5.value = outputAnswerField5.toFixed(2);

}
function onConvertCBtnClicked(){
    const inputCelsius = document.getElementById("inputCelsius");
    const answerField6 = document.getElementById("answerField6");

let celsius = Number(inputCelsius.value);
    let outputAnswerField6 =  (celsius * 9 / 5) + 32;
    answerField6.value = outputAnswerField6.toFixed(2);
    
}




