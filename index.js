function getComputerChoice(){
    let num = Math.ceil(Math.random() * 3)
    return num === 1 ? 'Rock' :
           num === 2 ? 'Paper' :
                        'Scissors'
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection[0].toUpperCase() + playerSelection.slice(1,)
    let comp = computerSelection[0].toUpperCase() + computerSelection.slice(1,)

    afraid_of = {
        'Scissors' : 'Rock',
        'Rock' : 'Paper',
        'Paper' : 'Scissors',
    }

    if(comp === afraid_of[player]) return `You Won! ${player} beats ${comp}`
    if(comp === player) return 'tie'
    if(player === afraid_of[comp]) return `You Lose! ${player} beaten by ${comp}`
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1 ; i <= 5 ; i++){
        console.log(i)
        let userInput = prompt("Enter : rock/paper/scissors");
        let result = playRound(userInput, getComputerChoice());
        console.log(result)
        if(result.split("!")[0] == 'You Won') playerScore++
        if(result.split("!")[0] == 'You Lose') computerScore++
    }

    console.log({playerScore, computerScore})
    // Report out winner!
    let game_msg = ""
    if(playerScore > computerScore) game_msg =  "You won!" 
    if(computerScore > playerScore) game_msg = "You lose!" 
    if(computerScore == playerScore) game_msg = "Tie!" 

    console.log(game_msg)
    return game_msg
}

game()