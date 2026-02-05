const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 180;

// Imagen de ustedes
const pareja = new Image();
pareja.src = "img/amoryyo.png";

// Posición
let x = 110;
let y = 70;

// Corazones
let hearts = [];

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    size: Math.random() * 6 + 6,
    speed: Math.random() * 1 + 0.5
  });
}

setInterval(createHeart, 500);

// Dibujar
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Pareja
  ctx.drawImage(pareja, x, y, 100, 100);

  // Corazones
  hearts.forEach((heart, index) => {
    ctx.fillStyle = "rgba(255,105,180,0.8)";
    ctx.beginPath();
    ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
    ctx.fill();

    heart.y -= heart.speed;

    if (heart.y < -10) {
      hearts.splice(index, 1);
    }
  });

  requestAnimationFrame(draw);
}

// Controles
document.getElementById("left").onclick = () => {
  x -= 10;
};

document.getElementById("right").onclick = () => {
  x += 10;
};

draw();