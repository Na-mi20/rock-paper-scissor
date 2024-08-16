 let humanScore=0;
 let computerScore=0;
function computerChoice(){
 const str = ["rock", "paper", "scissor"];
 const choice=str[Math.floor(Math.random()*str.length)];
 return choice; 
}

let contain=document.querySelector("div");
let rock=document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");


rock.textContent="rock";
paper.textContent = "paper";
scissor.textContent = "scissor";

rock.addEventListener("click",() =>{
   playRound(humanFinal="rock",computerFinal=computerChoice());

})
paper.addEventListener("click", () => {
  playRound((humanFinal = "paper"), computerFinal=computerChoice());
});

scissor.addEventListener("click", () => {
  playRound((humanFinal = "scissor"), computerFinal=computerChoice());

})


function playRound(humanSelection, computerSelection) {
  let humanResult = humanSelection[0] + humanSelection.slice(1);
  let computerResult = computerSelection[0] + computerSelection.slice(1);
  if (
    (humanSelection === "rock" && computerSelection === "scissor") ||
    (humanSelection === "scissor" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {humanScore += 1
   computerScore+=0
    
    
    contain.textContent =
      "You won! " + humanResult + " beats " + computerResult + " Human's score is "+ humanScore + " & " + "Computer's score is " + computerScore;
  
  } else if(humanSelection===computerSelection){
   humanScore += 0;
   computerScore += 0;
   contain.textContent = "It is a draw! " + humanResult + " does not beat " + computerResult + " Human's score is " + humanScore + " & " + "Computer's score is " + computerScore;

  }
  
  
  else {
    computerScore += 1;
    humanScore += 0;
    contain.textContent =

      "You lost! " + computerResult + " beats " + humanResult +" Human's score is " +humanScore +" & " +
      "Computer's score is " +computerScore;
     }
   
   if(humanScore===5||computerScore===5){
      rock.disabled=true;
      paper.disabled = true;
      scissor.disabled = true;
     contain.textContent=humanScore>computerScore?"Human has won with the score of 5":"Computer has won with the score of 5"
   }}





  




