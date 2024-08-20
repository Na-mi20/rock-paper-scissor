
let content=document.querySelector(".content");
let btn = document.querySelectorAll("button");
let humanScore=0;
let computerScore=0;
let humanHeading = document.createElement("h1");
  let computerHeading = document.createElement("h1");

function computerChoice(){
  const str=["rock","paper","scissor"];
  const choice=str[Math.floor(Math.random()*str.length)]
  return choice;
}
function btnDisable() {
  btn.forEach((button) => {
    button.disabled = true;
  });
}

function playRound(humanSelection){
  let computerFinal = computerChoice();
  let humanResult=humanSelection[0].toUpperCase()+humanSelection.slice(1);
  let computerResult = computerFinal[0] .toUpperCase()+ computerFinal.slice(1);
  if((humanSelection==="paper" && computerFinal==="rock")||(humanSelection==="rock" && computerFinal==="scissor")||(humanSelection==="scissor" && computerFinal==="paper")){
    humanScore+=1;
    computerScore+=0;
    

  }
  else if(humanSelection===computerFinal){
    humanScore+=0;
    computerScore+=0;
   
  }
  else{
    humanScore+=0;
    computerScore+=1;
    
  }
  
  
  humanHeading.textContent = `Human-${humanScore}`;
  computerHeading.textContent =`Computer- ${computerScore}`;
  content.appendChild(humanHeading);
  content.appendChild(computerHeading);

  }

btn.forEach((button)=>{
  button.addEventListener("click",(event)=>{

 if(event.target.id="rock"){
   playRound(humanFinal="rock");
 }
 else if ((event.target.id = "paper")) {
    playRound(humanFinal="paper");
  }
   else  {
     playRound(humanFinal="scissor");
   }  if (humanScore === 5 || computerScore === 5) {
     btnDisable();
     if (humanScore > computerScore) {
       content.textContent = `Human won with the score of ${humanScore}`;
     } else {
       content.textContent = `Computer won with the score of ${computerScore}`;
     }
   }
   
   })
 
;})
  
