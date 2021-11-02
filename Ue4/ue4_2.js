const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
let counter = 0;

button.onclick = function() {
    let myText = input.value;
    input.value = '';
    counter++;

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const stopButton = document.createElement('button');
    const startButton = document.createElement('button');
    const timer = document.createElement('span');
    timer.setAttribute('id', `display${counter}`);

    listItem.appendChild(listText);
    listText.textContent = myText;
    listItem.appendChild(timer);
    timer.textContent = "00:00:00";
    listItem.appendChild(stopButton);
    stopButton.textContent = 'Stop!';
    listItem.appendChild(startButton);
    startButton.textContent = 'Start!';
    list.appendChild(listItem);

    // stopButton.onclick = function(e){
    //     list.removeChild(listItem);
    // }
    
    input.focus();


    // Funktionalität des Timer
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    // Variablen um die Anzeige zu erhalten
    let displaySeconds = 0;
    let displayMinutes = 0;
    let displayHours = 0;
    // let interval = window.setInterval(stopWatch, 1000);
    let interval = setInterval(stopWatch, 1000);

    startButton.onclick = function(){
        clearInterval(interval);
        interval = setInterval(stopWatch, 1000);
    }

    stopButton.onclick = function(){
        clearInterval(interval);
    }

    function stopWatch(){
        seconds ++;

        // logic when to increment the next value
        if ( seconds / 60 === 1 ){
            seconds = 0;
            minutes ++;

            if ( minutes / 60 ===1 ){
                minutes = 0;
                hours ++;
            }
        }

        // if seconds/minutes/hours have just one digit, add a leading zero
        if (seconds < 10){
            displaySeconds = "0" + seconds.toString();
        } else {
            displaySeconds = seconds;
        }

        if (minutes < 10){
            displayMinutes = "0" + minutes.toString();
        } else {
            displayMinutes = minutes;
        }

        if (hours < 10){
            displayHours = "0" + hours.toString();
        } else {
            displayHours = hours;
        }

        // display updated time-values to user
        document.getElementById(`display${counter}`).innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }
}

