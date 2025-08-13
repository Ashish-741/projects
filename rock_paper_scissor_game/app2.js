const buttons=document.querySelectorAll(".choice button");
//buttons=[rock,paper,scissors]

const my_choice=document.getElementById("my");
//my_choice=<p id="my">Your choice: </p>

const computer_choice=document.getElementById("com");
//computer_choice=<p id="com">Computer's choice: </p>

const result=document.getElementById("res");
//result=<p id="res">Result: </p>


//now we have to make a variable thta stores user choice and also we have to add event listner 
//to every button
buttons.forEach(btn => {
    btn.addEventListener("click",() => {
        const userChoice=btn.textContent;  //userchoice get the text content of the selected button
        my_choice.textContent="Your choice: "+userChoice;

        //now we have to make a random variable that select the button at random
        const randomIndex=Math.floor(Math.random(buttons.length));
        const compChoice=buttons[randomIndex].textContent;
        computer_choice.textContent="Computer's choice: "+compChoice;

        //now we have to make scenerios where the user wins
        let finalResult="";                                 //here we have used let beacuse we have to reassigned the value of finalresullt
                                                    //but const does not allow it.So,use let whenever it seems that value will updated later.
        if(userChoice===compChoice){
            finalResult="Draw!";
        }else if(
            (userChoice==="Rock" && compChoice==="Scissors")||
            (userChoice==="Paper" && compChoice==="Rock")||
            (userChoice==="Scissors" && compChoice==="Paper")){
                finalResult="you win!"
            }else{
                finalResult="you lose!"
            }
            result.textContent="Result: "+finalResult;
    });
});