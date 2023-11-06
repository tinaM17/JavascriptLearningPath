let randomNumber= Math.floor((Math.random()*100)+1);
const body=document.querySelector('body')

let userInput=document.querySelector('#guess')
const submit=document.querySelector('#sub')
const results=document.querySelector('.results')

const allGuesses=document.querySelector('#allGueses')
const remainingGuesses=document.querySelector('#remainingGuess')
const messages=document.querySelector('.message')
const p=document.createElement('p')

let previousGueses=[]
let totalGueses=1
let playGame=true

if(playGame){
    submit.addEventListener('click',(e)=>{
       e.preventDefault();
       const guess=parseInt(userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        displayMessage(`Your Guess is not a number`)
    }
    else if(guess<1 || guess>100){
        displayMessage(`${guess} is not in the range between 1 to 100`)
    }
    else {
        previousGueses.push(guess)
        if(totalGueses===10){
            displayGuess(guess)
            displayMessage(`Game Over. Guess number is ${randomNumber}`)
            endGame()
        }
        else {
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess===randomNumber){
        displayGuess(guess)
        body.style.backgroundImage = "url('congrats.gif')";
        displayMessage(`Congratulations!!! You Won. Guess Number was ${guess}`)
        endGame()
    }
    else {
        if(guess>randomNumber){
            displayGuess(guess)
            displayMessage("Your guess is too high")
        }
        else {
            displayGuess(guess)
            displayMessage("Your guess is too low")
        }
    }
}

function displayGuess(guess) {
    userInput.value=''
    allGuesses.innerHTML += `${guess}  `;
    remainingGuesses.innerHTML = `${10-totalGueses}`
    totalGueses++;

}

function displayMessage(message){
    messages.innerHTML=`<span>${message}</span>`
}

function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<span id="newGame">New Game</span>'
    results.appendChild(p)
    playGame=false
    startGame();

}

function startGame() {
    const button=document.querySelector('#newGame')
    button.addEventListener('click',(e)=>{
        randomNumber= Math.floor((Math.random()*100)+1);
        body.style.backgroundImage='none';
        previousGueses=[]
        totalGueses=1
        allGuesses.innerHTML=''
        remainingGuesses.innerHTML= "10"
        messages.innerHTML=''
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        results.removeChild(p);
        playGame=true

    })
}