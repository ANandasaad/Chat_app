var socket = io();
let btn = document.getElementById("btn");
btn.onclick = function exec() {
  socket.emit("From_client");
};
socket.on("From_server", () => {
  const div = document.createElement("div");
  div.innerHTML = "New event from server";
  document.body.appendChild(div);
});
