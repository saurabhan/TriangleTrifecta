const input = document.querySelectorAll(".inputSide");
const cal = document.querySelector('#btnCal');
const output = document.querySelector('#outputSide');

function calHypo(){
    const hypotnuse = (Math.sqrt((Number(input[0].value) * Number(input[0].value)) + (Number(input[1].value) * Number(input[1].value))));

    output.innerText = "Hypotnuse is " + hypotnuse.toFixed(2);
}


cal.addEventListener('click', calHypo)