const express = require("express");

const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors({ origin: true }));

const router = express.Router();

router.post("/auth", (req, res) => {
  const { username } = req.body;
  res.json({ username: username });
});

app.use("/v1", router);

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user ${socket.id}`);
});
