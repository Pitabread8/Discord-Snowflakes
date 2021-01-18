// To-do: Falling snow (write code or find online)?

function giveHelp() {
    alert("Discord uses Snowflake to generate IDs for accounts, messages, channels, and servers based on their timestamps.\
    \n\nIn order to copy an ID, make sure you have enabled Developer Mode in User Settings > Appearance. Then, right click on the element and select the Copy ID option.");
}

function convertStamp() {
    let input = document.getElementById("input");
    let reset = document.getElementById("reset");
    let result = document.getElementById("result");
    
    input.addEventListener("keyup", function(event) {
        if (event.code === 'KeyR' || input.value.length === 0) {
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

function randomPosition() {
    let container = document.body;

    for (i = 0; i < 20; i++) {
        let icon = document.createElement('span');
        icon.id = "snowflake";
        icon.className = "bg-icon";
        icon.innerHTML = "&#10052";
        container.appendChild(icon);
    }

    for (i = 0; i < 50; i++) {
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
        
        thisIcon.style.top = randomTop +"px";
        thisIcon.style.left = randomLeft +"px";
    }
}

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