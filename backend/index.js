const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/UserRoutes");
const { connection } = require("./config/db");

const port = '4500';
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);


app.listen(port, async () => {
    try {
        await connection;
    } catch (err) {
        console.log("error");
    }
    console.log(`server is running at port ${port}`);
});