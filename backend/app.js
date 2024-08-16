const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors({ origin: true }));

const router = express.Router();

app.use("/v1", router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
