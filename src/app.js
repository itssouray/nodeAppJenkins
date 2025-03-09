const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/api/aws/testing", userRouter);

module.exports = app;
