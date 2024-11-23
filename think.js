let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreNmbr =document.querySelector("#user-score");
const compScoreNmbr = document.querySelector("#comp-score");
const genCompChoice =() => {
const option =["Stone","Paper","Scissor"];
const rndmIdx =Math.floor(Math.random()*3);
return option[rndmIdx];
};

const drawGame = () =>{
    msg.innerText = `Game was draw!! You choose ${userChoice} and Computer choose ${compChoice}`;
    msg.style.color ="#af3264";
};
const showWinner = (userWin , userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreNmbr.innerText = userScore;
           msg.innerText = `You Win!! You choose ${userChoice} and Computer choose ${compChoice}`;
           msg.style.color = "green";
    }else {
        compScore++;
compScoreNmbr.innerText =compScore;
      msg.innerText = `You lose!! You choose ${userChoice} and Computer choose ${compChoice} `;
      msg.style.color ="red";
    }
};

const playGame = (userChoice) => {
    console.log("userchoice =",userChoice);
    const compChoice = genCompChoice();
    console.log("compchoice =",compChoice);

    if (userChoice === compChoice){
     drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Stone"){
           userWin =  compChoice === "Paper"? false : true;
        }else if (userChoice === "Paper"){
            userWin = compChoice === "Scissor"?false : true;
        }else  {
            userWin = compChoice ==="Stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    } 
    
};
choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userchoiceId);
  playGame (userChoice);
    }); 
});