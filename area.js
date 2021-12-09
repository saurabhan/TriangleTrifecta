const input = document.querySelectorAll(".inputSide");
const cal = document.querySelector('#btnCal');
const output = document.querySelector('#outputAns');

function triArea(){
    const a =  Number(input[0].value);
    const b =  Number(input[1].value);
    const c =  Number(input[2].value);
    const semiperimeter = (a+b+c)/2;
    const areat = Math.sqrt(semiperimeter * ((semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c)));
    console.log(a, areat,semiperimeter)
    output.innerText = "The ares of 🔺 is " + areat.toFixed(2) + "cmsq";
}

cal.addEventListener("click", triArea);