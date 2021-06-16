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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server Running at PORT ${PORT}`));
