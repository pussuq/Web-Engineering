function myFunction(e) {

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    // document.getElementById('cell3').innerHTML = operation.substring(1,4);
    if(operation.substring(1, 4) === 'SUM'){
        result = num1 + num2;  
    } else if(operation.substring(1, 4) === 'DIV'){
        result = num1 - num2;
    } else if(operation.substring(1, 4) === 'PRO'){
        result = num1 * num2;
    } else if(operation.substring(1, 4) === 'QUO'){
        result = num1 / num2;
    } else {
        result = 'unbekannte Operation';
    }

    let log = document.getElementById("cell3").innerHTML = result;
    log.textContent += ` ${e.code}`;
    // document.getElementById("cell3").addEventListener("keydown", myFunction);
}
const button = document.querySelector('button');
button.addEventListener('click', myFunction);
document.getElementById("cell3").addEventListener("click", myFunction);