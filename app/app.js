const express = require("express");
const morgan = require("morgan");

const app = express();
module.export = app;
//======= Middlewares======//
app.use(morgan("dev"));
