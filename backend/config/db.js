const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = "mongodb+srv://mohit94e:mohit@cluster0.s1ls6vx.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose.connect(mongoURL);

module.exports = {
    connection,
};