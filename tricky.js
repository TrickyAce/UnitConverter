let inputEl = document.getElementById("input-el")
let conBtn = document.getElementById("con-btn")
let lengthCon = document.getElementById("length-con")
let volumeCon = document.getElementById("volume-con")
let massCon = document.getElementById("mass-con")


conBtn.addEventListener("click", function(){
    lengthCon.textContent= `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
    volumeCon.textContent= `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
    massCon.textContent= `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`
})