// script.js

const gameBoard = document.getElementById('game-board');
const snakeElement = document.getElementById('snake');
const foodElement = document.getElementById('food');

let snake = [{x: 50, y: 50}]; // The snake starts at the center
let food = {x: 100, y: 100}; // Initial food position
let direction = 'right'; // Initial direction
let speed = 100; // Movement speed in milliseconds
let score = 0;  //initial score

function drawSnake() {
    snakeElement.style.left = `${snake[0].x}px`;
    snakeElement.style.top = `${snake[0].y}px`;
}

function drawFood() {
    foodElement.style.left = `${food.x}px`;
    foodElement.style.top = `${food.y}px`;
}

function moveSnake() {
    const head = { ...snake[0] };

    if (direction === 'right') head.x += 10;
    if (direction === 'left') head.x -= 10;
    if (direction === 'up') head.y -= 10;
    if (direction === 'down') head.y += 10;

    snake.unshift(head);
    snake.pop();
}

function checkCollision() {
    const head = snake[0];

    // Check if snake collides with the walls
    if (head.x < 0 || head.x >= 300 || head.y < 0 || head.y >= 300) {
        alert('Game Over!');
        resetGame();
    }

    // Check if snake collides with itself
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            alert('Game Over!');
            resetGame();
        }
    }

    // Check if snake eats the food
    if (head.x === food.x && head.y === food.y) {
        score++;
        snake.push({ x: food.x, y: food.y }); // Add new segment to snake
        generateFood();
    }
}

function generateFood() {
    food.x = Math.floor(Math.random() * 30) * 10;
    food.y = Math.floor(Math.random() * 30) * 10;
}

function resetGame() {
    snake = [{x: 50, y: 50}];
    direction = 'right';
    score = 0;
}

function updateGame() {
    moveSnake();
    checkCollision();
    drawSnake();
    drawFood();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
});

setInterval(updateGame, speed);
