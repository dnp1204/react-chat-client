const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");
const authRoutes = require("./routes/authRoutes");

mongoose.connect("mongodb://localhost:27017/react-chat");

authRoutes(app);

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("server running on:", PORT);
  }
});
