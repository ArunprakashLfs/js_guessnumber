let guessEl = document.querySelector("#output-result");
let guessValue= document.querySelector("#guessValue");
let highScoreEl = document.querySelector("#highScore");
let buttonEl = document.querySelector("#button")
let resetButton = document.querySelector("#reset");
let guessInput = document.querySelector("#guessInput")

//assigned value of guess
var guess= 7;
var highScore = 0;

guessValue.innerText = guess;
highScoreEl.innerText = highScore;


//Genarate the random function

const result = () => {
    return Math.trunc(Math.random() * 100 + 1);
  };
  console.log(result); //it will gave you the function as output
  let ranNum = result();

buttonEl.addEventListener('click', function (){
    let user_guess = Number(guessInput.value);
    if(user_guess <1 || user_guess > 100){
        alert("Enter correct Value");
    }else{
        
        if(guess <= 0){
        resetButton.style.display = 'block';
        guessValue.innerText = guess;
        guessEl.textContent = "GameOver";
       }else {
        if(user_guess == ranNum){
            highScore = guess;
            guessEl.textContent = "you won";
            resetButton.style.display = 'block';
            highScoreEl.innerText= highScore ;
            let currentScore = highScore;
            let currentGuessesLeft = guess;
            console.log(currentScore);
            console.log(currentGuessesLeft);
            if (currentScore <= currentGuessesLeft) {
                 highScore = guess;
                 highScore.innerText = highScore;
                 highScore.innerText = currentGuessesLeft;
                } else {
                    highScore.innerText = currentScore;
                }
        }
        else if(user_guess < ranNum){

            guessValue.textContent =  guess;
            guessEl.textContent = "your value is low"
            guessInput.value= "";
            guess--;
        }
        else if(user_guess > ranNum){
            guessValue.textContent =  guess;
            guessEl.textContent = `your value is high ${user_guess}`
            guessInput.value= "";
            guess--;
        }
       }
        
    }
})
resetButton.addEventListener('click' , function() {
    resetButton.style.display = 'none';
    result = random();
    guessInput.value= "";
    var guess= 7;
    var highScore = 0;
    guessValue.innerText = guess;
    highScoreEl.innerText = highScore;
}
 )
