const cells = document.querySelectorAll(".box");
let currentplayer = "X";

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkwinner() {
    return winningCombinations.some(combo => {
        return combo.every(index => {
            return cells[index].textContent === currentplayer;
        });
    });
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "") {
            cell.textContent = currentplayer;
            if (checkwinner()) {
                alert(`${currentplayer} wins!`); // Use backticks here
                return;
            }
            currentplayer = currentplayer === "X" ? "O" : "X";
        }
    });
});

// Correct way to select the button by class
const resetbtn = document.querySelector(".btn");

resetbtn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentplayer = "X";
});
