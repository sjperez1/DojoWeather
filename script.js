function hideCookies() {
    document.querySelector("#cookiebox").remove();
}

function tempSwitch(element) {
    for(i = 1; i <= 8; i++) {
        var target = document.querySelector("#temp-" + i);
        // celcius to fahrenheit
        if(element.value != "Celcius") {
            // Need to establish innerText = something on the inside of the condition. Can't update the values with it on the outside. Can't store it in a variable
            target.innerText = Math.round(9/5 * target.innerText + 32);
            // console.log(target);
        }
        // fahrenheit to celcius
        else {
            target.innerText = Math.round(5/9 * (target.innerText - 32));
        }
    }
}