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
