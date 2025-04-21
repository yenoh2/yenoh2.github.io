// script.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let canvasWidth = 800;
let canvasHeight = 600;

// --- Asset Loading ---
let imagesLoaded = 0;
const totalImages = 1; // egg only
let allImagesLoaded = false;

// --- Game Variables ---
let level = 1; // Start at level 1
let activeParticles = []; // Holds sparkles


const eggImage = new Image();
eggImage.onload = imageLoaded;
eggImage.src = 'assets/egg.png';

function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        allImagesLoaded = true;
        startGame();
    }
}

// --- Sound Effects ---
const sounds = {
    bounce: new Howl({ src: ['assets/bounce.wav'], volume: 0.6 }),
    crack: new Howl({ src: ['assets/crack.wav'], volume: 0.8 }),
    powerup: new Howl({ src: ['assets/powerup.wav'], volume: 0.7 }),
    music: new Howl({ src: ['assets/music.mp3'], loop: true, volume: 0.3 })
};

// --- Game Variables ---
let score = 0;
let lives = 3;
let gamePaused = false;
let gameOver = false;
let gameWon = false;
let rightPressed = false;
let leftPressed = false;
let animationFrameId;
let playAreaXMin = 0;
let playAreaXMax = 800;
let gameInitialized = false;

// --- Ball (Jelly Bean) ---
const ball = {
    x: canvasWidth / 2,
    y: canvasHeight - 50,
    radius: 10,
    speed: 4,
    dx: 4,
    dy: -4,
    color: getRandomPastelColor()
};

// --- Paddle (Bunny) ---
const paddle = {
    height: 20,
    width: 100,
    x: (window.innerWidth - 100) / 2,
    y: window.innerHeight - 50,
    speed: 8,
    color: '#FFB6C1',
    originalWidth: 100,
    powerUpActive: false,
    powerUpTimer: 0
};

// --- Bricks (Easter Eggs) ---
const brick = {
    rowCount: 5,
    columnCount: 9,
    width: 70,
    height: 30,
    padding: 10,
    offsetTop: 40,
    offsetLeft: 35,
    colors: ['#FFB6C1', '#FFDAB9', '#E6E6FA', '#B0E0E6', '#98FB98']
};

let bricks = [];

// --- Power-ups ---
let powerUps = [];
const powerUpTypes = {
    WIDE_PADDLE: 'wide_paddle'
};

function createPowerUp(x, y) {
    powerUps.push({
        x: x + brick.width / 2 - 5,
        y: y,
        width: 10,
        height: 10,
        dy: 2,
        type: powerUpTypes.WIDE_PADDLE,
        color: '#FFD700'
    });
}

// --- Drawing Functions ---
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = paddle.color;
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (let c = 0; c < brick.columnCount; c++) {
        for (let r = 0; r < brick.rowCount; r++) {
            if (bricks[c][r].status === 1) {
                const currentBrick = bricks[c][r];
                if (eggImage && eggImage.complete && eggImage.naturalHeight !== 0) {
                    ctx.drawImage(eggImage, currentBrick.x, currentBrick.y, brick.width, brick.height);
                } else {
                    ctx.beginPath();
                    ctx.ellipse(
                        currentBrick.x + brick.width / 2,
                        currentBrick.y + brick.height / 2,
                        brick.width / 2,
                        brick.height / 2,
                        0, 0, Math.PI * 2
                    );
                    ctx.fillStyle = currentBrick.color;
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
}

function drawPowerUps() {
    powerUps.forEach(pu => {
        ctx.beginPath();
        ctx.arc(pu.x + pu.width / 2, pu.y + pu.height / 2, pu.width / 2, 0, Math.PI * 2);
        ctx.fillStyle = pu.color;
        ctx.fill();
        ctx.closePath();
    });
}

function drawScore() {
    ctx.font = '20px "Comic Sans MS", cursive, sans-serif';
    ctx.fillStyle = '#5a3a22';
    ctx.fillText('Score: ' + score, 15, 25);
}

function drawLevel() {
    ctx.font = '20px "Comic Sans MS", cursive, sans-serif';
    ctx.fillStyle = '#5a3a22';
    ctx.fillText('Level: ' + level, canvas.width / 2 - 40, 25);
}

function drawLives() {
    ctx.font = '20px "Comic Sans MS", cursive, sans-serif';
    ctx.fillStyle = '#5a3a22';
    ctx.fillText('Lives: ' + lives, canvas.width - 85, 25);
}

// --- Collision Detection (updated) ---
function collisionDetection() {
    // Ball vs Bricks
    for (let c = 0; c < brick.columnCount; c++) {
        for (let r = 0; r < brick.rowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1 &&
                ball.x + ball.radius > b.x &&
                ball.x - ball.radius < b.x + brick.width &&
                ball.y + ball.radius > b.y &&
                ball.y - ball.radius < b.y + brick.height
            ) {
                ball.dy = -ball.dy;
                b.status = 0;
                score++;
                animateBrickBreak(b.x + brick.width / 2, b.y + brick.height / 2);
                if (Math.random() < 0.2) createPowerUp(b.x, b.y);
                if (score === brick.rowCount * brick.columnCount) {
                    level++; // Increase level
                    ball.speed *= 1.1; // Speed up ball by 10%

                    // Recalculate dx/dy using new speed but maintain direction
                    const directionX = ball.dx >= 0 ? 1 : -1;
                    const directionY = ball.dy >= 0 ? 1 : -1;
                    ball.dx = directionX * Math.min(Math.abs(ball.dx) * 1.1, ball.speed);
                    ball.dy = directionY * Math.min(Math.abs(ball.dy) * 1.1, ball.speed);

                    // Reset score and bricks for new level
                    score = 0;
                    createBricks();
                    positionBricks();

                    // Optional: pause briefly before next level
                    gamePaused = true;
                    setTimeout(() => gamePaused = false, 1000);
                }
            }
        }
    }

    // Paddle Bounce
    const nextBallBottom = ball.y + ball.dy + ball.radius;
    if (
        nextBallBottom > paddle.y &&
        ball.x + ball.radius > paddle.x &&
        ball.x - ball.radius < paddle.x + paddle.width
    ) {
        ball.dy = -ball.dy;
        const collidePoint = ball.x - (paddle.x + paddle.width / 2);
        ball.dx = collidePoint * 0.1;
        ball.dx = Math.max(-ball.speed * 0.9,
            Math.min(ball.speed * 0.9, ball.dx));
        ball.y = paddle.y - ball.radius;
        return;
    }

    // Top Wall
    if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
        ball.color = getRandomPastelColor();
        return;
    }

    // Side Walls
    if (
        ball.x + ball.dx > playAreaXMax - ball.radius ||
        ball.x + ball.dx < playAreaXMin + ball.radius
    ) {
        ball.dx = -ball.dx;
        ball.color = getRandomPastelColor();
        return;
    }

    // Bottom Miss / Lose Life
    if (ball.y + ball.dy > canvasHeight - ball.radius) {
        lives--;
        if (lives <= 0) {
            gameOver = true;
        } else {
            ball.x = canvasWidth / 2;
            ball.y = canvasHeight - 50;
            ball.dx = ball.speed * (Math.random() > 0.5 ? 1 : -1);
            ball.dy = -ball.speed;
            paddle.x = (playAreaXMin + playAreaXMax - paddle.originalWidth) / 2;
            paddle.width = paddle.originalWidth;
            paddle.powerUpActive = false;
            clearTimeout(paddle.powerUpTimer);
            gamePaused = true;
            setTimeout(() => gamePaused = false, 1000);
        }
        return;
    }
}

// --- Power-up Logic ---
function activatePowerUp(type) {
    if (type === powerUpTypes.WIDE_PADDLE) {
        if (paddle.powerUpActive) clearTimeout(paddle.powerUpTimer);
        paddle.width = paddle.originalWidth * 1.5;
        paddle.powerUpActive = true;
        if (paddle.x + paddle.width > canvasWidth) {
            paddle.x = canvasWidth - paddle.width;
        }
        paddle.powerUpTimer = setTimeout(() => {
            paddle.width = paddle.originalWidth;
            paddle.powerUpActive = false;
        }, 10000);
    }
}

function updatePowerUps() {
    powerUps.forEach(pu => pu.y += pu.dy);
}

// --- Animations ---
function animateBrickBreak(x, y) {
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
        activeParticles.push({
            x: x,
            y: y,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 4,
            speedY: (Math.random() - 0.5) * 4,
            color: ['#FFD700', '#FFFFFF', '#FFB6C1'][Math.floor(Math.random() * 3)],
            life: 1.0
        });
    }
}


function updateParticles() {
    activeParticles = activeParticles.filter(p => p.life > 0);
    activeParticles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 1 / 60;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fill();
        ctx.closePath();
    });
    ctx.globalAlpha = 1.0;
}


function drawSparkles(x, y) {
    const particleCount = 10;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: x,
            y: y,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 4,
            speedY: (Math.random() - 0.5) * 4,
            color: ['#FFD700', '#FFFFFF', '#FFB6C1'][Math.floor(Math.random() * 3)],
            life: 0.5
        });
    }
    function animateParticles() {
        let alive = false;
        particles.forEach(p => {
            if (p.life > 0) {
                alive = true;
                p.x += p.speedX;
                p.y += p.speedY;
                p.life -= 1 / 60;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0, p.life * 2);
                ctx.fill();
                ctx.closePath();
            }
        });
        ctx.globalAlpha = 1.0;
    }
    animateParticles();
}

// --- Game Loop ---
function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 1. Draw semi-transparent overlay over the playable area
    // Feathered black overlay on play area
    const featherSize = 20; // in pixels, tweak for softness

    // Middle opaque black rectangle
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(playAreaXMin + featherSize, 0, (playAreaXMax - playAreaXMin) - featherSize * 2, canvasHeight);

    // Left gradient
    let gradLeft = ctx.createLinearGradient(playAreaXMin, 0, playAreaXMin + featherSize, 0);
    gradLeft.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradLeft.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
    ctx.fillStyle = gradLeft;
    ctx.fillRect(playAreaXMin, 0, featherSize, canvasHeight);

    // Right gradient
    let gradRight = ctx.createLinearGradient(playAreaXMax - featherSize, 0, playAreaXMax, 0);
    gradRight.addColorStop(0, 'rgba(0, 0, 0, 0.3)');
    gradRight.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradRight;
    ctx.fillRect(playAreaXMax - featherSize, 0, featherSize, canvasHeight);


    // 2. Draw game elements *on top* of the overlay
    drawBricks();
    updateParticles(); // Show active sparkles
    drawPowerUps();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    drawLevel();

    // 3. Draw messages if game is over, won, or paused
    if (gameOver) {
        drawMessage("GAME OVER\nClick to Play Again");
        return;
    }
    if (gameWon) {
        drawMessage("YOU WIN!\nClick to Play Again");
        return;
    }
    if (gamePaused && !gameOver && !gameWon) {
        drawMessage("Get Ready...");
    }
}

function update() {
    if (gamePaused || gameOver || gameWon) return;
    if (rightPressed && paddle.x < playAreaXMax - paddle.width) {
        paddle.x += paddle.speed;
    } else if (leftPressed && paddle.x > playAreaXMin) {
        paddle.x -= paddle.speed;
    }
    ball.x += ball.dx;
    ball.y += ball.dy;
    updatePowerUps();
    collisionDetection();
}

function gameLoop() {
    if (!gameOver && !gameWon) update();
    draw();
    animationFrameId = requestAnimationFrame(gameLoop);
}

// --- Event Listeners ---
function keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') rightPressed = true;
    if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = true;
    if (e.key === 'p' || e.key === 'P') gamePaused = !gamePaused;
}

function keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') rightPressed = false;
    if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = false;
}

function mouseMoveHandler(e) {
    const relativeX = Math.max(playAreaXMin, Math.min(e.clientX, playAreaXMax));
    paddle.x = Math.max(playAreaXMin,
        Math.min(relativeX - paddle.width / 2,
            playAreaXMax - paddle.width));
}

function touchMoveHandler(e) {
    if (e.touches.length) {
        const touch = e.touches[0];
        const relativeX = Math.max(playAreaXMin, Math.min(touch.clientX, playAreaXMax));
        paddle.x = Math.max(playAreaXMin,
            Math.min(relativeX - paddle.width / 2,
                playAreaXMax - paddle.width));
    }
    e.preventDefault();
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('touchmove', touchMoveHandler, { passive: false });
document.addEventListener('click', handleRestart);
document.addEventListener('touchstart', handleRestart);

// --- Helper Functions ---
function getRandomPastelColor() {
    const pastel = ['#FFB6C1', '#FFDAB9', '#E6E6FA', '#B0E0E6', '#98FB98', '#FFFACD', '#ADD8E6'];
    return pastel[Math.floor(Math.random() * pastel.length)];
}

function drawMessage(message) {
    ctx.font = '48px "Comic Sans MS", cursive, sans-serif';
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.textAlign = 'center';
    ctx.fillText(message, canvasWidth / 2, canvasHeight / 2);
    ctx.textAlign = 'left';
}

// --- Canvas Resize & Game Start/Reset ---
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    paddle.y = canvasHeight - paddle.height - 10;
    paddle.x = Math.max(0, Math.min(paddle.x, canvasWidth - paddle.width));

    const topMargin = 60;
    const bottomMargin = canvasHeight * 0.3;
    const sideMargin = canvasWidth * 0.05;
    const availableW = canvasWidth - 2 * sideMargin;
    const availableH = canvasHeight - topMargin - bottomMargin;
    const dynPad = availableW * 0.02;

    let potW = (availableW - (brick.columnCount + 1) * dynPad) / brick.columnCount;
    let potH = (availableH - (brick.rowCount + 1) * dynPad) / brick.rowCount;

    if (eggImage.complete && eggImage.naturalWidth > 0) {
        const ar = eggImage.naturalWidth / eggImage.naturalHeight;
        if (potW / ar <= potH) {
            potH = potW / ar;
        } else {
            potW = potH * ar;
        }
    }

    brick.width = Math.max(10, potW);
    brick.height = Math.max(10, potH);
    brick.padding = dynPad;

    const totalW = brick.columnCount * (brick.width + brick.padding) - brick.padding;
    brick.offsetLeft = (canvasWidth - totalW) / 2;
    brick.offsetTop = topMargin;

    playAreaXMin = brick.offsetLeft - brick.padding;
    playAreaXMax = brick.offsetLeft + totalW + brick.padding;

    if (gameInitialized) positionBricks();

    if (!gamePaused && !gameOver && !gameWon && allImagesLoaded && gameInitialized) {
        draw();
    }
}

function createBricks() {
    bricks = [];
    for (let c = 0; c < brick.columnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brick.rowCount; r++) {
            bricks[c][r] = {
                x: 0,
                y: 0,
                status: 1,
                color: brick.colors[r % brick.colors.length],
                element: null
            };
        }
    }
}

function positionBricks() {
    for (let c = 0; c < brick.columnCount; c++) {
        for (let r = 0; r < brick.rowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
                b.x = c * (brick.width + brick.padding) + brick.offsetLeft;
                b.y = r * (brick.height + brick.padding) + brick.offsetTop;
            }
        }
    }
}

function resetGame() {
    score = 0;
    lives = 3;
    ball.x = canvasWidth / 2;
    ball.y = canvasHeight / 2;
    ball.dx = ball.speed * (Math.random() > 0.5 ? 1 : -1);
    ball.dy = -ball.speed;
    paddle.x = (playAreaXMin + playAreaXMax - paddle.originalWidth) / 2;
    paddle.width = paddle.originalWidth;
    paddle.powerUpActive = false;
    clearTimeout(paddle.powerUpTimer);
    powerUps = [];
    createBricks();
    positionBricks();
    gameOver = false;
    gameWon = false;
    gamePaused = false;
    cancelAnimationFrame(animationFrameId);
    gameLoop();
}

function handleRestart() {
    if (gameOver || gameWon) resetGame();
}

function startGame() {
    if (!allImagesLoaded) return;
    resizeCanvas();
    resetGame();
    gameInitialized = true;
}