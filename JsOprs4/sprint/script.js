
let inputAmount = document.getElementById("input-amount");
let selectCurrency = document.getElementById("select-currency");

let resKzt = document.getElementById("res-kzt");
let resUsd = document.getElementById("res-usd");
let resEur = document.getElementById("res-eur");

const usdKzt = 429;
const eurKzt = 507;

const kztUsd = 1  / 431;
const kztEur = 1 / 509;

const usdEur = usdKzt * kztEur;
const eurUsd = eurKzt * kztUsd;

function checkInput(event) {
    if (inputAmount.value.length > 10) {
        event.preventDefault();
    }
    if (!isNumeric(event.key)) {
        event.preventDefault();
    }
}

function readInput(event) {
    setCurrencyValues(parseInt(inputAmount.value))
}

function setCurrencyValues(inputAmountValue) {
    switch(selectCurrency.value) {
        case "KZT":
            resKzt.value = "-";
            resUsd.value = (inputAmountValue / usdKzt).toFixed(2);
            resEur.value = (inputAmountValue / eurKzt).toFixed(2);
            break;
        case "USD":
            resUsd.value = "-";
            resKzt.value = (inputAmountValue / kztUsd).toFixed(2);
            resEur.value = (inputAmountValue / eurUsd).toFixed(2);
            break;
        case "EUR":
            resEur.value = "-";
            resKzt.value = (inputAmountValue / kztEur).toFixed(2);
            resUsd.value = (inputAmountValue / usdEur).toFixed(2);
            break;
    }

    if (resKzt.value != "-" && isNaN(resKzt.value)) {
        resKzt.value = "0.00";
    }
    if (resUsd.value != "-" &&  isNaN(resUsd.value)) {
        resUsd.value = "0.00";
    }
    if (resEur.value != "-" &&  isNaN(resEur.value)) {
        resEur.value = "0.00";
    }
}

function changeCurrency(event) {
    inputAmount.value = 0;
    setCurrencyValues(0);
}


function isNumeric(s) {
    return !isNaN(s - parseInt(s));
}

inputAmount.addEventListener("keypress", checkInput);
inputAmount.addEventListener("keyup", readInput);
selectCurrency.addEventListener("change", changeCurrency);

