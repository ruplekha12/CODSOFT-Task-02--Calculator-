function appendNumber(num) {
    document.getElementById("display").value += num;
}
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}