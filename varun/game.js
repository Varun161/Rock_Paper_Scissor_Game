let userScore=0;
let computerScore=0;
const boxes=document.querySelectorAll(".box");
const msg=document.querySelector(".msg");
const userCount=document.querySelector(".userCount")
const computerCount=document.querySelector(".computerCount");
let click=new Audio("click.mp3");

const drawGame = ()=> {
    msg.innerText= "Match was Draw! play again.";
    msg.style.backgroundColor ="black";
}
const genComputerChoice = ()=> {
    const choices=["stone","paper","scissors"];
    const idx=Math.floor(Math.random() *3);
    return choices[idx];
}
const showWin=(userWin,userChoice,computerChoice)=>{
if(userWin===true){
    userScore++;
    msg.innerText = `You win!,Your ${userChoice} beats ${computerChoice}`;  
    msg.style.backgroundColor ="green";
    userCount.innerText= userScore;
}
else{
    computerScore++;
    msg.innerText = `You lost!,${computerChoice} beats your ${userChoice}`; 
    msg.style.backgroundColor ="red";
    computerCount.innerText= computerScore;

}
}

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    if(userChoice === computerChoice){
        drawGame();
    }else{
    let userWin= true;
    if(userChoice==="stone")
        userWin = computerChoice==="scissors"?true:false;

    else if(userChoice==="scissors")
        userWin = computerChoice==="paper"?true:false;

    else if(userChoice==="paper")
        userWin = computerChoice==="stone"?true:false;

    showWin(userWin,userChoice,computerChoice);
}
}



boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        click.play();
        const userChoice = box.getAttribute("id");
        playGame(userChoice);
    });
});
