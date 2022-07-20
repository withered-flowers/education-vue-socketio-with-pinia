const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

// Socket io harus dibungkus dengan CORS supaya bisa berjalan
const io = new Server(server, {
  cors: {
    // Gunakan origin dari manapun saja
    origin: "*",
    // Methods yang digunakan (harus include OPTIONS untuk redirection)
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  },
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello World" });
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  // Kita tambahkan sebuah event sederhana di sini
  socket.on("halodunia", () => {
    console.log("Halo Dunia Triggered");

    socket.emit("dengerin-kembalian", "Ini data kembalian dari server");
    // console.log("socket emitted");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
