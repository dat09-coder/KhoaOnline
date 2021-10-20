const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Router = require("./routes");
const password = 'K6M4eKmaupnUjnDO';
var port = process.env.PORT || 8080;
mongoose.connect(`mongodb+srv://dat09:${password}@nghich09.7wn30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const app = express();

app.use(cors())
app.use(express.json());
app.use(Router);

app.listen(port, () => {
  console.log("Server is running at port "+port);
});