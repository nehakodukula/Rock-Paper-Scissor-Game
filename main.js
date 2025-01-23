let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#computer-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
   const randIdx =  Math.floor(Math.random() * 3);
   return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw!");
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, comChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = `You lose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
     console.log("user choice = ", userChoice);
     //Generate computer choice
     const comChoice = genComChoice();
     console.log("computer choice = ", comChoice);

     if(userChoice === comChoice) {
        //draw Game
        drawGame();
     } else {
        let userWin = true;
        if(userChoice === "rock" ) {
            //scissors, paper
           userWin = comChoice === "paper" ? false :true;
        } else if(userChoice === "paper") {
            //rock, scissors
           userWin =  comChoice === "scissors" ? false : true;
        } else {
            //paper, rock
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
     }
};

choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       
        playGame(userChoice);
      });

});
