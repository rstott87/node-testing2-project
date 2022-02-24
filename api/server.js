const express = require("express");
const server = express();
const router = require('./users/users-router')

server.use("/api", router);
server.use("/api", router);


module.exports = server;