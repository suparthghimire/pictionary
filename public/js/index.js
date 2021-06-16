const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

const defaultSettings = {
  canvasDimension: 600,
  strokeSize: 5,
  bgColor: "#ffffff",
  strokeColor: "#000000",
};
const set_bg_color = (color) => {
  canvas.style.backgroundColor = color;
};
const apply_default_settings = () => {
  canvas.width = defaultSettings.canvasDimension;
  canvas.height = defaultSettings.canvasDimension;
  document.querySelector("#current_stroke_size_value").textContent =
    defaultSettings.strokeSize;
  set_bg_color(defaultSettings.bgColor);
};
apply_default_settings();

const draw = (position) => {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.globalCompositeOperation = "source-over";

  ctx.lineTo(position.x, position.y);
  ctx.stroke();
};
const erase = (position) => {
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineTo(position.x, position.y);
  ctx.stroke();
};
let drawing = false;
const mouse_up = () => {
  drawing = false;
};

const mouse_down = () => {
  drawing = true;
  ctx.beginPath();
};
const mouse_move = (e) => {
  if (drawing) {
    const position = {
      x: e.clientX - canvas.getBoundingClientRect().left,
      y: e.clientY - canvas.getBoundingClientRect().top,
    };
    if (pencil.checked) {
      draw(position);
    } else if (eraser.checked) {
      erase(position);
    }
  }
};

canvas.addEventListener("mousedown", () => {
  mouse_down();
});
canvas.addEventListener("mousemove", (e) => {
  mouse_move(e);
});
canvas.addEventListener("mouseup", () => {
  mouse_up();
});
