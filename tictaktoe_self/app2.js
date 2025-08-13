const cells=document.querySelectorAll(".box");

let currentplayer="O";


cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "") {
            cell.textContent = currentplayer;
            if (checkwinner()) {
                alert(`${currentplayer} wins!`); // Use backticks here
                return;
            }
            currentplayer = currentplayer === "O" ? "X" : "O";
        }
    });
});

// const winningCombinations=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [6,4,2],
//     [0,4,8]
// ];


// function checkwinner() {
//     return winningCombinations.some(combo => {
//         return combo.every(index => {
//             return cells[index].textContent === currentplayer;
//         });
//     });
// }

function checkwinner(){
    const winningCombinations=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [6,4,2],
        [0,4,8]
];

    for(let i=0;i<winningCombinations.length;i++){
        let pattern=winningCombinations[i];

        let index1=pattern[0];
        let index2=pattern[1];
        let index3=pattern[2];

        let cel1=cells[index1].textContent;
        let cel2=cells[index2].textContent;
        let cel3=cells[index3].textContent;

        if(cel1!=='' && cel1===cel2 && cel1===cel3){
            return true;
        }
    }

    return false;
}