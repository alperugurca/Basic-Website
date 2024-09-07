const ball = document.getElementById('ball');
const leftFlipper = document.querySelector('.flipper.left');
const rightFlipper = document.querySelector('.flipper.right');
const bumpers = document.querySelectorAll('.bumper');
const scoreElement = document.getElementById('score-value');

let ballX = 190;
let ballY = 300;
let ballSpeedX = 0;
let ballSpeedY = 0;
let score = 0;

function updateBallPosition() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Apply gravity
    ballSpeedY += 0.2;

    // Bounce off walls
    if (ballX < 0 || ballX > 380) ballSpeedX *= -0.8;
    if (ballY < 0) ballSpeedY *= -0.8;

    // Bottom boundary (game over condition)
    if (ballY > 580) {
        ballY = 300;
        ballX = 190;
        ballSpeedX = 0;
        ballSpeedY = 0;
    }

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

function checkCollisions() {
    // Check flipper collisions
    if (ballY > 530) {
        if (ballX < 150 && leftFlipper.classList.contains('active')) {
            ballSpeedY = -10;
            ballSpeedX -= 5;
        }
        if (ballX > 250 && rightFlipper.classList.contains('active')) {
            ballSpeedY = -10;
            ballSpeedX += 5;
        }
    }

    // Check bumper collisions
    bumpers.forEach(bumper => {
        const rect = bumper.getBoundingClientRect();
        const ballRect = ball.getBoundingClientRect();
        if (
            ballRect.left < rect.right &&
            ballRect.right > rect.left &&
            ballRect.top < rect.bottom &&
            ballRect.bottom > rect.top
        ) {
            ballSpeedX = (ballX - (rect.left + 20)) / 2;
            ballSpeedY = (ballY - (rect.top + 20)) / 2;
            score += 10;
            scoreElement.textContent = score;
        }
    });
}

function gameLoop() {
    updateBallPosition();
    checkCollisions();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') leftFlipper.classList.add('active');
    if (e.key === 'ArrowRight') rightFlipper.classList.add('active');
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') leftFlipper.classList.remove('active');
    if (e.key === 'ArrowRight') rightFlipper.classList.remove('active');
});

gameLoop();