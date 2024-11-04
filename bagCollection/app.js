const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./Config/config.env'});
const app = express();
const route = require('./routes/router')

app.use(express.json());
app.use("/api",route);

module.exports = app;
