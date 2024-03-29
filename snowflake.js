// To-do:
// Falling snow (write code or find online)?
// Help modal
// Allow only numeric input

// new function
function toggleHelp() {
    let help = document.getElementById("help-container");
    
    if (help.style.display === "none") {
        help.style.display = "flex";
    } 
    else {
        help.style.display = "none";
    }
}

// Converts ID to date
function convertStamp() {
    let input = document.getElementById("input");
    let reset = document.getElementById("reset");
    let result = document.getElementById("result");
    
    input.addEventListener("keyup", function(event) {
        // Allow only numeric input
        // if (isNaN(event.key)) {
        //     input.value = input.value.substr(0, input.value.length - 1);
        // }

        if (input.value.length === 0) {
            reset.click();
        }
        else {
            convertNumber(input.value);
        }
    });

    reset.addEventListener("click", () => {
        input.value = '';
        result.innerHTML = '';
        input.focus();
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
}

// Determins position of background objects
function randomPosition() {
    let container = document.body;

    for (i = 0; i < 75; i++) {
        let icon = document.createElement('div');
        icon.id = "circle";
        icon.className = "bg-icon";
        container.appendChild(icon);
    }

    let icons = document.getElementsByClassName('bg-icon');

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    
    function getRandomNumber(min, max) {return Math.random() * (max - min) + min;}

    let ylist = [];

    for (i = 0; i < icons.length; i++ ) {
        let thisIcon = icons[i];
        
        randomTop = getRandomNumber(0, winHeight);
        ylist.push(randomTop);
        randomLeft = getRandomNumber(0, winWidth);
        
        thisIcon.style.top = randomTop + "px";
        thisIcon.style.left = randomLeft + "px";
    }
}

// In progress
function moveIcons() {
    let icons = document.getElementsByClassName('bg-icon');
    for (i = 0; i < 849; i++) {
        for (i = 0; i < icons.length; i++ ) {
            var topNumbers = icons[i].style.top.replace('px', '')
            var top = parseInt(topNumbers, 10)
            icons[i].style.top = `${top + 1}px`
        }
    }
}