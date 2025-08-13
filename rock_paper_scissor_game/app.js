// Select all buttons inside the .choice div
const buttons = document.querySelectorAll(".choice button");

// Select the elements where choices and result will be displayed
const mychoice = document.getElementById("my");
const computer_choice = document.getElementById("com");
const result = document.getElementById("res");

// Loop through each button to add an event listener
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice = btn.textContent;  // Get the text of the clicked button

        // Create an array of possible choices for the computer
        const choices = ["Rock", "Paper", "Scissors"];

        // Randomly select the computer's choice
        const randomIndex = Math.floor(Math.random() * choices.length);
        const compChoice = choices[randomIndex];

        // Update the text on screen with player and computer choices
        mychoice.textContent = "Your choice: " + userChoice;
        computer_choice.textContent = "Computer's choice: " + compChoice;

        // Compare the choices and determine the result
        let finalResult = "";

        if (userChoice === compChoice) {
            finalResult = "It's a draw!";
        } else if (
            (userChoice === "Rock" && compChoice === "Scissors") ||
            (userChoice === "Paper" && compChoice === "Rock") ||
            (userChoice === "Scissors" && compChoice === "Paper")
        ) {
            finalResult = "You win!";
        } else {
            finalResult = "You lose!";
        }

        // Show the result on the screen
        result.textContent = "Result: " + finalResult;
    });
});
