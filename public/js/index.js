const canvas = document.querySelector("canvas");
const bg_color_picker = document.querySelector("#bg_color_picker");
const stroke_color_picker = document.querySelector("#stroke_color_picker");
const stroke_size = document.querySelector("#stroke_size");
const reset_canvas = document.querySelector("#reset-canvas");

let ctx = canvas.getContext("2d");
import { append_chat } from "./utils/ui_interaction.js";
const socket = io();

const options = {
  stroke_color: "black",
  stroke_size: stroke_size.value,
};

const defaultSettings = {
  canvas_dimension: 600,
  stroke_size: 5,
  bg_color: "#ffffff",
  stroke_color: "#000000",
};
const set_bg_color = (color) => {
  canvas.style.backgroundColor = color;
  bg_color_picker.value = color;
};
const set_stroke_color = (color) => {
  options.stroke_color = color;
  stroke_color_picker.value = color;
};
const set_stroke_weight = (size) => {
  document.querySelector("#current_stroke_size_value").textContent =
    stroke_size.value;
  stroke_size.value = size;
  options.stroke_size = parseInt(size);
};

const apply_default_settings = () => {
  canvas.width = defaultSettings.canvas_dimension;
  canvas.height = defaultSettings.canvas_dimension;
  options.stroke_color = defaultSettings.stroke_size;
  options.stroke_size = defaultSettings.stroke_size;
  bg_color_picker.value = defaultSettings.bg_color;
  stroke_color_picker.value = defaultSettings.stroke_color;
  stroke_size.value = defaultSettings.stroke_size;
  document.querySelector("#current_stroke_size_value").textContent =
    defaultSettings.stroke_size;
  set_bg_color(defaultSettings.bg_color);
};
const clear_canvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  apply_default_settings();
};

const draw = (position) => {
  ctx.strokeStyle = options.stroke_color;
  ctx.lineWidth = options.stroke_size;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.globalCompositeOperation = "source-over";
  ctx.lineTo(position.x, position.y);
  ctx.stroke();
};
const erase = (position) => {
  ctx.lineWidth = options.stroke_size;
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
bg_color_picker.addEventListener("input", () => {
  set_bg_color(bg_color_picker.value);
});
stroke_color_picker.addEventListener("input", () => {
  set_stroke_color(stroke_color_picker.value);
});
stroke_size.addEventListener("input", () => {
  set_stroke_weight(stroke_size.value);
});
reset_canvas.addEventListener("click", () => {
  clear_canvas();
});

const chat_form = document.querySelector("#chat-form");
chat_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = chat_form.chat_message.value;
  if (message.trim() === "") {
    document.querySelector(".error").textContent =
      "Warinig: Message Cannot be Empty";
  } else {
    document.querySelector(".error").textContent = "";
    socket.emit("message-send", {
      username: "User",
      message,
    });
  }
  append_chat({ username: "User", message });
});

socket.on("message-recieve", ({ username, message }) => {
  append_chat({ username, message });
});

apply_default_settings();
