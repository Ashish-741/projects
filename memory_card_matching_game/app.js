const cards=document.querySelectorAll(".hero div");
///options=[box1,box2----box16]

let score=document.getElementById("score");
//score=<div id="score">Score:</div>

let symbols=["🍎", "🍌", "🍇", "🍓", "🍊", "🍉", "🥝", "🍍"];
let pairSymbols=[...symbols,...symbols];

//we have to shuffle the pairs randomly
pairSymbols.sort(() => 0.5-Math.random());


//now we have to assign a value to each card
cards.forEach((card,index) => {
    card.dataset.symbol=pairSymbols[index];
    card.textContent="?";
});

//now we have to create a function so that cards wont click when they are showing symbol.
let firstcard=null;
let secondcard=null;
let lockBoard=false;

cards.forEach(card => {
    card.addEventListener("click",() => {
        if(lockBoard===true || card.textContent==="?"){
            return;
        }else{
            card.textContent=card.dataset.symbol;
        }
        if(firstcard===null){
            firstcard=card;
        }else{
            secondcard=card;
            lockBoard=true;

        if(firstcard.dataset.symbol===secondcard.dataset.symbol){
            firstcard=null;
            secondcard=null;
            lockBoard=false;
        }else{
            setTimeout(() => {
                firstcard.textContent="?";
                secondcard.textContent="?";
                firstcard=null;
                secondcard=null;
                lockBoard=false;
            },1000);
        }
    }
    });
});