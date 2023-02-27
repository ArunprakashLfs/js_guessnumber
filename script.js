var guessEl = document.querySelector("#output-result");

const result = Math.trunc((Math.random()*100)-1);
console.log(result)

function play(){
    let user_guess = document.querySelector("#guess").value;
    if(user_guess <1 && user_guess > 100){
        alert("Enter correct Value");
    }else{
        if(user_guess < result){
            guessEl.textContent = "your value is low"
        }
        else if(user_guess > result){
            guessEl.textContent = `your value is high ${user_guess}`
        }
        else if(user_guess == result){
            guessEl.textContent = "you won"
        }
    }
}