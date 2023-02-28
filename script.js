let guessEl = document.querySelector("#output-result");
let guessValue= document.querySelector("#guessValue");
let highScoreEl = document.querySelector("#highScore");
let resetButton = document.querySelector("#reset");
var guess= 7;
var highScore=0;
const result = Math.trunc((Math.random()*100)-1);
console.log(result)

function play(){
    let user_guess = document.querySelector("#guess").value;
    if(user_guess <1 || user_guess > 100){
        alert("Enter correct Value");
    }else{
        
        if(guess <= 0){
        resetButton.style.display = 'block';
        guessValue.textContent = "Guess:" + guess;
        guessEl.textContent = "GameOver";
       }else{
        guess = guess - 1;
        if(user_guess == result){
            highScore = guess;
            guessEl.textContent = "you won";
            resetButton.style.display = 'block';
            highScoreEl.textContent = "HighScore" + highScore;
        }
        else if(user_guess < result){

            guessValue.textContent = "Guess:" + guess;
            guessEl.textContent = "your value is low"
        }
        else if(user_guess > result){
            guessValue.textContent = "Guess:" + guess;
            guessEl.textContent = `your value is high ${user_guess}`
        }
       }
        
    }
}