let humanScore=0;
let computerScore=0;




function getComputerChoice(){
const computerList = ["rock", "paper", "scissor"];
const computerResult = computerList[Math.floor(Math.random() * computerList.length)];
return computerResult; }

function getHumanChoice(){

  const humanInput=prompt("").toLowerCase();
  if (humanInput==="rock"||humanInput==="paper"||humanInput==="scissor"){
  return humanInput;}
  else{
     return prompt("Enter the correct string",humanInput);
  }
}
function playRound(humanChoice,computerChoice){
  
    const humanConvert=humanChoice[0].toUpperCase()+humanChoice.slice(1);
    const computerConvert =computerChoice[0].toUpperCase() + computerChoice.slice(1);
    if(humanChoice==="rock" &&  computerChoice==="scissor"|| humanChoice==="paper" &&computerChoice==="rock"||humanChoice==="scissor"&&computerChoice==="paper"){
      console.log("You won! "+ humanConvert + " beats " + computerConvert);
      humanScore+=1;
    }
    else if(humanChoice===computerChoice){
      console.log("No one won! It is draw");
    }
    
    else{
      console.log("You lose! " + computerConvert + " beats " + humanConvert);
      computerScore+=1;
    }
   
  
   
   
}

function playGame(){

for (var i=1;i<=5;i++){

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);
}
if (humanScore > computerScore) {
  console.log("Human won with the score of " + humanScore);
} 
else if(humanScore===computerScore){
  console.log("It is a draw! Start again");
}
else {
  console.log("Computer won with the score of " + computerScore);
}
}

playGame();
/*check out consol for the results*/
