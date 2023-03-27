let buttonBreakFastElement = document.getElementById("buttonBreakFast");
let orderBreakFastElement = document.getElementById("orderBreakFast");
let buttonBrunchElement = document.getElementById("buttonBrunch");
let orderBrunchElement = document.getElementById("orderBrunch");
let buttonLunchElement = document.getElementById("buttonLunch");
let orderLunchElement = document.getElementById("orderLunch");
let buttonDinnerElement = document.getElementById("buttonDinner");
let orderDinnerElement = document.getElementById("orderDinner");






orderBreakFastElement.classList.add("d-none");
orderBrunchElement.classList.add("d-none");
orderLunchElement.classList.add("d-none");
orderDinnerElement.classList.add("d-none");

function BreakFast() {
    orderBreakFastElement.classList.remove("d-none");
    orderBrunchElement.classList.add("d-none");
    orderLunchElement.classList.add("d-none");
    orderDinnerElement.classList.add("d-none");
}

function Brunch() {
    orderBreakFastElement.classList.add("d-none");
    orderBrunchElement.classList.remove("d-none");
    orderLunchElement.classList.add("d-none");
    orderDinnerElement.classList.add("d-none");
}

function Lunch() {
    orderBreakFastElement.classList.add("d-none");
    orderBrunchElement.classList.add("d-none");
    orderLunchElement.classList.remove("d-none");
    orderDinnerElement.classList.add("d-none");
}

function Dinner() {
    orderBreakFastElement.classList.add("d-none");
    orderBrunchElement.classList.add("d-none");
    orderLunchElement.classList.add("d-none");
    orderDinnerElement.classList.remove("d-none");
}

// function Cocktails() {
//     orderBreakFastElement.classList.add("d-none");
//     orderBrunchElement.classList.add("d-none");
//     orderLunchElement.classList.add("d-none");
//     orderDinnerElement.classList.add("d-none");
// }