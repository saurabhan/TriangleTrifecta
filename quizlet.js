const quiz = document.querySelector(".queform");
const checkbtn = document.querySelector("#btnCheck");
const output = document.querySelector("#outputAns")

const Ans = [ "180","45°","Acute","right","Equilateral"]

function correctScore(){
    let score = 0;
    let i = 0;
    let formres = new FormData(quiz);
    for(let value of formres.values()){
        if(value === Ans[i]){
            score = score  + 1;
        }
        i = i +1;
    }
  
    output.innerText = "Your score is "+ score;

}

checkbtn.addEventListener('click', correctScore)