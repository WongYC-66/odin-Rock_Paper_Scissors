let playerScore = 0;
let computerScore = 0;
let gameStatus = 'play'

document.querySelector('#rock').addEventListener('click', () => {
    let result = playRound('rock', getComputerChoice())
    document.querySelector('#gameText').textContent = result;
    addPoints(result)
})
document.querySelector('#paper').addEventListener('click', () => {
    let result = playRound('paper', getComputerChoice())
    document.querySelector('#gameText').textContent = result;
    addPoints(result)
})
document.querySelector('#scissors').addEventListener('click', () => {
    let result = playRound('scissors', getComputerChoice())
    document.querySelector('#gameText').textContent = result;
    addPoints(result)
})

function addPoints(result){
    if(! result) return console.log('Please start new round.')
    if(result.split("!")[0] == 'You Won'){
        playerScore++ ;
        document.querySelector('#humanScore'). textContent = playerScore;
    }
    if(result.split("!")[0] == 'You Lose'){
        computerScore++ ;
        document.querySelector('#computerScore'). textContent = computerScore;
    }
    checkWinner();
}

function checkWinner(){
    if(playerScore < 5 && computerScore < 5) return;
    gameStatus = 'paused'
    let game_msg = ""
    if(playerScore > computerScore) game_msg =  "You won the game!" 
    if(computerScore > playerScore) game_msg = "You lose the game!" 
    if(computerScore == playerScore) game_msg = "Tie, try again?" 

    // console.log(game_msg)
    let parentNode = document.querySelector('#winnerText')
    parentNode.textContent = game_msg;
    // append reset button and logic
    let childNode = document.createElement('button')
    childNode.textContent = 'Another round?'
    childNode.onclick = (() => {
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#humanScore'). textContent = playerScore;
        document.querySelector('#computerScore'). textContent = computerScore;
        parentNode.textContent = '';
        document.querySelector('#gameText').textContent = '';
        gameStatus = 'play'
    })
    parentNode.appendChild(childNode)
}

function getComputerChoice(){
    let num = Math.ceil(Math.random() * 3)
    return num === 1 ? 'Rock' :
           num === 2 ? 'Paper' :
                        'Scissors'
}

function playRound(playerSelection, computerSelection){
    // console.log({playerSelection, computerSelection})
    if(gameStatus == 'paused') return;
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