let input = document.getElementById("input");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let options = document.getElementsByClassName("options");

for (i = 0; i < options.length; i++) {options[i].style.display = "none";}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        submit.click();
        input.maxlength = 0;
    }
});

submit.addEventListener("click", () => {
    chooseOption();
    result.style.display = "none";
});

let user = document.getElementById("user");
let msg = document.getElementById("msg");
let chnl = document.getElementById("chnl");
let srvr = document.getElementById("srvr");

input.addEventListener("keyup", function(event) {if (event.keyCode === 49) {user.click();}});
input.addEventListener("keyup", function(event) {if (event.keyCode === 50) {msg.click();}});
input.addEventListener("keyup", function(event) {if (event.keyCode === 51) {chnl.click();}});
input.addEventListener("keyup", function(event) {if (event.keyCode === 52) {srvr.click();}});

function chooseOption() {
    for (i = 0; i < options.length; i++) {options[i].style.display = "initial";}
    user.addEventListener("click", function() {convertNumber(input.value, "The account was created on:");});
    msg.addEventListener("click", function() {convertNumber(input.value, "The message was sent on:");});
    chnl.addEventListener("click", function() {convertNumber(input.value, "The channel was created on:");});
    srvr.addEventListener("click", function() {convertNumber(input.value, "The server was created on:");});
}

function convertNumber(number, option) {
    for (i = 0; i < options.length; i++) {options[i].style.display = "none";}
    let id = parseInt(number);

    let binary = id.toString(2);
    binary = binary.padStart(64, "0");

    let excerpt = binary.substring(0, 42);

    let decimal = parseInt(excerpt, 2);

    let unix = parseInt(decimal) + 1420070400000;

    const date = new Date(unix);
    const dataFormat = date.toLocaleString();
    
    // console.log(option, dataFormat);
    result.style.display = "initial";
    result.innerHTML= `${option} ${dataFormat}`;
}