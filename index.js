const express = require("express");
const http = require("http");
const ServerIo = require("socket.io");
const app = express();
const server = http.createServer(app);

const io = ServerIo(server);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("From_client", () => {
    console.log("event coming from client");
  });

  setInterval(() => {
    socket.emit("From_server");
  }, 2000);
});
app.use("/", express.static(__dirname + "/public"));
server.listen(3000, () => {
  console.log("listening on port 3000");
});
