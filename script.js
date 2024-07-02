const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let isCutting = false;
let startX, startY;

canvas.addEventListener("touchstart", (e) => {
  isCutting = true;
  const rect = canvas.getBoundingClientRect();
  startX = e.touches[0].clientX - rect.left;
  startY = e.touches[0].clientY - rect.top;
});

canvas.addEventListener("touchmove", (e) => {
  if (isCutting) {
    const rect = canvas.getBoundingClientRect();
    const endX = e.touches[0].clientX - rect.left;
    const endY = e.touches[0].clientY - rect.top;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
});

canvas.addEventListener("touchend", () => {
  isCutting = false;
});
