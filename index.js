const express = require("express");
const http = require("http");
const ServerIo = require("socket.io");
const connect = require("./config/database-config");
const app = express();
const server = http.createServer(app);

const io = ServerIo(server);

io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    console.log("a room joining", data.roomId);
    socket.join(data.roomId);
  });
  socket.on("msg_send", (data) => {
    console.log(data);
    io.to(data.roomId).emit("msg_rcvd", data);
    // socket.emit("msg_rcvd", data);
    // socket.broadcast.emit("msg_rcvd", data);
  });
});
app.set("view engine", "ejs");
app.use("/", express.static(__dirname + "/public"));
app.get("/chat/:roomId", (req, res) => {
  res.render("index", {
    name: "Anand Kushwaha",
    id: req.params.roomId,
  });
});
server.listen(3000, async () => {
  console.log("listening on port 3000");
  await connect();
  console.log("Mongodb is connected");
});
