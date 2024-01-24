var socket = io();
let btn = document.getElementById("btn");
let input = document.getElementById("newmsg");
let list = document.getElementById("msglist");

btn.onclick = function exec() {
  socket.emit("msg_send", {
    msg: input.value,
  });
};

socket.on("msg_rcvd", (data) => {
  let msg = document.createElement("li");
  msg.innerText = data.msg;
  list.appendChild(msg);
});
