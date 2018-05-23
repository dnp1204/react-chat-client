const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

module.exports = app;
