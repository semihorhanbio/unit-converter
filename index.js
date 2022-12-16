/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert");
const input = document.getElementById("input"); //amount to be converted
const meter = document.getElementById("meter");
const liter = document.getElementById("liter");
const kilo = document.getElementById("kilo");

convertBtn.addEventListener("click", () => {
    const amount = input.value;

    //conversion for meter
    const meterToFeet = (amount * 3.281).toFixed(3);
    const feetToMeter = (amount / 3.281).toFixed(3);
    meter.textContent = `${amount} meters = ${meterToFeet} feet | ${amount} feet = ${feetToMeter} meters`;

    //conversion for liter
    const literToGallon = (amount * 0.264).toFixed(3);
    const gallonToLiter = (amount / 0.264).toFixed(3);
    liter.textContent = `${amount} liters = ${literToGallon} gallons | ${amount} gallons = ${gallonToLiter} liter`;

    //conversion for kilo
    const kiloToPound = (amount * 2.204).toFixed(3);
    const poundToKilo = (amount / 2.204).toFixed(3);
    kilo.textContent = `${amount} kilos = ${kiloToPound} pounds | ${amount} pounds = ${poundToKilo} kilos`;
})
