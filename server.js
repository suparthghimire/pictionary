require("dotenv").config();
const path = require("path");
const express = require("express");
const { add_user, remove_user } = require("./utils/users");
const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", "views");
app.set("view engine", "pug");

app.use("/", require("./routes/index"));

// socket
io.on("connection", (socket) => {
  const user_id = socket.id;
  socket.on("user_join", ({ username }) => {
    const user_add = add_user({ user_id, username });
    if (user_add) {
      socket.broadcast.emit("room_bot_message", {
        message: `${username} Has Joined`,
        username: "Room Bot",
      });
    }
  });
  socket.on("message_send", ({ username, message }) => {
    socket.broadcast.emit("message_recieve", { username, message });
  });

  socket.on("disconnect", () => {
    const removed_user = remove_user(socket.id);
    if (removed_user) {
      socket.broadcast.emit("room_bot_message", {
        message: `${removed_user.username} Has Left`,
        username: "Room Bot",
      });
    }
  });
});

// socket

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server Running at PORT ${PORT}`));
