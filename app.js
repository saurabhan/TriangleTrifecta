const input = document.querySelectorAll(".input");
const check = document.querySelector('#btnCheck');
const ouput = document.querySelector('#outputisTri');

function isTriangle(){
    const sumAngles = Number(input[0].value)+Number(input[1].value)+Number(input[2].value)
    if(sumAngles === 180){
        ouput.innerText ="This is a Triangle 🔺"
    }else{
        ouput.innerText = "This is not a Triangle"
    }

}

check.addEventListener("click", isTriangle);