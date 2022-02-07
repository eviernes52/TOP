const choice = ["rock","paper","scissors"];
const winners = [];

function game(){
    for(let i= 1; i <=5; i++){
        playRound();
    }
    logwins();
}


function playRound(Round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(computerSelection,playerSelection);
    winners.push(winner);
    logrounds(playerSelection,computerSelection,winner)
  }

  function playerChoice() {
    let input = prompt("Make your choice of |Rock|Paper|Scissor|");
        while(input == null){
            input = prompt("Make your choice of |Rock|Paper|Scissor|");
        }
        input = input.toLowerCase(); 
        let check = validateInput(input);
        while (check == false){
            input = prompt(
                "Please check your input Make your choice of |Rock|Paper|Scissors|"
                );
                while(input == null){
                    input = prompt("Make your choice of |Rock|Paper|Scissor|");
                }
            input = input.toLowerCase();
            check = validateInput(input);
        }
        return input;
  }

  function computerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
  }

  function validateInput(choice){
    return choice.includes(choice);
  }


 function checkWinner(ChoiceP, ChoiceC){
     if (ChoiceP === ChoiceC){
         return "It's a tie";
        }
            else if((ChoiceP === "rock" && ChoiceC === "scissors") 
            || (ChoiceP === "scissors" && ChoiceC === "paper")
            || (ChoiceP === "paper" && ChoiceC === "rock")
            ) {
                return "Player Wins";
            }
            else {
            return "Computer Wins"; 
        }
    }

    function logwins(){
        let playerWins = winners.filter((item) => item == "Player Wins").length;
        let computerWins = winners.filter((item) => item == "Computer Wins").length;
        let ties = winners.filter((item) => item == "It's a tie").length;
        console.log("Results")
        console.log("Player Wins:", playerWins);
        console.log("Computer Wins:", computerWins);
        console.log("Ties:", ties);
    }
    function logrounds(playerChoice, computerChoice, winner,Round){ 
        console.log("Round:", Round)
        console.log("Player chose:", playerChoice)
        console.log("Computer chose:", computerChoice)
        console.log(winner, "Won")
        console.log("----------------");
    }

  game();