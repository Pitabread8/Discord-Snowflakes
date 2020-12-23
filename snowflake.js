let input = document.getElementById("input");
let reset = document.getElementById("reset");
let result = document.getElementById("result");

result.style.display = "none";

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 82) {
        reset.click();
    }
    else {
        convertNumber(input.value);
    }
});

reset.addEventListener("click", () => {
    input.value = '';
    result.innerHTML = '';
});

function convertNumber(number) {
    let id = parseInt(number);

    let binary = id.toString(2);
    binary = binary.padStart(64, "0");

    let excerpt = binary.substring(0, 42);

    let decimal = parseInt(excerpt, 2);

    let unix = parseInt(decimal) + 1420070400000;

    const date = new Date(unix);
    const dataFormat = date.toLocaleString();

    result.style.display = "initial";
    result.innerHTML= `${dataFormat}`;
}