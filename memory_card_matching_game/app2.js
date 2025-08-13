// Select all the boxes (cards)
const cards = document.querySelectorAll(".box");

let result=document.getElementById("result");
//result=<div id="result"></div>

let score=0;
let displayscore=document.getElementById("score");
//score=<div id="score">Score:</div>

// Create symbols (8 unique, each repeated twice to form pairs)
let symbols = ["🍎", "🍌", "🍇", "🍓", "🍊", "🍉", "🥝", "🍍"];
let pairSymbols = [...symbols, ...symbols];

// Shuffle the symbols randomly
pairSymbols.sort(() => 0.5 - Math.random());
//Math.random() select a no random between 0 and 1


// Assign a symbol to each card using dataset (hidden)
cards.forEach((card, index) => {
  card.dataset.symbol = pairSymbols[index];
  card.textContent = "?"; // Initial state hidden
});
//using dataset.symbol, we can assign a hidden value to each element.

// Track first and second selected cards
let firstCard = null;
let secondCard = null;
let lockBoard = false; // To avoid clicking while waiting

// Add event listener to each card
cards.forEach(card => {
  card.addEventListener("click", () => {
    if (lockBoard || card.textContent !== "?"){
      return;
      //this avoid selecting a already selected card.
    }else{
      card.textContent = card.dataset.symbol;
      // Show symbol
    }
    
    if (!firstCard) {
      // First card selected
      firstCard = card;
    } else {
      // Second card selected
      secondCard = card;
      lockBoard = true;

      // Check for match
      if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        // Match found
        result.textContent="its a match!";
        score++;
        displayscore.textContent="Score: "+score;
        firstCard = null;
        secondCard = null;
        lockBoard = false;
      } else {
        // No match, flip back after 1 second
        result.textContent="it's not a match";
        score--;
        displayscore.textContent="Score: "+score;
        setTimeout(() => {
          firstCard.textContent = "?";
          secondCard.textContent = "?";
          firstCard = null;
          secondCard = null;
          lockBoard = false;
        }, 1000);
      }
    }
  });
});
