require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", "views");
app.set("view engine", "pug");

app.use("/", require("./routes/index"));

// socket
io.on("connection", (socket) => {
  socket.on("user_join", ({ username }) => {
    socket.broadcast.emit("room_bot_message", {
      message: `${username} Joined`,
      username: "Room Bot",
    });
  });
  socket.on("message_send", ({ username, message }) => {
    socket.broadcast.emit("message_recieve", { username, message });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("room_bot_message", {
      message: `Someone Left`,
      username: "Room Bot",
    });
  });
});

// socket

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server Running at PORT ${PORT}`));
