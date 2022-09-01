const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

io.on("connection", (socket) => {
  socket.on("create-room", (name) => {
    console.log("name", name);
  });
});

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
