/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    let selectChoices = ['Rock','Paper','Scissors']
    let randIdx = Math.floor(Math.random() * 3)
    return selectChoices[randIdx]
  
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  let score = 0

  // All situations where human draws, set `score` to 0
  
  if (playerChoice === computerChoice){
    score = 0;
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here


  if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1
  } else if (playerChoice === 'Rock' && computerChoice === 'Paper'){
    score = 1
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
    score = 1
  } else if(playerChoice === 'Paper' && computerChoice === 'Scissors'){
    score = 1
  } else if (playerChoice === 'Scissors' && computerChoice === 'Rock'){
    score = -1
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
    score = 1
  }
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  return score
}

let resTxt = document.getElementById("result")
let playScore = document.getElementById("player-score")
let hands = document.getElementById("hands")

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  
  if (score === -1) {
    hands.innerText = `${playerChoice} vs ${computerChoice}`
    playScore.innerText = `Your Score : ${score}`
    resTxt.innerText = 'You Lose!'
  } else if (score === 0){
    hands.innerText = `${playerChoice} vs ${computerChoice}`
    playScore.innerText = `Your Score : ${score}`
    resTxt.innerText = `It's a Draw!`
  } else if (score === 1){
    hands.innerText = `${playerChoice} vs ${computerChoice}`
    playScore.innerText = `Your Score : ${score}`
    resTxt.innerText = `You Win!`
  }

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

    let compChoice = getComputerChoice()
    let score = getResult(playerChoice,compChoice)
    showResult(score,playerChoice,compChoice)
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsBtns = document.querySelectorAll(".rpsButton")
  console.log("rpsBtns : ", rpsBtns)

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsBtns.forEach((btns) => {
    btns.onclick = function() {
        console.log(`button clicked with value ${btns.value}`)
        onClickRPS(btns.value)
    }
  })
  
  const endBtn = document.getElementById("endGameButton")
  endBtn.onclick = () => endGame()
  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  console.log(`Endgame clicked`)
  hands.innerText = ``
  playScore.innerText = ``
  resTxt.innerText = ``
}

playGame()