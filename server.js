const http = require("http");
require("dotenv").config();
require("./config/dbConnect");
const PORT = process.env.PORT || 3000;
const app = require("./app/app");

//Server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server started on Port ${PORT}`));
