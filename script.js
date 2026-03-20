let userscore = 0;
let compscore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userscorePara = document.querySelector("#userscore");
 const compscorePara = document.querySelector("#computerscore");

 const genCompChoice = () =>
 {
    const options = ["rock", "paper," ,"scissors"];
   const RandIdx = Math.floor(Math.random() *3);
   return options[RandIdx];
 }
 const showWinner =(userWin , userchoice , compChoice) =>
 {
    if(userWin)
    {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText =` You win ! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";

    }
    else
    {
        compscore++;
        compscorePara.innerText =compscore;
        msg.innerText =`You lose! ${compChoice} beats your ${userchoice}` ;
        msg.style.backgroundColor ="red";

    }

 }
  const drawGame =() =>
  {
    console.log("Game is draw !");
    msg.innerText ="Game is draw , Play again";
     msg.style.backgroundColor ="green";
    }

  

const playGame = (userchoice) =>
{
    //Generate computer choice --> modular
    const compChoice = genCompChoice();
    if(userchoice == compChoice)
    {
        //draw game.
        drawGame();
    }
    else
    {
        userWin =true;
        if(userchoice ==="rock")
        {
           //either scissors or paper.
           userWin = compChoice==="paper" ? false: true ;    
        }
        else if(userchoice ==="paper")
        {
            //scissors or rock
          userWin = compChoice==="scissors" ? false:true ;    
        }
        else
        {
             //rock or paper.
             userWin = compChoice==="rock" ? false: true ;    
        }
        showWinner(userWin , userchoice ,compChoice);
    }
};



 choices.forEach((choice) =>
{
    console.log(choices);
    choice.addEventListener("click",() =>
    {
        const userChoice = choice.getAttribute("id");
        // console.log("choices was clicked", userChoice);
        playGame(userChoice);

    });
});
