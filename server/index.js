const app = require("express")();
const http = require("http").createServer(app);
const socketio = require("socket.io");
const io = socketio(http);
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("create-room", (name) => {
    console.log("name", name);
  });
});

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
